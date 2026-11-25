// main.js
// Semua logika sisi klien: mengambil data dari REST API (server.js),
// menampilkan hitung mundur, mengirim RSVP & ucapan ke database,
// serta interaksi kecil (buka undangan, musik, salin rekening).

const API = "/api";

// ------------------------------------------------------------------
// Ambil nama tamu dari parameter URL, contoh: index.html?kepada=Budi
// ------------------------------------------------------------------
function ambilNamaTamu() {
  const params = new URLSearchParams(window.location.search);
  return params.get("kepada") || params.get("to") || "Bapak/Ibu/Saudara/i";
}

// Helper utilities for safe DOM manipulation
function setTeks(id, teks) {
  const el = document.getElementById(id);
  if (el) el.textContent = teks;
}

function setHtml(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function setHref(id, href) {
  const el = document.getElementById(id);
  if (el) el.href = href;
}

setTeks("nama-tamu", ambilNamaTamu());

// ------------------------------------------------------------------
// Ambil data mempelai & acara dari database (tabel pengaturan)
// dan tuangkan ke elemen HTML yang sesuai.
// ------------------------------------------------------------------
let dataAcaraTanggal = null;

async function muatPengaturan() {
  try {
    const res = await fetch(`${API}/pengaturan`);
    const json = await res.json();
    if (!json.sukses) return;

    const d = json.data;

    setTeks("panggilan-pria", d.panggilan_pria);
    setTeks("panggilan-wanita", d.panggilan_wanita);

    setTeks("nama-pria", d.nama_pria);
    setTeks("ortu-pria", d.orang_tua_pria);
    setTeks("nama-wanita", d.nama_wanita);
    setTeks("ortu-wanita", d.orang_tua_wanita);

    setTeks("nama-akad", d.nama_akad);
    setTeks("waktu-akad", d.waktu_akad);
    setTeks("lokasi-akad", d.lokasi_akad);
    setHref("maps-akad", d.maps_akad);

    setTeks("nama-resepsi", d.nama_resepsi);
    setTeks("waktu-resepsi", d.waktu_resepsi);
    setTeks("lokasi-resepsi", d.lokasi_resepsi);
    setHref("maps-resepsi", d.maps_resepsi);

    setTeks("bank-nama", d.rekening_bank);
    setTeks("rekening-nomor", d.rekening_nomor);
    setTeks("rekening-pemilik", d.rekening_nama ? `a.n. ${d.rekening_nama}` : "");

    setHtml("tanda-tangan-penutup", `${d.panggilan_pria || ""} &amp; ${d.panggilan_wanita || ""}`);

    if (d.tanggal_acara) {
      dataAcaraTanggal = new Date(d.tanggal_acara);
      if (!isNaN(dataAcaraTanggal.getTime())) {
        setTeks(
          "tanggal-besar",
          dataAcaraTanggal.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        );
      }
    }

    mulaiHitungMundur();
  } catch (err) {
    console.error("Gagal memuat pengaturan:", err);
  }
}

// ------------------------------------------------------------------
// Hitung mundur menuju hari acara
// ------------------------------------------------------------------
let intervalHitungMundur = null;

function mulaiHitungMundur() {
  if (!dataAcaraTanggal || isNaN(dataAcaraTanggal.getTime())) return;

  if (intervalHitungMundur) clearInterval(intervalHitungMundur);

  function perbarui() {
    const sekarang = new Date();
    let selisih = dataAcaraTanggal - sekarang;

    if (selisih < 0) selisih = 0;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor((selisih / (1000 * 60 * 60)) % 24);
    const menit = Math.floor((selisih / (1000 * 60)) % 60);
    const detik = Math.floor((selisih / 1000) % 60);

    setTeks("cd-hari", String(hari).padStart(2, "0"));
    setTeks("cd-jam", String(jam).padStart(2, "0"));
    setTeks("cd-menit", String(menit).padStart(2, "0"));
    setTeks("cd-detik", String(detik).padStart(2, "0"));
  }

  perbarui();
  intervalHitungMundur = setInterval(perbarui, 1000);
}

// ------------------------------------------------------------------
// Galeri — placeholder ikon daun (silakan ganti dengan foto asli
// dengan menaruh file di /public/img/ lalu ubah larik ini)
// ------------------------------------------------------------------
function muatGaleri() {
  const wadah = document.getElementById("grid-galeri");
  if (!wadah) return;
  wadah.innerHTML = "";

  const daftarFoto = [
    "/img/fotoPasangan/1.webp",
    "/img/fotoPasangan/2.webp",
    "/img/fotoPasangan/3.webp",
    "/img/fotoPasangan/4.webp",
    "/img/fotoPasangan/5.webp",
    "/img/fotoPasangan/6.webp",
  ];

  daftarFoto.forEach((src, idx) => {
    const bungkus = document.createElement("div");
    bungkus.className = "item-galeri";
    
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Foto kenangan ${idx + 1}`;
    img.loading = "lazy";

    // Klik foto untuk memperbesar (lightbox sederhana)
    bungkus.addEventListener("click", () => bukaLightbox(src, `Foto ${idx + 1}`));

    bungkus.appendChild(img);
    wadah.appendChild(bungkus);
  });
}

// Lightbox sederhana untuk melihat foto secara fullscreen
function bukaLightbox(src, alt) {
  let modal = document.getElementById("modal-lightbox");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "modal-lightbox";
    modal.className = "modal-lightbox";
    modal.innerHTML = `
      <div class="lightbox-overlay"></div>
      <div class="lightbox-konten">
        <button class="lightbox-tutup" type="button" aria-label="Tutup">&times;</button>
        <img id="lightbox-img" src="" alt="" />
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector(".lightbox-overlay").addEventListener("click", () => modal.classList.remove("aktif"));
    modal.querySelector(".lightbox-tutup").addEventListener("click", () => modal.classList.remove("aktif"));
  }

  const imgEl = modal.querySelector("#lightbox-img");
  imgEl.src = src;
  imgEl.alt = alt;
  modal.classList.add("aktif");
}

// ------------------------------------------------------------------
// Buka undangan (dari sampul ke konten utama) + mulai musik
// ------------------------------------------------------------------
document.getElementById("tombol-buka").addEventListener("click", () => {
  document.getElementById("sampul").style.display = "none";
  document.getElementById("konten-utama").classList.remove("tersembunyi");
  document.getElementById("tombol-musik").classList.remove("tersembunyi");

  const audio = document.getElementById("audio-musik");
  audio.play().catch(() => {
    // Browser bisa saja memblokir autoplay tanpa interaksi lanjutan; tidak apa-apa.
  });
  document.getElementById("ikon-musik").textContent = "❚❚";

  window.scrollTo({ top: 0, behavior: "instant" });
});

// ------------------------------------------------------------------
// Kontrol musik latar
// ------------------------------------------------------------------
document.getElementById("tombol-musik").addEventListener("click", () => {
  const audio = document.getElementById("audio-musik");
  const ikon = document.getElementById("ikon-musik");

  if (audio.paused) {
    audio.play().catch(() => {});
    ikon.textContent = "❚❚";
  } else {
    audio.pause();
    ikon.textContent = "♫";
  }
});

// ------------------------------------------------------------------
// Formulir RSVP -> disimpan ke tabel `rsvp` lewat POST /api/rsvp
// ------------------------------------------------------------------
document.getElementById("form-rsvp").addEventListener("submit", async (e) => {
  e.preventDefault();
  const status = document.getElementById("rsvp-status");
  const tombol = e.target.querySelector("button[type=submit]");

  const payload = {
    nama: document.getElementById("rsvp-nama").value,
    jumlah_tamu: document.getElementById("rsvp-jumlah").value,
    kehadiran: document.getElementById("rsvp-kehadiran").value,
  };

  tombol.disabled = true;
  status.textContent = "Mengirim...";
  status.classList.remove("gagal");

  try {
    const res = await fetch(`${API}/rsvp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await res.json();

    if (json.sukses) {
      status.textContent = "Terima kasih, konfirmasi Anda sudah tersimpan.";
      e.target.reset();
    } else {
      status.textContent = json.pesan || "Terjadi kesalahan, silakan coba lagi.";
      status.classList.add("gagal");
    }
  } catch (err) {
    status.textContent = "Tidak dapat terhubung ke server.";
    status.classList.add("gagal");
  } finally {
    tombol.disabled = false;
  }
});

// ------------------------------------------------------------------
// Formulir Ucapan & Doa -> disimpan ke tabel `ucapan_doa`
// ------------------------------------------------------------------
document.getElementById("form-ucapan").addEventListener("submit", async (e) => {
  e.preventDefault();
  const status = document.getElementById("ucapan-status");
  const tombol = e.target.querySelector("button[type=submit]");

  const payload = {
    nama: document.getElementById("ucapan-nama").value,
    pesan: document.getElementById("ucapan-pesan").value,
    kehadiran: "hadir",
  };

  tombol.disabled = true;
  status.textContent = "Mengirim...";
  status.classList.remove("gagal");

  try {
    const res = await fetch(`${API}/ucapan`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await res.json();

    if (json.sukses) {
      status.textContent = "Ucapan Anda telah terkirim.";
      e.target.reset();
      muatUcapan();
    } else {
      status.textContent = json.pesan || "Terjadi kesalahan, silakan coba lagi.";
      status.classList.add("gagal");
    }
  } catch (err) {
    status.textContent = "Tidak dapat terhubung ke server.";
    status.classList.add("gagal");
  } finally {
    tombol.disabled = false;
  }
});

// ------------------------------------------------------------------
// Ambil & tampilkan daftar ucapan dari database
// ------------------------------------------------------------------
function formatWaktu(iso) {
  const tanggal = new Date(iso + "Z");
  return tanggal.toLocaleString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const labelKehadiran = {
  hadir: "Akan Hadir",
  tidak_hadir: "Tidak Hadir",
  ragu: "Masih Ragu",
};

async function muatUcapan() {
  const daftar = document.getElementById("daftar-ucapan");

  try {
    const res = await fetch(`${API}/ucapan`);
    const json = await res.json();

    if (!json.sukses || json.data.length === 0) {
      daftar.innerHTML = '<p class="memuat-ucapan">Jadilah yang pertama mengirim ucapan.</p>';
      return;
    }

    daftar.innerHTML = "";
    json.data.forEach((item) => {
      const el = document.createElement("div");
      el.className = "item-ucapan";
      el.innerHTML = `
        <div class="item-ucapan-header">
          <p class="item-ucapan-nama">${escapeHTML(item.nama)}</p>
          <span class="item-ucapan-badge">${labelKehadiran[item.kehadiran] || ""}</span>
        </div>
        <p class="item-ucapan-pesan">${escapeHTML(item.pesan)}</p>
        <p class="item-ucapan-waktu">${formatWaktu(item.dibuat_pada)}</p>
      `;
      daftar.appendChild(el);
    });
  } catch (err) {
    daftar.innerHTML = '<p class="memuat-ucapan">Gagal memuat ucapan.</p>';
  }
}

function escapeHTML(teks) {
  const div = document.createElement("div");
  div.textContent = teks;
  return div.innerHTML;
}

// ------------------------------------------------------------------
// Salin nomor rekening ke clipboard (jika ada)
// ------------------------------------------------------------------
const tombolSalinEl = document.getElementById("tombol-salin");
if (tombolSalinEl) {
  tombolSalinEl.addEventListener("click", async () => {
    const nomor = document.getElementById("rekening-nomor")?.textContent || "";
    try {
      await navigator.clipboard.writeText(nomor);
      const teksAsli = tombolSalinEl.textContent;
      tombolSalinEl.textContent = "Tersalin!";
      setTimeout(() => (tombolSalinEl.textContent = teksAsli), 1800);
    } catch (err) {
      alert(`Nomor rekening: ${nomor}`);
    }
  });
}

// ------------------------------------------------------------------
// Perbarui SEO Meta Tags secara dinamis (untuk WhatsApp/Sosmed)
// ------------------------------------------------------------------
function perbaruiMetaSEO() {
  const origin = window.location.origin;
  const logoUrl = origin + "/img/main%20logo.png";
  const namaTamu = ambilNamaTamu();
  const fullUrl = window.location.href;

  // Set URL gambar absolut untuk Open Graph & Twitter Cards
  const setMetaAttr = (selector, attr, val) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, val);
  };

  setMetaAttr('meta[property="og:image"]', 'content', logoUrl);
  setMetaAttr('meta[property="og:image:secure_url"]', 'content', logoUrl);
  setMetaAttr('meta[name="twitter:image"]', 'content', logoUrl);
  setMetaAttr('meta[property="og:url"]', 'content', fullUrl);
  setMetaAttr('meta[name="twitter:url"]', 'content', fullUrl);
  setMetaAttr('link[rel="canonical"]', 'href', fullUrl);

  // Jika tautan dibuat khusus untuk tamu (contoh: ?to=Budi)
  if (namaTamu && namaTamu !== "Bapak/Ibu/Saudara/i") {
    const judulCustom = `Undangan Pernikahan Arka & Cahaya — Kepada Yth. ${namaTamu}`;
    const deskripsiCustom = `Kepada Yth. ${namaTamu}, Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir dan memberikan doa restu di hari bahagia kami.`;

    document.title = judulCustom;
    setMetaAttr('meta[name="description"]', 'content', deskripsiCustom);
    setMetaAttr('meta[property="og:title"]', 'content', judulCustom);
    setMetaAttr('meta[property="og:description"]', 'content', deskripsiCustom);
    setMetaAttr('meta[name="twitter:title"]', 'content', judulCustom);
    setMetaAttr('meta[name="twitter:description"]', 'content', deskripsiCustom);
  }
}

// ------------------------------------------------------------------
// Jalankan semua saat halaman siap
// ------------------------------------------------------------------
perbaruiMetaSEO();
muatPengaturan();
muatGaleri();
muatUcapan();

