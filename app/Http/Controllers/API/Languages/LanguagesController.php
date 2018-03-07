<?php

namespace App\Http\Controllers\API\Languages;

use Illuminate\Validation\Validator;
use App\Language;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LanguagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = Language::all();
        if( !empty($items) ){
            return response()->json($items, 200);
        }else{
            return response()->json("Languages not found", 404);
        }

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
            $name = $request['name'];
            $slug = $request['slug'];
            $active = $request['active'] == 'on' ? true: false;
            $newItem = new Language();
            $newItem->name = $name;
            $newItem->slug = $slug;
            $newItem->active = $active;
            $newItem->save();
            $data = Language::all();
            return response()->json($data, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $data = Language::where('slug', $slug)->first();
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
        $id = $id;
        $name = $request['name'];
        $slug = $request['slug'];
        $active = $request['active'];
        Language::where('id', $id)->update([
           'name' => $name,
            'slug' => $slug,
            'active' => $active
        ]);
        return response()->json('updated', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = Language::where('id', $id)->first();
        $item->delete();
        $data = Language::all();
        return response()->json($data, 200);
    }
}
