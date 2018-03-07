<?php

use Illuminate\Database\Seeder;

class ArgumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('arguments')->insert([
            'lang_id' => 1,
            'slug' => 'block_1',
            'position' => 1,
            'lang_id' => 1,
            'lang_slug' => 'fr',
            'content' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'button' => false,
            'button_link'=> null,
            'CTA' => null,

        ]);

        DB::table('arguments')->insert([
            'lang_id' => 1,
            'slug' => 'block_2',
            'position' => 1,
            'lang_id' => 1,
            'lang_slug' => 'fr',
            'content' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'button' => false,
            'button_link'=> null,
            'CTA' => null,

        ]);

        DB::table('arguments')->insert([
            'lang_id' => 1,
            'slug' => 'block_3',
            'position' => 1,
            'lang_id' => 1,
            'lang_slug' => 'fr',
            'content' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'button' => false,
            'button_link'=> null,
            'CTA' => null,

        ]);

        DB::table('arguments')->insert([
            'lang_id' => 1,
            'slug' => 'block_4',
            'position' => 1,
            'lang_id' => 1,
            'lang_slug' => 'fr',
            'content' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'button' => true,
            'button_link'=> 'gestion-de-projet',
            'CTA' => "Gestion de projet",

        ]);
    }
}
