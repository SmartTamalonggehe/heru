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

const route = document.getElementById("route").textContent;
const csrf_token = $('meta[name="csrf_token"]').attr("content");
// get data coordinates with axios
function getCoordinates() {
    return axios.get(`/api/${route}`).then((response) => {
        return response.data;
    });
}
const uri = `/crud/${route}`;

export { map, token, getCoordinates, csrf_token, uri, route };
