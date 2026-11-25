<?php
use App\Core\Csrf;
use App\Core\View;
$title = 'Dashboard · Akses';
require __DIR__ . '/../layouts/head.php';
?>
<body class="min-h-screen bg-[#f5f5f5] text-[#0a0a0a] antialiased"><main class="mx-auto max-w-[1280px] p-5 sm:p-8">
<nav class="mb-12 flex items-center justify-between"><a href="<?= View::url('/dashboard') ?>" class="inline-flex items-center gap-2 text-sm font-medium"><span class="grid h-8 w-8 place-items-center rounded-[10px] bg-[#0a0a0a] text-sm font-semibold text-white">A</span>Akses</a><form action="<?= View::url('/logout') ?>" method="post"><input type="hidden" name="csrf_token" value="<?= View::e(Csrf::token()) ?>"><button class="secondary-button" type="submit">Keluar</button></form></nav>
<section class="auth-card max-w-2xl bg-white p-6 sm:p-10"><p class="mb-3 text-xs font-medium uppercase tracking-[0.05em] text-[#737373]">Dashboard</p><h1 class="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Halo, <?= View::e($name) ?>.</h1><p class="mt-4 max-w-lg text-sm leading-6 text-[#737373]">Anda telah berhasil masuk. Halaman ini dilindungi oleh sesi autentikasi PHP.</p><div class="mt-8 rounded-[18px] bg-[#f5f5f5] p-4 text-sm"><p class="text-[#737373]">Status akun</p><p class="mt-1 font-medium">Terverifikasi dan aktif</p></div></section>
</main><?php require __DIR__ . '/../layouts/foot.php'; ?>
