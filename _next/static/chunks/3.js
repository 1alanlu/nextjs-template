(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./assets/utils/hooks/useRenderCounter.js":
/*!************************************************!*\
  !*** ./assets/utils/hooks/useRenderCounter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Code\\GIT\\zyl\\nextjs-template\\src\\assets\\utils\\hooks\\useRenderCounter.js";



var useRenderCounter = function useRenderCounter() {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current.textContent = Number(ref.current.textContent || '0') + 1;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      backgroundColor: '#ccc',
      borderRadius: 4,
      padding: '2px 4px',
      fontSize: '0.8rem',
      margin: '0 6px',
      display: 'inline-block'
    },
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (useRenderCounter);

/***/ }),

/***/ "./components/_demo/CandyDispenserDemo.js":
/*!************************************************!*\
  !*** ./components/_demo/CandyDispenserDemo.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_hooks_useRenderCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/hooks/useRenderCounter */ "./assets/utils/hooks/useRenderCounter.js");

var _jsxFileName = "E:\\Code\\GIT\\zyl\\nextjs-template\\src\\components\\_demo\\CandyDispenserDemo.js";



var CandyDispenserDemo = function CandyDispenserDemo() {
  var initialCandies = ['Apple', 'Banana', 'Orange', 'PineApple'];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(initialCandies),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      candies = _React$useState2[0],
      setCandies = _React$useState2[1];

  var dispense = function dispense(candy) {
    setCandies(function (allCandies) {
      return allCandies.filter(function (c) {
        return c !== candy;
      });
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_hooks_useRenderCounter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), "Available Candy"), candies.length === 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setCandies(initialCandies);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "refill") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, candies.map(function (candy) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: candy,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return dispense(candy);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "grab"), ' ', candy);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CandyDispenserDemo);

/***/ })

}]);
//# sourceMappingURL=3.js.map