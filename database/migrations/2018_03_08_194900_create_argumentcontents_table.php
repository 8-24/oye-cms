<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArgumentcontentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('argumentcontents', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('arguments_id');
            $table->string('name');
            $table->string('slug');
            $table->integer('lang_id');
            $table->string('lang_slug');
            $table->integer('position');
            $table->longText('content');
            $table->boolean('button')->nullable();
            $table->string('button_link')->nullable();
            $table->string('CTA')->nullable();
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
        Schema::dropIfExists('argumentcontens');
    }
}
