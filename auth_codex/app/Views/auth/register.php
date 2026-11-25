<?php
use App\Core\Csrf;
use App\Core\View;
$title = 'Buat akun · Akses';
require __DIR__ . '/../layouts/head.php';
?>
<body class="min-h-screen bg-[#f5f5f5] text-[#0a0a0a] antialiased">
<main class="mx-auto flex min-h-screen max-w-[1280px] items-center justify-center p-5 sm:p-8"><section class="auth-card w-full max-w-[440px] bg-white p-5 sm:p-8">
    <a href="<?= View::url('/') ?>" class="mb-8 inline-flex items-center gap-2 text-sm font-medium tracking-tight"><span class="grid h-8 w-8 place-items-center rounded-[10px] bg-[#0a0a0a] text-sm font-semibold text-white">A</span>Akses</a>
    <div class="mb-7"><p class="mb-3 text-xs font-medium uppercase tracking-[0.05em] text-[#737373]">Mulai dari sini</p><h1 class="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Buat akun Anda</h1><p class="mt-3 text-sm leading-6 text-[#737373]">Satu langkah kecil untuk mengakses ruang kerja Anda.</p></div>
    <?php if ($error): ?><div class="notice notice-error" role="alert"><?= View::e($error) ?></div><?php endif; ?>
    <form action="<?= View::url('/register') ?>" method="post" class="space-y-4" novalidate>
        <input type="hidden" name="csrf_token" value="<?= View::e(Csrf::token()) ?>">
        <div><label for="name" class="form-label">Nama lengkap</label><input class="form-input" type="text" id="name" name="name" autocomplete="name" placeholder="Nama Anda" minlength="2" maxlength="100" required></div>
        <div><label for="email" class="form-label">Email</label><input class="form-input" type="email" id="email" name="email" autocomplete="email" placeholder="nama@contoh.com" required></div>
        <div><label for="password" class="form-label">Password</label><div class="relative"><input class="form-input pr-12" type="password" id="password" name="password" autocomplete="new-password" placeholder="Minimal 8 karakter" minlength="8" required><button type="button" class="password-toggle" data-password-toggle="password" aria-label="Tampilkan password">Tampil</button></div></div>
        <div><label for="password_confirm" class="form-label">Konfirmasi password</label><input class="form-input" type="password" id="password_confirm" name="password_confirm" autocomplete="new-password" placeholder="Ulangi password" minlength="8" required></div>
        <button class="primary-button w-full" type="submit">Buat akun <span aria-hidden="true">→</span></button>
    </form>
    <p class="mt-6 text-center text-sm text-[#737373]">Sudah memiliki akun? <a class="text-link" href="<?= View::url('/login') ?>">Masuk</a></p>
</section></main>
<?php require __DIR__ . '/../layouts/foot.php'; ?>
