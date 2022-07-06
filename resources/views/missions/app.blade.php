@extends("layouts/main")

@section('content')

{{-- <h1> Missions app: </h1> --}}

{{-- react rendering here --}}
<div class="container">
    <div id="root"></div>

</div>

{{-- script were is react in reasources --}}
<script src="{{mix('js/missions.js')}}"></script>

@endsection