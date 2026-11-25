<?php
declare(strict_types=1);

// Router untuk `php -S localhost:8000 router.php`; Apache menggunakan .htaccess.
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?: '/';
$file = __DIR__ . $path;
if ($path !== '/' && is_file($file)) {
    return false;
}

require __DIR__ . '/index.php';
