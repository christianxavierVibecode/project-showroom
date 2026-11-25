// server.js
// Server utama: menyajikan halaman undangan (static files) + REST API
// yang terhubung ke database SQLite (lihat database.js).

const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./database");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ============================================================
// API: PENGATURAN (data mempelai & acara)
// ============================================================
app.get("/api/pengaturan", (req, res) => {
  try {
    const rows = db.prepare("SELECT kunci, nilai FROM pengaturan").all();
    const data = {};
    rows.forEach((r) => (data[r.kunci] = r.nilai));
    res.json({ sukses: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ sukses: false, pesan: "Gagal mengambil pengaturan" });
  }
});

// Update satu pengaturan (dipakai kalau mau bikin halaman admin edit data)
app.put("/api/pengaturan/:kunci", (req, res) => {
  try {
    const { kunci } = req.params;
    const { nilai } = req.body;
    if (nilai === undefined) {
      return res.status(400).json({ sukses: false, pesan: "nilai wajib diisi" });
    }
    db.prepare(
      "INSERT INTO pengaturan (kunci, nilai) VALUES (?, ?) ON CONFLICT(kunci) DO UPDATE SET nilai = excluded.nilai"
    ).run(kunci, String(nilai));
    res.json({ sukses: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ sukses: false, pesan: "Gagal menyimpan pengaturan" });
  }
});

// ============================================================
// API: UCAPAN & DOA (guestbook)
// ============================================================
app.get("/api/ucapan", (req, res) => {
  try {
    const data = db
      .prepare("SELECT * FROM ucapan_doa ORDER BY dibuat_pada DESC")
      .all();
    res.json({ sukses: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ sukses: false, pesan: "Gagal mengambil ucapan" });
  }
});

app.post("/api/ucapan", (req, res) => {
  try {
    const { nama, pesan, kehadiran } = req.body;

    if (!nama || !nama.trim() || !pesan || !pesan.trim()) {
      return res
        .status(400)
        .json({ sukses: false, pesan: "Nama dan pesan wajib diisi" });
    }

    const kehadiranValid = ["hadir", "tidak_hadir", "ragu"].includes(kehadiran)
      ? kehadiran
      : "hadir";

    const stmt = db.prepare(
      "INSERT INTO ucapan_doa (nama, pesan, kehadiran) VALUES (?, ?, ?)"
    );
    const info = stmt.run(nama.trim(), pesan.trim(), kehadiranValid);

    const dataBaru = db
      .prepare("SELECT * FROM ucapan_doa WHERE id = ?")
      .get(info.lastInsertRowid);

    res.status(201).json({ sukses: true, data: dataBaru });
  } catch (err) {
    console.error(err);
    res.status(500).json({ sukses: false, pesan: "Gagal menyimpan ucapan" });
  }
});

app.delete("/api/ucapan/:id", (req, res) => {
  try {
    db.prepare("DELETE FROM ucapan_doa WHERE id = ?").run(req.params.id);
    res.json({ sukses: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ sukses: false, pesan: "Gagal menghapus ucapan" });
  }
});

// ============================================================
// API: RSVP (konfirmasi kehadiran)
// ============================================================
app.get("/api/rsvp", (req, res) => {
  try {
    const data = db.prepare("SELECT * FROM rsvp ORDER BY dibuat_pada DESC").all();

    const rekap = db
      .prepare(
        `SELECT
           kehadiran,
           COUNT(*) AS jumlah_respon,
           SUM(jumlah_tamu) AS total_tamu
         FROM rsvp
         GROUP BY kehadiran`
      )
      .all();

    res.json({ sukses: true, data, rekap });
  } catch (err) {
    console.error(err);
    res.status(500).json({ sukses: false, pesan: "Gagal mengambil data RSVP" });
  }
});

app.post("/api/rsvp", (req, res) => {
  try {
    const { nama, jumlah_tamu, kehadiran } = req.body;

    if (!nama || !nama.trim()) {
      return res.status(400).json({ sukses: false, pesan: "Nama wajib diisi" });
    }

    const kehadiranValid = ["hadir", "tidak_hadir", "ragu"].includes(kehadiran)
      ? kehadiran
      : "hadir";
    const jumlahValid = Number.isInteger(Number(jumlah_tamu))
      ? Math.max(1, Math.min(10, Number(jumlah_tamu)))
      : 1;

    const stmt = db.prepare(
      "INSERT INTO rsvp (nama, jumlah_tamu, kehadiran) VALUES (?, ?, ?)"
    );
    const info = stmt.run(nama.trim(), jumlahValid, kehadiranValid);

    const dataBaru = db.prepare("SELECT * FROM rsvp WHERE id = ?").get(info.lastInsertRowid);
    res.status(201).json({ sukses: true, data: dataBaru });
  } catch (err) {
    console.error(err);
    res.status(500).json({ sukses: false, pesan: "Gagal menyimpan RSVP" });
  }
});

// Halaman admin sederhana untuk melihat rekap saat presentasi
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

app.listen(PORT, () => {
  console.log(`\n============================================`);
  console.log(`  Undangan Digital berjalan!`);
  console.log(`  Buka di browser: http://localhost:${PORT}`);
  console.log(`  Halaman admin  : http://localhost:${PORT}/admin`);
  console.log(`============================================\n`);
});
