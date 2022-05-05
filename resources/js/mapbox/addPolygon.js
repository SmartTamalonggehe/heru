import * as tools from "./tools";
// add script to head
const addScript = () => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@turf/turf@6/turf.min.js";
    script.async = true;
    document.head.appendChild(script);
};
addScript();

const map = tools.map;

map.on("mousemove", (e) => {
    document.getElementById("info").innerHTML =
        // `e.point` is the x, y coordinates of the `mousemove` event
        // relative to the top-left corner of the map.
        JSON.stringify(e.point) +
        "<br />" +
        // `e.lngLat` is the longitude, latitude geographical position of the event.
        JSON.stringify(e.lngLat.wrap());
});

// Draw a polygon on the map
const draw = new MapboxDraw({
    displayControlsDefault: false,
    // Select which mapbox-gl-draw control buttons to add to the map.
    controls: {
        polygon: true,
        trash: true,
    },
    // Set mapbox-gl-draw to draw by default.
    // The user does not have to click the polygon control button first.
    //   defaultMode: "draw_polygon",
});
map.addControl(draw);

map.on("draw.create", updateArea);
map.on("draw.delete", updateArea);
map.on("draw.update", updateArea);

function updateArea(e) {
    const data = draw.getAll();
    if (data.features.length > 0) {
        const area = turf.area(data);
        // Restrict the area to 2 decimal points.
        const rounded_area = Math.round(area * 100) / 100;
        const inputMeter = document.getElementById("meter");
        if (inputMeter) {
            inputMeter.value = rounded_area;
        }
        const coord = data.features[0].geometry.coordinates[0];
        // click #tambah
        document.getElementById("tambah").click();
        const textToggle = document.querySelector(
            ".modal .toggle .label-toggle"
        );
        textToggle.innerHTML = `Jumlah Koordinat ${coord.length}`;
        draftCoord(coord);
        draw.deleteAll();
    } else {
        if (e.type !== "draw.delete") alert("Click the map to draw a polygon.");
    }
}

const draftCoord = (listCoord) => {
    const parent = document.querySelector(".modal .toggle .row");
    let inputCoord = "";
    for (let index = 0; index < listCoord.length; index++) {
        const el = listCoord[index];
        const inputLat = `
        <div class="col-12 col-lg-6">
            <div class="mb-3">
                <label style="color: black" for="latitude${index}"
                    class="form-label">Latitude</label>
                <input type="text" class="form-control inputReset"
                    name="latitude[]" id="latitude${index}" value="${el[1]}" required>
                <div class="invalid-feedback">
                    Data Tidak Boleh Kosong
                </div>
            </div>
        </div>
        `;
        const inputLong = `<div class="col-12 col-lg-6">
            <div class="mb-3">
                <label style="color: black" for="longitude${index}"
                    class="form-label">Longitude</label>
                <input type="text" class="form-control inputReset"
                    name="longitude[]" id="longitude${index}" value="${el[0]}" required>
                <div class="invalid-feedback">
                    Data Tidak Boleh Kosong
                </div>
            </div>
        </div>`;
        inputCoord += inputLong + inputLat;
    }
    parent.innerHTML = inputCoord;
};
// Show the coordinates of the polygon on the map
const loadData = async () => {
    const data = await tools.getCoordinates();
    map.on("load", () => {
        let coordinates = [];
        const features = [];

        // if data exist
        if (data.length > 0) {
            data.forEach((coord) => {
                coord.koordinat.koordinat_det.forEach((element) => {
                    coordinates.push([element.longitude, element.latitude]);
                });
                features.push({
                    type: "Feature",
                    properties: {
                        id: coord.id,
                        name: coord.nama,
                        ket: coord.ket,
                        meter: coord.meter,
                        color: coord.warna, //coord.warna, //rgba(255, 0, 114, 0.24)
                    },
                    geometry: {
                        type: "Polygon",
                        coordinates: [coordinates],
                    },
                });
                coordinates = [];
            });
        }

        // Add a source for the state polygons.
        map.addSource("area", {
            type: "geojson",
            data: {
                type: "FeatureCollection",
                features,
            },
        });

        // Add a layer showing the state polygons.
        map.addLayer({
            id: "area-layer",
            type: "fill",
            source: "area",
            paint: {
                "fill-color": ["get", "color"],
            },
        });

        // When a click event occurs on a feature in the area layer,
        // open a popup at the location of the click, with description
        // HTML from the click event's properties.
        map.on("click", "area-layer", (e) => {
            let show = e.features[0].properties.name;
            if (tools.route == "batu_gamping") {
                show = `${e.features[0].properties.ket}, ${e.features[0].properties.meter} meter`;
            }
            new mapboxgl.Popup().setLngLat(e.lngLat).setHTML(show).addTo(map);
        });

        // Change the cursor to a pointer when
        // the mouse is over the area layer.
        map.on("mouseenter", "area-layer", () => {
            map.getCanvas().style.cursor = "pointer";
        });

        // Change the cursor back to a pointer
        // when it leaves the area layer.
        map.on("mouseleave", "area-layer", () => {
            map.getCanvas().style.cursor = "";
        });
        // when mouse double click
        map.on("contextmenu", "area-layer", (e) => {
            const href = e.features[0].properties.id;
            sweetAlert(href);
        });
    });
};

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
                url: `${tools.uri}/${href}`,
                type: "POST",
                data: { _method: "DELETE", _token: tools.csrf_token },
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

loadData();
