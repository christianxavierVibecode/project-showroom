<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Core\Auth;
use App\Core\Csrf;
use App\Core\Flash;
use App\Core\Request;
use App\Core\Response;
use App\Core\View;
use App\Models\User;

final class AuthController
{
    public function showLogin(): void
    {
        if (Auth::check()) Response::redirect('/dashboard');
        View::render('auth/login', ['error' => Flash::get('error'), 'success' => Flash::get('success')]);
    }

    public function showRegister(): void
    {
        if (Auth::check()) Response::redirect('/dashboard');
        View::render('auth/register', ['error' => Flash::get('error')]);
    }

    public function register(Request $request): never
    {
        $this->verifyCsrf($request);
        $name = $request->input('name'); $email = strtolower($request->input('email'));
        $password = (string) ($_POST['password'] ?? ''); $confirmation = (string) ($_POST['password_confirm'] ?? '');
        if (mb_strlen($name) < 2 || mb_strlen($name) > 100) $this->fail('Nama harus terdiri dari 2 hingga 100 karakter.', '/register');
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $this->fail('Masukkan alamat email yang valid.', '/register');
        if (strlen($password) < 8) $this->fail('Password harus memiliki minimal 8 karakter.', '/register');
        if (!hash_equals($password, $confirmation)) $this->fail('Konfirmasi password belum sama.', '/register');
        $users = new User();
        if ($users->findByEmail($email)) $this->fail('Email tersebut sudah terdaftar. Silakan masuk.', '/login');
        Auth::login($users->create($name, $email, $password));
        Response::redirect('/dashboard');
    }

    public function login(Request $request): never
    {
        $this->verifyCsrf($request);
        $email = strtolower($request->input('email')); $password = (string) ($_POST['password'] ?? '');
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $this->fail('Masukkan alamat email yang valid.', '/login');
        $user = (new User())->findByEmail($email);
        if (!$user || !password_verify($password, $user['password'])) $this->fail('Email atau password tidak tepat.', '/login');
        if (password_needs_rehash($user['password'], PASSWORD_DEFAULT)) (new User())->updatePassword((int) $user['id'], $password);
        Auth::login($user);
        Response::redirect('/dashboard');
    }

    public function logout(Request $request): never
    {
        $this->verifyCsrf($request);
        Auth::logout();
        Response::redirect('/login');
    }

    private function verifyCsrf(Request $request): void { if (!Csrf::validate($_POST['csrf_token'] ?? null)) Response::abort(419, 'Permintaan tidak valid. Silakan muat ulang halaman dan coba lagi.'); }
    private function fail(string $message, string $path): never { Flash::set('error', $message); Response::redirect($path); }
}
