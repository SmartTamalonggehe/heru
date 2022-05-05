<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKalaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kala', function (Blueprint $table) {
            $table->id();
            $table->foreignId('koordinat_id')
                ->constrained("koordinat")
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->string('nama', 100);
            $table->decimal('umur', 2, 1);
            $table->string('satuan', 10);
            $table->string('regional', 50);
            $table->string('warna', 50);
            $table->text('ket');
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
        Schema::dropIfExists('kala');
    }
}
