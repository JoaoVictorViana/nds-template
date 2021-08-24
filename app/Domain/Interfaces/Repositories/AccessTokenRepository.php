<?php

namespace App\Domain\Interfaces\Repositories;

use Illuminate\Database\Eloquent\Model;

interface AccessTokenRepository
{
    public function loadById(string $id): Model;

    public function update(string $token, array $attributes): void;
}
