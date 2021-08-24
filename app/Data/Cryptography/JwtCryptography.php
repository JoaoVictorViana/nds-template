<?php

namespace App\Data\Cryptography;

use App\Domain\Entities\UsuarioEntity;
use App\Domain\Interfaces\Cryptography\Cryptography;

class JwtCryptography implements Cryptography
{
    public function encrypt(UsuarioEntity $user): string
    {
        $userModel = $user->toModel();
        return $userModel->createToken($user->getIdentificacao())->accessToken;
    }

    public function decrypt(string $ciphertext): string
    {
        $tokenParts = explode('.', $ciphertext);
        $tokenPayload = base64_decode($tokenParts[1]);
        $jwtPayload = json_decode($tokenPayload);

        return $jwtPayload->jti;
    }
}
