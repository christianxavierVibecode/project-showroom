# 🎯 DEVELOPMENT BRIEF: Landing Page Soto Yogyakarta Cak Sumalik

**Status**: Siap dikerjakan  
**Timeline**: 1-2 minggu (Target: 8-11 Juli 2026)  
**Deadline Soft**: 8 Juli 2026  
**Target**: Static landing page fully responsive  

---

## 📌 QUICK OVERVIEW

Kami perlu membuat **landing page profesional** untuk Warung Soto Yogyakarta "Cak Sumalik" — bisnis delivery/takeaway lokal yang ingin memperluas jangkauan ke pelanggan digital (lokal + turis).

**Deliverable utama**: One-page landing site dengan design modern (dark theme + orange accent), fully responsive, dan WhatsApp integration.

---

## 🏗️ TECH STACK (NON-NEGOTIABLE)

- **Frontend**: HTML5, CSS3, JavaScript (vanilla/minimal framework)
- **CSS Framework**: Tailwind CSS via CDN
- **Hosting**: Static hosting (Vercel, Netlify, atau GitHub Pages)
- **Version Control**: GitHub
- **Design Reference**: File `ReferensiDesign.png` (dark theme, orange accent, modern typography)

**OPT Stack** (tidak wajib tapi direkomendasikan):
- Minimal JS library (AOS untuk scroll animations, jika perlu)
- Image optimization tools
- SEO meta tags (Helmet/manual)

---

## 📋 REQUIREMENTS DETAIL

### Halaman Content & Section

1. **Navigation Bar** (sticky/fixed)
   - Logo Cak Sumalik
   - Menu links (Home, About, Menu, Contact)
   - WhatsApp CTA button prominent
   - Dark theme, clean design
   - Mobile hamburger menu

2. **Hero Section**
   - Large headline: "Soto Yogyakarta Khas Lamongan Cak Sumalik" (atau copywriting yang disepakati)
   - Subheading: Deskripsi singkat bisnis
   - CTA buttons: "Lihat Menu" + "Order via WhatsApp"
   - Background image atau gradient (mengikuti dark theme reference)
   - Responsive: Full width di desktop, optimized di mobile

3. **About Section**
   - **Judul**: "Tentang Cak Sumalik"
   - **Konten**: Cerita siapa Cak Sumalik, asal soto Lamongan, keunikan produk
   - **Image Gallery**: 3-4 foto (warung/produk)
   - Layout: Text di sebelah kiri, image gallery di sebelah kanan (desktop); stacked mobile

4. **Menu/Product Section**
   - **Judul**: "Menu Soto Kami"
   - **Items** (3 produk):
     - Soto Ayam - Rp 25.000
     - Soto Daging - Rp 35.000
     - Soto Iga - Rp 40.000
   - **Per item**: Foto produk, nama, deskripsi singkat, harga
   - **Layout**: Grid 3 kolom (desktop), single/2 kolom (mobile)
   - **Interaksi**: Hover effects, bisa include "Order Now" button per item (link ke WhatsApp)

5. **Contact Section**
   - **Informasi**:
     - Alamat: Jl. Diponegoro, Yogyakarta
     - Jam Operasional: Senin-Minggu 10:00-22:00 WIB
     - WhatsApp: 0812-XXXX-XXXX (placeholder)
     - Email: caksumalik@email.com (placeholder)
   - **Google Maps Embed**: Lokasi warung (optional tapi recommended)
   - **CTA**: Tombol "Order via WhatsApp" prominent

6. **Footer**
   - Social media links (Instagram, Facebook, dll — akan disesuaikan)
   - Quick links (Home, About, Menu, Contact)
   - Copyright
   - Contact info summary

### Design & Styling Requirements

✅ **Color Scheme** (dari referensi):
- Dark background: `#0F1B4C` (navy dark) atau similar
- Accent color: `#FBBF24` atau warm orange (untuk buttons, highlights)
- Text: White/Light gray untuk contrast di dark bg
- Secondary accent: Subtle gold/orange accents

✅ **Typography**:
- Font family: Inter, Poppins, atau Segoe UI (sans-serif modern)
- Headings: Bold, large size (h1: 48-56px, h2: 32-40px, h3: 24-28px)
- Body: 16-18px, line-height 1.6

✅ **Responsive Design**:
- Desktop: >= 1024px
- Tablet: 768px - 1023px
- Mobile: < 768px
- **MUST**: Full mobile responsiveness tested (hamburger menu, stacked layouts, optimized images)

✅ **Performance**:
- Lighthouse score > 80 (target 90+)
- Page load time < 3 detik
- Image optimization (lazy loading, responsive images)
- Minified CSS/JS

✅ **Accessibility**:
- Semantic HTML5 (`<nav>`, `<section>`, `<footer>`, dll)
- Alt text untuk semua images
- Contrast ratio WCAG AA compliant
- Keyboard navigation supported

---

## 🔗 TECHNICAL IMPLEMENTATION DETAILS

### WhatsApp Integration
```
WhatsApp button template:
- Link: https://wa.me/62812XXXXXXXX?text=Halo%20Cak%20Sumalik,%20saya%20ingin%20order%20soto
- Text pre-filled: "Halo Cak Sumalik, saya ingin order soto"
- Button style: Orange accent, prominent (sticky di mobile)
```

### SEO Optimization
```
Meta tags MINIMAL (untuk static site):
- Title: "Soto Yogyakarta Cak Sumalik - Soto Khas Lamongan Delivery Yogyakarta"
- Description: "Nikmati soto khas Lamongan Cak Sumalik. Soto Ayam, Daging, dan Iga. Delivery & takeaway di Yogyakarta. Order via WhatsApp."
- OG tags untuk social share
```

### Image Handling
- Minimal 4-6 images (hero, about gallery 3-4x, menu items 3x)
- Format: WebP + fallback JPG
- Sizes: Optimized untuk mobile/desktop
- Placeholder/lazy loading recommended

---

## 📝 DATA YANG TERSEDIA

**From PRD - sudah ada:**
- Lokasi: Yogyakarta, Jl. Diponegoro
- Jam operasional: Senin-Minggu 10:00-22:00 WIB
- WhatsApp: 0812-XXXX-XXXX (placeholder)
- Email: caksumalik@email.com (placeholder)
- Menu: 
  - Soto Ayam - Rp 25.000
  - Soto Daging - Rp 35.000
  - Soto Iga - Rp 40.000

**Catatan**: Placeholder WhatsApp/email bisa di-update nanti. Foto produk perlu dikumpulkan terpisah.

---

## ✅ DELIVERABLES & CHECKLIST

**Code Delivery:**
- [ ] GitHub repository (public/private — sesuai preferensi)
- [ ] README.md dengan setup instructions
- [ ] Clean, semantic HTML structure
- [ ] Modular CSS (organized Tailwind classes atau separate stylesheets)
- [ ] Vanilla JavaScript (atau minimal framework) untuk interactivity
- [ ] `.gitignore` configured
- [ ] Deployed link (live preview)

**Quality Assurance:**
- [ ] Tested di Chrome, Firefox, Safari, Edge (desktop)
- [ ] Mobile responsiveness tested (iPhone SE, iPhone 12+, Android)
- [ ] No console errors
- [ ] All links functional (WhatsApp, email, social links)
- [ ] Images load properly (no 404s)
- [ ] Lighthouse score > 80
- [ ] Page load time < 3 detik (tested di 4G)
- [ ] Accessibility check passed (Wave, axe, atau manual)

**Documentation:**
- [ ] Code comments untuk logic kompleks
- [ ] README dengan instruksi development & deployment
- [ ] Asset attribution (jika menggunakan images/icons dari external source)

---

## 📅 TIMELINE BREAKDOWN

| Phase | Durasi | Deliverable |
|---|---|---|
| **Setup & Planning** | 1 hari | Repository setup, design review, asset collection |
| **HTML & Layout** | 2-3 hari | Semantic HTML, basic layout, responsive grid |
| **Styling & Design** | 2-3 hari | Tailwind CSS, color scheme, typography, responsive |
| **JavaScript & Interactivity** | 1-2 hari | Mobile menu, scroll animations, WhatsApp integration |
| **Testing & Optimization** | 1-2 hari | Performance, accessibility, cross-browser testing |
| **Deployment & QA** | 0.5 hari | Push ke GitHub, deploy live, final checks |

**Total: ~1 minggu (7-10 hari kerja)**

---

## 🚀 GETTING STARTED

1. **Review PRD** → Baca dokumen `PRD_Landing_Page_Soto_Yogyakarta_Cak_Sumalik.docx` untuk context lengkap
2. **Review Design Reference** → Lihat `ReferensiDesign.png` untuk inspirasi visual
3. **Setup Repository** → Initialize GitHub repo dengan `.gitignore`, `README.md`
4. **Collect Assets** → Gather foto produk, logo (akan diberikan terpisah)
5. **Start Development** → Ikuti checklist di atas

---

## ⚠️ CONSTRAINTS & NOTES

### What's IN Scope:
✅ Landing page design & development  
✅ Responsive mobile design  
✅ WhatsApp integration  
✅ Basic SEO optimization  
✅ Performance optimization  

### What's OUT of Scope (v1):
❌ Backend system / database  
❌ E-commerce / payment gateway  
❌ Admin dashboard  
❌ Review/rating system  
❌ Email notifications  
❌ Multi-language support  

**Note**: Fitur di luar scope bisa ditambah di v2/v3 jika diperlukan.

---

## 🤝 COMMUNICATION & FEEDBACK

- **Questions?** → Ask early, clarifications always welcome
- **Updates?** → Progress updates 2-3x seminggu (daily standup ideal)
- **Blockers?** → Flag early if ada dependency atau missing info
- **Revisions?** → Design feedback/copy tweaks akan di-accommodate dalam scope

---

## 📎 ATTACHMENTS / REFERENCES

1. **PRD Document**: `PRD_Landing_Page_Soto_Yogyakarta_Cak_Sumalik.docx` ← Main reference
2. **Design Reference**: `ReferensiDesign.png` ← Visual inspiration
3. **This Brief**: `PROMPT_Development_SotoYogyakarta.md` ← Implementation guide

---

## 📞 CONTACT & DETAILS

- **Project Owner**: Xavier / Cak Sumalik
- **Client**: Warung Soto Yogyakarta Cak Sumalik
- **Location**: Yogyakarta, Jl. Diponegoro
- **Contact**: WA 0812-XXXX-XXXX (placeholder)

---

**Good luck! Excited to build this! 🎉**

Mari kita create something awesome untuk Cak Sumalik! 🚀
