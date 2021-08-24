<?php

namespace App\Domain\Interfaces\Apis;

use App\Domain\Entities\UsuarioEntity;

interface BancoCentral
{
    public function loadUsuario(string $id): UsuarioEntity;

    public function loadUsuarioByIdentifier(string $identifier): UsuarioEntity;

    public function loadUsuarioByCredentials(string $identifier, string $password): UsuarioEntity;

    public function checkUsuarioByCredentials(string $identifier, string $password): bool;
}
