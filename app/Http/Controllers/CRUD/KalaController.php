<?php

namespace App\Http\Controllers\CRUD;

use App\Models\Kala;
use App\Models\Koordinat;
use App\Models\KoordinatDet;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\Validator;

class KalaController extends Controller
{
    // validation
    protected function spartaValidation($request, $id = "")
    {
        $validator = Validator::make($request, [
            'nama' => 'required',
            'umur' => 'required',
            'satuan' => 'required',
            'regional' => 'required',
            'ket' => 'required',
            'longitude' => 'required',
            'latitude' => 'required',
        ]);

        if ($validator->fails()) {
            $pesan = [
                'judul' => 'Gagal',
                'pesan' => $validator->errors()->first(),
                'type' => 'error'
            ];
            return response()->json($pesan);
        }
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Kala::with('koordinat')->get();
        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn(
                'action',
                function ($data) {
                    return '
                    <button type="button" data-id="' . $data->id . '" class="btn btn-danger btnHapus btn-sm">Delete</button>';
                }
                // <button type="button" class="btn btn-info btnDet btn-sm" data-id="' . $data->id . '">Detail</button>
                // <button type="button" class="btn btn-warning btnUbah btn-sm" data-id="' . $data->id . '">Ubah</button>
            )
            ->rawColumns(['action'])
            ->make(true);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $validate = $this->spartaValidation($data);
        if ($validate) {
            return $validate;
        }

        $koordinat = Koordinat::create([
            'nm_koordinat' => 'Kala'
        ]);
        // store kala
        $Kala = Kala::create([
            'koordinat_id' => $koordinat->id,
            'nama' => $request->nama,
            'umur' => $request->umur,
            'satuan' => $request->satuan,
            'regional' => $request->regional,
            'ket' => $request->ket,
            'warna' => $request->warna,
        ]);
        // store koordinat det
        $longitude = $request->longitude;
        foreach ($longitude as $key => $value) {
            KoordinatDet::create([
                'koordinat_id' => $koordinat->id,
                'longitude' => $request->longitude[$key],
                'latitude' => $request->latitude[$key]
            ]);
        }
        $pesan = [
            'judul' => 'Berhasil',
            'pesan' => 'Data Telah Ditambahkan',
            'type' => 'success'
        ];
        return response()->json($pesan);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Kala::destroy($id);
        $pesan = [
            'judul' => 'Berhasil',
            'pesan' => 'Data Telah Dihapus',
            'type' => 'success'
        ];
        return response()->json($pesan);
    }
}
