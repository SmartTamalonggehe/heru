import * as tools from "./tools";

const map = tools.map;

map.on("load", () => {
    // Add a source for the state polygons.
    map.addSource("states", {
        type: "geojson",
        data: {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    properties: {
                        name: "Minnesota",
                        color: "blue",
                    },
                    geometry: {
                        type: "Polygon",
                        coordinates: [
                            [
                                [140.81141196, -2.60352037],
                                [140.81467303, -2.62598117],
                                [140.78875612, -2.61346489],
                                [140.81141196, -2.60352037],
                            ],
                        ],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        name: "Montana",
                        color: "red",
                    },
                    geometry: {
                        type: "Polygon",
                        coordinates: [
                            [
                                [140.788371465895, -2.628320372375157],
                                [140.79318544771814, -2.6272898895990977],
                                [140.79335737564105, -2.6326140414477806],
                                [140.78562061913874, -2.6350184896687665],
                                [140.7854486912209, -2.632442294969394],
                                [140.78510483537713, -2.629694348086943],
                                [140.788371465895, -2.628320372375157],
                            ],
                        ],
                    },
                },
            ],
        },
    });

    // Add a layer showing the state polygons.
    map.addLayer({
        id: "states-layer",
        type: "fill",
        source: "states",
        paint: {
            "fill-color": ["get", "color"],
        },
    });

    // When a click event occurs on a feature in the states layer,
    // open a popup at the location of the click, with description
    // HTML from the click event's properties.
    map.on("click", "states-layer", (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.name)
            .addTo(map);
    });

    // Change the cursor to a pointer when
    // the mouse is over the states layer.
    map.on("mouseenter", "states-layer", () => {
        map.getCanvas().style.cursor = "pointer";
    });

    // Change the cursor back to a pointer
    // when it leaves the states layer.
    map.on("mouseleave", "states-layer", () => {
        map.getCanvas().style.cursor = "";
    });
});
