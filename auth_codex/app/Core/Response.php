<?php
declare(strict_types=1);

namespace App\Core;

final class Response
{
    public static function redirect(string $path): never
    {
        $base = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '')), '/');
        header('Location: ' . ($base === '/' ? '' : $base) . $path);
        exit;
    }

    public static function abort(int $status, string $message): never
    {
        http_response_code($status);
        View::render('errors/error', ['status' => $status, 'message' => $message]);
        exit;
    }
}
