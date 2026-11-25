# Undangan Pernikahan Digital (Full Stack)

Proyek undangan digital lengkap: **frontend** (HTML/CSS/JS) + **backend**
Express.js + **database** SQLite. Cocok untuk didemokan di pameran karena
menunjukkan alur data nyata: form di halaman undangan → tersimpan ke
database → tampil kembali secara langsung (RSVP & buku ucapan).

---

## 1. Struktur Proyek

```
undangan-digital/
├── server.js          -> server Express + semua endpoint REST API
├── database.js        -> koneksi & pembuatan tabel SQLite (otomatis)
├── package.json        -> daftar dependensi
├── data/
│   └── undangan.db     -> file database (dibuat otomatis saat pertama run)
└── public/
    ├── index.html      -> halaman undangan
    ├── admin.html       -> halaman rekap RSVP & ucapan untuk panitia
    ├── css/style.css    -> semua styling
    └── js/main.js       -> logika interaktif (fetch API, countdown, dll)
```

**Konsep database (3 tabel di `data/undangan.db`):**

| Tabel         | Isi                                                        |
|---------------|-------------------------------------------------------------|
| `pengaturan`  | Data mempelai & acara (nama, tanggal, lokasi, rekening, dst) |
| `rsvp`        | Konfirmasi kehadiran tamu (nama, jumlah tamu, status)        |
| `ucapan_doa`  | Buku tamu / ucapan & doa dari pengunjung                     |

---

## 2. Cara Menjalankan di VS Code

**Prasyarat:** sudah terinstal [Node.js](https://nodejs.org) (versi 18 ke atas).
Cek dengan membuka terminal lalu ketik `node -v`.

**Langkah-langkah:**

1. Buka folder `undangan-digital` di VS Code (`File > Open Folder`).
2. Buka terminal bawaan VS Code: menu `Terminal > New Terminal`.
3. Install dependensi (sekali saja):
   ```bash
   npm install
   ```
4. Jalankan server:
   ```bash
   npm start
   ```
5. Akan muncul pesan di terminal:
   ```
   Undangan Digital berjalan!
   Buka di browser: http://localhost:3000
   Halaman admin  : http://localhost:3000/admin
   ```
6. Buka `http://localhost:3000` di browser. Selesai — database otomatis
   dibuat pertama kali dijalankan, tidak perlu instalasi database terpisah.

**Personalisasi nama tamu** (opsional, untuk demo): tambahkan parameter di
URL, contoh:
```
http://localhost:3000/?kepada=Bapak Kepala Sekolah
```

**Melihat isi database secara visual (opsional):** install ekstensi VS Code
bernama **"SQLite Viewer"**, lalu klik file `data/undangan.db` untuk melihat
isi tabel langsung di VS Code — bagus untuk ditunjukkan saat presentasi.

---

## 3. Mengubah Data Mempelai & Acara

Tidak perlu mengubah kode HTML. Ada dua cara:

**Cara 1 — lewat kode (paling mudah untuk demo):**
Buka `database.js`, ubah bagian `insertSemua({ ... })`, lalu hapus file
`data/undangan.db` supaya data awal dibuat ulang, kemudian `npm start` lagi.

**Cara 2 — lewat API (menunjukkan konsep "update data tanpa ubah kode"):**
Gunakan endpoint `PUT /api/pengaturan/:kunci`, contoh lewat terminal:
```bash
curl -X PUT http://localhost:3000/api/pengaturan/nama_pria \
  -H "Content-Type: application/json" \
  -d "{\"nilai\":\"Nama Baru\"}"
```

---

## 4. Daftar Endpoint API (untuk dijelaskan saat presentasi)

| Method | Endpoint                | Fungsi                                   |
|--------|--------------------------|-------------------------------------------|
| GET    | `/api/pengaturan`       | Ambil semua data mempelai & acara         |
| PUT    | `/api/pengaturan/:kunci`| Ubah satu data pengaturan                 |
| GET    | `/api/rsvp`             | Ambil semua data RSVP + rekap jumlah tamu |
| POST   | `/api/rsvp`             | Simpan konfirmasi kehadiran baru          |
| GET    | `/api/ucapan`           | Ambil semua ucapan & doa                  |
| POST   | `/api/ucapan`           | Simpan ucapan & doa baru                  |
| DELETE | `/api/ucapan/:id`       | Hapus satu ucapan                         |

---

## 5. Mengganti Foto & Musik

- **Foto galeri:** saat ini memakai placeholder ikon daun (dibuat lewat SVG
  di `main.js` fungsi `muatGaleri`). Untuk foto asli: taruh file gambar
  (misalnya `foto1.jpg`) di folder `public/img/`, lalu ubah fungsi
  `muatGaleri()` di `public/js/main.js` agar memakai path tersebut.
- **Musik latar:** taruh file `musik-latar.mp3` di folder `public/img/`
  (nama file harus sama seperti yang dirujuk di `index.html`). Jika file
  tidak ada, tombol musik tetap tampil namun tidak memutar apa pun.

---

## 6. Tips Presentasi ke Siswa-Siswi

1. **Tunjukkan alur end-to-end:** buka undangan → isi form RSVP / ucapan →
   buka `http://localhost:3000/admin` di tab baru → tunjukkan data yang
   baru saja dikirim langsung muncul di rekap. Ini bagian paling menarik
   karena membuktikan datanya benar-benar tersimpan di database, bukan
   sekadar tampilan statis.
2. **Jelaskan 3 lapisan aplikasi:**
   - *Frontend* (`public/`) — yang dilihat & diisi pengunjung.
   - *Backend* (`server.js`) — "penjaga gerbang" yang menerima data dan
     memutuskan mau diapakan.
   - *Database* (`database.js`, `data/undangan.db`) — tempat data
     benar-benar disimpan secara permanen.
3. Kalau ditanya "kenapa pakai SQLite bukan MySQL?" — jawab: SQLite cukup
   berupa satu file, tidak perlu instalasi server database terpisah,
   sangat cocok untuk aplikasi kecil-menengah dan mudah dipindahkan
   (tinggal copy file `.db`-nya).
4. Siapkan koneksi internet untuk memuat font (Google Fonts) — jika tidak
   ada internet saat pameran, halaman tetap berjalan normal namun font
   akan memakai font cadangan (serif/sans-serif bawaan browser).

---

## 7. Jika `npm install` Gagal karena `better-sqlite3`

Paket `better-sqlite3` kadang perlu proses kompilasi native saat instalasi.
Jika muncul error saat `npm install`, coba salah satu solusi berikut:

```bash
# Solusi 1: pastikan Node.js versi LTS terbaru (disarankan 18 atau 20)
node -v

# Solusi 2: bersihkan cache lalu install ulang
npm cache clean --force
npm install

# Solusi 3 (Windows): install build tools
npm install --global windows-build-tools
```

Jika masih gagal dan waktu mepet sebelum presentasi, jalankan sebagai
alternatif cepat di komputer lain / laptop lain yang sudah pernah
menjalankan `npm install` dengan Node.js terbaru.
