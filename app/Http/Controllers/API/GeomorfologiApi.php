<?php

namespace App\Http\Controllers\API;

use App\Models\Geomorfologi;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GeomorfologiApi extends Controller
{
    public function index()
    {
        $data = Geomorfologi::with(['koordinat' => function ($koordinat) {
            $koordinat->with('koordinatDet');
        }])->get();
        return response()->json($data);
    }
}
