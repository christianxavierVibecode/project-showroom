<?php
declare(strict_types=1);

namespace App\Core;

final class Request
{
    public string $method;
    public string $path;

    private function __construct(string $method, string $path)
    {
        $this->method = $method;
        $this->path = $path;
    }

    public static function capture(): self
    {
        $uriPath = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
        $base = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '')), '/');
        if ($base !== '' && $base !== '/' && str_starts_with($uriPath, $base)) {
            $uriPath = substr($uriPath, strlen($base)) ?: '/';
        }
        return new self(strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET'), '/' . trim($uriPath, '/'));
    }

    public function input(string $key): string
    {
        return trim((string) ($_POST[$key] ?? ''));
    }
}
