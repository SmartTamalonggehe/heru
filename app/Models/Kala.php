<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kala extends Model
{
    use HasFactory;
    use HasFactory;
    protected $table = 'kala';
    protected $guarded = [];

    public function koordinat()
    {
        return $this->hasOne(Koordinat::class, 'id', 'koordinat_id');
    }
}
