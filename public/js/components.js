/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/components/sidebar.js":
/*!********************************************!*\
  !*** ./resources/js/components/sidebar.js ***!
  \********************************************/
/***/ (() => {

var nav_parent = document.querySelectorAll(".nav-parent");
nav_parent.forEach(function (nav_parent) {
  // select href from nav-parent
  var ancors = nav_parent.querySelectorAll("a");
  ancors.forEach(function (ancor) {
    // check if href is equal to current url
    var href = ancor.getAttribute("href");

    if (href == window.location.href) {
      // add class active to nav-parent
      nav_parent.classList.add("nav-expanded");
      nav_parent.classList.add("nav-active");
      ancor.parentElement.classList.add("nav-active");
    }
  });
});

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./resources/js/components.js ***!
  \************************************/
__webpack_require__(/*! ./components/sidebar */ "./resources/js/components/sidebar.js");
})();

/******/ })()
;