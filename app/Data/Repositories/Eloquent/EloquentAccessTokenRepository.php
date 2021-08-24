<?php

namespace App\Data\Repositories\Eloquent;

use App\Data\Models\Authentication\AccessToken;
use App\Domain\Interfaces\Repositories\AccessTokenRepository;
use Illuminate\Database\Eloquent\Model;

class EloquentAccessTokenRepository extends EloquentRepository implements AccessTokenRepository
{
    public function __construct()
    {
        parent::__construct(AccessToken::class);
    }

    public function loadById(string $id): Model
    {
        $tokenModel = $this->model->findOrFail($id);

        return $tokenModel;
    }

    public function update(string $token, array $attributes): void
    {
        $tokenModel = $this->model->findOrFail($token);

        if ($tokenModel) {
            $tokenModel->fill($attributes);
            $tokenModel->save();
        }
    }
}
