<?php

namespace App\Data\Providers;

use App\Domain\Interfaces\Apis\BancoCentral;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\UserProvider;

final class UsuarioBancoCentralProvider implements UserProvider
{
    private BancoCentral $bancoCentral;

    public function __construct(BancoCentral $bancoCentral)
    {
        $this->bancoCentral = $bancoCentral;
    }

    public function retrieveById($identifier)
    {
        return $this->bancoCentral->loadUsuario($identifier);
    }

    public function retrieveByToken($identifier, $token)
    {
        return null;
    }

    public function updateRememberToken(Authenticatable $user, $token)
    {
        return null;
    }

    public function retrieveByCredentials(array $credentials)
    {
        return $this->bancoCentral->loadUsuarioByCredentials($credentials['identificacao'], $credentials['password']);
    }

    public function validateCredentials(Authenticatable $user, array $credentials)
    {
        return $this->bancoCentral->checkUsuarioByCredentials($credentials['identificacao'], $credentials['password']);
    }
}
