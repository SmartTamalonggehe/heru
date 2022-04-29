// Variable
const route = document.getElementById("route").textContent;
let save_method;

let uri = `/crud/${route}`;

module.exports = { route, save_method, uri };
