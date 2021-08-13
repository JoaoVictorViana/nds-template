<?php

namespace App\Data\Http;

use App\Data\Interfaces\HttpClient;
use Exception;
use GuzzleHttp\ClientInterface;
use Illuminate\Support\Str;

/**
 * Classe de implementação do HttpClient que realizar requisições HTTP por meio do Guzzle.
 */
class GuzzleHttpClient implements HttpClient
{
    protected $client;

    /**
     * Cria uma instância de um GuzzleHttpClientService.
     *
     * @param GuzzleHttp\ClientInterface $client Recebe a instância de um cliente do Guzzle
     *
     * @return void
     */
    public function __construct(ClientInterface $client)
    {
        $this->client = $client;
    }

    public function request(string $endpoint, string $method = 'get', array $body = [], array $headers = []): array
    {
        if ($this->isAvailableMethod($method)) {
            $options = $this->generateOptions($body, $headers);

            $request = $this->client->request($method, $endpoint, $options);

            $response = $request->getBody()->getContents();

            return json_decode($response, true);
        }

        throw new Exception('Http method not exists');
    }

    private function isAvailableMethod(string $method)
    {
        return Str::upper($method) === 'POST' || 'GET' || 'PUT' || 'PATCH' || 'DELETE';
    }

    private function generateOptions(array $body, array $headers): array
    {
        return array_merge([], [
            'form_params' => $body,
            'headers' => $headers,
        ]);
    }
}
