<?php

namespace App\Http\Requests;

class AuthenticateRequest extends Request
{
    public function rules()
    {
        return [
            'identificacao' => 'required',
            'password' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'identificacao.required' => 'Preencha o campo de identificação.',
            'password.required' => 'Preencha o campo de senha.',
        ];
    }
}
