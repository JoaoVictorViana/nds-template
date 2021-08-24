<?php

namespace App\Domain\Services;

use App\Domain\Entities\AccessTokenEntity;
use App\Domain\Entities\AuthenticationEntity;
use App\Domain\Entities\Exceptions\AuthenticationException;
use App\Domain\Interfaces\Apis\BancoCentral;
use App\Domain\Interfaces\Cryptography\Cryptography;
use App\Domain\Interfaces\Services\Authentication;

class AuthenticationService implements Authentication
{
    public function __construct(
        BancoCentral $bancoCentral,
        Cryptography $cryptography,
    ) {
        $this->bancoCentral = $bancoCentral;
        $this->cryptography = $cryptography;
    }

    public function auth(AuthenticationEntity $authenticationEntity): AccessTokenEntity
    {
        $account = $this->bancoCentral->loadUsuarioByIdentifier($authenticationEntity->getIdentificacao());

        if ($account && $account->getPermissao()) {
            if ($this->bancoCentral->checkUsuarioByCredentials($authenticationEntity->getIdentificacao(), $authenticationEntity->getSenha())) {
                $accessToken = $this->cryptography->encrypt($account);

                return $accessToken;
            }
        }

        throw new AuthenticationException();
    }
}
