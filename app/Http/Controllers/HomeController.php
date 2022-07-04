<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\HomeController;
use App\Models\Alias;

class HomeController extends Controller
{
    //
    public function index()
    {
        return view("index");
            
        
        // $aliases = Alias::get();

        // dd($aliases);


    }
}
