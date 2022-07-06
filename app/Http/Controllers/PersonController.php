<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Person;

class PersonController extends Controller
{
    public function index()
    {
        $people = Person::where('id')->get();

        return view('people-of-interest.index', compact('people'));
    }

    public function edit(Request $request)
    {
        $person = Person::findOrFail($request->input('id'));
        $person->name = $request->input('name');
        $person->save();
        
        return (
            redirect(route('people-index'))
        );
        
        // return [
        //     'id' => $request->input('id'),
        //     'name' => $request->input('name'),
        // ];
    }
}
