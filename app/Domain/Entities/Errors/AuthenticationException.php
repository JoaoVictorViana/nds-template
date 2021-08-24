<?php

namespace App\Domain\Entities\Exceptions;

use Exception;

class AuthenticationException extends Exception
{
    public function __construct()
    {
        parent::__construct('Não foi possível autenticar o usuário, verifique se as credenciais são válidas ou se o usuário está cadastrado no sistema.');
    }
}
