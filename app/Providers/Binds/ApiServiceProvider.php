<?php

namespace App\Providers\Binds;

use App\Data\Apis\BancoCentralApi;
use App\Domain\Interfaces\Apis\BancoCentral;
use Illuminate\Support\ServiceProvider;

class ApiServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(BancoCentral::class, BancoCentralApi::class);
    }
}
