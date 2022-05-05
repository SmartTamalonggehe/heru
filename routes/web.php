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
    return view('user.dashboard.index');
})->name('user.index');
// route kala
Route::get('/kala', function () {
    return view('user.kala.index');
})->name('user.kala.index');

// route geomorfologi
Route::get('/geomorfologi', function () {
    return view('user.geomorfologi.index');
})->name('user.geomorfologi.index');

// route batu_gamping
Route::get('/batu_gamping', function () {
    return view('user.batu_gamping.index');
})->name('user.batu_gamping.index');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/crud.php';
