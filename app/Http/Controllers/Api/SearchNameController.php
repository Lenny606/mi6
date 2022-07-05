<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;

class SearchNameController extends Controller
{
    public function index(Request $request)
    {

        $search = $request->input('name');
        
        //searches in names 
        $people = Person::where('name', 'LIKE', '%' .$search."%")->get();
        return $people;
    }
}
