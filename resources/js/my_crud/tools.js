// Variable
const route = document.getElementById("route").textContent;
const init = document.getElementById("batu");
let batu;
if (init) {
    batu = init.textContent.split("=")[1];
}
console.log(batu);
let save_method;

let uri = `/crud/${route}`;

module.exports = { route, save_method, uri, batu };
