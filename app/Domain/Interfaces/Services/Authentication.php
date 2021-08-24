<?php

namespace App\Domain\Interfaces\Services;

use App\Domain\Entities\AccessTokenEntity;
use App\Domain\Entities\AuthenticationEntity;

interface Authentication
{
    public function auth(AuthenticationEntity $authenticationEntity): AccessTokenEntity;

    public function revokeToken(string $token): void;
}
