<?php

namespace App\Domain\Entities;

use Illuminate\Support\Arr;

class UsuarioEntity
{
    private $nome;
    private $email;
    private $permissao;

    public static function create(): self
    {
        return new UsuarioEntity();
    }

    public function setNome(?string $value): self
    {
        $this->nome = $value;
        return $this;
    }

    public function getNome(): ?string
    {
        return $this->nome;
    }

    public function setEmail(?string $value): self
    {
        $this->email = $value;
        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setPermissao(?string $value): self
    {
        $this->permissao = $value;
        return $this;
    }

    public function getPermissao(): ?string
    {
        return $this->permissao;
    }

    public static function fromArray(array $data): self
    {
        return UsuarioEntity::create()
            ->setNome(Arr::get($data, 'nome'))
            ->setEmail(Arr::get($data, 'email'))
            ->setPermissao(Arr::get($data, 'permissao'));
    }
}
