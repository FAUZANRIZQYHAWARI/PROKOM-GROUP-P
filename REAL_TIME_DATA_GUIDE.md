# 📊 PANDUAN INTEGRASI DATA REAL-TIME DIPSmaps

## 🎯 Rekomendasi Sumber Data Real-Time

### **Opsi 1: Firebase Realtime Database (REKOMENDASI UTAMA)**
**Kelebihan:**
- Setup cepat dan mudah
- Real-time sync otomatis
- Gratis untuk tier basic
- Terintegrasi baik dengan JavaScript

**Implementasi:**
```javascript
// Inisialisasi Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project.firebaseio.com",
  projectId: "your-project"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Load data real-time
const placesRef = ref(db, 'places');
onValue(placesRef, (snapshot) => {
  const places = snapshot.val();
  // Update map dengan data terbaru
  renderMarkers();
});
```

---

### **Opsi 2: Google Places API**
**Kelebihan:**
- Data lokasi selalu update
- Info lengkap (rating, review, jam buka)
- Nearby search untuk fasilitas sekitar

**Implementasi:**
```javascript
// Load Google Places API
const service = new google.maps.places.PlacesService(map);
const request = {
  location: new google.maps.LatLng(-7.0505, 110.4375),
  radius: 2000,
  type: 'university'
};

service.nearbySearch(request, (results, status) => {
  results.forEach(place => {
    // Tambahkan ke map
  });
});
```

---

### **Opsi 3: Custom Backend dengan Node.js/Express + MongoDB**
**Kelebihan:**
- Full control atas data
- Bisa tambah fitur admin panel
- Scalable untuk jutaan data

**Struktur:**
```
Backend: Node.js + Express + MongoDB
├── /api/places (GET - list semua fasilitas)
├── /api/places/:id (GET - detail fasilitas)
├── /api/places (POST - admin tambah)
└── /api/status (GET - real-time status)
```

---

### **Opsi 4: Google Sheets + Apps Script**
**Kelebihan:**
- Mudah diupdate oleh admin
- Gratis dan sederhana
- Kolaboratif

**Implementasi:**
```javascript
// Publish Google Sheets sebagai JSON
const SHEET_URL = "https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=json";

fetch(SHEET_URL)
  .then(r => r.json())
  .then(data => {
    places = parseSheetData(data);
    renderMarkers();
  });
```

---

## 🛠️ Implementasi di DIPSmaps

### **Langkah 1: Modifikasi data.js**
```javascript
// Ganti hardcoded data dengan fetch dari API
async function loadPlacesData() {
  try {
    const response = await fetch('/api/places'); // atau URL Firebase
    const data = await response.json();
    places.splice(0, places.length, ...data);
    renderMarkers();
  } catch (error) {
    console.error('Error loading data:', error);
  }
}

// Auto-refresh setiap 30 detik
setInterval(loadPlacesData, 30000);
```

### **Langkah 2: Tambah Status Indicator**
```html
<div class="data-sync-status" id="syncStatus">
  <span class="sync-dot"></span>
  Connected - Last updated: <span id="lastUpdate">now</span>
</div>
```

### **Langkah 3: WebSocket untuk Real-Time (Advanced)**
```javascript
const socket = io('http://your-server.com');
socket.on('places:updated', (data) => {
  places = data;
  renderMarkers();
  updateLastSync();
});
```

---

## 📋 Struktur Data yang Direkomendasikan

```json
{
  "id": 1,
  "name": "Rektorat UNDIP",
  "category": "akademik",
  "address": "Jl. Prof. Sudarto, Tembalang",
  "lat": -7.0497,
  "lng": 110.4376,
  "icon": "building-columns",
  "color": "#1e40af",
  "status": "open",
  "lastUpdated": "2026-05-25T10:30:00Z",
  "capacity": 150,
  "occupancy": 42,
  "phone": "+62271-xxx-xxxx",
  "website": "https://undip.ac.id"
}
```

---

## 🚀 Pilihan Cepat (30 menit)
1. **Setup Firebase** (gratis)
2. **Connect ke app.js** dengan contoh kode di atas
3. **Selesai!** Data sudah real-time

---

**Butuh bantuan? Hubungi Developer untuk setup API yang sesuai kebutuhan.**
