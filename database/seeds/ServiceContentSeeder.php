<?php

use Illuminate\Database\Seeder;

class ServiceContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        \App\Servicecontents::insert([
            'services_id' => 1,
            'name' => 'Télématique',
            'slug' => 'telematique',
            'lang_id' => 1,
            'lang_slug' => 'en',
            'thumbnail' => 'http://lorempicsum.com/futurama/255/200/2',
            'illustration' => 'http://lorempicsum.com/futurama/627/300/4',
            'keywords' => 'wilight, telecoms, sàarl, neuchâtel, télématique, ..',
            'description' => 'description courte du service télématique',
            'arguments' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'content' => 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',

        ]);
        \App\Servicecontents::insert([
            'services_id' => 2,
            'name' => 'Eclairages LED',
            'slug' => 'eclairages-led',
            'lang_id' => 1,
            'lang_slug' => 'en',
            'thumbnail' => 'http://lorempicsum.com/futurama/255/200/2',
            'illustration' => 'http://lorempicsum.com/futurama/627/300/4',
            'keywords' => 'wilight, telecoms, sàarl, neuchâtel, eclairages led, ..',
            'description' => 'description courte du service éclairages led',
            'arguments' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'content' => 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',

        ]);
        \App\Servicecontents::insert([
            'services_id' => 3,
            'name' => 'Data Center',
            'slug' => 'data-center',
            'lang_id' => 1,
            'lang_slug' => 'en',
            'thumbnail' => 'http://lorempicsum.com/futurama/255/200/2',
            'illustration' => 'http://lorempicsum.com/futurama/627/300/4',
            'keywords' => 'wilight, telecoms, sàarl, neuchâtel, data center, ..',
            'description' => 'description courte du service data center',
            'arguments' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'content' => 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',

        ]);
        \App\Servicecontents::insert([
            'services_id' => 4,
            'name' => 'Gestion de projet',
            'slug' => 'gestion-de-projet',
            'lang_id' => 1,
            'lang_slug' => 'en',
            'thumbnail' => 'http://lorempicsum.com/futurama/255/200/2',
            'illustration' => 'http://lorempicsum.com/futurama/627/300/4',
            'keywords' => 'wilight, telecoms, sàarl, neuchâtel, gestion de projet, ..',
            'description' => 'description courte du service gestion de projet',
            'arguments' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'content' => 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',

        ]);

        \App\Servicecontents::insert([
            'services_id' => 1,
            'name' => 'Telematics',
            'slug' => 'telematics',
            'lang_id' => 3,
            'lang_slug' => 'fr',
            'thumbnail' => 'http://lorempicsum.com/futurama/255/200/2',
            'illustration' => 'http://lorempicsum.com/futurama/627/300/4',
            'keywords' => 'wilight, telecoms, sàarl, neuchâtel, télématique, ..',
            'description' => 'short description du service télématique',
            'arguments' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'content' => 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',

        ]);
        \App\Servicecontents::insert([
            'services_id' => 2,
            'name' => 'Led Lights',
            'slug' => 'led-lights',
            'lang_id' => 3,
            'lang_slug' => 'fr',
            'thumbnail' => 'http://lorempicsum.com/futurama/255/200/2',
            'illustration' => 'http://lorempicsum.com/futurama/627/300/4',
            'keywords' => 'wilight, telecoms, sàarl, neuchâtel, eclairages led, ..',
            'description' => 'short-description du service éclairages led',
            'arguments' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'content' => 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',

        ]);
        \App\Servicecontents::insert([
            'services_id' => 3,
            'name' => 'Data Center',
            'slug' => 'data-center-en',
            'lang_id' => 3,
            'lang_slug' => 'fr',
            'thumbnail' => 'http://lorempicsum.com/futurama/255/200/2',
            'illustration' => 'http://lorempicsum.com/futurama/627/300/4',
            'keywords' => 'wilight, telecoms, sàarl, neuchâtel, data center, ..',
            'description' => 'short description du service data center',
            'arguments' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'content' => 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',

        ]);
        \App\Servicecontents::insert([
            'services_id' => 4,
            'name' => 'Project management',
            'slug' => 'project-management',
            'lang_id' => 3,
            'lang_slug' => 'fr',
            'thumbnail' => 'http://lorempicsum.com/futurama/255/200/2',
            'illustration' => 'http://lorempicsum.com/futurama/627/300/4',
            'keywords' => 'wilight, telecoms, sàarl, neuchâtel, gestion de projet, ..',
            'description' => 'short description du service gestion de projet',
            'arguments' => '<ul><li>argument 1</li><li>argument 2</li><li>argument 3</li></ul>',
            'content' => 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',

        ]);
    }
}
