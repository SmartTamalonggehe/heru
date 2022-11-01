@extends('user.layouts.default')

@section('judul', 'Dahsboard')

@php
    $folder = 'batu_gamping';
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
    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.2.2/mapbox-gl-draw.js"></script>
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.2.2/mapbox-gl-draw.css"
        type="text/css">
@endsection

@section('content')
    <div id="route" style="display: none">batu_gamping</div>
    <div id="batu" style="display: none">?nm_batu=kalkarenit</div>
    <input type="hidden" name="nm_batu" id="nm_batu" value="batugamping">
    <div class="mt-5">
        <section role="main" class="content-body">
            <!-- start: page -->
            <div class="row">
                <div class="col-lg-12">
                    <section class="card">
                        <div class="card-body">
                            <div id="map"></div>
                            <div id="info"></div>
                        </div>
                    </section>
                </div>
            </div>
            <!-- end: page -->
        </section>
    </div>
@endsection
@section('script')
    <script src="{{ mix('js/mapbox/addPolygon.js') }}"></script>
@endsection
