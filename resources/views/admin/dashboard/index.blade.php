@extends('admin.layouts.default')
@section('judul', 'Halaman Dashboard')

@php
$folder = 'dashboard';
@endphp

@section("$folder", 'my-nav-active')

{{-- content --}}
@section('content')
    <div class="col-12">
        <section class="card">
            <div class="card-body">
                <h1 class="text-center">Selamat Datang Admin</h1>
            </div>
        </section>
    </div>
@endsection
