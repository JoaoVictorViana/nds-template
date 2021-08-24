<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

function buildRouteDirectory(string $resource): string
{
    return __DIR__."/api/$resource.php";
}

Route::group([
    'prefix' => '/auth',
    'as' => 'auth.',
    'namespace' => 'Authentication',
    // 'middleware' => 'auth',
    ], buildRouteDirectory('authentication'));
