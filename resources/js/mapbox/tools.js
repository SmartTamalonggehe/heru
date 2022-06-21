const token =
    "pk.eyJ1Ijoic21hcnRzcGFydGFjdXMiLCJhIjoiY2wwMWdiYTNzMGN3eTNkb2Z4Yjg3ODk4YSJ9.n7B5ZH-YXB_k-UKzGGoVfA";
// [-100.04, 38.907]
// [140.79245772703842, -2.617302697836186]

mapboxgl.accessToken = token;
const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/satellite-v9", // style URL
    center: [140.79245772703842, -2.617302697836186], // starting position
    zoom: 12, // starting zoom
});

let route = document.getElementById("route").textContent;

const csrf_token = $('meta[name="csrf_token"]').attr("content");
// get data coordinates with axios
function getCoordinates() {
    if (route === "batu_gamping") {
        const batu = document.getElementById("batu").textContent;
        route += `${batu}`;
    }

    return axios.get(`/api/${route}`).then((response) => {
        return response.data;
    });
}
const uri = `/crud/${route}`;

const sweetAlert = (href) => {
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
                url: `${uri}/${href}`,
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
};

export { map, token, getCoordinates, csrf_token, uri, route, sweetAlert };
