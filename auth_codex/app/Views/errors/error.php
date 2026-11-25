<?php
use App\Core\View;
$title = $status . ' · Akses';
require __DIR__ . '/../layouts/head.php';
?>
<body class="min-h-screen bg-[#f5f5f5] text-[#0a0a0a] antialiased">
<main class="mx-auto flex min-h-screen max-w-[1280px] items-center justify-center p-5 sm:p-8">
    <section class="auth-card w-full max-w-lg overflow-hidden bg-white">
        <div class="border-b border-[#e5e5e5] bg-[#fafafa] px-6 py-5 sm:px-8">
            <a href="<?= View::url('/') ?>" class="inline-flex items-center gap-2 text-sm font-medium tracking-tight"><span class="grid h-8 w-8 place-items-center rounded-[10px] bg-[#0a0a0a] text-sm font-semibold text-white">A</span>Akses</a>
        </div>
        <div class="px-6 py-10 sm:px-10 sm:py-12">
            <?php if ($status === 404): ?>
                <p class="text-xs font-medium uppercase tracking-[0.05em] text-[#737373]">Halaman tidak ditemukan</p>
                <p class="mt-3 text-7xl font-semibold leading-none tracking-[-0.05em] sm:text-8xl">404</p>
                <h1 class="mt-5 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">Tautan ini tidak tersedia.</h1>
                <p class="mt-4 max-w-md text-sm leading-6 text-[#737373]">Alamat mungkin salah ketik, telah dipindahkan, atau sudah tidak tersedia lagi.</p>
                <div class="mt-8 flex flex-wrap gap-3"><a class="primary-button" href="<?= View::url('/') ?>">Kembali ke beranda <span aria-hidden="true">→</span></a><a class="secondary-button" href="<?= View::url('/login') ?>">Masuk</a></div>
            <?php else: ?>
                <p class="text-xs font-medium uppercase tracking-[0.05em] text-[#737373]">Error <?= View::e((string) $status) ?></p>
                <h1 class="mt-3 text-3xl font-semibold tracking-[-0.05em]">Terjadi kendala</h1>
                <p class="mt-4 text-sm leading-6 text-[#737373] "><?= View::e($message) ?></p>
                <a class="primary-button mt-7" href="<?= View::url('/') ?>">Kembali ke beranda</a>
            <?php endif; ?>
        </div>
    </section>
</main>
<?php require __DIR__ . '/../layouts/foot.php'; ?>
