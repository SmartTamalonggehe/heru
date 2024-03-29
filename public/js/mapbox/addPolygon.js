/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./resources/js/mapbox/addPoint.js":
/*!*****************************************!*\
  !*** ./resources/js/mapbox/addPoint.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "./resources/js/mapbox/tools.js");


var addPoint = function addPoint() {
  var marker = new mapboxgl.Marker({
    draggable: true,
    color: "red"
  }).setLngLat([140.79355678554617, -2.6129059598329007]).addTo(_tools__WEBPACK_IMPORTED_MODULE_0__.map);

  function onDragEnd() {
    var lngLat = marker.getLngLat();
    console.log("Longitude: ".concat(lngLat.lng, " Latitude: ").concat(lngLat.lat));
    document.getElementById("tambah").click();
    var parent = document.querySelector(".modal .toggle .row");
    var index = 0;
    var inputLat = "\n        <div class=\"col-12 col-lg-6\">\n            <div class=\"mb-3\">\n                <label style=\"color: black\" for=\"latitude".concat(index, "\"\n                    class=\"form-label\">Latitude</label>\n                <input type=\"text\" class=\"form-control inputReset\"\n                    name=\"latitude[]\" id=\"latitude").concat(index, "\" value=\"").concat(lngLat.lat, "\" required>\n                <div class=\"invalid-feedback\">\n                    Data Tidak Boleh Kosong\n                </div>\n            </div>\n        </div>\n        ");
    var inputLong = "<div class=\"col-12 col-lg-6\">\n            <div class=\"mb-3\">\n                <label style=\"color: black\" for=\"longitude".concat(index, "\"\n                    class=\"form-label\">Longitude</label>\n                <input type=\"text\" class=\"form-control inputReset\"\n                    name=\"longitude[]\" id=\"longitude").concat(index, "\" value=\"").concat(lngLat.lng, "\" required>\n                <div class=\"invalid-feedback\">\n                    Data Tidak Boleh Kosong\n                </div>\n            </div>\n        </div>");
    var inputCoord = inputLong + inputLat;
    parent.innerHTML = inputCoord;
    document.getElementById("jenis").value = "point";
    document.getElementById("meter").value = 0;
  }

  marker.on("dragend", onDragEnd);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addPoint);

/***/ }),

/***/ "./resources/js/mapbox/showPoint.js":
/*!******************************************!*\
  !*** ./resources/js/mapbox/showPoint.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools */ "./resources/js/mapbox/tools.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var role = document.getElementById("role").textContent;

var _require = __webpack_require__(/*! ../my_crud/tools */ "./resources/js/my_crud/tools.js"),
    batu = _require.batu;

console.log(batu);

var showPoint = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
    var data, point, featurePoint, popup;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0,_tools__WEBPACK_IMPORTED_MODULE_1__.getCoordinates)();

          case 2:
            data = _context2.sent;
            console.log(data); // filter data with jenis = point and remove null value

            point = data.filter(function (item) {
              return item.koordinat !== null && item.koordinat.jenis === "point";
            });
            featurePoint = point.map(function (item) {
              return {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [item.koordinat.koordinat_det[0].longitude, item.koordinat.koordinat_det[0].latitude]
                },
                properties: {
                  id: item.id,
                  ket: item.ket,
                  link: item.link,
                  gambar: item.gambar,
                  warna: item.warna
                }
              };
            } // end of map
            ); // end of point.map

            _tools__WEBPACK_IMPORTED_MODULE_1__.map.addSource("point", {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: featurePoint
              }
            });
            _tools__WEBPACK_IMPORTED_MODULE_1__.map.addLayer({
              id: "point",
              source: "point",
              type: "circle",
              paint: {
                "circle-radius": 10,
                "circle-color": ["get", "warna"],
                "circle-stroke-color": ["get", "warna"],
                "circle-stroke-width": 1
              }
            });
            popup = new mapboxgl.Popup({
              offset: [0, -15]
            });
            _tools__WEBPACK_IMPORTED_MODULE_1__.map.on("mouseenter", "point", function (e) {
              var coordinates = e.features[0].geometry.coordinates.slice();
              var ket = e.features[0].properties.ket;
              var link = e.features[0].properties.link;
              var gambar = e.features[0].properties.gambar;
              popup.setLngLat(coordinates).setHTML("<table class=\"table mt-3 table-popup\">\n                            <tbody>\n                                <tr>\n                                    <td>Keterangan</td>\n                                    <td>: ".concat(ket, "</td>\n                                </tr>\n                               ").concat(batu === "batugamping" ? " <tr>\n                                                <td colspan=\"2\"><a href=\"/".concat(gambar, "\" target=\"blank\"><img src=\"/").concat(gambar, "\" class=\"img-thumbnail\" alt=\"...\"></a></td>\n                                            </tr>") : "", "\n                                ").concat(role === "admin" ? " <tr>\n                                                <td colspan=\"2\">\n                                                    <button class=\"btn btn-danger btn-sm\" id=\"hapus\">Hapus</button>\n                                                </td>\n                                            </tr> " : "", "\n                                ").concat(link ? " <tr>\n                                                <td colspan=\"2\">\n                                                    <div class=\"text-center\"><a href=\"".concat(link, "\" target=\"_blank\" title=\"").concat(link, "\"\n                                                    rel=\"noopener noreferrer\">Link</a></div>\n                                                </td>\n                                            </tr>") : "", "\n                            </tbody>\n                        </table>\n                ")).addTo(_tools__WEBPACK_IMPORTED_MODULE_1__.map);
              var hapusPoint = document.getElementById("hapus");

              if (hapusPoint) {
                hapusPoint.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
                  var id;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          id = e.features[0].properties.id;
                          (0,_tools__WEBPACK_IMPORTED_MODULE_1__.sweetAlert)(id);

                        case 2:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })) // end of click
                );
              } // end of addEventListener

            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function showPoint() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPoint);

/***/ }),

/***/ "./resources/js/mapbox/tools.js":
/*!**************************************!*\
  !*** ./resources/js/mapbox/tools.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "csrf_token": () => (/* binding */ csrf_token),
/* harmony export */   "getCoordinates": () => (/* binding */ getCoordinates),
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "route": () => (/* binding */ route),
/* harmony export */   "sweetAlert": () => (/* binding */ sweetAlert),
/* harmony export */   "token": () => (/* binding */ token),
/* harmony export */   "uri": () => (/* binding */ uri)
/* harmony export */ });
var token = "pk.eyJ1Ijoic21hcnRzcGFydGFjdXMiLCJhIjoiY2wwMWdheHRtMHRkOTNjcXB5dHRrMGZtbiJ9.CrQ7upOpgEtfqU7IK42sPA"; // [-100.04, 38.907]
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
  if (route === "batu_gamping") {
    var batu = document.getElementById("batu").textContent;
    route += "".concat(batu);
  }

  return axios.get("/api/".concat(route)).then(function (response) {
    return response.data;
  });
}

var uri = "/crud/".concat(route);

var sweetAlert = function sweetAlert(href) {
  Swal.fire({
    title: "Apa anda yakin?",
    text: "Data yang telah dihapus tidak dapat dikembalikan!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus",
    cancelButtonText: "Batal"
  }).then(function (result) {
    if (result.isConfirmed) {
      $.ajax({
        url: "".concat(uri, "/").concat(href),
        type: "POST",
        data: {
          _method: "DELETE",
          _token: csrf_token
        },
        beforeSend: function beforeSend() {// lakukan sesuatu sebelum data dikirim
        },
        success: function success(response) {
          // lakukan sesuatu jika data sudah terkirim
          Swal.fire("Berhasil!", response.pesan, response.type);
          var oTable = $("#my_table").dataTable(); // setTimeOut for reloading page

          setTimeout(function () {
            location.reload();
          }, 1000);
          oTable.fnDraw(false);
        }
      });
    }
  });
};



/***/ }),

/***/ "./resources/js/my_crud/tools.js":
/*!***************************************!*\
  !*** ./resources/js/my_crud/tools.js ***!
  \***************************************/
/***/ ((module) => {

// Variable
var route = document.getElementById("route").textContent;
var init = document.getElementById("batu");
var batu;

if (init) {
  batu = init.textContent.split("=")[1];
}

console.log(batu);
var save_method;
var uri = "/crud/".concat(route);
module.exports = {
  route: route,
  save_method: save_method,
  uri: uri,
  batu: batu
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./resources/js/mapbox/addPolygon.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addPoint */ "./resources/js/mapbox/addPoint.js");
/* harmony import */ var _showPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showPoint */ "./resources/js/mapbox/showPoint.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools */ "./resources/js/mapbox/tools.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



 // add script to head

var addScript = function addScript() {
  var script = document.createElement("script");
  script.src = "https://unpkg.com/@turf/turf@6/turf.min.js";
  script.async = true;
  document.head.appendChild(script);
};

addScript();
var map = _tools__WEBPACK_IMPORTED_MODULE_3__.map;
map.on("mousemove", function (e) {
  document.getElementById("info").innerHTML = // `e.point` is the x, y coordinates of the `mousemove` event
  // relative to the top-left corner of the map.
  JSON.stringify(e.point) + "<br />" + // `e.lngLat` is the longitude, latitude geographical position of the event.
  JSON.stringify(e.lngLat.wrap());
}); // Draw a polygon on the map

var draw = new MapboxDraw({
  displayControlsDefault: false,
  // Select which mapbox-gl-draw control buttons to add to the map.
  controls: {
    polygon: true,
    trash: true
  } // Set mapbox-gl-draw to draw by default.
  // The user does not have to click the polygon control button first.
  //   defaultMode: "draw_polygon",

});
map.addControl(draw);
map.on("draw.create", updateArea);
map.on("draw.delete", updateArea);
map.on("draw.update", updateArea);

function updateArea(e) {
  var data = draw.getAll();

  if (data.features.length > 0) {
    var area = turf.area(data); // Restrict the area to 2 decimal points.

    var rounded_area = Math.round(area * 100) / 100;
    var inputMeter = document.getElementById("meter");

    if (inputMeter) {
      inputMeter.value = rounded_area;
    }

    var coord = data.features[0].geometry.coordinates[0]; // click #tambah

    document.getElementById("tambah").click();
    var textToggle = document.querySelector(".modal .toggle .label-toggle");
    textToggle.innerHTML = "Jumlah Koordinat ".concat(coord.length); // input luas

    var luas = document.getElementById("luas");

    if (luas) {
      luas.value = rounded_area;
    }

    draftCoord(coord);
    draw.deleteAll();
  } else {
    if (e.type !== "draw.delete") alert("Click the map to draw a polygon.");
  }
}

var draftCoord = function draftCoord(listCoord) {
  var parent = document.querySelector(".modal .toggle .row");
  var inputCoord = "";

  for (var index = 0; index < listCoord.length; index++) {
    var el = listCoord[index];
    var inputLat = "\n        <div class=\"col-12 col-lg-6\">\n            <div class=\"mb-3\">\n                <label style=\"color: black\" for=\"latitude".concat(index, "\"\n                    class=\"form-label\">Latitude</label>\n                <input type=\"text\" class=\"form-control inputReset\"\n                    name=\"latitude[]\" id=\"latitude").concat(index, "\" value=\"").concat(el[1], "\" required>\n                <div class=\"invalid-feedback\">\n                    Data Tidak Boleh Kosong\n                </div>\n            </div>\n        </div>\n        ");
    var inputLong = "<div class=\"col-12 col-lg-6\">\n            <div class=\"mb-3\">\n                <label style=\"color: black\" for=\"longitude".concat(index, "\"\n                    class=\"form-label\">Longitude</label>\n                <input type=\"text\" class=\"form-control inputReset\"\n                    name=\"longitude[]\" id=\"longitude").concat(index, "\" value=\"").concat(el[0], "\" required>\n                <div class=\"invalid-feedback\">\n                    Data Tidak Boleh Kosong\n                </div>\n            </div>\n        </div>");
    inputCoord += inputLong + inputLat;
  }

  parent.innerHTML = inputCoord;
  document.getElementById("jenis").value = "polygon";
}; // Show the coordinates of the polygon on the map


var role = document.getElementById("role").textContent;

var loadData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var data, dataCoord;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _tools__WEBPACK_IMPORTED_MODULE_3__.getCoordinates();

          case 2:
            data = _context.sent;
            // filter data not null koordinat
            dataCoord = data.filter(function (item) {
              return item.koordinat !== null;
            });
            map.on("load", function () {
              var coordinates = [];
              var features = []; // point coordinates

              var nmBatu = document.getElementById("nm_batu");

              if (nmBatu) {
                if (nmBatu && nmBatu.value === "batugamping" || nmBatu.value === "kalkarenit" || nmBatu.value === "kalsulutit") {
                  (0,_showPoint__WEBPACK_IMPORTED_MODULE_2__["default"])();
                  role === "admin" ? (0,_addPoint__WEBPACK_IMPORTED_MODULE_1__["default"])() : "";
                }
              } // if dataCoord exist


              if (dataCoord.length > 0) {
                dataCoord.forEach(function (coord) {
                  coord.koordinat.koordinat_det.forEach(function (element) {
                    coordinates.push([element.longitude, element.latitude]);
                  });
                  features.push({
                    type: "Feature",
                    properties: {
                      id: coord.id,
                      name: coord.nama,
                      ket: coord.ket,
                      meter: coord.meter,
                      color: coord.warna,
                      //coord.warna, //rgba(255, 0, 114, 0.24)
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
                      luas: coord.luas
                    },
                    geometry: {
                      type: "Polygon",
                      coordinates: [coordinates]
                    }
                  });
                  coordinates = [];
                });
              } // Add a source for the state polygons.


              map.addSource("area", {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: features
                }
              }); // Add a layer showing the state polygons.

              map.addLayer({
                id: "area-layer",
                type: "fill",
                source: "area",
                paint: {
                  "fill-color": ["get", "color"]
                }
              }); // When a click event occurs on a feature in the area layer,
              // open a popup at the location of the click, with description
              // HTML from the click event's properties.

              map.on("click", "area-layer", function (e) {
                var show = "";
                show = "<table class=\"table mt-3 table-popup\">\n                            <tbody>\n                                <tr>\n                                    <td>Keterangan</td>\n                                    <td>: ".concat(e.features[0].properties.ket, "</td>\n                                </tr>\n                                <tr>\n                                    <td>Luas</td>\n                                    <td>: ").concat(e.features[0].properties.meter, "</td>\n                                </tr>\n                            </tbody>\n                        </table>");

                if (_tools__WEBPACK_IMPORTED_MODULE_3__.route == "geomorfologi") {
                  show = "<table class=\"table mt-3 table-popup\">\n                            <tbody>\n                                <tr>\n                                    <td>Nama</td>\n                                    <td>: ".concat(e.features[0].properties.name, "</td>\n                                </tr>\n                                <tr>\n                                    <td>Relief</td>\n                                    <td>: ").concat(e.features[0].properties.relief, "</td>\n                                </tr>\n                                <tr>\n                                    <td>Lembah</td>\n                                    <td>: ").concat(e.features[0].properties.lembah, "</td>\n                                </tr>\n                                <tr>\n                                    <td>Aliran</td>\n                                    <td>: ").concat(e.features[0].properties.aliran, "</td>\n                                </tr>\n                                <tr>\n                                    <td>Luas</td>\n                                    <td>: ").concat(e.features[0].properties.luas, "</td>\n                                </tr>\n                            </tbody>\n                        </table>");
                }

                if (_tools__WEBPACK_IMPORTED_MODULE_3__.route == "kala") {
                  show = "<table class=\"table mt-3 table-popup\">\n                            <tbody>\n                                <tr>\n                                    <td>Nama</td>\n                                    <td>: ".concat(e.features[0].properties.name, "</td>\n                                </tr>\n                                <tr>\n                                    <td>Umur</td>\n                                    <td>: ").concat(e.features[0].properties.umur, "</td>\n                                </tr>\n                                <tr>\n                                    <td>Satuan</td>\n                                    <td>: ").concat(e.features[0].properties.satuan, "</td>\n                                </tr>\n                                <tr>\n                                    <td>Luas</td>\n                                    <td>: ").concat(e.features[0].properties.luas, "</td>\n                                </tr>\n                                <tr>\n                                    <td>Regional</td>\n                                    <td>: ").concat(e.features[0].properties.regional, "</td>\n                                </tr>\n                            </tbody>\n                        </table>");
                }

                new mapboxgl.Popup().setLngLat(e.lngLat).setHTML(show).addTo(map);
              }); // Change the cursor to a pointer when
              // the mouse is over the area layer.

              map.on("mouseenter", "area-layer", function () {
                map.getCanvas().style.cursor = "pointer";
              }); // Change the cursor back to a pointer
              // when it leaves the area layer.

              map.on("mouseleave", "area-layer", function () {
                map.getCanvas().style.cursor = "";
              }); // when mouse double click

              map.on("contextmenu", "area-layer", function (e) {
                var href = e.features[0].properties.id;
                _tools__WEBPACK_IMPORTED_MODULE_3__.sweetAlert(href);
              });
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadData() {
    return _ref.apply(this, arguments);
  };
}();

loadData();
})();

/******/ })()
;