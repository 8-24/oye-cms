let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/js/app.js', 'public/app/assets/js')
   .sass('resources/assets/sass/app/app.scss', 'public/app/assets/css');

mix.react('resources/assets/js/admin.js', 'public/admin/assets/js')
   .sass('resources/assets/sass/admin/console.scss', 'public/admin/assets/css');
