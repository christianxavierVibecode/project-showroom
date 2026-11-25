# 📊 PROGRESS.md - Website SMK PPDB Development

**Single Source of Truth untuk Status Project**

Setiap AI Agent wajib membaca file ini sebelum mulai bekerja!

---

## 🎯 PROJECT OVERVIEW

**Project Name**: Website SMK PPDB (Landing Page + Multi-Page)  
**Tech Stack**: HTML5 + CSS3 (Tailwind CSS) + Vanilla JavaScript  
**Target Pages**: 8-10 halaman  
**Timeline**: 2-3 minggu  
**Status**: 🔵 In Progress

---

## 📋 HALAMAN PROJECT

### **Phase 1: CORE (Target: Selesai minggu 1)**

| No | Halaman | Status | Owner/Agent | Last Update | Notes |
|---|---|---|---|---|---|
| 1 | 🏠 Home/Landing | ✅ DONE | Initial Upload | - | Sudah ada, perlu enhancement (smooth scroll, counters) |
| 2 | 🎓 Jurusan | ⏳ IN PROGRESS | - | - | Filter, modal, accordion, search - START HERE |
| 3 | 🏢 Fasilitas | 🔴 NOT STARTED | - | - | Image gallery, lightbox, carousel, filter |
| 4 | 📌 Info PPDB | 🔴 NOT STARTED | - | - | Accordion, timeline, collapse, checklist |
| 5 | ❓ FAQ | 🔴 NOT STARTED | - | - | Accordion, search, filter, most impressive feature |

### **Phase 2: EXTENDED (Target: Minggu 2-3)**

| No | Halaman | Status | Owner/Agent | Last Update | Notes |
|---|---|---|---|---|---|
| 6 | 📰 Blog/Berita | 🔴 NOT STARTED | - | - | Filter, search, pagination, detail page |
| 7 | 💬 Testimoni | 🔴 NOT STARTED | - | - | Carousel, filter by program, rating |
| 8 | 📖 Tentang Kami | 🔴 NOT STARTED | - | - | Animated counters, timeline, smooth scroll |
| 9 | 📞 Kontak | 🔴 NOT STARTED | - | - | Form validation, error messages, Google Maps |
| 10 | 📍 Lokasi | 🔴 NOT STARTED | - | - | Google Maps embed, directions, address |

### **Phase 3: BONUS (Optional)**

| No | Halaman | Status | Owner/Agent | Last Update | Notes |
|---|---|---|---|---|---|
| 11 | 🎖️ Prestasi | 🔴 NOT STARTED | - | - | Timeline, filter, grid display |
| 12 | 📸 Galeri | 🔴 NOT STARTED | - | - | Lightbox, masonry, lazy loading |
| 13 | 💰 Beasiswa | 🔴 NOT STARTED | - | - | Collapse, filter, comparison table |

---

## 🔧 DETAIL TASK PER HALAMAN

### **1️⃣ HOME / LANDING PAGE**
**Status**: ✅ DONE (dengan catatan)  
**File**: `index.html`  
**Enhancement Needed**:
- [ ] Smooth scroll navigation
- [ ] Animated counter (jumlah siswa, tahun, dll)
- [ ] Mobile hamburger menu improvement
- [ ] Hero image carousel (optional)
- [ ] Sticky navbar

---

### **2️⃣ HALAMAN JURUSAN** ⭐⭐⭐⭐⭐
**Status**: ⏳ IN PROGRESS  
**File**: `pages/jurusan.html`  
**Requirements**:
- [ ] Grid layout responsive (3 kolom desktop, 1 mobile)
- [ ] Filter by kategori (Teknologi, Bisnis, Pariwisata, dll)
- [ ] Search jurusan real-time
- [ ] Card design dengan hover effect
- [ ] Modal detail jurusan saat diklik
- [ ] Accordion untuk kurikulum dalam modal
- [ ] Tab untuk info berbeda (Overview, Kurikulum, Prospek Karir)
- [ ] Video embed per jurusan (embed YouTube)

**JavaScript Features**:
```javascript
- Array filter by kategori
- Array search/includes
- Modal open/close
- Accordion expand/collapse
- Tab switching
- Event listeners untuk click/input
```

**Mockup Data**: Minimal 6 jurusan
**Design Reference**: Gunakan design.md untuk styling
**Priority**: WAJIB PERTAMA

---

### **3️⃣ HALAMAN FASILITAS** ⭐⭐⭐⭐⭐
**Status**: 🔴 NOT STARTED  
**File**: `pages/fasilitas.html`  
**Requirements**:
- [ ] Grid galeri responsif (3 kolom desktop, 1-2 mobile)
- [ ] Image lightbox modal saat klik
- [ ] Previous/next navigation di lightbox
- [ ] Filter by kategori (Lab, Perpustakaan, Asrama, Kantin, dll)
- [ ] Category tabs/buttons
- [ ] Deskripsi per fasilitas
- [ ] Lazy loading untuk images

**JavaScript Features**:
```javascript
- Lightbox modal open/close
- Image carousel in lightbox
- Filter gallery by category
- Modal close on escape key
- Image preloading
```

**Mockup Data**: Minimal 9-12 foto fasilitas (bisa placeholder)  
**External Library**: GLightbox atau custom modal  
**Design Reference**: Gunakan design.md  
**Priority**: PENTING

---

### **4️⃣ HALAMAN INFO PPDB** 
**Status**: 🔴 NOT STARTED  
**File**: `pages/info-ppdb.html`  
**Requirements**:
- [ ] Section syarat pendaftaran
- [ ] Section jalur masuk (reguler, prestasi, dll)
- [ ] Accordion untuk detail setiap jalur
- [ ] Timeline PPDB (jadwal penting)
- [ ] Checklist syarat administratif
- [ ] Download link dokumen template
- [ ] FAQ singkat per jalur

**JavaScript Features**:
```javascript
- Accordion expand/collapse
- Tab switching antar jalur
- Timeline date display
- Checklist checkbox
- Download link tracking (optional)
```

**Mockup Data**: Timeline, 3-4 jalur masuk, checklist items  
**Design Reference**: Gunakan design.md  
**Priority**: PENTING

---

### **5️⃣ HALAMAN FAQ** ⭐⭐⭐⭐
**Status**: 🔴 NOT STARTED  
**File**: `pages/faq.html`  
**Requirements**:
- [ ] Accordion layout Q&A
- [ ] Filter by kategori (PPDB, Akademik, Biaya, Umum)
- [ ] Search FAQ real-time
- [ ] Display jumlah FAQ per kategori
- [ ] Expand all / Collapse all button
- [ ] Smooth animation saat expand/collapse
- [ ] Highlight search results

**JavaScript Features**:
```javascript
- Accordion toggle
- Array filter by category
- Array search/includes
- Text highlighting
- DOM manipulation untuk display
- Event delegation
```

**Mockup Data**: Minimal 15-20 FAQ dengan kategori  
**Design Reference**: Gunakan design.md  
**Priority**: TINGGI (impressive feature!)

---

### **6️⃣ HALAMAN BLOG / BERITA**
**Status**: 🔴 NOT STARTED  
**File**: `pages/blog.html`  
**Requirements**:
- [ ] List artikel dengan preview card
- [ ] Filter by kategori (PPDB, Akademik, Prestasi, Pengumuman)
- [ ] Search artikel real-time
- [ ] Pagination atau Load More button
- [ ] Featured artikel di atas
- [ ] Detail page per artikel (`pages/blog/[slug].html`)
- [ ] Related posts sidebar
- [ ] Estimated read time display
- [ ] Date formatting (relative time atau format lokal)

**JavaScript Features**:
```javascript
- Filter artikel by kategori
- Search artikel real-time
- Pagination logic
- Array sort by date
- Load More button
- Modal atau page untuk detail
- Related posts recommendation
```

**Mockup Data**: Minimal 12-15 artikel  
**Design Reference**: Gunakan design.md  
**Priority**: TINGGI

---

### **7️⃣ HALAMAN TESTIMONI**
**Status**: 🔴 NOT STARTED  
**File**: `pages/testimoni.html`  
**Requirements**:
- [ ] Carousel/slider testimonial
- [ ] Previous/next navigation
- [ ] Auto-rotate carousel (opsional)
- [ ] Pagination dots
- [ ] Filter by program/jurusan
- [ ] Star rating display (1-5 bintang)
- [ ] Avatar & nama testimonial
- [ ] Quotes styling yang menarik

**JavaScript Features**:
```javascript
- Carousel logic (current, prev, next)
- Auto-rotate dengan interval
- Filter by kategori
- Pagination dots update
- Touch/swipe support (optional)
```

**Mockup Data**: Minimal 8-10 testimonial dengan rating  
**External Library**: Splide atau custom carousel  
**Design Reference**: Gunakan design.md  
**Priority**: SEDANG

---

### **8️⃣ HALAMAN TENTANG KAMI**
**Status**: 🔴 NOT STARTED  
**File**: `pages/tentang.html`  
**Requirements**:
- [ ] Hero section dengan school image
- [ ] Visi & Misi section
- [ ] Timeline sejarah sekolah
- [ ] Animated counters (jumlah siswa, tahun berdiri, alumni)
- [ ] Prestasi highlight
- [ ] Akreditasi display
- [ ] Smooth scroll to sections
- [ ] Table of contents sidebar

**JavaScript Features**:
```javascript
- Animated counters saat scroll
- Smooth scroll to anchor
- Timeline interactive (optional)
- Counter animation library
- Scroll event listener
```

**Mockup Data**: Timeline, counters, achievements  
**External Library**: AOS (Animate On Scroll) - optional  
**Design Reference**: Gunakan design.md  
**Priority**: SEDANG

---

### **9️⃣ HALAMAN KONTAK**
**Status**: 🔴 NOT STARTED  
**File**: `pages/kontak.html`  
**Requirements**:
- [ ] Contact form dengan fields (nama, email, pesan)
- [ ] Form validation real-time
- [ ] Error message display
- [ ] Success message after "submit"
- [ ] Contact info display (telp, email, alamat)
- [ ] Google Maps embed
- [ ] WhatsApp chat button
- [ ] Copy to clipboard untuk kontak

**JavaScript Features**:
```javascript
- Form validation (email, required)
- Error message display
- Success message display
- Copy to clipboard function
- Form field focus handling
- Phone number formatting
```

**Form Validation Rules**:
- Nama: minimum 3 karakter
- Email: valid email format
- Pesan: minimum 10 karakter

**Design Reference**: Gunakan design.md  
**Priority**: SEDANG

---

### **🔟 HALAMAN LOKASI**
**Status**: 🔴 NOT STARTED  
**File**: `pages/lokasi.html`  
**Requirements**:
- [ ] Google Maps embed
- [ ] School address display
- [ ] Multiple tabs untuk lokasi (jika ada)
- [ ] Directions link ke Google Maps
- [ ] Transportation info
- [ ] Address copy to clipboard
- [ ] Contact info section

**JavaScript Features**:
```javascript
- Google Maps API embed
- Copy address function
- Tab switching
- Open directions link
```

**Note**: Perlu Google Maps API key (gratis dengan credit card)  
**Design Reference**: Gunakan design.md  
**Priority**: SEDANG

---

## 📁 FILE STRUCTURE

```
website-ppdb/
├── index.html                    (Home - sudah ada)
├── css/
│   └── style.css                (Custom CSS jika ada)
├── js/
│   ├── main.js                  (Shared JS utilities)
│   ├── jurusan.js               (Jurusan page logic)
│   ├── fasilitas.js             (Fasilitas page logic)
│   ├── faq.js                   (FAQ page logic)
│   ├── blog.js                  (Blog page logic)
│   └── ...                       (lainnya per halaman)
├── pages/
│   ├── jurusan.html             (Halaman Jurusan)
│   ├── fasilitas.html           (Halaman Fasilitas)
│   ├── info-ppdb.html           (Info PPDB)
│   ├── faq.html                 (FAQ)
│   ├── blog.html                (Blog List)
│   ├── blog/
│   │   └── [slug].html          (Blog Detail)
│   ├── testimoni.html           (Testimoni)
│   ├── tentang.html             (Tentang Kami)
│   ├── kontak.html              (Kontak)
│   └── lokasi.html              (Lokasi)
├── data/
│   ├── jurusan.json             (Mockup data jurusan)
│   ├── fasilitas.json           (Mockup data fasilitas)
│   ├── faq.json                 (Mockup data FAQ)
│   ├── blog.json                (Mockup data artikel)
│   └── testimoni.json           (Mockup data testimoni)
├── images/
│   ├── logo.png
│   ├── hero/
│   ├── jurusan/
│   ├── fasilitas/
│   └── ...
├── design.md                     (Design System Reference)
├── halaman-feasible-js.md        (Halaman Feasible Reference)
├── progress.md                   (File ini - Progress tracking)
└── README.md                     (Project documentation)
```

---

## ⚙️ MOCKUP DATA FORMAT

Semua data menggunakan JSON format untuk kemudahan:

### **Jurusan Data Structure**
```json
{
  "jurusan": [
    {
      "id": 1,
      "nama": "Rekayasa Perangkat Lunak",
      "kategori": "Teknologi",
      "deskripsi": "...",
      "foto": "images/jurusan/rpl.jpg",
      "kurikulum": ["Pemrograman", "Web Development", "Database", ...],
      "prospekKarir": ["Software Developer", "QA Engineer", ...],
      "videoUrl": "https://youtube.com/..."
    },
    ...
  ]
}
```

### **FAQ Data Structure**
```json
{
  "faq": [
    {
      "id": 1,
      "kategori": "PPDB",
      "pertanyaan": "Kapan pendaftaran dibuka?",
      "jawaban": "..."
    },
    ...
  ]
}
```

Format detail ada di halaman-feasible-js.md section "DATA MOCKUP APPROACH"

---

## 🔄 WORKFLOW ANTAR AI AGENT

### **Sebelum Mulai Bekerja:**
1. ✅ Baca file `halaman-feasible-js.md` untuk memahami requirements
2. ✅ Baca file `progress.md` ini untuk tahu status & konteks
3. ✅ Baca file `design.md` untuk styling guidelines
4. ✅ Cek halaman apa yang sudah selesai vs belum

### **Saat Mulai Bekerja:**
1. 🔄 Update status halaman dari "NOT STARTED" → "IN PROGRESS"
2. 📝 Tambahkan nama AI Agent / Owner
3. 💻 Code sesuai requirements
4. ✅ Checklist task yang sudah selesai

### **Saat Selesai:**
1. ✅ Update status dari "IN PROGRESS" → "DONE"
2. 📝 Tambahkan Last Update timestamp
3. 💬 Tambahkan notes penting (jika ada)
4. 📊 Update file progress.md

### **Jika Ada Issue:**
1. ⚠️ Update status menjadi "⚠️ BLOCKED" atau "🔴 REVISION NEEDED"
2. 📝 Jelaskan issue di kolom Notes
3. 🆘 Tag AI Agent lain yang bisa membantu

---

## 📝 CHANGELOG & UPDATE LOG

### **Update #0 - Initial Setup**
**Tanggal**: 2024  
**By**: Initial Creator  
**Changes**:
- ✅ Create progress.md
- ✅ Setup file structure
- ✅ Define halaman details
- ✅ Create status tracking

**Status**: Ready untuk dimulai

---

## ⚠️ NOTES & ISSUES

### **Known Issues**:
- None yet - semua clear untuk dimulai!

### **Pending Decisions**:
- [ ] Google Maps API key - belum ada
- [ ] Mockup images - perlu dicari/create placeholder
- [ ] Video links - belum ada real video

### **Dependencies**:
- Tailwind CSS (via CDN) - ✅ Sudah available di index.html
- Google Fonts (Plus Jakarta Sans, Inter) - ✅ Sudah di index.html
- Material Symbols Icons - ✅ Sudah di index.html
- Optional: GLightbox, Splide untuk carousel

---

## 🎯 SUCCESS CRITERIA

Halaman dianggap **DONE** jika:

1. ✅ **HTML valid** - Valid HTML5 structure
2. ✅ **Responsive** - Mobile, tablet, desktop (menggunakan design.md)
3. ✅ **JavaScript berfungsi** - Semua fitur JS jalan tanpa error
4. ✅ **Styling konsisten** - Sesuai design.md, Tailwind CSS
5. ✅ **Accessibility** - Basic a11y (labels, alt text, keyboard nav)
6. ✅ **Performance** - Minimal, lazy loading untuk images
7. ✅ **Error handling** - Graceful fallback jika error

---

## 📊 OVERALL PROJECT PROGRESS

```
Phase 1 (Core):        █░░░░░░░░░░░░░░░░░░  10% (1/5 selesai)
Phase 2 (Extended):    ░░░░░░░░░░░░░░░░░░░   0% (0/5 selesai)
Phase 3 (Bonus):       ░░░░░░░░░░░░░░░░░░░   0% (0/3 selesai)
─────────────────────────────────────────────────────────────
TOTAL PROJECT:         ██░░░░░░░░░░░░░░░░░   6.7% (1/13 selesai)
```

---

## 📞 CONTACT & COLLABORATION

**Project Owner**: [Your Name]  
**Communication**: [Slack/Email/Chat channel]  
**Review Process**: Update progress.md setiap selesai halaman  
**Escalation**: Update status menjadi "BLOCKED" jika ada hambatan

---

**Last Updated**: [Waktu sekarang]  
**Next Review**: [Setiap hari atau setelah halaman selesai]  
**Version**: 1.0

---

## 📌 QUICK REFERENCE

**Start dari halaman ini:**
1. 🎓 **Jurusan** - ⏳ IN PROGRESS (START HERE!)
2. 🏢 **Fasilitas** - 🔴 NOT STARTED (NEXT)
3. ❓ **FAQ** - 🔴 NOT STARTED (IMPRESSIVE FEATURE!)

**Jangan lupa baca:**
- 📄 `design.md` - untuk styling
- 📄 `halaman-feasible-js.md` - untuk detail requirements

**Workflow sederhana:**
1. Baca progress.md & halaman-feasible-js.md
2. Pilih halaman yang "NOT STARTED"
3. Update status → "IN PROGRESS" + nama Anda
4. Code sesuai requirements
5. Update status → "DONE" saat selesai
6. Lanjut ke halaman berikutnya!

---

**Status**: 🔵 Ready to Start Development!
