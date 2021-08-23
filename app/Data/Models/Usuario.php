<?php

namespace App\Data\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Usuario extends Authenticatable
{
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
