<?php
use App\Core\Csrf;
use App\Core\View;
$title = 'Masuk · Akses';
require __DIR__ . '/../layouts/head.php';
?>
<body class="min-h-screen bg-[#f5f5f5] text-[#0a0a0a] antialiased">
<main class="mx-auto flex min-h-screen max-w-[1280px] items-center justify-center p-5 sm:p-8">
<section class="auth-card w-full max-w-[440px] bg-white p-5 sm:p-8">
    <a href="<?= View::url('/') ?>" class="mb-10 inline-flex items-center gap-2 text-sm font-medium tracking-tight"><span class="grid h-8 w-8 place-items-center rounded-[10px] bg-[#0a0a0a] text-sm font-semibold text-white">A</span>Akses</a>
    <div class="mb-8"><p class="mb-3 text-xs font-medium uppercase tracking-[0.05em] text-[#737373]">Selamat datang kembali</p><h1 class="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Masuk ke akun Anda</h1><p class="mt-3 text-sm leading-6 text-[#737373]">Masukkan detail akun Anda untuk melanjutkan.</p></div>
    <?php if ($error): ?><div class="notice notice-error" role="alert"><?= View::e($error) ?></div><?php endif; ?>
    <?php if ($success): ?><div class="notice notice-success" role="status"><?= View::e($success) ?></div><?php endif; ?>
    <form action="<?= View::url('/login') ?>" method="post" class="space-y-5" novalidate>
        <input type="hidden" name="csrf_token" value="<?= View::e(Csrf::token()) ?>">
        <div><label for="email" class="form-label">Email</label><input class="form-input" type="email" id="email" name="email" autocomplete="email" placeholder="nama@contoh.com" required></div>
        <div><label for="password" class="form-label">Password</label><div class="relative"><input class="form-input pr-12" type="password" id="password" name="password" autocomplete="current-password" placeholder="Masukkan password" required><button type="button" class="password-toggle" data-password-toggle="password" aria-label="Tampilkan password">Tampil</button></div></div>
        <button class="primary-button w-full" type="submit">Masuk <span aria-hidden="true">→</span></button>
    </form>
    <p class="mt-7 text-center text-sm text-[#737373]">Belum memiliki akun? <a class="text-link" href="<?= View::url('/register') ?>">Buat akun</a></p>
</section></main>
<?php require __DIR__ . '/../layouts/foot.php'; ?>
