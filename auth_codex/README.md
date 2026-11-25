# Akses — Login & Register PHP Native MVC

Sistem autentikasi PHP native dengan framework MVC OOP ringan buatan sendiri. Tidak memakai Laravel atau dependensi eksternal. Tampilan mengikuti `DESIGN.md` dengan palet monokromatis dan komponen pill.

## Struktur MVC

```text
app/
├── Config/       # Konfigurasi database
├── Controllers/  # Handler rute dan alur autentikasi
├── Core/         # Router, request, response, view, session, CSRF, PDO
├── Models/       # Akses data user
└── Views/        # Template halaman
assets/           # CSS dan JavaScript publik
index.php         # Satu front controller
.htaccess         # Rewrite Apache untuk pretty URL
```

## Menjalankan aplikasi

1. Jalankan Apache dan MySQL melalui XAMPP.
2. Buat database `coba_auth_app_codex` dan tabel dengan mengimpor `database.sql` melalui phpMyAdmin atau jalankan:

   ```powershell
   C:\xampp\mysql\bin\mysql.exe -u root < database.sql
   ```

3. Sesuaikan kredensial MySQL di `app/Config/database.php` jika diperlukan.
4. Buka `http://localhost/codex/` jika folder ini berada di `htdocs`, atau jalankan server PHP:

   ```powershell
   php -S localhost:8000 router.php
   ```

   Kemudian buka `http://localhost:8000`.

## Pretty URL

Pada Apache/XAMPP, aktifkan modul `rewrite_module` dan `AllowOverride All`, kemudian URL berikut langsung tersedia:

- `/login`
- `/register`
- `/dashboard`

Jika aplikasi berada di `htdocs/codex`, akses contohnya menjadi `http://localhost/codex/login`. Untuk PHP built-in server, gunakan perintah pada langkah 4 agar `router.php` menangani pretty URL.

## Proteksi yang disertakan

- Password di-hash dengan `password_hash()` dan diverifikasi menggunakan `password_verify()`.
- Query memakai PDO prepared statements.
- Form POST dilindungi token CSRF.
- Session ID diperbarui saat register dan login.
- Halaman dashboard membutuhkan sesi login.
