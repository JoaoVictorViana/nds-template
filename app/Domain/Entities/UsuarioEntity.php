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

    public static function fromApi(array $data): self
    {
        $result = $data['resultados'];
        $filteredPermissions = array_filter($data['permissoes'], fn ($permission) => $permission['nomeSistema'] === env('APP_NAME'));
        $systemPermission = Arr::first($filteredPermissions);

        return UsuarioEntity::create()
            ->setNome(Arr::get($result, 'nome'))
            ->setEmail(Arr::get($result, 'email'))
            ->setPermissao(Arr::get($systemPermission, 'permissaoSlug'));
    }
}
