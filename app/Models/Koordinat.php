<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Koordinat extends Model
{
    use HasFactory;
    protected $table = 'koordinat';
    protected $guarded = [];

    public function koordinatDet()
    {
        return $this->hasMany(KoordinatDet::class, 'koordinat_id', 'id');
    }
    public function kala()
    {
        return $this->hasMany(Kala::class, 'koordinat_id', 'id');
    }
    public function batuGamping()
    {
        return $this->hasMany(Batugamping::class, 'koordinat_id', 'id');
    }
    public function geomorfologi()
    {
        return $this->hasMany(Geomorfologi::class, 'koordinat_id', 'id');
    }
}
