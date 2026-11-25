<?php
declare(strict_types=1);

namespace App\Models;

use App\Core\Database;

final class User
{
    public function findByEmail(string $email): ?array
    {
        $statement = Database::connection()->prepare('SELECT id, name, email, password FROM users WHERE email = :email LIMIT 1');
        $statement->execute(['email' => $email]);
        return $statement->fetch() ?: null;
    }

    public function create(string $name, string $email, string $password): array
    {
        $statement = Database::connection()->prepare('INSERT INTO users (name, email, password) VALUES (:name, :email, :password)');
        $statement->execute(['name' => $name, 'email' => $email, 'password' => password_hash($password, PASSWORD_DEFAULT)]);
        return ['id' => (int) Database::connection()->lastInsertId(), 'name' => $name];
    }

    public function updatePassword(int $id, string $password): void
    {
        Database::connection()->prepare('UPDATE users SET password = :password WHERE id = :id')->execute(['password' => password_hash($password, PASSWORD_DEFAULT), 'id' => $id]);
    }
}
