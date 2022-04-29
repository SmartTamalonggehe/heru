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
    if (tools.route === "nilai") {
        document.querySelector(".gambar_lama").innerHTML = "";
    }

    $(".tampilModal").modal("show");
}

const btnTambah = document.getElementById("tambah");
if (btnTambah) {
    btnTambah.addEventListener("click", function () {
        if (tools.route === "koordinat" || tools.route === "geomorfologi") {
            costumeForm.formPolygon();
        }
        tampilForm();
        tools.save_method = "add";
        $("#id").val("");
        $(".inputReset").val("");
        $(".selectReset").val("").trigger("change");
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
                if (response.type === "error") {
                    return 0;
                }
                $("#formKu").trigger("reset");
                $(".selectReset").val("").trigger("change");
                resetPicture();
                let oTable = $("#my_table").dataTable();
                oTable.fnDraw(false);
                if (tools.save_method == "Ubah") {
                    $(".tampilModal").modal("hide");
                    tools.save_method = "add";
                }
            },
        }).fail(function (jqXHR, ajaxOptions, thrownError) {
            alert("Error. Server tidak merespon");
        });
    });
}

const resetPicture = () => {
    $(".custom-file-container__image-preview").attr("style", "color: aqua");
    $(".custom-file-container__custom-file__custom-file-control").html(
        `Choose file...
        <span class="custom-file-container__custom-file__custom-file-control__button"> Browse </span>`
    );
};

// Script Tambah & Ubah
if (tools.route === "nilai" || tools.route === "kartumhs") {
    formGambar();
} else {
    formBiasa();
}
