<?php

use Illuminate\Http\Request;
use App\Http\Controllers\API\KalaApi;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\KoordinatApi;
use App\Http\Controllers\API\BatuGampingApi;
use App\Http\Controllers\API\GeomorfologiApi;

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
// batu_gamping
Route::get('batu_gamping', [BatuGampingApi::class, 'index'])->name('batu_gamping.index');
Route::get('koordinat', [KoordinatApi::class, 'index'])->name('koordinat.index');
