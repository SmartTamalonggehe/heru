@extends('user.layouts.default')

@section('judul', 'Dahsboard')

@php
$folder = 'geomorfologi';
@endphp

@section('css')
    <style>
        #map {
            width: 100%;
            height: 80vh;
        }

        /* popup */
        .mapboxgl-popup {
            max-width: 200px;
            font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
            color: black;
            font-size: 12px
        }

    </style>

    <link href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css" rel="stylesheet">
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js"></script>
@endsection

@section('content')
    <div id="route" style="display: none"><?= $folder ?></div>
    <div class="mt-5">
        <section role="main" class="content-body">
            <!-- start: page -->
            <div class="row">
                <div class="col-lg-12">
                    <section class="card">
                        <div class="card-body">
                            <div id="map"></div>
                        </div>
                    </section>
                </div>
            </div>
            <!-- end: page -->
        </section>
    </div>
@endsection
@section('script')
    <script src="{{ mix('js/mapbox/showPolygon.js') }}"></script>
@endsection
