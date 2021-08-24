<?php

namespace App\Data\Models\Authentication;

use Laravel\Passport\PersonalAccessClient as PassportPersonalAccessClient;

class PersonalAccessClient extends PassportPersonalAccessClient
{
    public $table = 'personal_access_clients';
}
