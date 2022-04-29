<?php

use Illuminate\Support\Facades\Route;

Route::prefix('admin')->middleware('auth')->group(function () {
    $nm = 'admin.';
    Route::get('/', function () {
        return redirect()->route('admin.dashboard');
    });

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

    // route batu_gamping
    Route::get('/batu_gamping', function () {
        return view('admin.batu_gamping.index');
    })->name("{$nm}batu_gamping");

    Route::get('/polygon', function () {
        return view('admin.polygon.index');
    })->name("{$nm}polygon");
});
