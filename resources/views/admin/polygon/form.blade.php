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
                                    <label for="nm_koordinat" class="form-label">Nama Koordinat</label>
                                    <input type="text" class="form-control inputReset" name="nm_koordinat"
                                        id="nm_koordinat" required>
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
                                <button type="button" class="btn btn-default" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </footer>
                </form>
            </section>
        </div>
    </div>

</div>
