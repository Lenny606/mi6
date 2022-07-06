<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;
use App\Models\Mission;

class PersonController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->status;

        if (!empty($status)) {
            $people = Person::with('aliases')
                ->where('status_id', '=', $status)
                ->with('missions')
                ->get();
        } else {
            $people = Person::with('aliases')->with('missions')->get();
            
        }

        return $people;
    }
}



// As the query is being formulated, add an if condition. It would say that if the value of $status is not empty, another ->where call will be called on the query being built.

// In the where it will ask that the value of status_id is equal to the value of the $status variable.
