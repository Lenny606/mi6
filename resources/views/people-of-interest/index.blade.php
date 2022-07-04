@extends ('layouts.main')

@section('content')
{{-- <div class="main-panel">
    <p>Welcome People Of Interest</p>
</div> --}}
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
@endsection