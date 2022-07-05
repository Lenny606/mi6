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
        

        $people = Person::where('name', $search)->get();
        return $people;
    }
}
