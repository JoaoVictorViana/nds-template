<?php

namespace App\Data\Models\Authentication;

use Laravel\Passport\Client as PassportClient;

class Client extends PassportClient
{
    public $table = 'clients';
}
