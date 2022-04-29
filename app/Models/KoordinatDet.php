<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KoordinatDet extends Model
{
    use HasFactory;
    protected $table = 'koordinat_det';
    protected $guarded = [];

    public function koordinat()
    {
        return $this->belongsTo(Koordinat::class);
    }
}
