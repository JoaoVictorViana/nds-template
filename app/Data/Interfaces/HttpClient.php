<?php

namespace App\Data\Interfaces;

/**
 * Interface para criação e envio de requisições HTTP (GET, POST, PUT, PATCH, DELETE).
 */
interface HttpClient
{
    /**
     *  Envia uma requisição HTTP mediante parâmetros informados.
     *
     * Utilize um endereço absoluto para requisição.
     * A URI pode conter a query string também.
     *
     * @param string            $uri        Endereço absoluto da requisição
     * @param string|HttpMethod $method     Verbo HTTP a ser utilizado. Para conferir os verbos disponíveis basta utilizar a enum HttpMethod
     * @param array             $body=[]    (opcional) Seta um corpo de requisição
     * @param array             $headers=[] (opcional) Adiciona cabeçalho necessário na requisição
     *
     * @return array Retorna os dados obtidos em array associativa da requisição
     */
    public function request(string $uri, string $method = 'get', array $body = [], array $headers = []): array;
}
