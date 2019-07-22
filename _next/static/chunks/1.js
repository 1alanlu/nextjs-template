(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ "./components/_demo/CountContextDemo.js":
/*!**********************************************!*\
  !*** ./components/_demo/CountContextDemo.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_demo_countContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @context/_demo/countContext */ "./context/_demo/countContext.js");
/* harmony import */ var _utils_hooks_useRenderCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/hooks/useRenderCounter */ "./assets/utils/hooks/useRenderCounter.js");

var _jsxFileName = "E:\\Code\\GIT\\zyl\\nextjs-template\\src\\components\\_demo\\CountContextDemo.js";



var CountDisplay = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function () {
  // console.log('CountContextDemo-CountDisplay')
  var count = Object(_context_demo_countContext__WEBPACK_IMPORTED_MODULE_2__["useCountState"])();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      border: '1px solid black',
      padding: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_hooks_useRenderCounter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), "The current count is ".concat(count, ". "));
});
var Counter = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function () {
  // console.log('CountContextDemo-Counter')
  var increment = Object(_context_demo_countContext__WEBPACK_IMPORTED_MODULE_2__["useCountUpdater"])();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      border: '1px solid black',
      padding: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_hooks_useRenderCounter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: increment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Increment count"));
});

var CountContextDemo = function CountContextDemo() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      border: '1px solid black',
      padding: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_hooks_useRenderCounter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return forceUpdate({});
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "force render"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_context_demo_countContext__WEBPACK_IMPORTED_MODULE_2__["CountProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CountDisplay, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Counter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CountContextDemo);

/***/ }),

/***/ "./context/_demo/countContext.js":
/*!***************************************!*\
  !*** ./context/_demo/countContext.js ***!
  \***************************************/
/*! exports provided: CountProvider, useCountState, useCountUpdater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountProvider", function() { return CountProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCountState", function() { return useCountState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCountUpdater", function() { return useCountUpdater; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\Code\\GIT\\zyl\\nextjs-template\\src\\context\\_demo\\countContext.js";

var CountStateContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var CountUpdaterContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();

function CountProvider(_ref) {
  var children = _ref.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CountStateContext.Provider, {
    value: count,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CountUpdaterContext.Provider, {
    value: setCount,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, children));
}

function useCountState() {
  var countState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(CountStateContext);

  if (typeof countState === 'undefined') {
    throw new Error('useCountState must be used within a CountProvider');
  }

  return countState;
}

function useCountUpdater() {
  var setCount = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(CountUpdaterContext);

  if (typeof setCount === 'undefined') {
    throw new Error('useCountUpdater must be used within a CountProvider');
  }

  var increment = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () {
    return setCount(function (c) {
      return c + 1;
    });
  }, [setCount]);
  return increment;
}



/***/ })

}]);
//# sourceMappingURL=1.js.map