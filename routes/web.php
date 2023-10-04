<?php

use Illuminate\Support\Facades\Route;
use App\Events\chatEvent;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    broadcast(new chatEvent('chat'));
    return view('welcome');
});


Route::get('/{pathMatch}', function () {
    return view('welcome');
})->where('pathMatch', ".*");


