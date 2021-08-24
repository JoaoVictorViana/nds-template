<?php

namespace App\Data\Apis;

use App\Data\Interfaces\HttpClient;
use App\Domain\Entities\UsuarioEntity;
use App\Domain\Interfaces\Apis\BancoCentral;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Arr;

class BancoCentralApi implements BancoCentral
{
    protected $httpClient;

    public function __construct(HttpClient $httpClient)
    {
        $this->httpClient = $httpClient;
    }

    public function loadUsuario(string $id): UsuarioEntity
    {
        $response = $this->httpClient->request($this->generateUriForOne('pessoa', $id));

        if (empty($response['resultados'])) {
            throw new ModelNotFoundException();
        }

        return $this->mapToEntity($response);
    }

    public function loadUsuarioByIdentifier(string $identifier): UsuarioEntity
    {
        $response = $this->httpClient->request($this->generateUriForAll('pessoa', $identifier));

        if (empty($response['resultados'])) {
            throw new ModelNotFoundException;
        }

        return $this->mapToEntity($response);
    }


    public function loadUsuarioByCredentials(string $identifier, string $password): UsuarioEntity
    {
        $response = $this->httpClient->request($this->generateUriForAuth($identifier, $password));

        if (!$response['auth']) {
            throw new ModelNotFoundException();
        }

        return $this->mapToEntity($response);
    }

    public function checkUsuarioByCredentials(string $identifier, string $password): bool
    {
        $response = $this->httpClient->request($this->generateUriForAuth($identifier, $password));

        return $response['auth'];
    }

    private function generateUriForOne(string $resource, string $id): string
    {
        return env('BANCO_CENTRAL_API_BASE_URI').'/data/id/'.env('BANCO_CENTRAL_API_PASSWORD').'/'.$resource.'/'.$id;
    }

    private function generateUriForAuth(string $identifier, string $password): string
    {
        return env('BANCO_CENTRAL_API_BASE_URI').'/login/'.$identifier.'/'.$password;
    }

    protected function generateUriForAll(string $resource, string $field = ''): string
    {
        return env('BANCO_CENTRAL_API_BASE_URI').'/data/'.env('BANCO_CENTRAL_API_PASSWORD').'/'.$resource.'/'.$field;
    }

    private function mapToEntity(array $data): UsuarioEntity
    {
        $result = isset($data['resultados']) ? Arr::collapse($data['resultados']) : $data['resultado'];
        $permissions = array_key_exists('permissoes', $data)
            ? $data['permissoes']
            : $result['permissoes'];

        $filteredPermissions = array_filter($permissions, fn ($permission) => $permission['nomeSistema'] === env('APP_NAME'));
        $systemPermission = Arr::first($filteredPermissions);

        $mappedData = [
            "id" => $result["pessoa_id"],
            "nome" => ucwords($result['nome']),
            "email" => $result['email'],
            "identificacao" => $result['identificacao'],
            "permissao" => Arr::get($systemPermission, 'permissaoSlug'),
        ];

        return UsuarioEntity::fromArray($mappedData);
    }
}
