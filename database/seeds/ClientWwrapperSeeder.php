<?php

use Illuminate\Database\Seeder;

class ClientWwrapperSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\ClientWrappers::insert([
           'lang_id' => 1,
            'lang_slug' => 'fr',
            'content' => '<h2>Ils nous ont fait confiance</h2></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deleniti eos exercitationem laboriosam non, reprehenderit vitae! Autem ducimus exercitationem explicabo inventore, magnam nihil quod reiciendis repudiandae velit voluptate? Aut, voluptatibus?'
        ]);
        \App\ClientWrappers::insert([
           'lang_id' => 3,
            'lang_slug' => 'en',
            'content' => '<h2>They trusted us</h2></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deleniti eos exercitationem laboriosam non, reprehenderit vitae! Autem ducimus exercitationem explicabo inventore, magnam nihil quod reiciendis repudiandae velit voluptate? Aut, voluptatibus?'
        ]);
    }
}
