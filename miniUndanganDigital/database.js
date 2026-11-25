// database.js
// Menangani koneksi dan inisialisasi database SQLite.
// SQLite dipilih karena tidak butuh instalasi server database terpisah,
// cukup berupa satu file (data/undangan.db) — cocok untuk demo & pameran.

const path = require("path");
const fs = require("fs");
const Database = require("better-sqlite3");

const DATA_DIR = path.join(__dirname, "data");
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const dbPath = path.join(DATA_DIR, "undangan.db");
const db = new Database(dbPath);

db.pragma("journal_mode = WAL");

// ------------------------------------------------------------------
// Tabel: ucapan_doa  -> menyimpan ucapan & doa dari tamu (guestbook)
// ------------------------------------------------------------------
db.exec(`
  CREATE TABLE IF NOT EXISTS ucapan_doa (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT NOT NULL,
    pesan TEXT NOT NULL,
    kehadiran TEXT NOT NULL DEFAULT 'hadir', -- hadir | tidak_hadir | ragu
    dibuat_pada DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// ------------------------------------------------------------------
// Tabel: rsvp -> menyimpan konfirmasi kehadiran tamu secara terpisah
// (jumlah tamu yang dibawa, dsb) agar mudah direkap panitia.
// ------------------------------------------------------------------
db.exec(`
  CREATE TABLE IF NOT EXISTS rsvp (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT NOT NULL,
    jumlah_tamu INTEGER NOT NULL DEFAULT 1,
    kehadiran TEXT NOT NULL DEFAULT 'hadir', -- hadir | tidak_hadir | ragu
    dibuat_pada DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// ------------------------------------------------------------------
// Tabel: mempelai & acara -> data inti undangan, dibuat "dinamis"
// (disimpan di DB, bukan di-hardcode di HTML) supaya bisa diedit
// tanpa mengubah kode — cocok untuk didemokan sebagai konsep CRUD.
// ------------------------------------------------------------------
db.exec(`
  CREATE TABLE IF NOT EXISTS pengaturan (
    kunci TEXT PRIMARY KEY,
    nilai TEXT NOT NULL
  );
`);

// Isi data awal (seed) jika tabel pengaturan masih kosong
const jumlahPengaturan = db.prepare("SELECT COUNT(*) AS total FROM pengaturan").get().total;

if (jumlahPengaturan === 0) {
  const seed = db.prepare("INSERT INTO pengaturan (kunci, nilai) VALUES (?, ?)");
  const insertSemua = db.transaction((data) => {
    for (const [kunci, nilai] of Object.entries(data)) {
      seed.run(kunci, nilai);
    }
  });

  insertSemua({
    nama_pria: "Arka Wirawan",
    nama_wanita: "Cahaya Maheswari",
    panggilan_pria: "Arka",
    panggilan_wanita: "Cahaya",
    orang_tua_pria: "Putra dari Bapak Hendra Wirawan & Ibu Sri Lestari",
    orang_tua_wanita: "Putri dari Bapak Bambang Sutrisno & Ibu Ratna Dewi",
    tanggal_acara: "2026-11-14T09:00:00",
    nama_akad: "Akad Nikah",
    waktu_akad: "09.00 WITA - Selesai",
    lokasi_akad: "Kediaman Mempelai Wanita, Jl. Merpati No. 21, Denpasar",
    maps_akad: "https://maps.google.com/?q=Denpasar,Bali",
    nama_resepsi: "Resepsi Pernikahan",
    waktu_resepsi: "18.00 WITA - Selesai",
    lokasi_resepsi: "Gedung Serbaguna Puri Santi, Denpasar, Bali",
    maps_resepsi: "https://maps.google.com/?q=Denpasar,Bali",
    rekening_bank: "BCA",
    rekening_nomor: "1234567890",
    rekening_nama: "Arka Wirawan"
  });
}

module.exports = db;
