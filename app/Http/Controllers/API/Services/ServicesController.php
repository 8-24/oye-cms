<?php

namespace App\Http\Controllers\API\Services;

use App\Language;
use App\Servicecontents;
use App\Services;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     *@param  string  $lang
     * @return \Illuminate\Http\Response
     */

    public function indexPerLang($lang){
        $lang = Language::where('slug', $lang)->first();
        $data = Services::where('lang_id', $lang->id)->get();
        return response()->json($data, 200);

    }
    /**
     * Display a listing of the resource.
     *@param  integer  $id
     * @return \Illuminate\Http\Response
     */


    public function index()
    {
        $data = Services::orderBy('position', 'ASC')->with('contents')->get();
        return response()->json($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //TODO: check if slug is duplicata | unique slug
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Services::find($id)->contents;
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
        //
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
