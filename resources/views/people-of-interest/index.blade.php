@extends ('layouts.main')

@section ('content')
{{-- <div class="main-panel">
    <p>Welcome People Of Interest</p>
</div> --}}
<div class="main-panel" id="root">
    <script src="{{ mix(" /js/people-of-interest.js") }}"></script>
</div>
@endsection