<?php

namespace App\Data\Models\Authentication;

use Laravel\Passport\PersonalAccessClient as PassportPersonalAccessClient;

class Client extends PassportPersonalAccessClient
{
    public $table = 'personal_access_clients';
}
