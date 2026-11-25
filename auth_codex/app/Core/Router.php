<?php
declare(strict_types=1);

namespace App\Core;

final class Router
{
    private array $routes = [];

    public function get(string $path, callable|array $handler): void { $this->add('GET', $path, $handler); }
    public function post(string $path, callable|array $handler): void { $this->add('POST', $path, $handler); }
    private function add(string $method, string $path, callable|array $handler): void { $this->routes[$method][$path] = $handler; }

    public function dispatch(Request $request): void
    {
        $handler = $this->routes[$request->method][$request->path] ?? null;
        if ($handler === null) {
            Response::abort(isset($this->routes['GET'][$request->path]) || isset($this->routes['POST'][$request->path]) ? 405 : 404, 'Halaman yang Anda cari tidak tersedia.');
        }
        call_user_func($handler, $request);
    }
}
