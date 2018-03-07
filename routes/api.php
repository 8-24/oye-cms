<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResources(["homes" => 'API\Home\HomeController']);
Route::apiResources(["languages" => 'API\Languages\LanguagesController']);
Route::apiResources(["services" => 'API\Services\ServicesController']);
Route::get('/services/lang/{lang}' ,  'API\Services\ServicesController@IndexPerLang');
Route::apiResources(["arguments" => 'API\Arguments\ArgumentsController']);
