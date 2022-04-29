<!doctype html>
<html class="fixed">

@include('gen-layouts.head')

<body>
    <!-- start: page -->
    <section class="body-sign">
        <div class="center-sign">
            <ul type="none" class="text-danger">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
            <div class="panel card-sign">
                <div class="card-title-sign mt-3 text-end">
                    <h2 class="title text-uppercase font-weight-bold m-0"><i
                            class="bx bx-user-circle me-1 text-6 position-relative top-5"></i> Login</h2>
                </div>
                <div class="card-body">
                    <form method="post" action="{{ route('login') }}">
                        @csrf
                        <div class="form-group mb-3">
                            <label>Email</label>
                            <div class="input-group">
                                <input name="email" type="text" class="form-control form-control-lg" />
                                <span class="input-group-text">
                                    <i class="bx bx-user text-4"></i>
                                </span>
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label>Password</label>
                            <div class="input-group">
                                <input name="password" type="password" class="form-control form-control-lg" />
                                <span class="input-group-text">
                                    <i class="bx bx-lock text-4"></i>
                                </span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-8">
                                <div class="checkbox-custom checkbox-default">
                                    <input id="RememberMe" name="rememberme" type="checkbox" />
                                    <label for="RememberMe">Ingat Saya</label>
                                </div>
                            </div>
                            <div class="col-sm-4 text-end">
                                <button type="submit" class="btn btn-primary mt-2">Login</button>
                            </div>
                            <div class="col-12 text-center mt-3">
                                <a href="{{ route('user.index') }}" class="">Kembali Ke Dashboard</a>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    </section>
    <!-- end: page -->

    <!-- Vendor -->
    @include('gen-layouts.script')

</body>

</html>
