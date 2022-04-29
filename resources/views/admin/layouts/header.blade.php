<header class="header">
    <div class="logo-container">
        <h2 class="logo">SIG Sebaran Batu Gamping</h2>
    </div>

    <!-- start: search & user box -->
    <div class="header-right">
        <span class="separator"></span>

        <div id="userbox" class="userbox">
            <a class="text-dark" role="menuitem" tabindex="-1" href="javascript::void(0)"
                onclick="event.preventDefault(); $('#logout-form').submit()"><i class="bx bx-power-off"></i>
                Logout</a>
        </div>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            @csrf
        </form>
    </div>
    <!-- end: search & user box -->
</header>
