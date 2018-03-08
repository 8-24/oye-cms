<?php

namespace App\Http\Controllers\API\Home;

use App\Home;
use App\Language;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Home::where('id', 1)->first();
        return response()->json($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $lang
     * @return \Illuminate\Http\Response
     */
    public function show($lang)
    {
        $currentLang = Language::where('slug', $lang)->first();
        $data = Home::where('lang_id', $currentLang->id)->first();
        return response()->json($data, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $mantra = $request->mantra;
        $description = $request['description'];
        $keywords = $request['keywords'];
        $thumbnail = $request['thumbnail'];
        Home::where('id', $id)->update([
            'mantra' => $mantra,
            'description' => $description,
            'keywords' => $keywords,
            'thumbnail' => $thumbnail
        ]);

        return response('section home mis à jour', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
