<?php

namespace App\Http\Controllers\Authentication;

use App\Domain\Entities\AuthenticationEntity;
use App\Domain\Interfaces\Services\Authentication;
use App\Http\Controllers\Controller;
use App\Http\Helpers\HttpResponse;
use App\Http\Requests\AuthenticateRequest;
use Illuminate\Http\JsonResponse;

final class LoginController extends Controller
{
    protected $authentication;

    public function __construct(Authentication $authentication)
    {
        $this->authentication = $authentication;
    }

    public function handle(AuthenticateRequest $request): JsonResponse
    {
        $authenticationEntity = AuthenticationEntity::create(
            $request->input('identificacao'),
            $request->input('password')
        );

        $accessToken = $this->authentication->auth($authenticationEntity);

        return HttpResponse::ok([
            'accessToken' => $accessToken->getToken(),
        ]);
    }
}

?>

