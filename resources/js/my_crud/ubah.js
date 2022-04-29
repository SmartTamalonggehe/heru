const tools = require("./tools");

function dataForm(data) {
    // Jika route pegawai
    if (tools.route === "pegawai") {
        $("#id").val(data.id);
        $("#NIP").val(data.NIP);
        $("#nama").val(data.nama);
        $("#bidang").val(data.bidang);
        $("#bagian").val(data.bagian);
        $("#pangkat").val(data.pangkat);
        $("#golongan").val(data.golongan);
        $("#jabatan").val(data.jabatan);
        $("#instansi").val(data.instansi);
        $("#tingkat").val(data.tingkat);
        $(".tampilModal").modal("show");
        $("#judul").html("Silahkan Merubah Data");
        $("#tombolForm").html("Ubah Data");
    }
    // Jika route gaji
    if (tools.route === "gaji") {
        $("#id").val(data.id);
        $("#pegawai_id").val(data.pegawai_id).trigger("change");
        $("#gaji_pokok").val(data.gaji_pokok);
        $("#pembulatan").val(data.pembulatan);
        $("#tgl_gaji").val(data.tgl_gaji);
        $(".tampilModal").modal("show");
        $("#judul").html("Silahkan Merubah Data");
        $("#tombolForm").html("Ubah Data");
    }
    // Jika route tunjangan
    if (tools.route === "tunjangan") {
        $("#id").val(data.id);
        $("#nm_tunjangan").val(data.nm_tunjangan).trigger("change");
        $("#jml_tunjangan").val(data.jml_tunjangan);
        $(".tampilModal").modal("show");
        $("#judul").html("Silahkan Merubah Data");
        $("#tombolForm").html("Ubah Data");
    }
    // Jika route potongan
    if (tools.route === "potongan") {
        $("#id").val(data.id);
        $("#nm_potongan").val(data.nm_potongan).trigger("change");
        $("#jml_potongan").val(data.jml_potongan);
        $(".tampilModal").modal("show");
        $("#judul").html("Silahkan Merubah Data");
        $("#tombolForm").html("Ubah Data");
    }
    // Jika route surat
    if (tools.route === "surat") {
        $("#id").val(data.id);
        $("#pegawai_id").val(data.pegawai_id).trigger("change");
        $("#tgl_surat").val(data.tgl_surat);
        $("#no_surat").val(data.no_surat);
        $("#jenis_surat").val(data.jenis_surat);
        $("#dasar").val(data.dasar);
        $("#dari").val(data.dari);
        $("#tujuan").val(data.tujuan);
        $("#maksud").val(data.maksud);
        $("#alat_angkut").val(data.alat_angkut);
        $("#lama").val(data.lama);
        $("#tgl_berangkat").val(data.tgl_berangkat);
        $("#tgl_kembali").val(data.tgl_kembali);
        $("#beban_anggaran").val(data.beban_anggaran);
        $("#mata_anggaran").val(data.mata_anggaran);
        $("#keterangan").val(data.keterangan);
        $(".tampilModal").modal("show");
        $("#judul").html("Silahkan Merubah Data");
        $("#tombolForm").html("Ubah Data");
    }
    // Jika route pengikut
    if (tools.route === "pengikut") {
        $("#id").val(data.id);
        $("#pegawai_id").val(data.pegawai_id).trigger("change");
        $(".tampilModal").modal("show");
        $("#judul").html("Silahkan Merubah Data");
        $("#tombolForm").html("Ubah Data");
    }
    // Jika route kwitansi
    if (tools.route === "kwitansi") {
        $("#id").val(data.id);
        $("#surat_id").val(data.surat_id).trigger("change");
        $("#kode_rek").val(data.kode_rek);
        $("#tgl_kwitansi").val(data.tgl_kwitansi);
        $("#terima").val(data.terima);
        $("#tgl_terima").val(data.tgl_terima);
        $("#banyak").val(data.banyak);
        $("#terbilang").val(data.terbilang);
        $("#pergi").val(data.pergi);
        $("#pulang").val(data.pulang);
        $(".tampilModal").modal("show");
        $("#judul").html("Silahkan Merubah Data");
        $("#tombolForm").html("Ubah Data");
    }
    // Jika route kwitansiDetail
    if (tools.route === "kwitansiDetail") {
        $("#id").val(data.id);
        $("#kwitansi_id").val(data.kwitansi_id);
        $("#uraian").val(data.uraian);
        $("#lama").val(data.lama);
        $("#jumlah").val(data.jumlah);
        $(".tampilModal").modal("show");
        $("#judul").html("Silahkan Merubah Data");
        $("#tombolForm").html("Ubah Data");
    }

    // Jika route mhs
    if (tools.route === "mhs") {
        $("#id").val(data.id);
        $("#NPM").val(data.NPM);
        $("#nm_mhs").val(data.nm_mhs);
        $("#thn_angkatan").val(data.thn_angkatan).trigger("change");
        if (data.jenkel === "Perempuan") {
            $("#Perempuan").prop("checked", true);
        } else {
            $("#Laki-laki").prop("checked", true);
        }
        $(".tampilModal").modal("show");
        $("#judul").html("Silahkan Merubah Data");
        $("#tombolForm").html("Ubah Data");
    }

    // Jika route nilai alternatif
    if (tools.route === "nilaiAlternatif") {
        const gpAlternatif = data.reduce((r, a) => {
            r[a.alternatif_id] = [...(r[a.alternatif_id] || []), a];
            return r;
        }, {});
        // cari select alternatif
        const selectAlt = document.getElementById("alternatif_id");
        let isiId = [];
        for (let i in gpAlternatif) {
            const subKrit = gpAlternatif[i];
            subKrit.forEach((el) => {
                isiId.push(el.id);
                const isiOption = `<option value="${el.alternatif.id}" selected>${el.alternatif.nm_alternatif}</option>`;
                selectAlt.innerHTML = isiOption;
                $(`#${el.sub_kriteria.kriteria_id}sub_kriteria_id`)
                    .val(el.sub_kriteria_id)
                    .trigger("change");
            });
        }
        $("#id").val(isiId);
        $(".tampilModal").modal("show");
        $("#judul").html("Silahkan Merubah Data");
        $("#tombolForm").html("Ubah Data");
    }
}

$("body").on("click", ".btnUbah", function (e) {
    e.preventDefault();
    let href = $(this).data("id");
    tools.save_method = "Ubah";
    $.ajax({
        url: `${tools.uri}/${href}/edit`,
        type: "GET",
        dataType: "JSON",
        beforeSend: function () {
            // lakukan sesuatu sebelum data dikirim
        },
        success: function (data) {
            // return console.log(data);
            dataForm(data);
        },
    });
});
