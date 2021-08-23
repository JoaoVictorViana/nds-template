<?php

namespace App\Data\Cryptography;

use App\Domain\Interfaces\Cryptography\Cryptography;
use Illuminate\Foundation\Auth\User as Authenticatable;

class JwtCryptography implements Cryptography
{
    public function encrypt(Authenticatable $user): string
    {
        return $user->createToken($user->identificacao)->accessToken;
    }

    public function decrypt(string $ciphertext): string
    {
        $tokenParts = explode('.', $ciphertext);
        $tokenPayload = base64_decode($tokenParts[1]);
        $jwtPayload = json_decode($tokenPayload);

        return $jwtPayload->jti;
    }
}
