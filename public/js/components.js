/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/components/images/upload.js":
/*!**************************************************!*\
  !*** ./resources/js/components/images/upload.js ***!
  \**************************************************/
/***/ (() => {

// get id foto
var foto = document.getElementById("foto"); // show image preview to .image-preview

var showImages = function showImages() {
  foto.addEventListener("change", function (e) {
    var imagePreview = document.querySelector(".image-preview"); // reset image preview

    imagePreview.innerHTML = ""; // create element class fotoPreview

    var fotoPreview = document.createElement("div");
    fotoPreview.classList.add("fotoPreview"); // add fotoPreview to imagePreview

    imagePreview.appendChild(fotoPreview);
    fotoPreview.style.backgroundImage = "url(".concat(URL.createObjectURL(e.target.files[0]), ")");
    fotoPreview.style.backgroundSize = "cover";
    fotoPreview.style.display = "block";
    fotoPreview.style.backgroundRepeat = "no-repeat";
    fotoPreview.style.backgroundPosition = "center";
    fotoPreview.style.backgroundColor = "transparent";
    fotoPreview.style.border = "none";
    fotoPreview.style.borderRadius = "20px";
    fotoPreview.style.height = "200px";
    fotoPreview.style.width = "100%";
    fotoPreview.style.display = "block";
    fotoPreview.style.margin = "0 auto";
    fotoPreview.style.boxShadow = "0 0 0 1px #ccc";
    fotoPreview.style.border = "1px solid #ccc";
    fotoPreview.style.padding = "0";
    fotoPreview.style.margin = "0";
    fotoPreview.style.overflow = "hidden";
    fotoPreview.style.position = "relative";
    fotoPreview.style.zIndex = "1";
    fotoPreview.style.transition = "all 0.3s ease-in-out"; // add button delete

    var buttonDelete = document.createElement("button");
    buttonDelete.classList.add("remove-image");
    buttonDelete.innerHTML = "X";
    buttonDelete.style.position = "absolute";
    buttonDelete.style.top = "0";
    buttonDelete.style.right = "0";
    buttonDelete.style.backgroundColor = "transparent";
    buttonDelete.style.border = "none";
    buttonDelete.style.zIndex = "100";
    buttonDelete.style.cursor = "pointer";
    buttonDelete.style.color = "black"; // add to parent fotoPreview

    fotoPreview.parentElement.appendChild(buttonDelete); // add event listener to button delete

    buttonDelete.addEventListener("click", function (e) {
      e.preventDefault(); // transition to hide image

      fotoPreview.style.transition = "all 0.3s ease-in-out";
      fotoPreview.style.opacity = "0"; // remove image

      setTimeout(function () {
        // delete background image from fotoPreview
        fotoPreview.style.backgroundImage = ""; // hide fotoPreview

        fotoPreview.style.display = "none";
        foto.value = "";
      }, 300); // remove button delete

      buttonDelete.remove();
    });
  });
};

if (foto) {
  showImages();
}

/***/ }),

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

__webpack_require__(/*! ./components/images/upload */ "./resources/js/components/images/upload.js");
})();

/******/ })()
;