<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeomorfologiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('geomorfologi', function (Blueprint $table) {
            $table->id();
            $table->foreignId('koordinat_id')
                ->constrained("koordinat")
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->string('nama', 100);
            $table->string('warna', 20);
            $table->string('relief', 50);
            $table->char('lembah', 1);
            $table->string('aliran', 20);
            $table->string('endogen', 50);
            $table->string('eksogen', 50);
            $table->string('lereng', 20);
            $table->string('kontur', 50);
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
        Schema::dropIfExists('geomorfologi');
    }
}
