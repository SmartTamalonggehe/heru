import { map } from "./tools";

const addPoint = () => {
    console.log("addPoint");
    const marker = new mapboxgl.Marker({
        draggable: true,
        color: "red",
    })
        .setLngLat([140.79355678554617, -2.6129059598329007])
        .addTo(map);

    function onDragEnd() {
        const lngLat = marker.getLngLat();
        console.log(`Longitude: ${lngLat.lng} Latitude: ${lngLat.lat}`);
        document.getElementById("tambah").click();

        const parent = document.querySelector(".modal .toggle .row");
        const index = 0;
        const inputLat = `
        <div class="col-12 col-lg-6">
            <div class="mb-3">
                <label style="color: black" for="latitude${index}"
                    class="form-label">Latitude</label>
                <input type="text" class="form-control inputReset"
                    name="latitude[]" id="latitude${index}" value="${lngLat.lat}" required>
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
                    name="longitude[]" id="longitude${index}" value="${lngLat.lng}" required>
                <div class="invalid-feedback">
                    Data Tidak Boleh Kosong
                </div>
            </div>
        </div>`;
        const inputCoord = inputLong + inputLat;
        parent.innerHTML = inputCoord;

        document.getElementById("jenis").value = "point";
        document.getElementById("meter").value = 0;
    }

    marker.on("dragend", onDragEnd);
};

export default addPoint;
