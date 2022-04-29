<?php

use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function () {
    $nm = 'admin.';

    Route::get('/dashboard', function () {
        return view('admin.dashboard.index');
    })->name("{$nm}dashboard");

    Route::get('/geomorfologi', function () {
        return view('admin.geomorfologi.index');
    })->name("{$nm}geomorfologi");

    // route kala
    Route::get('/kala', function () {
        return view('admin.kala.index');
    })->name("{$nm}kala");

    Route::get('/polygon', function () {
        return view('admin.polygon.index');
    })->name("{$nm}polygon");
});
