<?php

namespace Tests\Feature;

use App\Language;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LanguageApiTest extends TestCase
{

    public function testGetLanguages(){

        $language = factory(Language::class)->create();

        $this->get('/api/languages')->assertStatus(200);

    }

    /*
    public function testAddLanguage()
    {

        $user = factory(User::class)->create();


    }
    */
}
