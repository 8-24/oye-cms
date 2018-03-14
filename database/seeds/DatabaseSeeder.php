<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(LanguagesSeeder::class);
        $this->call(ServicesSeeder::class);
        $this->call(ServiceContentSeeder::class);
        $this->call(HomeSeeder::class);
        $this->call(ArgumentSeeder::class);
        $this->call(ArgumentContentSeeder::class);
        $this->call(ClientSeeder::class);
        $this->call(ClientContentsSeeder::class);
        $this->call(ClientWwrapperSeeder::class);
        $this->call(StorySeeder::class);
    }
}
