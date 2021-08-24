<?php

namespace App\Domain\Entities;

use DateTimeInterface;

class AccessTokenEntity
{
    private $token;

    private function __construct(string $token)
    {
        $this->token = $token;
    }

    public static function create(string $token): self
    {
        return new AccessTokenEntity($token);
    }

    public function getToken(): string
    {
        return $this->token;
    }

    public static function getAccessTokenExpirationAt(): DateTimeInterface
    {
        return now()->endOfDay();
    }

    public static function fromArray(array $data): self
    {
        return AccessTokenEntity::create($data['token']);
    }
}
