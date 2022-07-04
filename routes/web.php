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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/', ['App\Http\Controllers\HomeController', 'index']);
<<<<<<< HEAD
Route::get('people-of-interest', function(){
    return view('people-of-interest.index');
});
Route::get('/components', function(){
    return view('nav');
});
=======
Route::get('/people-of-interest', ['App\Http\Controllers\PersonController', 'index']);
>>>>>>> fc6eda5d03d7862bb8ba3957b8fc049f53803409
