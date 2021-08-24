<?php

namespace App\Domain\Entities;

use App\Data\Models\Usuario;
use Illuminate\Support\Arr;
use Illuminate\Foundation\Auth\User as Authenticatable;

class UsuarioEntity
{
    private $nome;
    private $email;
    private $identificacao;
    private $permissao;

    private function __construct(string $nome, string $email, string $identificacao)
    {
        $this->nome = $nome;
        $this->email = $email;
        $this->identificacao = $identificacao;
    }

    public static function create(string $nome, string $email, string $identificacao): self
    {
        return new UsuarioEntity($nome, $email, $identificacao);
    }

    public function getNome(): string
    {
        return $this->nome;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getIdentificacao(): string
    {
        return $this->identificacao;
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

    public function toArray(): array
    {
        return [
            "nome" => $this->getNome(),
            "email" => $this->getEmail(),
            "identificaco" => $this->getIdentificacao(),
            "permissao" => $this->getPermissao()
        ];
    }

    public static function fromArray(array $data): self
    {
        return UsuarioEntity::create($data['nome'], $data['email'], $data['identificacao'])
            ->setPermissao(Arr::get($data, 'permissao'));
    }

    public function toModel(): Authenticatable
    {
        $userModel = app(Usuario::class);
        $userModel->fill($this->toArray());
        return $userModel;
    }
}
