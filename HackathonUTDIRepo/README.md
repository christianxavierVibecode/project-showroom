# HackathonUTDIRepo 🚀

Repositori kolaborasi untuk proyek Hackathon UTDI yang terdiri dari dua subfolder utama dengan fokus pada pengembangan web frontend modern.

---

## 📋 Daftar Isi

- [Deskripsi Proyek](#-deskripsi-proyek)
- [Struktur Repository](#-struktur-repository)
- [Per3: Landing Page Soto Cak Sumalik](#per3-landing-page-soto-cak-sumalik)
- [Per4: Aplikasi Web Frontend](#per4-aplikasi-web-frontend)
- [Tech Stack](#-tech-stack)
- [Cara Menjalankan](#-cara-menjalankan)
- [Kontribusi](#-kontribusi)
- [Catatan Penting](#-catatan-penting)

---

## 🎯 Deskripsi Proyek

Repository ini menampung dua proyek pengembangan web frontend yang dikembangkan selama Hackathon UTDI:

1. **Per3**: Landing page responsif untuk Warung Soto Yogyakarta "Cak Sumalik" dengan integrasi WhatsApp dan desain modern
2. **Per4**: Aplikasi web multi-halaman dengan sistem login, pendaftaran, dan dashboard

Kedua proyek menggunakan HTML5, CSS3 (Tailwind CSS), dan JavaScript vanilla untuk menciptakan pengalaman pengguna yang optimal.

---

## 📁 Struktur Repository

```
HackathonUTDIRepo/
├── Per3/                          # Landing Page Soto Cak Sumalik
│   ├── index.html                # Halaman utama landing page
│   ├── README.md                 # Dokumentasi Per3
│   ├── Prompt.md                 # Brief pengembangan & requirements
│   ├── BRIEF.docx                # Dokumen brief dalam format Word
│   ├── logo.jpg                  # Logo Cak Sumalik
│   └── assets/                   # Folder aset (gambar, ikon, dll)
│
├── Per4/                          # Aplikasi Web Frontend
│   ├── index.html                # Halaman home
│   ├── login.html                # Halaman login
│   ├── pendaftaran.html          # Halaman registrasi pengguna
│   ├── dashboard.html            # Halaman dashboard
│   ├── about.html                # Halaman tentang
│   ├── Pr/                       # Dokumentasi project Per4
│   │   ├── index.html
│   │   ├── design.md             # Panduan desain
│   │   ├── progress.md           # Laporan progress
│   │   ├── system-prompt.md      # System prompt untuk development
│   │   └── halaman-feasible-js.md # Dokumentasi halaman dengan JS
│
└── README.md                      # File ini (dokumentasi utama)
```

---

## Per3: Landing Page Soto Cak Sumalik 🥣

### 📌 Deskripsi

Landing page profesional dan responsif untuk Warung Soto Yogyakarta "Cak Sumalik" — bisnis kuliner delivery/takeaway lokal yang ingin memperluas jangkauan digital.

### ✨ Fitur Utama

- **Sticky Navigation Bar**: Menu navigasi yang tetap di atas saat scroll, responsif di mobile dengan hamburger menu
- **Hero Section**: Headline menarik dengan CTA (Call-to-Action) buttons dan background visual estetis
- **About Section**: Cerita warung, galeri visual, dan informasi keunikan produk
- **Menu Section**: Grid 3 kolom berisi 3 produk unggulan dengan harga dan tombol pesan WhatsApp
- **Contact & Lokasi**: Informasi kontak lengkap, jam operasional, dan Google Maps terintegrasi
- **Responsive Design**: Fully tested di desktop, tablet, dan mobile
- **WhatsApp Integration**: Tombol pesan yang langsung membuka chat dengan pesan pre-filled

### 🎨 Design Highlights

- **Color Scheme**: Dark navy (`#0F1B4C`) dengan aksen orange hangat (`#FBBF24`)
- **Typography**: Poppins & Inter dari Google Fonts
- **Icons**: FontAwesome v6 untuk ikon-ikon modern
- **Animasi**: Fade-in effects saat scroll, hover transitions, dan scroll-smooth

### 🍲 Menu yang Ditampilkan

| Nama | Harga | Status |
|------|-------|--------|
| Soto Ayam | Rp 25.000 | Best Seller ⭐ |
| Soto Daging | Rp 35.000 | Regular |
| Soto Iga | Rp 40.000 | Premium 👑 |

### 📱 Responsiveness

- **Desktop** (≥1024px): Layout penuh dengan sidebar gallery
- **Tablet** (768px - 1023px): Layout 2 kolom yang disesuaikan
- **Mobile** (<768px): Single column stacked, hamburger menu, optimized untuk touch

---

## Per4: Aplikasi Web Frontend 💻

### 📌 Deskripsi

Aplikasi web multi-halaman dengan sistem autentikasi (login & registrasi) dan dashboard. Proyek ini menunjukkan implementasi halaman-halaman kompleks dengan desain modern dan fungsionalitas interaktif.

### 📄 Halaman-Halaman Tersedia

1. **index.html** - Halaman home/landing
2. **login.html** - Form login dengan validasi
3. **pendaftaran.html** - Form registrasi pengguna baru
4. **dashboard.html** - Dashboard untuk user yang sudah login
5. **about.html** - Halaman informasi tentang aplikasi

### 🎯 Fitur

- Multi-halaman dengan navigasi yang smooth
- Form validation menggunakan JavaScript
- Responsive design untuk semua ukuran layar
- Dashboard dengan UI yang user-friendly
- Dokumentasi lengkap di folder `Pr/`

### 📚 Dokumentasi Per4

Folder `Per4/Pr/` berisi dokumentasi lengkap:

- **design.md** - Panduan desain dan layout guidelines
- **progress.md** - Laporan progress pengembangan
- **system-prompt.md** - System prompt untuk AI-assisted development
- **halaman-feasible-js.md** - Dokumentasi fitur JavaScript

---

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic HTML untuk struktur
- **CSS3**: Tailwind CSS via CDN untuk styling responsif
- **JavaScript (Vanilla)**: Interaktivitas tanpa dependencies berat
- **Google Fonts**: Typography modern (Poppins, Inter)
- **FontAwesome v6**: Icon library

### Tools & Utilities
- **Tailwind CSS**: CSS framework utility-first
- **Google Maps API**: Embedded maps dengan custom styling
- **WhatsApp API**: Integrasi messaging via `wa.me/`
- **GitHub**: Version control

### Browser Support
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

---

## 🚀 Cara Menjalankan

### Opsi 1: Menggunakan XAMPP (Recommended)

```bash
# 1. Pastikan XAMPP sudah terinstal
# 2. Buka XAMPP Control Panel dan jalankan Apache
# 3. Clone atau copy repository ke folder htdocs:
#    c:\xampp\htdocs\HackathonUTDIRepo\

# 4. Akses di browser:
# Per3: http://localhost/HackathonUTDIRepo/Per3/
# Per4: http://localhost/HackathonUTDIRepo/Per4/
```

### Opsi 2: Membuka File HTML Langsung

```bash
# 1. Buka folder Per3 atau Per4
# 2. Double-click file index.html
# 3. File akan terbuka di browser default Anda
```

### Opsi 3: Menggunakan Live Server (VS Code)

```bash
# 1. Install extension "Live Server" di VS Code
# 2. Right-click pada file index.html
# 3. Pilih "Open with Live Server"
# 4. Browser akan membuka dengan port 5500 atau sesuai konfigurasi
```

### Opsi 4: Menggunakan Python HTTP Server

```bash
# Python 3.x
cd /path/to/HackathonUTDIRepo/Per3
python -m http.server 8000

# Kemudian akses http://localhost:8000
```

---

## 📖 Dokumentasi Lengkap

### Per3

Baca file `Per3/README.md` dan `Per3/Prompt.md` untuk:
- Panduan setup lengkap
- Daftar fitur detail
- Requirements teknis
- Performance targets

### Per4

Baca file `Per4/Pr/` untuk:
- Desain dan layout guidelines
- Progress laporan
- Dokumentasi halaman
- System prompt untuk development

---

## ✅ Quality Assurance

### Testing yang Dilakukan

- ✅ Cross-browser testing (Chrome, Firefox, Safari, Edge)
- ✅ Responsive design testing (mobile, tablet, desktop)
- ✅ Performance optimization (image compression, lazy loading)
- ✅ Accessibility checks (semantic HTML, contrast ratio)
- ✅ SEO optimization (meta tags, OG tags)

### Performance Metrics Target

- Lighthouse Score: > 80 (target 90+)
- Page Load Time: < 3 detik (4G connection)
- Mobile Responsiveness: 100%
- No console errors

---

## 🤝 Kontribusi

Jika ingin berkontribusi:

1. **Fork** repository ini
2. **Create** branch fitur (`git checkout -b feature/AmazingFeature`)
3. **Commit** perubahan (`git commit -m 'Add some AmazingFeature'`)
4. **Push** ke branch (`git push origin feature/AmazingFeature`)
5. **Open** Pull Request

### Guidelines Kontribusi

- Gunakan semantic HTML5 tags
- Follow Tailwind CSS utility patterns
- Write clean, readable JavaScript
- Test responsiveness di mobile
- Update dokumentasi jika ada perubahan

---

## 📝 Catatan Penting

### Placeholder Data

Beberapa informasi masih menggunakan placeholder yang perlu diupdate:

- **WhatsApp Number**: `6285806030588` (sesuaikan dengan nomor aktual)
- **Email**: `caksumalik@email.com`
- **Google Maps Location**: Koordinat lokasi di Yogyakarta (sudah disesuaikan)

### Asset Management

- Semua asset (gambar, logo) disimpan di folder `assets/`
- Gunakan format WebP dengan fallback JPG untuk image optimization
- Implement lazy loading untuk gambar agar performa optimal

### Deployment

Repository ini siap untuk di-deploy ke:
- **Vercel** (recommended untuk Next.js projects)
- **Netlify** (untuk static sites)
- **GitHub Pages** (free hosting)
- **Custom VPS** dengan web server (Apache, Nginx)

---

## 📞 Kontak & Support

**Project Owner**: Christian Xavier (christianxavier25)  
**Location**: Yogyakarta, Indonesia  
**Contact**: Available via GitHub Issues & Discussions

---

## 📄 Lisensi

Repository ini dibuat untuk tujuan pembelajaran dan Hackathon UTDI. Penggunaan komersial memerlukan persetujuan dari pemilik proyek.

---

## 🎉 Credits

- **Design Inspiration**: Modern dark theme dengan warm accents
- **Technologies**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Icons**: FontAwesome v6
- **Fonts**: Google Fonts (Poppins, Inter)
- **Maps**: Google Maps API

---

**Happy Coding! 🚀** 

Semoga proyek ini bermanfaat dan memberikan pembelajaran berharga tentang web development modern. Jika ada pertanyaan atau saran, jangan ragu untuk membuka GitHub Issues.

---

*Last Updated: 2026-07-04*  
*Repository Version: 1.0*
