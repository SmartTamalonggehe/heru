const tools = require("./tools");

import * as costumeForm from "./costumeForm";
toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
};

function tampilForm() {
    document.getElementById("judul_form").innerText = "From Tambah Data";
    document.getElementById("tombolForm").innerText = "Simpan Data";
    $(".tampilModal").modal("show");
}

const btnTambah = document.getElementById("tambah");
if (btnTambah) {
    btnTambah.addEventListener("click", function () {
        if (tools.route === "koordinat" || tools.route === "geomorfologi") {
            costumeForm.formPolygon();
        }
        console.log(tools.route);
        tampilForm();
        tools.save_method = "add";
        $("#id").val("");
        $(".inputReset").val("");
        $(".selectReset").val("").trigger("change");
        removeImages();
    });
}

function formBiasa() {
    $("#formKu").on("submit", function (e) {
        e.preventDefault();
        let id = $("#id").val();
        let dataKu = $("#formKu").serialize();
        let url;
        let method;
        if (tools.save_method == "add") {
            url = `${tools.uri}`;
            method = "POST";
        } else {
            url = `${tools.uri}/:id`;
            url = url.replace(":id", id);
            method = "PUT";
        }
        $.ajax({
            url: url,
            type: method,
            data: dataKu,
            success: function (response) {
                toastr[response.type](response.pesan, response.judul);
                if (response.type !== "error") {
                    $("#id").val("");
                    $(".inputReset").val("");
                    let oTable = $("#my_table").dataTable();
                    oTable.fnDraw(false);
                    $(".selectReset").val("").trigger("change");
                    // setTimeOut for reloading page
                    setTimeout(function () {
                        location.reload();
                    }, 1000);
                }
                if (tools.save_method == "Ubah") {
                    $(".tampilModal").modal("hide");
                }
            },
        }).fail(function (res) {
            console.log(res);
        });
    });
}

function formGambar() {
    $("#formGambar").on("submit", function (e) {
        e.preventDefault();
        let id = $("#id").val();
        let dataKu = new FormData(this);
        let url;
        if (tools.save_method == "add") {
            url = `${tools.uri}`;
        } else {
            url = `${tools.uri}/:id`;
            url = url.replace(":id", id);
            dataKu.append("_method", "PUT");
        }
        $.ajax({
            url: url,
            type: "POST",
            data: dataKu,
            contentType: false,
            cache: false,
            processData: false,
            success: function (response) {
                toastr[response.type](response.pesan, response.judul);
                if (response.type !== "error") {
                    $("#id").val("");
                    $(".inputReset").val("");
                    let oTable = $("#my_table").dataTable();
                    oTable.fnDraw(false);
                    $(".selectReset").val("").trigger("change");
                    // setTimeOut for reloading page
                    setTimeout(function () {
                        location.reload();
                    }, 1000);
                }
            },
        }).fail(function (jqXHR, ajaxOptions, thrownError) {
            alert("Error. Server tidak merespon");
        });
    });
}

const removeImages = () => {
    const foto = document.getElementById("foto");
    const fotoPreview = document.querySelector(".fotoPreview");
    if (fotoPreview) {
        fotoPreview.style.transition = "all 0.3s ease-in-out";
        fotoPreview.style.opacity = "0";
        // remove image
        setTimeout(() => {
            fotoPreview.style.backgroundImage = "";
            fotoPreview.style.display = "none";
            foto.value = "";
            // delete fotoPreview
            fotoPreview.remove();
        }, 100);
    }
    const buttonDelete = document.querySelector(".remove-image");
    if (buttonDelete) {
        buttonDelete.remove();
    }

    const foto_lama = document.querySelector(".foto_lama");
    if (foto_lama) {
        foto_lama.remove();
    }
};
// Script Tambah & Ubah
if (tools.route === "batu_gamping") {
    formGambar();
} else {
    formBiasa();
}

export default removeImages;
