<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Batugamping extends Model
{
    use HasFactory;
    use HasFactory;
    protected $table = 'batu_gamping';
    protected $guarded = [];

    public function koordinat()
    {
        return $this->hasOne(Koordinat::class, 'id', 'koordinat_id');
    }
}
