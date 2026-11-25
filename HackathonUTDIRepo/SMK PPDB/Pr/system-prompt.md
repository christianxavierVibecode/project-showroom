# 🚀 SYSTEM PROMPT untuk AI Agent - Website SMK PPDB Development

**Instruksi penting: BACA SEBELUM MULAI BEKERJA!**

---

## 📌 INSTRUKSI UTAMA

Sebelum Anda mulai bekerja pada project ini, **WAJIB** melakukan hal berikut:

### **STEP 1: BACA FILE KONTEKS** (5 menit)
1. 📖 Baca `progress.md` - untuk memahami:
   - Status project secara keseluruhan
   - Halaman mana yang sudah selesai
   - Halaman mana yang sedang dikerjakan
   - Halaman mana yang harus dikerjakan NEXT
   - Detail requirement setiap halaman
   - File structure project

2. 📖 Baca `halaman-feasible-js.md` - untuk memahami:
   - Daftar halaman yang harus dibuat
   - JavaScript features apa saja yang perlu di-implement
   - Feasibility & effort estimation
   - Tech stack yang digunakan

3. 📖 Baca `design.md` - untuk styling guidelines:
   - Color palette & semantic colors
   - Typography system
   - Spacing system
   - Component templates (button, card, form, dll)
   - Responsive breakpoints
   - Dark mode support (jika diperlukan)

### **STEP 2: IDENTIFIKASI HALAMAN ANDA** (2 menit)
1. Cek di `progress.md` halaman mana yang status "🔴 NOT STARTED"
2. Atau cek halaman mana yang status "⏳ IN PROGRESS" tapi belum selesai semua checklist
3. Pilih halaman yang ingin Anda kerjakan
4. **IMMEDIATELY**: Update status halaman dari "NOT STARTED" → "⏳ IN PROGRESS"
5. **Tambahkan nama Anda** sebagai Owner/Agent di kolom "Owner/Agent"
6. **COMMIT/SAVE** progress.md sebelum mulai coding

### **STEP 3: PAHAMI REQUIREMENTS** (5-10 menit)
1. Buka section halaman yang Anda kerjakan di `progress.md`
2. Baca detail requirements, checklist, dan mockup data format
3. Lihat contoh JavaScript features yang diperlukan
4. Lihat design reference (dari `design.md`)
5. Persiapkan mockup data structure (lihat format di progress.md)

### **STEP 4: MULAI CODING** (dengan rules)
1. ✅ Gunakan **Vanilla JavaScript** (NO FRAMEWORK!)
2. ✅ Gunakan **Tailwind CSS** untuk styling (dari design.md)
3. ✅ Ikuti **file structure** yang ada di progress.md
4. ✅ Gunakan **responsive design** (mobile-first approach)
5. ✅ Ikuti **naming convention** yang konsisten
6. ✅ Tambahkan **comments** di code untuk clarity

### **STEP 5: SAAT SELESAI** (PENTING!)
1. ✅ Pastikan semua checklist ✓ di progress.md
2. ✅ Test di mobile, tablet, desktop
3. ✅ Pastikan tidak ada JavaScript error di console
4. ✅ Pastikan styling sesuai design.md
5. ✅ Update status dari "⏳ IN PROGRESS" → "✅ DONE"
6. ✅ Tambahkan Last Update timestamp
7. ✅ Tambahkan notes penting jika ada
8. ✅ **COMMIT/SAVE** progress.md

---

## 🎯 CRITICAL CONTEXT

### **Project Info**
- **Name**: Website SMK PPDB (Sistem Penerimaan Murid Baru)
- **Tech Stack**: HTML5 + CSS3 (Tailwind) + Vanilla JavaScript
- **No Database**: Semua data adalah mockup/JSON statis
- **No Backend**: Pure frontend development
- **No Framework**: Vanilla JS only (tidak boleh React, Vue, dll)

### **Target Halaman: 8-10 halaman**
```
Phase 1 (CORE - Minggu 1):
  1. ✅ Home (sudah ada, perlu enhancement)
  2. ⏳ Jurusan (IN PROGRESS - START HERE!)
  3. 🔴 Fasilitas (NOT STARTED)
  4. 🔴 Info PPDB (NOT STARTED)
  5. 🔴 FAQ (NOT STARTED - IMPRESSIVE!)

Phase 2 (EXTENDED - Minggu 2-3):
  6. 🔴 Blog/Berita
  7. 🔴 Testimoni
  8. 🔴 Tentang Kami
  9. 🔴 Kontak
  10. 🔴 Lokasi
```

### **Design System**
- **Color**: Primary (#003f87), Secondary (#fcd400), Neutral grays
- **Typography**: Plus Jakarta Sans (headline) + Inter (body)
- **Spacing**: 8px base unit, 16px mobile margin, 48px desktop margin
- **Responsive**: Mobile-first, breakpoint di 768px (md:)
- **Components**: Buttons, cards, forms, modals sesuai design.md

---

## ✅ CHECKLIST SEBELUM MULAI

Ceklist ini HARUS dikerjakan sebelum Anda mulai coding:

- [ ] ✅ Saya sudah membaca `progress.md` sepenuhnya
- [ ] ✅ Saya sudah membaca `halaman-feasible-js.md` sepenuhnya
- [ ] ✅ Saya sudah membaca `design.md` dan memahami styling
- [ ] ✅ Saya sudah identifikasi halaman yang akan saya kerjakan
- [ ] ✅ Saya sudah update `progress.md` status halaman saya menjadi "⏳ IN PROGRESS"
- [ ] ✅ Saya sudah paham requirements halaman saya (detail di progress.md)
- [ ] ✅ Saya sudah tahu mockup data structure untuk halaman saya
- [ ] ✅ Saya sudah siap menggunakan Vanilla JS (NO FRAMEWORK)
- [ ] ✅ Saya sudah siap mengikuti design.md untuk styling
- [ ] ✅ Saya paham workflow: kerjakan → test → update progress → selesai

---

## 📋 GUIDELINES TEKNIS

### **HTML**
- Gunakan semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<footer>`, etc)
- Responsive viewport meta tag (sudah ada di index.html)
- Accessibility: `aria-label`, `alt` text untuk images, semantic form labels
- Valid HTML (gunakan validator jika perlu)

### **CSS (Tailwind)**
- HANYA gunakan Tailwind CSS classes (dari design.md)
- Jangan membuat custom CSS kecuali sangat diperlukan
- Responsive classes: mobile-first, gunakan `md:` untuk tablet/desktop
- Warna harus dari color palette di design.md
- Spacing harus konsisten dengan design.md
- Dark mode: gunakan `dark:` prefix jika halaman support dark mode

### **JavaScript**
- Vanilla JavaScript ONLY - NO FRAMEWORKS!
- Event listeners untuk interaksi
- DOM manipulation dengan `querySelector`, `addEventListener`
- Array methods: `filter`, `map`, `find`, `includes`
- Local Storage jika perlu persist data
- Graceful fallback jika JavaScript disabled
- Console.log untuk debugging, remove sebelum selesai
- Struktur kode: clear variable names, comments, modular functions

### **Mockup Data**
- Format: JSON array/object
- Simpan di folder `/data/` dengan nama `[halaman].json`
- Minimal items:
  - Jurusan: 6 items
  - Fasilitas: 9-12 items
  - FAQ: 15-20 items
  - Blog: 12-15 items
  - Testimoni: 8-10 items

### **Accessibility (A11y)**
- Form inputs harus punya `<label>`
- Images harus punya `alt` text
- Buttons/links harus punya text atau `aria-label`
- Keyboard navigation: bisa tab through interactive elements
- Color contrast: minimal WCAG AA

### **Performance**
- Lazy loading untuk images (native HTML loading="lazy")
- Minimize DOM manipulation
- Debounce/throttle untuk search/filter events
- Optimize assets (compress images)
- Tidak loading external resources yang berat

---

## 🚫 DO's and DON'Ts

### **✅ DO:**
- ✅ Gunakan Vanilla JavaScript
- ✅ Ikuti design.md untuk styling
- ✅ Update progress.md saat mulai & selesai
- ✅ Test di browser (console check untuk error)
- ✅ Gunakan mockup data (JSON)
- ✅ Responsive design (mobile-first)
- ✅ Add comments di code
- ✅ Jika ada issue, update progress.md dengan status "BLOCKED"
- ✅ Komunikasikan jika butuh bantuan

### **❌ DON'T:**
- ❌ JANGAN gunakan framework (React, Vue, Angular, dll)
- ❌ JANGAN gunakan jQuery
- ❌ JANGAN custom CSS yang kompleks (gunakan Tailwind)
- ❌ JANGAN lupa update progress.md
- ❌ JANGAN hardcode data (gunakan JSON mockup)
- ❌ JANGAN submit tanpa testing
- ❌ JANGAN abaikan requirements checklist
- ❌ JANGAN mengubah design system tanpa approval
- ❌ JANGAN langsung mark DONE sebelum thorough testing

---

## 🔄 WORKFLOW ANTAR AGENT

### **Saat menerima halaman dari AI Agent lain:**
1. 📖 Baca progress.md untuk tahu status terakhir
2. 🔍 Review code yang sudah ada
3. ✅ Lanjutkan checklist yang belum selesai
4. 🆘 Jika ada issue, update progress.md dengan "REVISION NEEDED"
5. 📝 Komunikasikan progress melalui progress.md

### **Jika halaman sudah DONE dari AI Agent lain:**
1. 📖 Baca design.md untuk styling consistency
2. 🔍 Review code quality
3. ✅ Verify semua checklist ✓
4. 🧪 Test di berbagai browser/device
5. 📊 Confirm di progress.md jika sudah verified

---

## 📞 PROBLEM SOLVING

### **Jika Anda menemukan issue/bug:**
1. 🔍 Debug di browser console
2. 📝 Dokumentasikan issue di progress.md (Notes section)
3. 🆘 Update status halaman menjadi "⚠️ BLOCKED" atau "🔴 REVISION NEEDED"
4. 💬 Jelaskan issue secara detail
5. 🤝 Tag AI Agent lain yang bisa membantu

### **Jika requirements tidak jelas:**
1. 🤔 Re-read halaman section di progress.md & halaman-feasible-js.md
2. 🧠 Gunakan common sense & best practices
3. 📝 Catat asumsi Anda di progress.md Notes
4. 🤝 Tanyakan kepada project owner

---

## 🎓 QUICK REFERENCE

### **File yang harus dibaca:**
1. **progress.md** - Status & requirements halaman
2. **halaman-feasible-js.md** - Daftar halaman & JS features
3. **design.md** - Styling guidelines & components

### **File yang akan dibuat/edit:**
- `pages/[halaman].html` - HTML halaman
- `js/[halaman].js` - JavaScript logic
- `data/[halaman].json` - Mockup data
- `progress.md` - Update status (VERY IMPORTANT!)

### **Tech Stack:**
- HTML5 (semantic)
- CSS3 (Tailwind via CDN)
- JavaScript (Vanilla, no framework)
- JSON (mockup data)

### **Folder structure:**
```
website-ppdb/
├── pages/
│   └── [halaman].html
├── js/
│   └── [halaman].js
├── data/
│   └── [halaman].json
├── images/
├── design.md
├── progress.md
└── halaman-feasible-js.md
```

---

## 🏁 MULAI BEKERJA

**Instruksi simple:**

1. **READ**: `progress.md` + `halaman-feasible-js.md` + `design.md`
2. **CHECK**: Halaman mana yang "NOT STARTED" atau "IN PROGRESS"
3. **UPDATE**: Ubah status ke "⏳ IN PROGRESS" + tambah nama Anda
4. **CODE**: Buat HTML/CSS/JS sesuai requirements & design
5. **TEST**: Test di berbagai device/browser
6. **DONE**: Update status ke "✅ DONE" + save progress.md
7. **NEXT**: Pilih halaman berikutnya, ulangi dari step 2

**Good luck! 🚀**

---

## 📧 QUICK LINKS

- 📄 **Design System**: `design.md`
- 📄 **Halaman List**: `halaman-feasible-js.md`
- 📊 **Progress Tracker**: `progress.md` (UPDATE SETIAP HARI!)
- 📁 **File Structure**: Lihat di progress.md section "FILE STRUCTURE"
- 🎨 **Design Components**: Lihat di design.md section "QUICK COPY-PASTE TEMPLATES"

---

**Status**: 🔵 READY TO START  
**Version**: 1.0  
**Last Updated**: 2024

---

## 🎯 TL;DR (Too Long; Didn't Read?)

**Singkat saja:**

1. Baca `progress.md` - tahu halaman apa yang harus dikerjakan
2. Baca `design.md` - tahu styling apa yang harus dipakai
3. Baca `halaman-feasible-js.md` - tahu requirements halaman
4. Update `progress.md` status menjadi "IN PROGRESS" + nama Anda
5. Code HTML/CSS/JS sesuai requirements
6. Test di browser (desktop + mobile)
7. Update `progress.md` status menjadi "DONE"
8. Selesai! Lanjut ke halaman berikutnya

**Questions?** Lihat progress.md atau halaman-feasible-js.md, jawabannya sudah ada di sana!

**Let's build this! 🚀**
