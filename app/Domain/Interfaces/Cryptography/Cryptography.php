<?php

namespace App\Domain\Interfaces\Cryptography;

use Illuminate\Foundation\Auth\User as Authenticatable;

interface Cryptography
{
    public function encrypt(Authenticatable $user): string;

    public function decrypt(string $ciphertext): string;
}
