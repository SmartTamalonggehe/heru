<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Geomorfologi extends Model
{
    use HasFactory;
    protected $table = 'geomorfologi';
    protected $guarded = [];

    public function koordinat()
    {
        return $this->hasOne(Koordinat::class, 'id', 'koordinat_id');
    }
}
