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
        \App\Arguments::insert([
            'active' => true,
            'position' => 1,
            'complete' => true,
        ]);
        \App\Arguments::insert([
            'active' => true,
            'position' => 2,
            'complete' => true,
        ]);
        \App\Arguments::insert([
            'active' => true,
            'position' => 3,
            'complete' => true,
        ]);
        \App\Arguments::insert([
            'active' => true,
            'position' => 4,
            'complete' => true,
        ]);
    }
}
