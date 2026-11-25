# Design System - SMK PPDB Landing Page

**Dokumentasi Design System untuk Pengembangan Halaman Lanjutan**

---

## 1. Overview Teknologi

- **Framework CSS**: Tailwind CSS v3 (CDN)
- **Plugins**: Forms & Container Queries
- **Font**: Google Fonts
  - Headlines: `Plus Jakarta Sans` (weights: 400, 500, 700, 800)
  - Body Text: `Inter` (weights: 400, 500, 600)
- **Icons**: Material Symbols Outlined (Google)
- **Dark Mode**: Didukung dengan class `dark:`

---

## 2. Palet Warna

### Primary Colors
```
Primary:                  #003f87 (Biru Gelap)
On Primary:              #ffffff (Putih - untuk text/icon di atas primary)
Primary Container:       #0056b3 (Biru Medium)
On Primary Container:    #bbd0ff (Biru Muda - untuk text/icon di atas container)
Primary Fixed:           #d7e2ff (Biru Sangat Muda)
Primary Fixed Dim:       #acc7ff (Biru Muda Sedang)
On Primary Fixed:        #001a40 (Biru Sangat Gelap)
On Primary Fixed Variant: #004491 (Biru Gelap)
Inverse Primary:         #acc7ff (Untuk mode dark)
```

### Secondary Colors
```
Secondary:              #705d00 (Kuning/Cokelat Gelap)
On Secondary:           #ffffff (Putih)
Secondary Container:    #fcd400 (Kuning Cerah)
On Secondary Container: #6e5c00 (Kuning Gelap)
Secondary Fixed:        #ffe16d (Kuning Medium)
Secondary Fixed Dim:    #e9c400 (Kuning Medium Gelap)
On Secondary Fixed:     #221b00 (Cokelat Sangat Gelap)
On Secondary Fixed Variant: #544600 (Cokelat Gelap)
```

### Tertiary Colors
```
Tertiary:              #064083 (Biru Tua)
On Tertiary:           #ffffff (Putih)
Tertiary Container:    #2b589c (Biru Medium)
On Tertiary Container: #bad0ff (Biru Muda)
Tertiary Fixed:        #d7e2ff (Biru Sangat Muda)
Tertiary Fixed Dim:    #abc7ff (Biru Muda)
On Tertiary Fixed:     #001b3f (Biru Sangat Gelap)
On Tertiary Fixed Variant: #124589 (Biru Gelap)
```

### Neutral Colors
```
Surface:               #f8f9fa (Abu-abu Sangat Muda)
On Surface:            #191c1d (Hitam Gelap)
Surface Bright:        #f8f9fa
Surface Container:     #edeeef (Abu-abu Muda)
Surface Container Low: #f3f4f5 (Abu-abu Sangat Muda)
Surface Container Lowest: #ffffff (Putih)
Surface Container High: #e7e8e9 (Abu-abu)
Surface Container Highest: #e1e3e4 (Abu-abu)
On Surface Variant:    #424752 (Abu-abu Gelap)
Surface Variant:       #e1e3e4 (Abu-abu)
Surface Dim:           #d9dadb (Abu-abu Medium)
```

### Semantic Colors
```
Error:                 #ba1a1a (Merah)
On Error:              #ffffff (Putih)
Error Container:       #ffdad6 (Merah Muda)
On Error Container:    #93000a (Merah Sangat Gelap)
```

### Special
```
Outline:              #727784 (Abu-abu)
Outline Variant:      #c2c6d4 (Abu-abu Muda)
Background:           #f8f9fa (Abu-abu Sangat Muda)
On Background:        #191c1d (Hitam Gelap)
Inverse Surface:      #2e3132 (Abu-abu Gelap - dark mode)
Inverse On Surface:   #f0f1f2 (Putih - dark mode)
Surface Tint:         #115cb9 (Biru)
```

---

## 3. Tipografi

### Font Families
- **Headline**: Plus Jakarta Sans (Bold, 700-800 weight)
- **Body**: Inter (Regular 400, Medium 500)
- **Label**: Inter (Medium 500, SemiBold 600)

### Typography Scale

| Nama | Size | Line Height | Weight | Font Family | Gunakan Untuk |
|------|------|-------------|--------|-------------|---|
| `headline-lg` (Desktop) | 32px | 40px | 700 | Plus Jakarta Sans | Judul halaman besar |
| `headline-lg-mobile` | 28px | 36px | 700 | Plus Jakarta Sans | Judul di mobile |
| `headline-md` | 24px | 32px | 700 | Plus Jakarta Sans | Judul section |
| `headline-sm` | 20px | 28px | 700 | Plus Jakarta Sans | Subtitle |
| `body-lg` | 18px | 28px | 400 | Inter | Body text besar |
| `body-md` | 16px | 24px | 400 | Inter | Body text standar |
| `label-md` | 14px | 20px | 600 | Inter | Label, button text |
| `label-sm` | 12px | 16px | 500 | Inter | Label kecil, tanggal |
| `display-lg` | 48px | 56px | 800 | Plus Jakarta Sans | Hero text |

### Css Classes
```html
<!-- Gunakan kombinasi: -->
<h1 class="font-headline-lg text-headline-lg text-primary">Headline</h1>
<p class="font-body-md text-body-md text-on-surface">Body text</p>
<span class="font-label-md text-label-md">Label</span>
```

---

## 4. Spacing System

| Nama | Nilai | Gunakan |
|------|-------|---------|
| `base` | 8px | Spacing minimal |
| `margin-mobile` | 16px | Padding container di mobile |
| `margin-desktop` | 48px | Padding container di desktop |
| `gutter` | 24px | Gap antar items dalam grid |
| `container-max` | 1280px | Max width container |

### Container
```html
<!-- Standar container dengan responsive padding -->
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
  <!-- Content -->
</div>
```

---

## 5. Border Radius

| Nama | Nilai | Gunakan |
|------|-------|---------|
| `DEFAULT` | 0.125rem (2px) | Input, small elements |
| `lg` | 0.25rem (4px) | Moderat |
| `xl` | 0.5rem (8px) | Cards, buttons |
| `full` | 0.75rem (12px) | Icon containers, pills |

---

## 6. Komponen Utama

### 6.1 Card / Box
```html
<div class="bg-surface p-8 rounded-xl border border-outline-variant">
  <!-- Content -->
</div>

<!-- Dengan hover effect -->
<div class="bg-surface p-8 rounded-xl border border-outline-variant soft-lift transition-transform hover:-translate-y-1">
  <!-- Content -->
</div>
```

**Properties**:
- Background: `bg-surface`
- Padding: `p-8` (32px)
- Border: `border border-outline-variant`
- Border Radius: `rounded-xl` (8px)
- Hover: `soft-lift` + `transition-transform hover:-translate-y-1`

---

### 6.2 Button - Primary/Secondary

#### Button Primary (CTA)
```html
<button class="bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold py-3 rounded-full hover:bg-secondary-fixed transition-colors shadow-sm focus:ring-2 focus:ring-primary">
  Tombol Text
</button>
```

**Properties**:
- Background: `bg-secondary-container` (Kuning)
- Text Color: `text-on-secondary-fixed` (Cokelat Gelap)
- Text Style: `font-label-md text-label-md font-bold`
- Padding: `py-3` (12px vertikal)
- Border Radius: `rounded-full` (12px)
- Hover: `hover:bg-secondary-fixed`
- Shadow: `shadow-sm`
- Focus: `focus:ring-2 focus:ring-primary`

#### Button Link/Secondary
```html
<a class="text-primary font-label-md hover:underline inline-flex items-center gap-1">
  Link Text
  <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
```

---

### 6.3 Form Input

```html
<!-- Text Input -->
<input class="w-full px-4 py-2 rounded border border-outline-variant bg-surface focus:ring-2 focus:ring-primary outline-none" 
       placeholder="Placeholder" type="text"/>

<!-- Textarea -->
<textarea class="w-full px-4 py-2 rounded border border-outline-variant bg-surface focus:ring-2 focus:ring-primary outline-none h-32" 
          placeholder="Placeholder"></textarea>

<!-- Label -->
<label class="block text-label-sm text-on-surface-variant mb-1">Label Text</label>
```

**Properties**:
- Width: `w-full`
- Padding: `px-4 py-2`
- Border: `border border-outline-variant`
- Background: `bg-surface`
- Border Radius: `rounded`
- Focus: `focus:ring-2 focus:ring-primary`
- Outline: `outline-none`

---

### 6.4 Icon Container

```html
<div class="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center">
  <span class="material-symbols-outlined" style="font-size: 32px; font-variation-settings: 'FILL' 1;">icon_name</span>
</div>

<!-- Atau ukuran medium -->
<div class="w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center">
  <span class="material-symbols-outlined">icon_name</span>
</div>
```

**Properties**:
- Size: `w-16 h-16` (64px) atau `w-12 h-12` (48px)
- Background: `bg-primary-container`
- Text Color: `text-on-primary-container`
- Border Radius: `rounded-full`
- Layout: `flex items-center justify-center`

---

### 6.5 Hero Section

```html
<section class="bg-surface-container-low py-16 md:py-24">
  <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
    <h1 class="font-display-lg text-display-lg text-primary mb-4">
      Hero Title
    </h1>
    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
      Hero description
    </p>
    <button class="bg-secondary-container text-on-secondary-fixed font-label-md mt-8">
      CTA Button
    </button>
  </div>
</section>
```

---

## 7. Layout Patterns

### 7.1 Grid 2 Kolom (Responsive)
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### 7.2 Grid 3 Kolom (Responsive)
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### 7.3 Section dengan Border
```html
<section class="py-16 md:py-24 bg-surface border-t border-b border-surface-dim">
  <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
    <!-- Content -->
  </div>
</section>
```

---

## 8. Warna Text

| Class | Untuk |
|-------|-------|
| `text-primary` | Heading, emphasis text |
| `text-on-surface` | Body text utama |
| `text-on-surface-variant` | Secondary text, subtitle |
| `text-error` | Error state |
| `text-secondary-container` | Highlight text |

---

## 9. Warna Background Section

| Class | Gunakan Untuk |
|-------|---|
| `bg-surface` | Section normal |
| `bg-surface-container-low` | Section secondary |
| `bg-surface-container-highest` | Section tertiary |
| `bg-primary-container` | Highlight background |
| `bg-secondary-container` | Call-to-action area |

---

## 10. Effects & Transitions

### Hover Effects
```html
<!-- Card lift effect -->
<div class="soft-lift transition-transform hover:-translate-y-1">
  Card Content
</div>

<!-- Color transition -->
<a class="transition-colors hover:text-primary hover:underline">
  Link
</a>

<!-- Icon button hover -->
<button class="transition-colors hover:bg-primary hover:text-on-primary">
  <span class="material-symbols-outlined">icon</span>
</button>
```

### Transitions
```css
transition-transform    /* Untuk animasi gerakan */
transition-colors       /* Untuk animasi warna */
transition-all          /* Untuk semua property */
```

---

## 11. Responsive Breakpoints

- **Mobile**: 0px - 767px (tidak ada prefix)
- **Desktop**: 768px+ (prefix `md:`)

```html
<!-- Contoh responsive -->
<h2 class="text-headline-lg-mobile md:text-headline-lg">
  Responsive Title
</h2>

<div class="px-margin-mobile md:px-margin-desktop">
  Content
</div>

<div class="py-16 md:py-24">
  Section
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
  Items
</div>
```

---

## 12. Dark Mode Support

Dark mode menggunakan class `dark:` dengan selector `class="dark"` di parent HTML/body.

```html
<!-- Warna untuk dark mode -->
<div class="bg-surface dark:bg-inverse-surface">
  Content
</div>

<p class="text-on-surface dark:text-inverse-on-surface">
  Text
</p>

<a class="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-secondary-fixed">
  Link
</a>
```

---

## 13. Struktur Section Standar

```html
<!-- Standard Section Structure -->
<section class="py-16 md:py-24 bg-surface">
  <!-- Container dengan responsive padding -->
  <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
    
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
        Section Title
      </h2>
      <p class="font-body-md text-body-md text-on-surface-variant mt-4 max-w-2xl mx-auto">
        Section description
      </p>
    </div>

    <!-- Content Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      <div class="bg-surface p-8 rounded-xl border border-outline-variant">
        <!-- Card Content -->
      </div>
      <!-- More cards -->
    </div>

  </div>
</section>
```

---

## 14. Footer Structure

```html
<footer class="bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant">
  <div class="max-w-container-max mx-auto px-margin-desktop py-16 grid grid-cols-1 md:grid-cols-4 gap-gutter">
    
    <!-- Column 1: Brand (span 2 columns on desktop) -->
    <div class="col-span-1 md:col-span-2">
      <div class="font-headline-md text-headline-md font-bold text-primary mb-4">
        Brand Name
      </div>
      <p class="font-body-md text-body-md text-on-surface-variant mb-6 max-w-sm">
        Description
      </p>
      <div class="font-label-sm text-label-sm text-on-surface-variant">
        © Year Company. All rights reserved.
      </div>
    </div>

    <!-- Column 2: Links -->
    <div>
      <h4 class="font-headline-sm text-headline-sm text-primary mb-4">
        Section Title
      </h4>
      <ul class="space-y-3">
        <li><a class="text-on-surface-variant hover:text-primary hover:underline font-body-md text-body-md">
          Link
        </a></li>
      </ul>
    </div>

    <!-- Column 3: Links -->
    <div>
      <h4 class="font-headline-sm text-headline-sm text-primary mb-4">
        Section Title
      </h4>
      <ul class="space-y-3">
        <li><a class="text-on-surface-variant hover:text-primary hover:underline font-body-md text-body-md">
          Link
        </a></li>
      </ul>
    </div>

  </div>
</footer>
```

---

## 15. Checklist untuk Halaman Baru

Gunakan checklist ini saat membuat halaman baru:

- [ ] Menggunakan `container-max` wrapper dengan responsive padding
- [ ] Typography mengikuti scale yang sudah ditentukan
- [ ] Warna text menggunakan semantic colors
- [ ] Button menggunakan style yang konsisten
- [ ] Card/Box memiliki border dan shadow
- [ ] Hover effects diterapkan di link dan button
- [ ] Grid layout responsif (1 kolom mobile, multiple desktop)
- [ ] Section spacing konsisten (py-16 md:py-24)
- [ ] Form input memiliki proper styling
- [ ] Icons menggunakan Material Symbols Outlined
- [ ] Dark mode support dengan prefix `dark:`
- [ ] Accessibility: focus states, semantic HTML

---

## 16. Quick Copy-Paste Templates

### Template Button
```html
<button class="bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold py-3 rounded-full hover:bg-secondary-fixed transition-colors shadow-sm focus:ring-2 focus:ring-primary">
  Tombol
</button>
```

### Template Card
```html
<div class="bg-surface p-8 rounded-xl border border-outline-variant soft-lift transition-transform hover:-translate-y-1">
  <h3 class="font-headline-md text-headline-md text-primary mb-3">Judul</h3>
  <p class="font-body-md text-body-md text-on-surface-variant">Deskripsi</p>
</div>
```

### Template Form Input
```html
<div>
  <label class="block text-label-sm text-on-surface-variant mb-1">Label</label>
  <input class="w-full px-4 py-2 rounded border border-outline-variant bg-surface focus:ring-2 focus:ring-primary outline-none" placeholder="Placeholder" type="text"/>
</div>
```

### Template Section
```html
<section class="py-16 md:py-24 bg-surface">
  <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
    <div class="text-center mb-12">
      <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Judul</h2>
      <p class="font-body-md text-body-md text-on-surface-variant mt-4">Deskripsi</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      <!-- Cards -->
    </div>
  </div>
</section>
```

---

**Document Version**: 1.0  
**Last Updated**: 2024  
**Status**: Active Design System
