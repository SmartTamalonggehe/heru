<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBatugampingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('batugamping', function (Blueprint $table) {
            $table->id();
            $table->foreignId('koordinat_id')
                ->constrained("koordinat")
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->text('ket');
            $table->string('warna', 20);
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
        Schema::dropIfExists('batugamping');
    }
}
