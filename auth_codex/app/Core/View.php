<?php
declare(strict_types=1);

namespace App\Core;

final class View
{
    public static function render(string $view, array $data = []): void
    {
        extract($data, EXTR_SKIP);
        require __DIR__ . '/../Views/' . $view . '.php';
    }

    public static function e(string $value): string { return htmlspecialchars($value, ENT_QUOTES, 'UTF-8'); }
    public static function url(string $path = '/'): string
    {
        $base = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '')), '/');
        return ($base === '/' ? '' : $base) . '/' . ltrim($path, '/');
    }
}
