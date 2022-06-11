<aside id="sidebar-left" class="sidebar-left">

    <div class="sidebar-header">
        <div class="sidebar-title">
            Navigation
        </div>
        <div class="sidebar-toggle d-none d-md-block" data-toggle-class="sidebar-left-collapsed" data-target="html"
            data-fire-event="sidebar-left-toggle">
            <i class="fas fa-bars" aria-label="Toggle sidebar"></i>
        </div>
    </div>

    <div class="nano">
        <div class="nano-content">
            <nav id="menu" class="nav-main" role="navigation">

                <ul class="nav nav-main">
                    <li class="@yield('dashboard')">
                        <a class="nav-link" href="{{ route('admin.dashboard') }}">
                            <i class="bx bx-home-alt" aria-hidden="true"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li class="@yield('geomorfologi')">
                        <a class="nav-link" href="{{ route('admin.geomorfologi') }}">
                            <i class='bx bxs-speaker' aria-hidden="true"></i>
                            <span>Geomormologi</span>
                        </a>
                    </li>
                    <li class="@yield('kala')">
                        <a class="nav-link" href="{{ route('admin.kala') }}">
                            <i class="bx bxs-buildings" aria-hidden="true"></i>
                            <span>Kala</span>
                        </a>
                    </li>
                    <li class="nav-parent">
                        <a class="nav-link" href="#">
                            <i class="bx bx-map" aria-hidden="true"></i>
                            <span>Sebaran</span>
                        </a>
                        <ul class="nav nav-children">
                            <li>
                                <a class="nav-link" href="{{ route('admin.batu_gamping') }}">
                                    <span>Batugamping</span>
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="tambagang">
                                    Tambag Kalkarenit
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="tambagang">
                                    Avulfal
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </nav>
        </div>

        <script>
            // Maintain Scroll Position
            if (typeof localStorage !== 'undefined') {
                if (localStorage.getItem('sidebar-left-position') !== null) {
                    var initialPosition = localStorage.getItem('sidebar-left-position'),
                        sidebarLeft = document.querySelector('#sidebar-left .nano-content');

                    sidebarLeft.scrollTop = initialPosition;
                }
            }
        </script>

    </div>

</aside>
