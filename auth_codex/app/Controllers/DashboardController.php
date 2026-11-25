<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Core\Auth;
use App\Core\Flash;
use App\Core\Response;
use App\Core\View;

final class DashboardController
{
    public function index(): void
    {
        if (!Auth::check()) { Flash::set('error', 'Silakan masuk untuk melanjutkan.'); Response::redirect('/login'); }
        View::render('dashboard/index', ['name' => Auth::userName()]);
    }
}
