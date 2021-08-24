<?php

use App\Http\Controllers\Authentication\LoginController;
use App\Http\Controllers\Authentication\LogoutController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [LoginController::class, 'handle'])->name('login');
Route::post('/logout', [LogoutController::class, 'handle'])->name('logout');
