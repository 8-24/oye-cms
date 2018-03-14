<?php

use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Clients::insert([
            'name' => 'oye!',
        ]);
        \App\Clients::insert([
            'name' => 'oye! agency',
        ]);
        \App\Clients::insert([
            'name' => 'oye! communication',
        ]);
        \App\Clients::insert([
            'name' => 'oye! capitaine',
        ]);
    }
}
