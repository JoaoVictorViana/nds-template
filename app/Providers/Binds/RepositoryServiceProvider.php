<?php

namespace App\Providers\Binds;

use App\Data\Repositories\Eloquent\EloquentAccessTokenRepository;
use App\Domain\Interfaces\Repositories\AccessTokenRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(AccessTokenRepository::class, EloquentAccessTokenRepository::class);
    }
}
