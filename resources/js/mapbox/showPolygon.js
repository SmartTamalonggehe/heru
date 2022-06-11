import * as tools from "./tools";

const map = tools.map;

const showMap = async () => {
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
                        umur: coord.umur,
                        satuan: coord.satuan,
                        regional: coord.regional,
                        relief: coord.relief,
                        lembah: coord.lembah,
                        aliran: coord.aliran,
                        endogen: coord.endogen,
                        eksogen: coord.eksogen,
                        lereng: coord.lereng,
                        kontur: coord.kontur,
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
            if (tools.route == "geomorfologi") {
                show = `<table class="table mt-3 table-popup">
                            <tbody>
                                <tr>
                                    <td>Nama</td>
                                    <td>: ${e.features[0].properties.name}</td>
                                </tr>
                                <tr>
                                    <td>Relief</td>
                                    <td>: ${e.features[0].properties.relief}</td>
                                </tr>
                                <tr>
                                    <td>Lembah</td>
                                    <td>: ${e.features[0].properties.lembah}</td>
                                </tr>
                                <tr>
                                    <td>Aliran</td>
                                    <td>: ${e.features[0].properties.aliran}</td>
                                </tr>
                            </tbody>
                        </table>`;
            }
            if (tools.route == "kala") {
                show = `<table class="table mt-3 table-popup">
                            <tbody>
                                <tr>
                                    <td>Nama</td>
                                    <td>: ${e.features[0].properties.name}</td>
                                </tr>
                                <tr>
                                    <td>Umur</td>
                                    <td>: ${e.features[0].properties.umur}</td>
                                </tr>
                                <tr>
                                    <td>Satuan</td>
                                    <td>: ${e.features[0].properties.satuan}</td>
                                </tr>
                                <tr>
                                    <td>Regional</td>
                                    <td>: ${e.features[0].properties.regional}</td>
                                </tr>
                            </tbody>
                        </table>`;
            }
            if (tools.route == "batu_gamping") {
                show = `<table class="table mt-3 table-popup">
                            <tbody>
                                <tr>
                                    <td>Keterangan</td>
                                    <td>: ${e.features[0].properties.ket}</td>
                                </tr>
                                <tr>
                                    <td>Luas</td>
                                    <td>: ${e.features[0].properties.meter}</td>
                                </tr>
                            </tbody>
                        </table>`;
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

showMap();
