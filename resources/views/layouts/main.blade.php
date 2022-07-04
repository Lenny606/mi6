<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Noto+Serif+Display:wght@200;400;700&display=swap" />
    <link rel="stylesheet" href="{{ mix('/css/style.css') }}" />
    <title>MI6 HQ</title>
</head>

<body>
    <x-nav></x-nav>

    @yield ('content')
</body>

</html>