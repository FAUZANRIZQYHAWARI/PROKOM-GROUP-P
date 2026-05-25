// ============================================================
//  UNDIP Maps — app.js
// ============================================================

(function () {
  "use strict";

  // ── CONFIG ────────────────────────────────────────────────
  const UNDIP_CENTER = [-7.0505, 110.4375];
  const DEFAULT_ZOOM = 16;
  const DATA_REFRESH_INTERVAL = 30000; // 30 detik
  const API_ENDPOINT = "/api/places"; // Ubah ke endpoint API Anda (Firebase, Node.js, dll)

  // ── STATE ─────────────────────────────────────────────────
  let map, routingControl, userMarker;
  let activeCategory = "all";
  let searchQuery = "";
  let allMarkers = {};      // id → L.marker
  let userLocation = null;
  let selectedPlace = null;
  let lastDataSync = new Date();
  let isLoadingData = false;

  // ── REAL-TIME DATA LOADING ────────────────────────────────
  async function loadPlacesDataRealTime() {
    if (isLoadingData) return;
    isLoadingData = true;

    try {
      // Pilihan 1: Load dari API
      // Uncomment untuk menggunakan API real-time (Firebase, Node.js, etc)
      // const response = await fetch(API_ENDPOINT);
      // if (response.ok) {
      //   const data = await response.json();
      //   places.splice(0, places.length, ...data);
      //   lastDataSync = new Date();
      //   updateSyncStatus(true);
      //   renderMarkers();
      // }

      // Untuk sekarang menggunakan data lokal (uncomment bagian API di atas untuk real-time)
      lastDataSync = new Date();
      updateSyncStatus(true);
    } catch (error) {
      console.error("Error loading real-time data:", error);
      updateSyncStatus(false);
    } finally {
      isLoadingData = false;
    }
  }

  function updateSyncStatus(isConnected) {
    const syncEl = document.getElementById("syncStatus");
    if (syncEl) {
      syncEl.className = isConnected ? "data-sync-status connected" : "data-sync-status disconnected";
      syncEl.innerHTML = isConnected 
        ? `<span class="sync-dot"></span> Data Terbaru: <span id="lastUpdate">${lastDataSync.toLocaleTimeString()}</span>`
        : `<span class="sync-dot error"></span> Offline Mode`;
    }
  }

  // Setup auto-refresh real-time data
  function setupAutoRefresh() {
    loadPlacesDataRealTime(); // Load initial
    setInterval(loadPlacesDataRealTime, DATA_REFRESH_INTERVAL);
  }

  // ── SPLASH SCREEN ────────────────────────────────────────
  function hideSplashScreen() {
    const splash = document.getElementById("splashScreen");
    if (splash) {
      // Splash screen sudah otomatis hilang dengan CSS animation
      // Hapus dari DOM setelah animasi selesai
      setTimeout(() => {
        splash.remove();
      }, 3300);
    }
  }

  // ── INIT MAP ──────────────────────────────────────────────
  function initMap() {
    map = L.map("map", {
      center: UNDIP_CENTER,
      zoom: DEFAULT_ZOOM,
      zoomControl: false
    });

    // Tile layer OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Custom zoom position
    L.control.zoom({ position: "bottomright" }).addTo(map);

    // Scale
    L.control.scale({ imperial: false, position: "bottomright" }).addTo(map);
  }

  // ── CUSTOM MARKER ICON ────────────────────────────────────
  function createIcon(place) {
    const html = `
      <div class="custom-marker" style="--mc:${place.color}">
        <i class="fas fa-${place.icon}"></i>
      </div>`;
    return L.divIcon({
      html,
      className: "",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -44]
    });
  }

  function createUserIcon() {
    const html = `<div class="user-marker"><div class="pulse"></div><div class="dot"></div></div>`;
    return L.divIcon({ html, className: "", iconSize: [24, 24], iconAnchor: [12, 12] });
  }

  // ── POPUP CONTENT ─────────────────────────────────────────
  function popupHTML(p) {
    return `
      <div class="popup-card">
        <div class="popup-cat" style="background:${p.color}22;color:${p.color}">
          <i class="fas fa-${p.icon}"></i> ${categories[p.category].label}
        </div>
        <h3 class="popup-name">${p.name}</h3>
        <p class="popup-addr"><i class="fas fa-location-dot"></i> ${p.address}</p>
        <p class="popup-desc">${p.desc}</p>
        <button class="popup-route-btn" onclick="startRoute(${p.id})">
          <i class="fas fa-route"></i> Petunjuk Arah
        </button>
      </div>`;
  }

  // ── PLACE CARD (SIDEBAR) ──────────────────────────────────
  function placeCardHTML(p) {
    return `
      <div class="place-card" id="card-${p.id}" data-id="${p.id}" onclick="focusPlace(${p.id})">
        <div class="place-icon" style="background:${p.color}18;color:${p.color}">
          <i class="fas fa-${p.icon}"></i>
        </div>
        <div class="place-info">
          <span class="place-name">${p.name}</span>
          <span class="place-cat">${categories[p.category].label}</span>
        </div>
        <button class="place-nav-btn" onclick="event.stopPropagation();startRoute(${p.id})" title="Petunjuk Arah">
          <i class="fas fa-diamond-turn-right"></i>
        </button>
      </div>`;
  }

  // ── RENDER MARKERS ────────────────────────────────────────
  function renderMarkers() {
    // Remove existing
    Object.values(allMarkers).forEach(m => map.removeLayer(m));
    allMarkers = {};

    const filtered = getFiltered();
    filtered.forEach(p => {
      const marker = L.marker([p.lat, p.lng], { icon: createIcon(p) })
        .addTo(map)
        .bindPopup(popupHTML(p), { maxWidth: 280, className: "custom-popup" });

      marker.on("click", () => highlightCard(p.id));
      allMarkers[p.id] = marker;
    });

    renderList(filtered);
    document.getElementById("placeCount").textContent = filtered.length;
  }

  // ── RENDER LIST ───────────────────────────────────────────
  function renderList(filtered) {
    const el = document.getElementById("placesList");
    if (filtered.length === 0) {
      el.innerHTML = `<div class="empty-state"><i class="fas fa-magnifying-glass"></i><p>Tidak ditemukan</p></div>`;
      return;
    }
    el.innerHTML = filtered.map(placeCardHTML).join("");
  }

  // ── FILTER ────────────────────────────────────────────────
  function getFiltered() {
    return places.filter(p => {
      const matchCat = activeCategory === "all" || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.address.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }

  // ── FOCUS PLACE ───────────────────────────────────────────
  window.focusPlace = function (id) {
    const p = places.find(x => x.id === id);
    if (!p) return;
    map.setView([p.lat, p.lng], 18, { animate: true });
    setTimeout(() => {
      if (allMarkers[id]) allMarkers[id].openPopup();
    }, 400);
    highlightCard(id);
    selectedPlace = p;
  };

  function highlightCard(id) {
    document.querySelectorAll(".place-card").forEach(c => c.classList.remove("active"));
    const card = document.getElementById(`card-${id}`);
    if (card) {
      card.classList.add("active");
      card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  // ── ROUTING ───────────────────────────────────────────────
  window.startRoute = function (id) {
    const dest = places.find(x => x.id === id);
    if (!dest) return;

    if (!userLocation) {
      showToast("Aktifkan lokasi Anda terlebih dahulu", "warning");
      locateUser(true, id);
      return;
    }

    buildRoute(userLocation, [dest.lat, dest.lng], dest.name);
  };

  function buildRoute(from, to, destName) {
    if (routingControl) {
      map.removeControl(routingControl);
      routingControl = null;
    }

    routingControl = L.Routing.control({
      waypoints: [L.latLng(from), L.latLng(to)],
      routeWhileDragging: false,
      show: false,
      addWaypoints: false,
      lineOptions: {
        styles: [{ color: "#2563eb", weight: 5, opacity: 0.85 }],
        extendToWaypoints: true,
        missingRouteTolerance: 0
      },
      createMarker: function (i, wp) {
        if (i === 0) return null; // keep user marker
        const p = places.find(x => Math.abs(x.lat - wp.latLng.lat) < 0.0001);
        if (p) return L.marker(wp.latLng, { icon: createIcon(p) });
        return L.marker(wp.latLng);
      }
    }).addTo(map);

    routingControl.on("routesfound", function (e) {
      const r = e.routes[0].summary;
      const dist = r.totalDistance >= 1000
        ? (r.totalDistance / 1000).toFixed(1) + " km"
        : Math.round(r.totalDistance) + " m";
      const time = Math.ceil(r.totalTime / 60) + " menit";

      showRoutePanel(destName, dist, time, e.routes[0].instructions);
    });

    routingControl.on("routingerror", function () {
      showToast("Rute tidak dapat ditemukan", "error");
    });
  }

  function showRoutePanel(name, dist, time, instructions) {
    const panel = document.getElementById("routePanel");
    const info = document.getElementById("routeInfo");

    const steps = instructions
      .slice(0, 10)
      .map(ins => `<li><i class="fas fa-circle-dot step-dot"></i>${ins.text}</li>`)
      .join("");

    info.innerHTML = `
      <div class="route-dest"><i class="fas fa-location-dot"></i> ${name}</div>
      <div class="route-stats">
        <span><i class="fas fa-road"></i> ${dist}</span>
        <span><i class="fas fa-clock"></i> ${time}</span>
      </div>
      <ul class="route-steps">${steps}</ul>`;

    panel.style.display = "flex";
  }

  // ── GEOLOCATION ───────────────────────────────────────────
  let watchId = null;
  let isFirstFix = true;
  let pendingRouteId = null;

  function onPositionUpdate(pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const acc = Math.round(pos.coords.accuracy);
    userLocation = [lat, lng];

    // Update / create marker
    if (userMarker) map.removeLayer(userMarker);
    userMarker = L.marker(userLocation, { icon: createUserIcon(), zIndexOffset: 1000 })
      .addTo(map)
      .bindPopup(`<b>📍 Lokasi Anda</b><br><span style="font-size:12px;color:#94a3b8">Akurasi ±${acc} m</span>`);

    // On first fix: pan map to user, show toast
    if (isFirstFix) {
      isFirstFix = false;
      map.setView(userLocation, 17, { animate: true });
      showToast(`Lokasi ditemukan! (±${acc} m)`, "success");
      setLocateBtnActive(true);

      // If there's a pending route (user clicked nav before GPS ready)
      if (pendingRouteId !== null) {
        const id = pendingRouteId;
        pendingRouteId = null;
        setTimeout(() => startRoute(id), 600);
      }
    }

    // Live-update routing if active
    if (routingControl) {
      const wps = routingControl.getWaypoints();
      if (wps.length >= 2) {
        routingControl.setWaypoints([
          L.latLng(userLocation),
          wps[wps.length - 1].latLng
        ]);
      }
    }
  }

  function onPositionError(err) {
    const msgs = {
      1: "Izin lokasi ditolak. Aktifkan GPS di pengaturan browser.",
      2: "Sinyal GPS tidak tersedia.",
      3: "Waktu pencarian lokasi habis. Coba lagi."
    };
    showToast(msgs[err.code] || "Gagal mendapatkan lokasi", "error");
    setLocateBtnActive(false);
    isFirstFix = true;
  }

  function startWatching() {
    if (!navigator.geolocation) {
      showToast("Browser tidak mendukung geolokasi", "error");
      return;
    }
    if (watchId !== null) return; // already watching
    showToast("Mencari lokasi Anda...", "info");
    watchId = navigator.geolocation.watchPosition(
      onPositionUpdate,
      onPositionError,
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 5000 }
    );
  }

  function locateUser(routeAfter = false, routeId = null) {
    if (routeAfter && routeId) pendingRouteId = routeId;

    if (userLocation) {
      // Already have location: just pan to it
      map.setView(userLocation, 17, { animate: true });
      showToast("Menuju lokasi Anda...", "info");
      if (routeAfter && routeId) {
        pendingRouteId = null;
        setTimeout(() => startRoute(routeId), 400);
      }
      return;
    }

    startWatching();
  }

  function setLocateBtnActive(active) {
    const btn = document.getElementById("locateBtn");
    if (active) btn.classList.add("active");
    else btn.classList.remove("active");
  }

  // ── TOAST ─────────────────────────────────────────────────
  let toastTimer;
  function showToast(msg, type = "info") {
    const t = document.getElementById("toast");
    const icons = { success: "circle-check", error: "circle-xmark", warning: "triangle-exclamation", info: "circle-info" };
    t.innerHTML = `<i class="fas fa-${icons[type]}"></i> ${msg}`;
    t.className = `toast show ${type}`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 3000);
  }

  // ── SIDEBAR TOGGLE ────────────────────────────────────────
  function initSidebar() {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("sidebarToggle");
    const openBtn = document.getElementById("sidebarOpenBtn");

    toggleBtn.addEventListener("click", () => {
      sidebar.classList.add("collapsed");
      openBtn.style.display = "flex";
    });
    openBtn.addEventListener("click", () => {
      sidebar.classList.remove("collapsed");
      openBtn.style.display = "none";
    });
  }

  // ── FILTER CHIPS ──────────────────────────────────────────
  function initFilters() {
    document.getElementById("filterChips").addEventListener("click", e => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.dataset.cat;
      renderMarkers();
    });
  }

  // ── SEARCH ────────────────────────────────────────────────
  function initSearch() {
    const input = document.getElementById("searchInput");
    const clearBtn = document.getElementById("clearSearch");

    input.addEventListener("input", () => {
      searchQuery = input.value.trim();
      clearBtn.style.display = searchQuery ? "flex" : "none";
      renderMarkers();
    });

    clearBtn.addEventListener("click", () => {
      input.value = "";
      searchQuery = "";
      clearBtn.style.display = "none";
      renderMarkers();
    });
  }

  // ── CLOSE ROUTE ───────────────────────────────────────────
  function initRouteClose() {
    document.getElementById("closeRoute").addEventListener("click", () => {
      document.getElementById("routePanel").style.display = "none";
      if (routingControl) {
        map.removeControl(routingControl);
        routingControl = null;
      }
    });
  }

  // ── LOCATE BUTTON ─────────────────────────────────────────
  function initLocateBtn() {
    document.getElementById("locateBtn").addEventListener("click", () => {
      if (userLocation) {
        map.setView(userLocation, 17, { animate: true });
      } else {
        startWatching();
      }
    });
  }

  // ── SPLASH SCREEN ────────────────────────────────────────
  function hideSplashScreen() {
    const splash = document.getElementById("splashScreen");
    if (splash) {
      // Splash screen sudah otomatis hilang dengan CSS animation
      // Hapus dari DOM setelah animasi selesai
      setTimeout(() => {
        splash.remove();
      }, 3300);
    }
  }

  // ── BOOT ──────────────────────────────────────────────────
  function boot() {
    hideSplashScreen();
    initMap();
    initSidebar();
    initFilters();
    initSearch();
    initRouteClose();
    initLocateBtn();
    renderMarkers();
    setupAutoRefresh(); // Aktifkan real-time data sync

    // Auto-request GPS on page load
    startWatching();

    // Fit bounds to all markers on first load
    setTimeout(() => {
      const bounds = L.latLngBounds(places.map(p => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [40, 40] });
    }, 200);
  }

  window.addEventListener("DOMContentLoaded", boot);
})();