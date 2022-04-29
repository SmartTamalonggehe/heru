<?php

use App\Http\Controllers\API\GeomorfologiApi;
use App\Http\Controllers\API\KalaApi;
use App\Http\Controllers\API\KoordinatApi;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('geomorfologi', [GeomorfologiApi::class, 'index'])->name('geomorfologi.index');
Route::get('kala', [KalaApi::class, 'index'])->name('kala.index');
Route::get('koordinat', [KoordinatApi::class, 'index'])->name('koordinat.index');
