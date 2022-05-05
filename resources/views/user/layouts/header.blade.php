<header class="header header-nav-menu">
    <div class="logo-container">

        <button class="btn header-btn-collapse-nav d-lg-none" data-bs-toggle="collapse" data-bs-target=".header-nav">
            <i class="fas fa-bars"></i>
        </button>

        <!-- start: header nav menu -->
        <div class="header-nav collapse">
            <div class="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1">
                <nav>
                    <ul class="nav nav-pills" id="mainNav">
                        <li class="">
                            <a class="nav-link" href="{{ route('user.index') }}">
                                Dashboard
                            </a>
                        </li>
                        <li class="">
                            <a class="nav-link" href="{{ route('user.geomorfologi.index') }}">
                                Geomorfilogi
                            </a>
                        </li>
                        <li class="">
                            <a class="nav-link" href="{{ route('user.kala.index') }}">
                                Kala
                            </a>
                        </li>
                        <li class="">
                            <a class="nav-link" href="{{ route('user.batu_gamping.index') }}">
                                Batugamping
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- end: header nav menu -->
    </div>

    <!-- start: search & user box -->
    <div class="header-right">

        <span class="separator"></span>

        <div id="userbox" class="userbox">
            <a role="menuitem" tabindex="-1" href="{{ route('login') }}"><i class="bx bx-log-in"></i>
                Login</a>
        </div>
    </div>
    <!-- end: search & user box -->
</header>
