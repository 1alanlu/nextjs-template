(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "./components/_demo/CountContextReducerDemo.js":
/*!*****************************************************!*\
  !*** ./components/_demo/CountContextReducerDemo.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_demo_countContextReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @context/_demo/countContextReducer */ "./context/_demo/countContextReducer.js");
/* harmony import */ var _utils_hooks_useRenderCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/hooks/useRenderCounter */ "./assets/utils/hooks/useRenderCounter.js");

var _jsxFileName = "E:\\Code\\GIT\\zyl\\nextjs-template\\src\\components\\_demo\\CountContextReducerDemo.js";



var CountDisplay = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(function () {
  // console.log('CountContextDemo-CountDisplay')
  var _useCountState = Object(_context_demo_countContextReducer__WEBPACK_IMPORTED_MODULE_2__["useCountState"])(),
      count = _useCountState.count;

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
  var _useCountDispatch = Object(_context_demo_countContextReducer__WEBPACK_IMPORTED_MODULE_2__["useCountDispatch"])(),
      dispatch = _useCountDispatch.dispatch,
      increment = _useCountDispatch.increment;

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
  }, "Increment count"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return dispatch({
        type: 'decrement'
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Decrement count"));
});

var CountContextReducerDemo = function CountContextReducerDemo() {
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
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_hooks_useRenderCounter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return forceUpdate({});
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "force render"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_context_demo_countContextReducer__WEBPACK_IMPORTED_MODULE_2__["CountProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CountDisplay, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Counter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CountContextReducerDemo);

/***/ }),

/***/ "./context/_demo/countContextReducer.js":
/*!**********************************************!*\
  !*** ./context/_demo/countContextReducer.js ***!
  \**********************************************/
/*! exports provided: CountProvider, useCount, useCountState, useCountDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountProvider", function() { return CountProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCount", function() { return useCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCountState", function() { return useCountState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCountDispatch", function() { return useCountDispatch; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\Code\\GIT\\zyl\\nextjs-template\\src\\context\\_demo\\countContextReducer.js";

var CountStateContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var CountDispatchContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      {
        return {
          count: state.count + 1
        };
      }

    case 'decrement':
      {
        return {
          count: state.count - 1
        };
      }

    default:
      {
        throw new Error("Unhandled action type: ".concat(action.type));
      }
  }
}

function CountProvider(_ref) {
  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_1___default.a.useReducer(countReducer, {
    count: 0
  }),
      _React$useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useReducer, 2),
      state = _React$useReducer2[0],
      setCount = _React$useReducer2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CountStateContext.Provider, {
    value: state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CountDispatchContext.Provider, {
    value: setCount,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, children));
}

function useCountState() {
  var state = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(CountStateContext);

  if (state === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }

  return state;
}

function useCountDispatch() {
  var dispatch = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(CountDispatchContext);

  if (dispatch === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }

  var increment = function increment() {
    return dispatch({
      type: 'increment'
    });
  };

  var decrement = function decrement() {
    return dispatch({
      type: 'decrement'
    });
  };

  return {
    dispatch: dispatch,
    increment: increment,
    decrement: decrement
  };
}

function useCount() {
  return [useCountState(), useCountDispatch()];
}



/***/ })

}]);
//# sourceMappingURL=2.js.map