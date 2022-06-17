<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Batugamping;
use Illuminate\Http\Request;

class BatuGampingApi extends Controller
{
    public function index(Request $request)
    {
        $data = Batugamping::with(['koordinat' => function ($koordinat) use ($request) {
            $koordinat->where('nm_koordinat', $request->nm_batu)->with('koordinatDet');
        }])->get();
        return response()->json($data);
    }
}
