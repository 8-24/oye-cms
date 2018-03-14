<?php

use Illuminate\Database\Seeder;

class StorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Story::insert([
            'lang_id' => 1,
            'lang_slug' => 'fr',
            'picture' => 'http://lorempicsum.com/futurama/627/300/4',
            'content' => '<h2>Notre histoire</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad debitis esse excepturi exercitationem iure, magnam nam necessitatibus nobis porro recusandae rem tempora totam velit veritatis! Atque eius pariatur quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur fugit, in incidunt nulla quia soluta? Autem excepturi nam natus nemo odio pariatur quibusdam quisquam repellat, repudiandae sequi sunt voluptas.'
        ]);

        \App\Story::insert([
            'lang_id' => 3,
            'lang_slug' => 'en',
            'picture' => 'http://lorempicsum.com/futurama/627/300/4',
            'content' => '<h2>Our Story</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad debitis esse excepturi exercitationem iure, magnam nam necessitatibus nobis porro recusandae rem tempora totam velit veritatis! Atque eius pariatur quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur fugit, in incidunt nulla quia soluta? Autem excepturi nam natus nemo odio pariatur quibusdam quisquam repellat, repudiandae sequi sunt voluptas.'
        ]);
    }
}
