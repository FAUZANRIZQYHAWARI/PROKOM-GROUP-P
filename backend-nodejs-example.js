// ============================================================
// CONTOH BACKEND NODE.JS + EXPRESS UNTUK REAL-TIME DATA
// ============================================================

/*
INSTALASI:
npm install express cors dotenv
npm install -D nodemon

PACKAGE.JSON SCRIPTS:
"start": "node server.js",
"dev": "nodemon server.js"

JALANKAN:
npm run dev (untuk development)
npm start (untuk production)
*/

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ── DUMMY DATA (Replace dengan database seperti MongoDB) ──
let places = [
  {
    id: 1,
    name: "Rektorat UNDIP",
    category: "akademik",
    address: "Jl. Prof. Sudarto, Tembalang, Semarang",
    desc: "Gedung pusat administrasi Universitas Diponegoro.",
    lat: -7.0497,
    lng: 110.4376,
    icon: "building-columns",
    color: "#1e40af",
    status: "open",
    lastUpdated: new Date().toISOString()
  },
  {
    id: 2,
    name: "Fakultas Teknik UNDIP",
    category: "akademik",
    address: "Jl. Prof. Sudarto No.13, Tembalang",
    desc: "Fakultas Teknik dengan berbagai jurusan teknik dan teknologi.",
    lat: -7.0518,
    lng: 110.4384,
    icon: "building-columns",
    color: "#1e40af",
    status: "open",
    lastUpdated: new Date().toISOString()
  }
  // Tambahkan data lainnya...
];

let lastUpdate = new Date();

// ── ROUTES ──

// GET semua fasilitas
app.get('/api/places', (req, res) => {
  res.json({
    success: true,
    data: places,
    lastUpdated: lastUpdate,
    count: places.length
  });
});

// GET fasilitas by category
app.get('/api/places/category/:category', (req, res) => {
  const { category } = req.params;
  const filtered = category === 'all' 
    ? places 
    : places.filter(p => p.category === category);
  
  res.json({
    success: true,
    data: filtered,
    category: category,
    count: filtered.length
  });
});

// GET detail fasilitas by ID
app.get('/api/places/:id', (req, res) => {
  const { id } = req.params;
  const place = places.find(p => p.id == id);
  
  if (!place) {
    return res.status(404).json({ 
      success: false, 
      error: "Fasilitas tidak ditemukan" 
    });
  }
  
  res.json({ success: true, data: place });
});

// POST tambah fasilitas baru (perlu auth di production)
app.post('/api/places', (req, res) => {
  const { name, category, address, desc, lat, lng, icon, color } = req.body;
  
  // Validasi input
  if (!name || !category || !lat || !lng) {
    return res.status(400).json({ 
      success: false, 
      error: "Data tidak lengkap" 
    });
  }
  
  const newPlace = {
    id: Math.max(...places.map(p => p.id)) + 1,
    name,
    category,
    address: address || "",
    desc: desc || "",
    lat: parseFloat(lat),
    lng: parseFloat(lng),
    icon: icon || "map-pin",
    color: color || "#1e40af",
    status: "open",
    lastUpdated: new Date().toISOString()
  };
  
  places.push(newPlace);
  lastUpdate = new Date();
  
  res.status(201).json({ 
    success: true, 
    message: "Fasilitas berhasil ditambahkan",
    data: newPlace 
  });
});

// PUT update fasilitas
app.put('/api/places/:id', (req, res) => {
  const { id } = req.params;
  const index = places.findIndex(p => p.id == id);
  
  if (index === -1) {
    return res.status(404).json({ 
      success: false, 
      error: "Fasilitas tidak ditemukan" 
    });
  }
  
  places[index] = {
    ...places[index],
    ...req.body,
    lastUpdated: new Date().toISOString()
  };
  
  lastUpdate = new Date();
  
  res.json({ 
    success: true, 
    message: "Fasilitas berhasil diperbarui",
    data: places[index] 
  });
});

// DELETE hapus fasilitas
app.delete('/api/places/:id', (req, res) => {
  const { id } = req.params;
  const index = places.findIndex(p => p.id == id);
  
  if (index === -1) {
    return res.status(404).json({ 
      success: false, 
      error: "Fasilitas tidak ditemukan" 
    });
  }
  
  const deleted = places.splice(index, 1);
  lastUpdate = new Date();
  
  res.json({ 
    success: true, 
    message: "Fasilitas berhasil dihapus",
    data: deleted[0] 
  });
});

// GET status API
app.get('/api/status', (req, res) => {
  res.json({
    success: true,
    status: "online",
    lastUpdate: lastUpdate,
    totalPlaces: places.length
  });
});

// GET statistik
app.get('/api/stats', (req, res) => {
  const stats = {};
  places.forEach(place => {
    stats[place.category] = (stats[place.category] || 0) + 1;
  });
  
  res.json({
    success: true,
    stats: stats,
    total: places.length
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: "Internal Server Error"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📍 API: http://localhost:${PORT}/api/places`);
});

// ============================================================
// CARA MENGGUNAKAN:
// ============================================================

/*
1. GET semua data:
   fetch('http://localhost:5000/api/places')
     .then(r => r.json())
     .then(d => console.log(d.data))

2. GET data by category:
   fetch('http://localhost:5000/api/places/category/akademik')

3. POST (tambah data):
   fetch('http://localhost:5000/api/places', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       name: "Gedung Baru",
       category: "akademik",
       lat: -7.05,
       lng: 110.44
     })
   })

4. PUT (update):
   fetch('http://localhost:5000/api/places/1', {
     method: 'PUT',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ status: "closed" })
   })

5. DELETE:
   fetch('http://localhost:5000/api/places/1', { method: 'DELETE' })
*/
