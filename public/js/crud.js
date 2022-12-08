/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/my_crud/costumeForm.js":
/*!*********************************************!*\
  !*** ./resources/js/my_crud/costumeForm.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formPolygon": () => (/* binding */ formPolygon)
/* harmony export */ });
var formPolygon = function formPolygon() {
  var textToggle = document.querySelector(".modal .toggle .label-toggle");
  textToggle.innerHTML = "Koordinat"; // const parent = document.querySelector(".modal .toggle .row");
  // const inputCoord = `<div class="col-12">
  //                         <button type="button" id="addCoord" class="btn btn-secondary">
  //                             Tambah Koordinat
  //                         </button>
  //                     </div>;`;
  // parent.innerHTML = inputCoord;
};



/***/ }),

/***/ "./resources/js/my_crud/hapus.js":
/*!***************************************!*\
  !*** ./resources/js/my_crud/hapus.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var tools = __webpack_require__(/*! ./tools */ "./resources/js/my_crud/tools.js");

var href;
var csrf_token = $('meta[name="csrf_token"]').attr("content");
$("body").on("click", ".btnHapus", function (e) {
  e.preventDefault();
  href = $(this).data("id");
  Swal.fire({
    title: "Apa anda yakin?",
    text: "Data yang telah dihapus tidak dapat dikembalikan!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus",
    cancelButtonText: "Batal"
  }).then(function (result) {
    if (result.isConfirmed) {
      $.ajax({
        url: "".concat(tools.uri, "/").concat(href),
        type: "POST",
        data: {
          _method: "DELETE",
          _token: csrf_token
        },
        beforeSend: function beforeSend() {// lakukan sesuatu sebelum data dikirim
        },
        success: function success(response) {
          // lakukan sesuatu jika data sudah terkirim
          Swal.fire("Berhasil!", response.pesan, response.type);
          var oTable = $("#my_table").dataTable(); // setTimeOut for reloading page

          setTimeout(function () {
            location.reload();
          }, 1000);
          oTable.fnDraw(false);
        }
      });
    }
  });
});

/***/ }),

/***/ "./resources/js/my_crud/tambah.js":
/*!****************************************!*\
  !*** ./resources/js/my_crud/tambah.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _costumeForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./costumeForm */ "./resources/js/my_crud/costumeForm.js");
var tools = __webpack_require__(/*! ./tools */ "./resources/js/my_crud/tools.js");


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
  hideMethod: "fadeOut"
};

function tampilForm() {
  document.getElementById("judul_form").innerText = "From Tambah Data";
  document.getElementById("tombolForm").innerText = "Simpan Data";
  $(".tampilModal").modal("show");
}

var btnTambah = document.getElementById("tambah");

if (btnTambah) {
  btnTambah.addEventListener("click", function () {
    if (tools.route === "koordinat" || tools.route === "geomorfologi") {
      _costumeForm__WEBPACK_IMPORTED_MODULE_0__.formPolygon();
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
    var id = $("#id").val();
    var dataKu = $("#formKu").serialize();
    var url;
    var method;

    if (tools.save_method == "add") {
      url = "".concat(tools.uri);
      method = "POST";
    } else {
      url = "".concat(tools.uri, "/:id");
      url = url.replace(":id", id);
      method = "PUT";
    }

    $.ajax({
      url: url,
      type: method,
      data: dataKu,
      success: function success(response) {
        toastr[response.type](response.pesan, response.judul);

        if (response.type !== "error") {
          $("#id").val("");
          $(".inputReset").val("");
          var oTable = $("#my_table").dataTable();
          oTable.fnDraw(false);
          $(".selectReset").val("").trigger("change"); // setTimeOut for reloading page

          setTimeout(function () {
            location.reload();
          }, 1000);
        }

        if (tools.save_method == "Ubah") {
          $(".tampilModal").modal("hide");
        }
      }
    }).fail(function (res) {
      console.log(res);
    });
  });
}

function formGambar() {
  $("#formGambar").on("submit", function (e) {
    e.preventDefault();
    var id = $("#id").val();
    var dataKu = new FormData(this);
    var url;

    if (tools.save_method == "add") {
      url = "".concat(tools.uri);
    } else {
      url = "".concat(tools.uri, "/:id");
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
      success: function success(response) {
        toastr[response.type](response.pesan, response.judul);

        if (response.type !== "error") {
          $("#id").val("");
          $(".inputReset").val("");
          var oTable = $("#my_table").dataTable();
          oTable.fnDraw(false);
          $(".selectReset").val("").trigger("change"); // setTimeOut for reloading page

          setTimeout(function () {
            location.reload();
          }, 1000);
        }
      }
    }).fail(function (jqXHR, ajaxOptions, thrownError) {
      alert("Error. Server tidak merespon");
    });
  });
}

var removeImages = function removeImages() {
  var foto = document.getElementById("foto");
  var fotoPreview = document.querySelector(".fotoPreview");

  if (fotoPreview) {
    fotoPreview.style.transition = "all 0.3s ease-in-out";
    fotoPreview.style.opacity = "0"; // remove image

    setTimeout(function () {
      fotoPreview.style.backgroundImage = "";
      fotoPreview.style.display = "none";
      foto.value = ""; // delete fotoPreview

      fotoPreview.remove();
    }, 100);
  }

  var buttonDelete = document.querySelector(".remove-image");

  if (buttonDelete) {
    buttonDelete.remove();
  }

  var foto_lama = document.querySelector(".foto_lama");

  if (foto_lama) {
    foto_lama.remove();
  }
}; // Script Tambah & Ubah


if (tools.route === "batu_gamping") {
  formGambar();
} else {
  formBiasa();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeImages);

/***/ }),

/***/ "./resources/js/my_crud/tools.js":
/*!***************************************!*\
  !*** ./resources/js/my_crud/tools.js ***!
  \***************************************/
/***/ ((module) => {

// Variable
var route = document.getElementById("route").textContent;
var save_method;
var uri = "/crud/".concat(route);
module.exports = {
  route: route,
  save_method: save_method,
  uri: uri
};

/***/ }),

/***/ "./resources/js/my_crud/ubah.js":
/*!**************************************!*\
  !*** ./resources/js/my_crud/ubah.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var tools = __webpack_require__(/*! ./tools */ "./resources/js/my_crud/tools.js");

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
  } // Jika route gaji


  if (tools.route === "gaji") {
    $("#id").val(data.id);
    $("#pegawai_id").val(data.pegawai_id).trigger("change");
    $("#gaji_pokok").val(data.gaji_pokok);
    $("#pembulatan").val(data.pembulatan);
    $("#tgl_gaji").val(data.tgl_gaji);
    $(".tampilModal").modal("show");
    $("#judul").html("Silahkan Merubah Data");
    $("#tombolForm").html("Ubah Data");
  } // Jika route tunjangan


  if (tools.route === "tunjangan") {
    $("#id").val(data.id);
    $("#nm_tunjangan").val(data.nm_tunjangan).trigger("change");
    $("#jml_tunjangan").val(data.jml_tunjangan);
    $(".tampilModal").modal("show");
    $("#judul").html("Silahkan Merubah Data");
    $("#tombolForm").html("Ubah Data");
  } // Jika route potongan


  if (tools.route === "potongan") {
    $("#id").val(data.id);
    $("#nm_potongan").val(data.nm_potongan).trigger("change");
    $("#jml_potongan").val(data.jml_potongan);
    $(".tampilModal").modal("show");
    $("#judul").html("Silahkan Merubah Data");
    $("#tombolForm").html("Ubah Data");
  } // Jika route surat


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
  } // Jika route pengikut


  if (tools.route === "pengikut") {
    $("#id").val(data.id);
    $("#pegawai_id").val(data.pegawai_id).trigger("change");
    $(".tampilModal").modal("show");
    $("#judul").html("Silahkan Merubah Data");
    $("#tombolForm").html("Ubah Data");
  } // Jika route kwitansi


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
  } // Jika route kwitansiDetail


  if (tools.route === "kwitansiDetail") {
    $("#id").val(data.id);
    $("#kwitansi_id").val(data.kwitansi_id);
    $("#uraian").val(data.uraian);
    $("#lama").val(data.lama);
    $("#jumlah").val(data.jumlah);
    $(".tampilModal").modal("show");
    $("#judul").html("Silahkan Merubah Data");
    $("#tombolForm").html("Ubah Data");
  } // Jika route mhs


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
  } // Jika route nilai alternatif


  if (tools.route === "nilaiAlternatif") {
    (function () {
      var gpAlternatif = data.reduce(function (r, a) {
        r[a.alternatif_id] = [].concat(_toConsumableArray(r[a.alternatif_id] || []), [a]);
        return r;
      }, {}); // cari select alternatif

      var selectAlt = document.getElementById("alternatif_id");
      var isiId = [];

      for (var i in gpAlternatif) {
        var subKrit = gpAlternatif[i];
        subKrit.forEach(function (el) {
          isiId.push(el.id);
          var isiOption = "<option value=\"".concat(el.alternatif.id, "\" selected>").concat(el.alternatif.nm_alternatif, "</option>");
          selectAlt.innerHTML = isiOption;
          $("#".concat(el.sub_kriteria.kriteria_id, "sub_kriteria_id")).val(el.sub_kriteria_id).trigger("change");
        });
      }

      $("#id").val(isiId);
      $(".tampilModal").modal("show");
      $("#judul").html("Silahkan Merubah Data");
      $("#tombolForm").html("Ubah Data");
    })();
  }
}

$("body").on("click", ".btnUbah", function (e) {
  e.preventDefault();
  var href = $(this).data("id");
  tools.save_method = "Ubah";
  $.ajax({
    url: "".concat(tools.uri, "/").concat(href, "/edit"),
    type: "GET",
    dataType: "JSON",
    beforeSend: function beforeSend() {// lakukan sesuatu sebelum data dikirim
    },
    success: function success(data) {
      // return console.log(data);
      dataForm(data);
    }
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./resources/js/crud.js ***!
  \******************************/
__webpack_require__(/*! ./my_crud/tools */ "./resources/js/my_crud/tools.js");

__webpack_require__(/*! ./my_crud/tambah */ "./resources/js/my_crud/tambah.js");

__webpack_require__(/*! ./my_crud/hapus */ "./resources/js/my_crud/hapus.js");

__webpack_require__(/*! ./my_crud/ubah */ "./resources/js/my_crud/ubah.js");
})();

/******/ })()
;