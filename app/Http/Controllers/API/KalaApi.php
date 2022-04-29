<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Kala;
use Illuminate\Http\Request;

class KalaApi extends Controller
{
    public function index()
    {
        $data = Kala::with(['koordinat' => function ($koordinat) {
            $koordinat->with('koordinatDet');
        }])->get();
        return response()->json($data);
    }
}
