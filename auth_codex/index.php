<?php
declare(strict_types=1);

use App\Core\Application;

require __DIR__ . '/app/bootstrap.php';

(new Application())->run();
