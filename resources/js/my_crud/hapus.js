const tools = require("./tools");
let href;
let csrf_token = $('meta[name="csrf_token"]').attr("content");

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
        cancelButtonText: "Batal",
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: `${tools.uri}/${href}`,
                type: "POST",
                data: { _method: "DELETE", _token: csrf_token },
                beforeSend: function () {
                    // lakukan sesuatu sebelum data dikirim
                },
                success: function (response) {
                    // lakukan sesuatu jika data sudah terkirim
                    Swal.fire("Berhasil!", response.pesan, response.type);
                    let oTable = $("#my_table").dataTable();
                    // setTimeOut for reloading page
                    setTimeout(function () {
                        location.reload();
                    }, 1000);
                    oTable.fnDraw(false);
                },
            });
        }
    });
});
