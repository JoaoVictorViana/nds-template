<?php

namespace App\Domain\Entities;

class AuthenticationEntity
{
    private $identifier;

    private function __construct(string $identifier, string $password)
    {
        $this->identifier = $identifier;
        $this->password = $password;
    }

    public static function create(string $identifier, string $password): self
    {
        return new AuthenticationEntity($identifier, $password);
    }

    public function getIdentificacao(): string
    {
        return $this->identifier;
    }

    public function getSenha(): string
    {
        return $this->password;
    }

    public static function fromArray(array $data): self
    {
        return AuthenticationEntity::create(
            $data['identificacao'],
            $data['senha']
        );
    }
}
