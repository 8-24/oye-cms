<?php

use Illuminate\Database\Seeder;

class ClientContentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Clientcontents::insert([
           'clients_id' => 1,
            'lang_id' => 1,
            'lang_slug' => 'fr',
            'name' => 'oye!',
            'logo' => 'http://www.oye.agency/img/oye_logo_default.svg',
        ]);
        \App\Clientcontents::insert([
           'clients_id' => 2,
            'lang_id' => 1,
            'lang_slug' => 'fr',
            'name' => 'oye! agency',
            'logo' => 'http://www.oye.agency/img/oye_logo_default.svg',
        ]);
        \App\Clientcontents::insert([
           'clients_id' => 3,
            'lang_id' => 1,
            'lang_slug' => 'fr',
            'name' => 'oye! communication',
            'logo' => 'http://www.oye.agency/img/oye_logo_default.svg',
        ]);
        \App\Clientcontents::insert([
           'clients_id' => 4,
            'lang_id' => 1,
            'lang_slug' => 'fr',
            'name' => 'oye! capitaine',
            'logo' => 'http://www.oye.agency/img/oye_logo_default.svg',
        ]);


        \App\Clientcontents::insert([
           'clients_id' => 1,
            'lang_id' => 3,
            'lang_slug' => 'en',
            'name' => 'oye!',
            'logo' => 'http://www.oye.agency/img/oye_logo_default.svg',
        ]);
        \App\Clientcontents::insert([
           'clients_id' => 2,
            'lang_id' => 3,
            'lang_slug' => 'en',
            'name' => 'oye! communication',
            'logo' => 'http://www.oye.agency/img/oye_logo_default.svg',
        ]);
        \App\Clientcontents::insert([
           'clients_id' => 3,
            'lang_id' => 3,
            'lang_slug' => 'en',
            'name' => 'oye! communication',
            'logo' => 'http://www.oye.agency/img/oye_logo_default.svg',
        ]);
        \App\Clientcontents::insert([
           'clients_id' => 4,
            'lang_id' => 3,
            'lang_slug' => 'en',
            'name' => 'oye! captain',
            'logo' => 'http://www.oye.agency/img/oye_logo_default.svg',
        ]);
    }
}
