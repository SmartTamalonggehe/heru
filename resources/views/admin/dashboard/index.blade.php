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
                <h4>Grafik</h4>
            </div>
        </section>
    </div>
@endsection
