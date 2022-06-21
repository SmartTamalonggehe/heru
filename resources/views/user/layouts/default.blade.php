<!doctype html>
<html class="fixed has-top-menu">

@include('gen-layouts.head')

<body>
    <section class="body">

        <!-- start: header -->
        @include('user.layouts.header')
        <!-- end: header -->

        @yield('content')
        <div id="role" style="display: none">user</div>
    </section>

    @include('gen-layouts.script')
    <script>
        // get id mainNav
        const mainNav = document.getElementById('mainNav');
        // find href in mainNav
        const href = mainNav.querySelectorAll('a');
        // if href == location then add class active to parent
        href.forEach(function(item) {
            if (item.href == location.href) {
                item.parentElement.classList.add('active');
            }
        });
    </script>

</body>

</html>
