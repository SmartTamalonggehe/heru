<?php

use App\Http\Controllers\CRUD\GeomorfologiController;
use App\Http\Controllers\CRUD\KalaController;
use App\Http\Controllers\CRUD\KoordinatController;
use Illuminate\Support\Facades\Route;

Route::prefix('crud')->group(function () {
    Route::resources([
        'koordinat' => KoordinatController::class,
        'geomorfologi' => GeomorfologiController::class,
        'kala' => KalaController::class,
    ]);
});
