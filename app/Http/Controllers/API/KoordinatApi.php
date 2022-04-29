<?php

namespace App\Http\Controllers\API;

use App\Models\Koordinat;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class KoordinatApi extends Controller
{
    public function index()
    {
        $data = Koordinat::with('koordinatDet')->get();
        return response()->json($data);
    }
}
