@extends('admin.layouts.default')
@section('judul', 'Halaman Kala')

@php
$folder = 'kala';
@endphp

@section("$folder", 'my-nav-active')

@section('css')
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css" rel="stylesheet">
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js"></script>
    <style>
        #map {
            width: 100%;
            height: 80vh;
        }

        #info {
            display: table;
            position: absolute;
            top: 16px;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            word-wrap: anywhere;
            white-space: pre-wrap;
            padding: 10px;
            border: none;
            border-radius: 3px;
            font-size: 12px;
            text-align: center;
            color: #222;
            background: #fff;
        }

    </style>

    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.2.2/mapbox-gl-draw.js"></script>
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.2.2/mapbox-gl-draw.css"
        type="text/css">
@endsection

@section('breadcrumb')
    <button type="button" class="btn btn-outline-primary d-none" id="tambah">Tambah Data</button>
@endsection

{{-- content --}}
@section('content')
    <div id="route" style="display: none"><?= $folder ?></div>

    <div class="col-12">
        <section class="card">
            <div class="card-body">
                <div id="map">
                </div>
                <div id="info"></div>
            </div>
        </section>
        <section class="card">
            <div class="card-body">
                <table class="table table-bordered table-striped mb-0" id="my_table">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Umur</th>
                            <th>Satuan</th>
                            <th>Regional</th>
                            <th>Ket</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </section>
    </div>

    @include("admin.$folder.form")
@endsection

@section('script')
    <script src="{{ mix('js/crud.js') }}"></script>
    <script src="{{ asset('vendor/datatables/media/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('vendor/datatables/media/js/dataTables.bootstrap5.min.js') }}"></script>
    <script src="{{ asset('vendor/bootstrapv5-colorpicker/js/bootstrap-colorpicker.js') }}"></script>
    <script src="{{ mix('js/mapbox/addPolygon.js') }}"></script>
    {{-- <script src="{{ mix('js/mapbox/showPolygon.js') }}"></script> --}}

    <script>
        $(document).ready(function() {
            let columns = [{
                    data: 'DT_RowIndex',
                    orderable: false,
                    searchable: false
                },
                {
                    data: 'nama',
                },
                {
                    data: 'umur',
                },
                {
                    data: 'satuan',
                },
                {
                    data: 'regional',
                },
                {
                    data: 'ket',
                },
                {
                    data: 'action',
                    orderable: false,
                    searchable: false
                }
            ];
            $("#my_table").DataTable({
                scrollX: true,
                dom: '<"row"<"col-lg-6"l><"col-lg-6"f>><"table-responsive"t>p',
                language: {
                    paginate: {
                        previous: "Kembali",
                        next: "Selanjutnya"
                    }
                },
                processing: true,
                serverSide: true,
                order: [
                    [1, 'asc']
                ],
                ajax: `/crud/${route.textContent}`,
                columns
            });
        });
    </script>
@endsection
