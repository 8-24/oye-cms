<?php

use Illuminate\Database\Seeder;

class ServicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('services')->insert([
            'id' => 1,
            'position' => 1,
            'active' => true,
            'complete' => true
        ]);
        DB::table('services')->insert([
            'id' => 2,
            'position' => 2,
            'active' => true,
            'complete' => true
        ]);
        DB::table('services')->insert([
            'id' => 3,
            'position' => 3,
            'active' => true,
            'complete' => true
        ]);
        DB::table('services')->insert([
            'id' => 4,
            'position' => 4,
            'active' => true,
            'complete' => true
        ]);
    }
}
