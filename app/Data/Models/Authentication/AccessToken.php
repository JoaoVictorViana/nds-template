<?php

namespace App\Data\Models\Authentication;

use Laravel\Passport\Token as PassportAccessToken;

class AccessToken extends PassportAccessToken
{
    public $table = 'access_tokens';
}
