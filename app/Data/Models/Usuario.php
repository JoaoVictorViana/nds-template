<?php

namespace App\Data\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class Usuario extends Authenticatable
{
    use HasApiTokens;

    protected $fillable = [
        'id',
        'nome',
        'email',
        'identificacao',
        'permissao'
    ];

    protected $hidden = [
        'password'
    ];
}
