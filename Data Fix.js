// ============================================================
//  DATA FASILITAS UMUM UNDIP TEMBALANG (TERBARU SESUAI DOKUMEN)
//  Koordinat: latitude, longitude (Decimal Degrees)
// ============================================================

const places = [
  // ── AKADEMIK ──────────────────────────────────────────────
  {
    id: 1,
    name: "Rektorat Universitas Diponegoro",
    category: "akademik",
    address: "Universitas Diponegoro (UNDIP), Univ Jl. Prof. H. Soedarto, S.H., Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.048822,
    lng: 110.438006,
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 2,
    name: "Departemen Teknik Kimia",
    category: "akademik",
    address: "Jl. Prof. Jacub Rais, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.051878,
    lng: 110.440417,
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 3,
    name: "Departemen Teknik Geodesi",
    category: "akademik",
    address: "Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
    desc: "",
    lat: -7.051878,
    lng: 110.440417,
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 4,
    name: "Departemen Teknik Sipil",
    category: "akademik",
    address: "WCXQ+2J4, Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.052228,
    lng: 110.438944,
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 5,
    name: "Departemen Teknik Arsitektur",
    category: "akademik",
    address: "WCXQ+984, Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.051742, // Konversi dari 7°03'06.27"
    lng: 110.438789,
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 6,
    name: "Departemen Teknik Perencanaan Wilayah dan Kota",
    category: "akademik",
    address: "Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.051683,
    lng: 110.438667,
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 7,
    name: "Departemen Teknik Elektro",
    category: "akademik",
    address: "Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.049792, // Konversi dari 7°02'59.25"
    lng: 110.439944, // Konversi dari 110°26'23.80"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 8,
    name: "Departemen Teknik Mesin",
    category: "akademik",
    address: "Teknik Mesin Universitas Diponegoro, Jl. Prof. Jacub Rais, Tembalang, Semarang City, Central Java 50275",
    desc: "",
    lat: -7.050236, // Konversi dari 7°03'00.85"
    lng: 110.441794, // Konversi dari 110°26'30.46"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 9,
    name: "Departemen Teknik Industri",
    category: "akademik",
    address: "Jl. Prof. Jacub Rais, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.051139, // Konversi dari 7°03'04.10"
    lng: 110.441497, // Konversi dari 110°26'29.39"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 10,
    name: "Departemen Teknik Komputer",
    category: "akademik",
    address: "Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.051650, // Konversi dari 7°03'05.94"
    lng: 110.440128, // Konversi dari 110°26'24.46"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 11,
    name: "Departemen Teknik Perkapalan",
    category: "akademik",
    address: "WCXQ+MXQ, JL. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.050781, // Konversi dari 7°03'02.81"
    lng: 110.439978, // Konversi dari 110°26'23.92"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 12,
    name: "Departemen Teknik Elektro (Gedung Lain)",
    category: "akademik",
    address: "Jl. Prof. H. Soedarto, S.H., Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.052311, // Konversi dari 7°03'08.32"
    lng: 110.439519, // Konversi dari 110°26'22.27"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 13,
    name: "Departemen Teknik Lingkungan",
    category: "akademik",
    address: "WCXR+R5W, JL. Prof. Jacub Rais, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.051306, // Konversi dari 7°03'04.70"
    lng: 110.441828, // Konversi dari 110°26'30.58"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 14,
    name: "UPT Perpustakaan Universitas Diponegoro",
    category: "akademik",
    address: "XC2Q+M44 Komplek Gedung Widya Puraya, Jl. Prof. Soedarto SH, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.048419, // Konversi dari 7°02'54.31"
    lng: 110.437867, // Konversi dari 110°26'16.32"
    icon: "book",
    color: "#3b82f6"
  },
  {
    id: 15,
    name: "Fakultas Peternakan dan Pertanian",
    category: "akademik",
    address: "Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.052664, // Konversi dari 7°03'09.59"
    lng: 110.441694, // Konversi dari 110°26'30.10"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 16,
    name: "Fakultas Ilmu Sosial dan Politik",
    category: "akademik",
    address: "Fakultas Ilmu Sosial dan Ilmu Politik (FISIP) UNDIP, Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50139",
    desc: "",
    lat: -7.051758, // Konversi dari 7°03'06.33"
    lng: 110.437367, // Konversi dari 110°26'14.52"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 17,
    name: "Fakultas Hukum",
    category: "akademik",
    address: "Jl. Dr. Antonius Suroyo, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.051258, // Konversi dari 7°03'04.53"
    lng: 110.436497, // Konversi dari 110°26'11.39"
    icon: "scale-balanced",
    color: "#3b82f6"
  },
  {
    id: 18,
    name: "Sekolah Vokasi",
    category: "akademik",
    address: "Dekanat Sekolah Vokasi Universitas Diponegoro, Jl. Gubernur Mochtar, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.050406, // Konversi dari 7°03'01.46"
    lng: 110.435667, // Konversi dari 110°26'08.40"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 19,
    name: "Fakultas Ilmu Budaya",
    category: "akademik",
    address: "Jl. Dr. Antonius Suroyo, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.050269, // Konversi dari 7°03'00.97"
    lng: 110.436392, // Konversi dari 110°26'11.01"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 20,
    name: "Fakultas Psikologi",
    category: "akademik",
    address: "Jl. Prof. Mr. Sunario, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.047781, // Konversi dari 7°02'52.01"
    lng: 110.437847, // Konversi dari 110°26'16.25"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 21,
    name: "Fakultas Ekonomi dan Bisnis",
    category: "akademik",
    address: "Jl. Prof. Moeljono S. Trastotenojo, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.047475, // Konversi dari 7°02'50.91"
    lng: 110.441550, // Konversi dari 110°26'29.58"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 22,
    name: "Fakultas Kedokteran",
    category: "akademik",
    address: "Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.048639, // Konversi dari 7°02'55.10"
    lng: 110.443757, // Konversi dari 110°26'37.57"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 23,
    name: "Fakultas Kesehatan Masyarakat",
    category: "akademik",
    address: "XC2V+64W, Jl. Prof. Jacub Rais, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.048642, // Konversi dari 7°02'55.11"
    lng: 110.443772, // Konversi dari 110°26'37.58"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 24,
    name: "Fakultas Perikanan dan Ilmu Kelautan",
    category: "akademik",
    address: "Jl. Prof. Jacub Rais, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.048642, // Konversi dari 7°02'55.11"
    lng: 110.443772, // Konversi dari 110°26'37.58"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 25,
    name: "Fakultas Sains dan Matematika",
    category: "akademik",
    address: "Gedung Geofisika dan Puslit Geothermal FSM UNDIP & Pertamina, Jl. Prof. Soedarto No.50275, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.049169, // Konversi dari 7°02'57.01"
    lng: 110.442194, // Konversi dari 110°26'31.90"
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 26,
    name: "Laboratorium Terintegrasi Fakultas Teknik",
    category: "akademik",
    address: "XC2R+52Q Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.050375, // Konversi dari 7°03'01.35"
    lng: 110.440675, // Konversi dari 110°26'26.43"
    icon: "building-columns",
    color: "#3b82f6"
  },

  // ── KESEHATAN ─────────────────────────────────────────────
  {
    id: 27,
    name: "RSND",
    category: "kesehatan",
    address: "Rumah Sakit Nasional Diponegoro, Jl. Prof. Moeljono S. Trastotenojo, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "Rumah Sakit Nasional Diponegoro",
    lat: -7.047825,
    lng: 110.443783,
    icon: "hospital",
    color: "#ef4444"
  },
  {
    id: 28,
    name: "Klinik Pratama Diponegoro",
    category: "kesehatan",
    address: "Klinik Pratama Diponegoro, Tembalang, Semarang City, Central Java 50275",
    desc: "",
    lat: -7.054689,
    lng: 110.433347,
    icon: "hospital",
    color: "#ef4444"
  },

  // ── IBADAH ────────────────────────────────────────────────
  {
    id: 29,
    name: "Masjid Kampus",
    category: "ibadah",
    address: "Masjid Kampus UNDIP, Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.055267,
    lng: 110.436997,
    icon: "mosque",
    color: "#10b981"
  },
  {
    id: 30,
    name: "MASTEK",
    category: "ibadah",
    address: "WCXR+677 Masjid Baitul Ilmi, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "Masjid Teknik yang berlokasi di fakultas teknik",
    lat: -7.052169,
    lng: 110.439858,
    icon: "mosque",
    color: "#10b981"
  },
  {
    id: 31,
    name: "Masjid FSM",
    category: "ibadah",
    address: "XC2R+CHV Masjid Al- Kaustar FSM UNDIP, Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.048950,
    lng: 110.441336,
    icon: "mosque",
    color: "#10b981"
  },
  {
    id: 32,
    name: "Masjid Baitul Mutmainnah",
    category: "ibadah",
    address: "XC2V+F94 Masjid Baitul Muthmainnah, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.048825,
    lng: 110.443428,
    icon: "mosque",
    color: "#10b981"
  },
  {
    id: 33,
    name: "Mushola FKM",
    category: "ibadah",
    address: "XC2V+27V Mushola FKM Universitas Diponegoro Semarang, Tembalang, Semarang City, Central Java 50275",
    desc: "",
    lat: -7.049869,
    lng: 110.443150,
    icon: "mosque",
    color: "#10b981"
  },
  {
    id: 34,
    name: "Masjid FEB",
    category: "ibadah",
    address: "XC3R+4J7 Masjid At-Taqwa FEB Undip, Tembalang, Semarang City, Central Java 50275",
    desc: "",
    lat: -7.047200,
    lng: 110.441583,
    icon: "mosque",
    color: "#10b981"
  },
  {
    id: 35,
    name: "Masjid FH",
    category: "ibadah",
    address: "Masjid Al-Hakam FH UNDIP, Dekanat FH Lt. 1, Jl. Prof. Soedarto S.H, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.051650,
    lng: 110.436292,
    icon: "mosque",
    color: "#10b981"
  },

  // ── KANTIN ────────────────────────────────────────────────
  {
    id: 42,
    name: "Kantin Sekolah Vokasi Undip",
    category: "kantin",
    address: "Jl. Banyu Putih Raya No.14, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "Kantin mahasiswa di area Sekolah Vokasi",
    lat: -7.050142,
    lng: 110.434817,
    icon: "utensils",
    color: "#f97316"
  },
  {
    id: 43,
    name: "Kantin FISIP Undip",
    category: "kantin",
    address: "Jl. Prof. Soedarto, Tembalang, Semarang City, Central Java 50275",
    desc: "Kantin mahasiswa di area FISIP",
    lat: -7.052869,
    lng: 110.437633,
    icon: "utensils",
    color: "#f97316"
  },
  {
    id: 44,
    name: "Kantin FPIK Undip",
    category: "kantin",
    address: "Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "Kantin mahasiswa di area FPIK",
    lat: -7.050183,
    lng: 110.443308,
    icon: "utensils",
    color: "#f97316"
  },
  {
    id: 45,
    name: "Kantin FSM Undip",
    category: "kantin",
    address: "Jl. Prof. Soedarto No.50275, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "Kantin mahasiswwa di area FSM",
    lat: -7.048306,
    lng: 110.442133,
    icon: "utensils",
    color: "#f97316"
  },
  {
    id: 46,
    name: "Kantin FH Undip",
    category: "kantin",
    address: "Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "Kantin mahasiswa di area FH",
    lat: -7.051736,
    lng: 110.436336,
    icon: "utensils",
    color: "#f97316"
  },
  {
    id: 47,
    name: "Kantin Teknik PWK Undip",
    category: "kantin",
    address: "Kantin Teknik PWK Undip, Tembalang, Semarang City, Central Java 50275",
    desc: "Kantin mahasiswa di area PWK",
    lat: -7.051147,
    lng: 110.438686,
    icon: "utensils",
    color: "#f97316"
  },
  {
    id: 48,
    name: "Kantin Teknik Elektro Undip",
    category: "kantin",
    address: "Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "Kantin mahasiswa di area Teknik Elektro",
    lat: -7.050344,
    lng: 110.439856,
    icon: "utensils",
    color: "#f97316"
  },
  {
    id: 49,
    name: "Kantin Teknik Kimia Undip",
    category: "kantin",
    address: "Jl. Prof. Soedarto, Tembalang, Semarang City, Central Java 50275",
    desc: "Kantin mahasiswa di area Teknik Kimia",
    lat: -7.052386,
    lng: 110.440733,
    icon: "utensils",
    color: "#f97316"
  },

  // ── PARKIR ────────────────────────────────────────────────
  {
    id: 50,
    name: "Parkir Bersama UNDIP",
    category: "parkir",
    address: "Gedung Parkir Bersama, Universitas Diponegoro, Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.050211, // Konversi dari 7°03'00.76"
    lng: 110.437222, // Konversi dari 110°26'14.00"
    icon: "square-parking",
    color: "#6b7280"
  },

  // ── LAINNYA ───────────────────────────────────────────────
  {
    id: 51,
    name: "Gedung ICT Undip",
    category: "lainnya",
    address: "Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "Pusat teknologi informasi terpadu yang berlokasi di area utama Kampus Tembalang, Semarang. Gedung ini menjadi pusat digitalisasi kampus serta ruang layanan administrasi penting bagi mahasiswa dan publik.",
    lat: -7.048883,
    lng: 110.439538,
    icon: "star",
    color: "#0ea5e9"
  },
  {
    id: 52,
    name: "Gardu Pandang, Waduk Pendidikan Universitas Diponegoro",
    category: "lainnya",
    address: "WCWW+MPM, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
    desc: "Fasilitas umum yang digunakan sebagai lokasi rekreasi, olahraga, dan swafoto.",
    lat: -7.053284,
    lng: 110.446801,
    icon: "star",
    color: "#0ea5e9"
  },
  {
    id: 54,
    name: "Gedung SA MWA Universitas Diponegoro",
    category: "lainnya",
    address: "XC2Q+CRM, Unnamed Road, Tembalang, Semarang City, Central Java 50275",
    desc: "Bangunan kantor pusat untuk Senat Akademik (SA) dan Majelis Wali Amanat (MWA)",
    lat: -7.048883,
    lng: 110.439538,
    icon: "star",
    color: "#0ea5e9"
  },
  {
    id: 55,
    name: "Art Center Universitas Diponegoro",
    category: "lainnya",
    address: "WCXQ+W3J, Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "Pusat kegiatan seni dan budaya untuk memberikan ruang bagi mahasiswa untuk berkreasi, berkolaborasi, dan mengadakan berbagai kegiatan yang dapat memperkaya pengalaman mahasiswa selama berada di kampus.",
    lat: -7.049690,
    lng: 110.437854,
    icon: "star",
    color: "#0ea5e9"
  },
  {
    id: 56,
    name: "Rusunawa Asrama Mahasiwa",
    category: "lainnya",
    address: "Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah",
    desc: "Rusunawa UNDIP menyediakan hunian nyaman dan terjangkau bagi mahasiswa, lengkap dengan fasilitas dasar, keamanan, dan lingkungan yang mendukung kegiatan akademik.",
    lat: -7.054805,
    lng: 110.444278,
    icon: "star",
    color: "#0ea5e9"
  },
  {
    id: 57,
    name: "KPRI Universitas Diponegoro",
    category: "lainnya",
    address: "WCVV+VGC, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc : "Koperasi Pegawai Republik Indonesia Universitas Diponegoro adalah badan usaha simpan pinjam dan jasa yang didirikan pada tahun 1974. Koperasi ini beranggotakan para dosen dan tenaga kependidikan di lingkungan kampus untuk membantu meningkatkan kesejahteraan anggotanya.",
    lat: -7.055299,
    lng: 110.443756,
    icon: "star",
    color: "#0ea5e9"
  },
  {
    id: 58,
    name: "Center di Universitas Diponegoro (UndipStudent)",
    category: "lainnya",
    address: "WCWQ+FFW, Jl. Prof. Eko Budihardjo, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "Wadah kegiatan mahasiswa, terutama di bidang non-akademik seperti organisasi mahasiswa (Ormawa) dan ekstrakurikuler. Student Center juga menyediakan ruang-ruang sekretariat untuk organisasi dan Unit Kegiatan Mahasiswa (UKM), ruang serbaguna, serta pendopo sebagai tempat berkumpul",
    lat: -7.053719,
    lng: 110.438756,
    icon: "star",
    color: "#0ea5e9"
  },
  {
    id: 59,
    name: "Gedung Serbaguna Muladi Dome",
    category: "lainnya",
    address: "WCWQ+FFW, Jl. Prof. Eko Budihardjo, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "Muladi Dome (atau sering disebut Gedung Serbaguna Muladi Dome Universitas Diponegoro) adalah gedung serbaguna (convention hall) megah berskala internasional yang terletak di area kampus Universitas Diponegoro (Undip), biasa digunakan untuk wisuda, event bazar, belajar dan kegiatan lainnya.",
    lat: -7.053328, // Konversi dari 7°03'11.98"
    lng: 110.433122, // Konversi dari 110°25'59.24"
    icon: "star",
    color: "#0ea5e9"
  },

  // ── OLAHRAGA ───────────────────────────────────────────────
  {
    id: 60,
    name: "Stadion Universitas Diponegoro",
    category: "olahraga",
    address: "WCWW+48H, Jl. Prof. Soedarto, SH, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
    desc: "Fasilitas olahraga multifungsi yang berlokasi di area kampus Undip Tembalang, Semarang. Stadion ini digunakan untuk berbagai kegiatan atletik, sepak bola, upacara kampus, serta kawasan rekreatif dan terbuka hijau yang terbuka bagi mahasiswa dan masyarakat umum.",
    lat: -7.054685,
    lng: 110.445877,
    icon: "dumbbell",        
    color: "#f59e0b" 
  },
  {
    id: 61,
    name: "Gor basket prof. Dr. dr. susilo wibowo",
    category: "olahraga",
    address: "WCWW+MPM Universitas Diponegoro (UNDIP), Waduk Pendidikan, Gardu Pandang, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
    desc: "Fasilitas olahraga bola basket berstandar internasional yang berlokasi di area kampus Universitas Diponegoro (UNDIP), Tembalang, Semarang.",
    lat: -7.053692,
    lng: 110.446876,
    icon: "dumbbell",
    color: "#f59e0b"
  },
  {
    id: 62,
    name: "Polytron Stadium Undip",
    category: "olahraga",
    address: "WCWV+8HR Rusunawa Undip, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277",
    desc: "Fasilitas olahraga bulu tangkis bertaraf internasional di dalam kompleks Universitas Diponegoro (Tembalang, Semarang) yang diresmikan bekerja sama dengan Djarum Foundation.",
    lat: -7.054281,
    lng: 110.443960,
    icon: "dumbbell",
    color: "#f59e0b"
  },
  {
    id: 63,
    name: "Jogging Track Universitas Diponegoro",
    category: "olahraga",
    addresss : "Jogging Track Undip, Jl. Prof. Soedarto No No.Lt. 1, Tembalang, Semarang City, Central Java 50275",
    desc: "",
    lat: -7.05502778,
    lng: 110.43891389,
    icon: "dumbbell",
    color: "#f59e0b"
  },
   // ── ATM ───────────────────────────────────────────────
  {
    id: 64,
    name: "ATM Mandiri FEB Undip",
    category: "ATM",
    addresss : "XC2R+VHW, Jl. Prof. Mr. Sunario, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah",
    desc: "",
    lat: -7.047736,
    lng: 110.441466,
    icon: "credit-card",
    color: "#8b5cf6"
  },
  {
    id: 65,
    name: "ATM Mandiri KCP Universitas Diponegoro",
    category: "ATM",
    addresss : "Jl. Prof. Dr. Sudharto Tembalang No.9 B, Pedalangan, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.054854,
    lng: 110.432202,
    icon: "credit-card",
    color: "#8b5cf6"
  },
  {
    id: 66,
    name: "ATM Mandiri FISIP Undip",
    category: "ATM",
    addresss : "WCXP+HJX, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275",
    desc: "",
    lat: -7.051012,
    lng: 110.436620,
    icon: "credit-card",
    color: "#8b5cf6"
  },
];

// Kategori metadata
const categories = {
  all:       { label: "Semua",      icon: "border-all",              color: "#1e3a8a" },
  akademik:  { label: "Akademik",   icon: "building-columns",        color: "#1e40af" },
  kesehatan: { label: "Kesehatan",  icon: "hospital",                color: "#ef4444" },
  ibadah:    { label: "Ibadah",     icon: "mosque",                  color: "#10b981" },
  olahraga:  { label: "Olahraga",   icon: "dumbbell",                color: "#f59e0b" },
  kantin:    { label: "Kantin",     icon: "utensils",                color: "#f97316" },
  atm:       { label: "ATM / Bank", icon: "credit-card",             color: "#8b5cf6" },
  parkir:    { label: "Parkir",     icon: "square-parking",          color: "#6b7280" },
  lainnya:   { label: "Lainnya",    icon: "star",                    color: "#1e40af" }
};