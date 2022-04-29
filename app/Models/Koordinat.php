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
}
