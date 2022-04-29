<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Batugamping;
use Illuminate\Http\Request;

class BatuGampingApi extends Controller
{
    public function index()
    {
        $data = Batugamping::with(['koordinat' => function ($koordinat) {
            $koordinat->with('koordinatDet');
        }])->get();
        return response()->json($data);
    }
}
