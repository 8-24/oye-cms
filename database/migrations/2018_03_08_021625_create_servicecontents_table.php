<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServicecontentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servicecontents', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('services_id');
            $table->string('name');
            $table->string('slug')->uniqe;
            $table->integer('lang_id');
            $table->string('lang_slug');
            $table->string('thumbnail');
            $table->string('illustration'); // image on the right
            $table->string('keywords');
            $table->string('description');
            $table->text('arguments');
            $table->longText('content');
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
        Schema::dropIfExists('servicecontents');
    }
}
