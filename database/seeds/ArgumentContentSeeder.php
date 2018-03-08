<?php

use Illuminate\Database\Seeder;

class ArgumentContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        \App\Argumentcontents::insert([
            'arguments_id' => 1,
            'lang_id' => 1,
            'slug' => 'block_1',
            'position' => 1,
            'lang_slug' => 'fr',
            'content' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'button' => false,
            'button_link'=> null,
            'CTA' => null,
        ]);

        \App\Argumentcontents::insert([
            'arguments_id' => 2,
            'lang_id' => 1,
            'slug' => 'block_2',
            'position' => 1,
            'lang_slug' => 'fr',
            'content' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'button' => false,
            'button_link'=> null,
            'CTA' => null,

        ]);

        \App\Argumentcontents::insert([
            'arguments_id' => 3,
            'lang_id' => 1,
            'slug' => 'block_3',
            'position' => 1,
            'lang_slug' => 'fr',
            'content' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'button' => false,
            'button_link'=> null,
            'CTA' => null,

        ]);

        \App\Argumentcontents::insert([
            'arguments_id' => 4,
            'lang_id' => 1,
            'slug' => 'block_4',
            'position' => 1,
            'lang_slug' => 'fr',
            'content' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'button' => true,
            'button_link'=> 'gestion-de-projet',
            'CTA' => "Gestion de projet",
        ]);


        \App\Argumentcontents::insert([
            'arguments_id' => 1,
            'lang_id' => 3,
            'slug' => 'block_1_en',
            'position' => 1,
            'lang_slug' => 'fr',
            'content' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'button' => false,
            'button_link'=> null,
            'CTA' => null,
        ]);

        \App\Argumentcontents::insert([
            'arguments_id' => 2,
            'lang_id' => 3,
            'slug' => 'block_2_en',
            'position' => 1,
            'lang_slug' => 'fr',
            'content' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'button' => false,
            'button_link'=> null,
            'CTA' => null,

        ]);

        \App\Argumentcontents::insert([
            'arguments_id' => 3,
            'lang_id' => 3,
            'slug' => 'block_3_en',
            'position' => 1,
            'lang_slug' => 'fr',
            'content' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'button' => false,
            'button_link'=> null,
            'CTA' => null,

        ]);

        \App\Argumentcontents::insert([
            'arguments_id' => 4,
            'lang_id' => 3,
            'slug' => 'block_4_en',
            'position' => 1,
            'lang_slug' => 'fr',
            'content' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'button' => true,
            'button_link'=> 'gestion-de-projet',
            'CTA' => "Gestion de projet",
        ]);
    }
}
