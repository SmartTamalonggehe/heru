@include('gen-layouts.head')

<body>
    <section class="body">

        <!-- start: header -->
        @include('admin.layouts.header')
        <!-- end: header -->

        <div class="inner-wrapper">
            <!-- start: sidebar -->
            @include('admin.layouts.sidebar')
            <!-- end: sidebar -->

            <section role="main" class="content-body">
                <header class="page-header">
                    <h2>@yield('judul')</h2>

                    <div class="right-wrapper text-end me-3">
                        <ol class="breadcrumbs">
                            @yield('breadcrumb')
                        </ol>
                    </div>
                </header>

                <!-- start: page -->
                <div class="row">
                    @yield('content')
                </div>
                <!-- end: page -->
            </section>
        </div>

    </section>
    <div id="role" style="display: none">admin</div>

    {{-- script --}}
    @include('gen-layouts.script')

</body>

</html>
