<div class="modal fade bs-example-modal-lg tampilModal" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <section class="card">
                <header class="card-header">
                    <h2 class="card-title" id="judul_form"></h2>
                </header>
                <form id="formKu">
                    @csrf
                    <input type="hidden" name="id" class="inputReset" id="id">
                    <input type="hidden" name="jenis" id="jenis" value="polygon">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-3">
                                    <label for="nama" class="form-label">Nama</label>
                                    <input type="text" class="form-control inputReset" name="nama" id="nama"
                                        required>
                                    <div class="invalid-feedback">
                                        Data Tidak Boleh Kosong
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-5">
                                <div class="mb-3">
                                    <label for="relief" class="form-label">Relief</label>
                                    <input type="text" class="form-control inputReset" name="relief" id="relief"
                                        required>
                                    <div class="invalid-feedback">
                                        Data Tidak Boleh Kosong
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-2">
                                <div class="mb-3">
                                    <label for="lembah" class="form-label">Bentuk Lembah</label>
                                    <input type="text" class="form-control inputReset" name="lembah" id="lembah"
                                        required>
                                    <div class="invalid-feedback">
                                        Data Tidak Boleh Kosong
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-4">
                                <div class="mb-3">
                                    <label for="aliran" class="form-label">Pola Aliran</label>
                                    <input type="text" class="form-control inputReset" name="aliran" id="aliran"
                                        required>
                                    <div class="invalid-feedback">
                                        Data Tidak Boleh Kosong
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6">
                                <div class="mb-3">
                                    <label for="endogen" class="form-label">Endogen</label>
                                    <input type="text" class="form-control inputReset" name="endogen" id="endogen"
                                        required>
                                    <div class="invalid-feedback">
                                        Data Tidak Boleh Kosong
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6">
                                <div class="mb-3">
                                    <label for="eksogen" class="form-label">Eksogen</label>
                                    <input type="text" class="form-control inputReset" name="eksogen" id="eksogen"
                                        required>
                                    <div class="invalid-feedback">
                                        Data Tidak Boleh Kosong
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-4">
                                <div class="mb-3">
                                    <label for="lereng" class="form-label">Kemiringan Lereng</label>
                                    <input type="text" class="form-control inputReset" name="lereng" id="lereng"
                                        required>
                                    <div class="invalid-feedback">
                                        Data Tidak Boleh Kosong
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-8">
                                <div class="mb-3">
                                    <label for="kontur" class="form-label">Kerapatan Kontur</label>
                                    <input type="text" class="form-control inputReset" name="kontur" id="kontur"
                                        required>
                                    <div class="invalid-feedback">
                                        Data Tidak Boleh Kosong
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-4">
                                <div class="mb-3">
                                    <label for="warna" class="form-label">Warna</label>
                                    <div id="demo">
                                        <input id="warna" name="warna" class="form-control" type="text"
                                            value="rgb(0, 206, 255)" />
                                    </div>
                                    <div class="invalid-feedback">
                                        Data Tidak Boleh Kosong
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-8">
                                <div class="mb-3">
                                    <label for="luas" class="form-label">Luas</label>
                                    <input type="text" class="form-control inputReset" name="luas"
                                        id="luas" required>
                                    <div class="invalid-feedback">
                                        Data Tidak Boleh Kosong
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="toggle toggle-primary" data-plugin-toggle>
                                    <section class="toggle"> {{-- active --}}
                                        <label class="label-toggle">Koordinat</label>
                                        <div class="toggle-content">
                                            <div class="row mt-3">

                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <div class="row">
                            <div class="col-md-12 text-end">
                                <button type="submit" class="btn btn-primary" id="tombolForm">Simpan</button>
                                <button type="button" class="btn btn-default"
                                    data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </footer>
                </form>
            </section>
        </div>
    </div>

</div>
