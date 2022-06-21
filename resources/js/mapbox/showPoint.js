import { getCoordinates, map, sweetAlert } from "./tools";
const role = document.getElementById("role").textContent;

const showPoint = async () => {
    const data = await getCoordinates();
    console.log(data);
    // filter data with jenis = point and remove null value
    const point = data.filter(
        (item) => item.koordinat !== null && item.koordinat.jenis === "point"
    );

    const featurePoint = point.map(
        (item) => {
            return {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [
                        item.koordinat.koordinat_det[0].longitude,
                        item.koordinat.koordinat_det[0].latitude,
                    ],
                },
                properties: {
                    id: item.id,
                    ket: item.ket,
                    warna: item.warna,
                },
            };
        } // end of map
    ); // end of point.map

    map.addSource("point", {
        type: "geojson",
        data: {
            type: "FeatureCollection",
            features: featurePoint,
        },
    });

    map.addLayer({
        id: "point",
        source: "point",
        type: "circle",
        paint: {
            "circle-radius": 10,
            "circle-color": ["get", "warna"],
            "circle-stroke-color": ["get", "warna"],
            "circle-stroke-width": 1,
        },
    });

    const popup = new mapboxgl.Popup({
        offset: [0, -15],
    });

    map.on("mouseenter", "point", function (e) {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const ket = e.features[0].properties.ket;
        popup
            .setLngLat(coordinates)
            .setHTML(
                `<table class="table mt-3 table-popup">
                            <tbody>
                                <tr>
                                    <td>Keterangan</td>
                                    <td>: ${ket}</td>
                                </tr>
                                ${
                                    role === "admin"
                                        ? ` <tr>
                                                <td colspan="2">
                                                    <button class="btn btn-danger btn-sm" id="hapus">Hapus</button>
                                                </td>
                                            </tr> `
                                        : ""
                                }
                            </tbody>
                        </table>
                `
            )
            .addTo(map);
        document.getElementById("hapus").addEventListener(
            "click",
            async () => {
                const id = e.features[0].properties.id;
                sweetAlert(id);
            } // end of click
        ); // end of addEventListener
    });
};

export default showPoint;
