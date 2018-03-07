<?php

use Illuminate\Database\Seeder;

class HomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('homes')->insert([
            'lang_id' => '1',
            'mantra' => 'Des solutions éclaires depuis 1990',
            'description' => "<strong>Télématique & fibre optique</strong> . site On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte.",
            'keywords' => "wilight télécoms sàrl, wilight, télécomas, fibre optique, ...",
            'thumbnail' => 'http://lorempicsum.com/futurama/255/200/2'
        ]);
        DB::table('homes')->insert([
            'lang_id' => '3',
            'mantra' => 'Lighting solutions since 1990',
            'description' => "<strong>Telematics & Optical Fiber</strong> . site On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte.",
            'keywords' => "wilight télécoms sàrl, wilight, Telematics, Optical Fiber, ...",
            'thumbnail' => 'http://lorempicsum.com/futurama/255/200/2'
        ]);
    }
}
