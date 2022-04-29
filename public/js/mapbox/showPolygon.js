/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/mapbox/tools.js":
/*!**************************************!*\
  !*** ./resources/js/mapbox/tools.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "csrf_token": () => (/* binding */ csrf_token),
/* harmony export */   "getCoordinates": () => (/* binding */ getCoordinates),
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "token": () => (/* binding */ token),
/* harmony export */   "uri": () => (/* binding */ uri)
/* harmony export */ });
var token = "pk.eyJ1Ijoic21hcnRzcGFydGFjdXMiLCJhIjoiY2wwMWdiYTNzMGN3eTNkb2Z4Yjg3ODk4YSJ9.n7B5ZH-YXB_k-UKzGGoVfA"; // [-100.04, 38.907]
// [140.79245772703842, -2.617302697836186]

mapboxgl.accessToken = token;
var map = new mapboxgl.Map({
  container: "map",
  // container ID
  style: "mapbox://styles/mapbox/satellite-v9",
  // style URL
  center: [140.79245772703842, -2.617302697836186],
  // starting position
  zoom: 12 // starting zoom

});
var route = document.getElementById("route").textContent;
var csrf_token = $('meta[name="csrf_token"]').attr("content"); // get data coordinates with axios

function getCoordinates() {
  return axios.get("/api/".concat(route)).then(function (response) {
    return response.data;
  });
}

var uri = "/crud/".concat(route);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./resources/js/mapbox/showPolygon.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "./resources/js/mapbox/tools.js");

var map = _tools__WEBPACK_IMPORTED_MODULE_0__.map;
map.on("load", function () {
  // Add a source for the state polygons.
  map.addSource("states", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [{
        type: "Feature",
        properties: {
          name: "Minnesota",
          color: "blue"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[[140.81141196, -2.60352037], [140.81467303, -2.62598117], [140.78875612, -2.61346489], [140.81141196, -2.60352037]]]
        }
      }, {
        type: "Feature",
        properties: {
          name: "Montana",
          color: "red"
        },
        geometry: {
          type: "Polygon",
          coordinates: [[[140.788371465895, -2.628320372375157], [140.79318544771814, -2.6272898895990977], [140.79335737564105, -2.6326140414477806], [140.78562061913874, -2.6350184896687665], [140.7854486912209, -2.632442294969394], [140.78510483537713, -2.629694348086943], [140.788371465895, -2.628320372375157]]]
        }
      }]
    }
  }); // Add a layer showing the state polygons.

  map.addLayer({
    id: "states-layer",
    type: "fill",
    source: "states",
    paint: {
      "fill-color": ["get", "color"]
    }
  }); // When a click event occurs on a feature in the states layer,
  // open a popup at the location of the click, with description
  // HTML from the click event's properties.

  map.on("click", "states-layer", function (e) {
    new mapboxgl.Popup().setLngLat(e.lngLat).setHTML(e.features[0].properties.name).addTo(map);
  }); // Change the cursor to a pointer when
  // the mouse is over the states layer.

  map.on("mouseenter", "states-layer", function () {
    map.getCanvas().style.cursor = "pointer";
  }); // Change the cursor back to a pointer
  // when it leaves the states layer.

  map.on("mouseleave", "states-layer", function () {
    map.getCanvas().style.cursor = "";
  });
});
})();

/******/ })()
;