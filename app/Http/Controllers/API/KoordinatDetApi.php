<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\KoordinatDet;
use Illuminate\Http\Request;

class KoordinatDetApi extends Controller
{
    public function index()
    {
        $data = KoordinatDet::with('koordinat')->get();
        return response()->json($data);
    }
}
