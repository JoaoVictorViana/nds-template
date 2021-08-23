<?php

namespace App\Data\Repositories\Eloquent;

use Illuminate\Database\Eloquent\Model;

abstract class EloquentRepository
{
    protected Model $model;

    public function __construct(string $className)
    {
        $this->model = app($className);
    }
}
