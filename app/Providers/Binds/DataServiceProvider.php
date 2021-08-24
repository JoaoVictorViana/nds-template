<?php

namespace App\Providers\Binds;

use App\Data\Cryptography\JwtCryptography;
use App\Data\Http\GuzzleHttpClient;
use App\Data\Interfaces\HttpClient;
use App\Domain\Interfaces\Cryptography\Cryptography;
use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use Illuminate\Support\ServiceProvider;

class DataServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton(ClientInterface::class, function () {
            return new Client([
                'verify' => false,
                'headers' => [
                    'Content-Type' => 'application/x-www-form-urlencoded',
                    'Accept' => '*/*',
                    'Access-Control-Allow-Origin' => 1,
                ],
                'timeout' => intval(env('HTTP_CLIENT_REQUEST_TIMEOUT')),
                'timeout_connect' => intval(env('HTTP_CLIENT_CONNECT_TIMEOUT')),
            ]);
        });

        $this->app->bind(HttpClient::class, GuzzleHttpClient::class);
        $this->app->bind(Cryptography::class, JwtCryptography::class);
    }
}
