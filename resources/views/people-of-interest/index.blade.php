@extends ('layouts.main')

@section ('content')
{{-- <div class="main-panel">
    <p>Welcome People Of Interest</p>
</div> --}}
<<<<<<< HEAD
<div class="main-panel" id="root">
    <script src="{{ mix(" /js/people-of-interest.js") }}"></script>
</div>
=======
    {{-- @foreach ($people as $person)
        <p>{{ $person->name }} is {{ $person->occupation }}</p>
        <p>Known aliases:</p>
        <ul>
            @foreach ($person->aliases as $alias)
            <li>{{ $alias->alias }}</li>
            @endforeach
        </ul>
    @endforeach --}}
    <div id="root">
        <script src="{{ mix("/js/people-of-interest.js") }}"></script>
    </div>
>>>>>>> fc6eda5d03d7862bb8ba3957b8fc049f53803409
@endsection