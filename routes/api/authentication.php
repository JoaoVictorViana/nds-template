<?php

use App\Http\Controllers\Authentication\LoginController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [LoginController::class, 'handle'])->name('login');
