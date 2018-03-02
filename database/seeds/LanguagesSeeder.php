<?php

use Illuminate\Database\Seeder;

class LanguagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('languages')->insert([
            'name' => 'français',
            'slug' => 'fr',
            'active' => true,
        ]);
        DB::table('languages')->insert([
            'name' => 'italien',
            'slug' => 'it',
            'active' => false,
        ]);
        DB::table('languages')->insert([
            'name' => 'anglais',
            'slug' => 'en',
            'active' => true,
        ]);
        DB::table('languages')->insert([
            'name' => 'allemand',
            'slug' => 'de',
            'active' => false,
        ]);
        DB::table('languages')->insert([
            'name' => 'espagnole',
            'slug' => 'es',
            'active' => false,
        ]);
        DB::table('languages')->insert([
            'name' => 'japonais',
            'slug' => 'ja',
            'active' => false,
        ]);
    }
}
