// Variable
const route = document.getElementById("route").textContent;
const batu = document.getElementById("batu").textContent.split("=")[1];
let save_method;

let uri = `/crud/${route}`;

module.exports = { route, save_method, uri, batu };
