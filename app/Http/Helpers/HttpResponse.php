<?php

namespace App\Http\Helpers;

use Exception;
use Illuminate\Http\JsonResponse;

class HttpResponse
{
    public static function ok(mixed $data): JsonResponse
    {
        return response()->json($data, 200);
    }

    public static function badRequest(Exception $exception): JsonResponse
    {
        return response()->json([
            'message' => $exception->getMessage(),
        ], 400);
    }

    public static function unauthorized(Exception $exception): JsonResponse
    {
        return response()->json([
            'message' => $exception->getMessage(),
        ], 401);
    }

    public static function forbidden(Exception $exception): JsonResponse
    {
        return response()->json([
            'message' => $exception->getMessage(),
        ], 403);
    }

    public static function notFound(Exception $exception): JsonResponse
    {
        return response()->json([
            'message' => $exception->getMessage(),
        ], 404);
    }

    public static function serverError(): JsonResponse
    {
        return response()->json([
            'message' => app(ServerErrorException::class)->getMessage(),
        ], 500);
    }
}
