<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/components', function(){
    return view('nav');
    });

Route::get('/', ['App\Http\Controllers\HomeController', 'index']);
Route::get('/people-of-interest', [App\Http\Controllers\PersonController::class, 'index']);
Route::post('/people-of-interest/edit', ['App\Http\Controllers\PersonController', 'edit']);

//react routing combination where path === anything 
Route::get('/missions/{path?}', [App\Http\Controllers\MissionsController::class, 'app'])->where('path','.*');

