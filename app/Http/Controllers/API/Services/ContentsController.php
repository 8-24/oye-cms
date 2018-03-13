<?php

namespace App\Http\Controllers\API\Services;

use App\Argumentcontents;
use App\Servicecontents;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
class ContentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Argumentcontents::all();
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
     * @param  string  $slug
     * @param  string  $lang
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $data = Servicecontents::where('slug', $slug)->first();
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
        $name = $request['name'];
        $slug = $request['slug'];
        $thumbnail = $request['thumbnail'];
        $illustration = $request['illustration'];
        $keywords = $request['keywords'];
        $description = $request['description'];
        $arguments = $request['arguments'];
        $content = $request['content'];

        Servicecontents::where('id', $id)->update([
            'name' => $name,
            'slug' => str_slug($slug, '-'),
            'illustration' => $illustration,
            'thumbnail' => $thumbnail,
            'keywords' => $keywords,
            'description' => $description,
            'arguments' => $arguments,
            'content' => $content
        ]);
        return response('service content updated', 200);

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
