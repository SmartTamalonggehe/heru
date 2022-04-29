@extends('user.layouts.default')

@section('judul', 'Dahsboard')

@section('css')
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <style>
        @font-face {
            font-family: 'Vegawanty';
            src: url('{{ asset('font/VegawantyRegular-owEPx.ttf') }}');
        }

        @font-face {
            font-family: 'BELLABOO';
            src: url('{{ asset('font/BELLABOO-Regular.ttf') }}');
        }

        .my-dashboard {
            background-image: url('{{ asset('images/bg/bg1.jpg') }}');
            background-size: cover;
            background-attachment: fixed;
            height: 100vh;
            top: 0;
        }

        .welcome {
            position: absolute;
            text-align: center;
            top: 30%;
        }

        .welcome h3 {
            font-family: 'Vegawanty';
            font-size: 4rem;
            color: white;
        }

        .welcome h4 {
            font-family: 'Vegawanty';
            font-size: 3rem;
            font-weight: bold;
            color: white;
            line-height: 3rem;
            margin-top: 30px;
            letter-spacing: 2px;
        }

    </style>
@endsection

@section('content')
    <div class="my-dashboard">
        <!-- start: page -->
        <div class="welcome">
            <h3 class="animate__animated animate__fadeInDown animate__slow">Selamat Datang di Website</h3>
            <h4 class="animate__animated animate__slideInLeft animate__delay-1s animate__slow">Sistem Informasi Geografis
                penyebaran batu gamping pada kampung Holtekamp distrik Muara Tami</h4>
        </div>
        <!-- end: page -->
    </div>
@endsection
