<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKoordinatDetTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('koordinat_det', function (Blueprint $table) {
            $table->id();
            $table->foreignId('koordinat_id')
                ->constrained('koordinat')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->decimal('longitude', 12, 8);
            $table->decimal('latitude', 12, 8);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('koordinat_det');
    }
}
