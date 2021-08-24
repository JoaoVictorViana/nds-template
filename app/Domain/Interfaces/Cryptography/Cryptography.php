<?php

namespace App\Domain\Interfaces\Cryptography;

use App\Domain\Entities\UsuarioEntity;

interface Cryptography
{
    public function encrypt(UsuarioEntity $user): string;

    public function decrypt(string $ciphertext): string;
}
