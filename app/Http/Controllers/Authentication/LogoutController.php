<?php

namespace App\Http\Controllers\Authentication;

use App\Domain\Interfaces\Services\Authentication;
use App\Http\Controllers\Controller;
use App\Http\Helpers\HttpResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

final class LogoutController extends Controller
{
    protected $authentication;

    public function __construct(Authentication $authentication)
    {
        $this->authentication = $authentication;
    }

    public function handle(Request $request): JsonResponse
    {
        $token = $request->bearerToken();

        $this->authentication->revokeToken($token);

        return HttpResponse::noContent();
    }
}

?>

