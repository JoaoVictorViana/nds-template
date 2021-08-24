<?php

namespace App\Providers\Binds;

use App\Domain\Interfaces\Services\Authentication;
use App\Domain\Services\AuthenticationService;
use Illuminate\Support\ServiceProvider;

class ServiceServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(Authentication::class, AuthenticationService::class);
    }
}
