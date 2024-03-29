import { getCoordinates, map, sweetAlert } from "./tools";
const role = document.getElementById("role").textContent;
const { batu } = require("../my_crud/tools");

console.log(batu);

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
                    link: item.link,
                    gambar: item.gambar,
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
        const link = e.features[0].properties.link;
        const gambar = e.features[0].properties.gambar;
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
                                   batu === "batugamping"
                                       ? ` <tr>
                                                <td colspan="2"><a href="/${gambar}" target="blank"><img src="/${gambar}" class="img-thumbnail" alt="..."></a></td>
                                            </tr>`
                                       : ""
                               }
                                ${
                                    role === "admin"
                                        ? ` <tr>
                                                <td colspan="2">
                                                    <button class="btn btn-danger btn-sm" id="hapus">Hapus</button>
                                                </td>
                                            </tr> `
                                        : ""
                                }
                                ${
                                    link
                                        ? ` <tr>
                                                <td colspan="2">
                                                    <div class="text-center"><a href="${link}" target="_blank" title="${link}"
                                                    rel="noopener noreferrer">Link</a></div>
                                                </td>
                                            </tr>`
                                        : ""
                                }
                            </tbody>
                        </table>
                `
            )
            .addTo(map);
        const hapusPoint = document.getElementById("hapus");
        if (hapusPoint) {
            hapusPoint.addEventListener(
                "click",
                async () => {
                    const id = e.features[0].properties.id;
                    sweetAlert(id);
                } // end of click
            );
        }
        // end of addEventListener
    });
};

export default showPoint;
