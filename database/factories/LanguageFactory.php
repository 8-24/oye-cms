<?php

use Faker\Generator as Faker;

$factory->define(\App\Language::class, function (Faker $faker) {
    return [
        'name' => $faker->words,
        'slug' => $faker->randomLetter . $faker->randomLetter,
        'active' => $faker->boolean($chanceOfGettingTrue = 50)
    ];
});
