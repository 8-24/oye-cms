<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.0/semantic.min.css">
        <link rel="stylesheet" href="{{ asset('admin/assets/css/console.css') }}">
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>
    <div id="console"></div>
    <script src="{{ asset('admin/assets/js/admin.js') }}"></script>
    <script src="{{ asset('https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.0/semantic.min.js') }}"></script>
    </body>
</html>
