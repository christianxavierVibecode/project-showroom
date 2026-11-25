<?php
declare(strict_types=1);

namespace App\Core;

use App\Controllers\AuthController;
use App\Controllers\DashboardController;

final class Application
{
    public function run(): void
    {
        $router = new Router();
        $auth = new AuthController();
        $dashboard = new DashboardController();

        $router->get('/', fn () => Response::redirect(Auth::check() ? '/dashboard' : '/login'));
        $router->get('/login', [$auth, 'showLogin']);
        $router->post('/login', [$auth, 'login']);
        $router->get('/register', [$auth, 'showRegister']);
        $router->post('/register', [$auth, 'register']);
        $router->post('/logout', [$auth, 'logout']);
        $router->get('/dashboard', [$dashboard, 'index']);

        $router->dispatch(Request::capture());
    }
}
