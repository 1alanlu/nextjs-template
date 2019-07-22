webpackHotUpdate("static\\development\\pages\\test.js",{

/***/ "./components/container/Nav.js":
/*!*************************************!*\
  !*** ./components/container/Nav.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_presentational_Link_CustomLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/presentational/Link/CustomLink */ "./components/presentational/Link/CustomLink.js");
/* harmony import */ var _sass_components_nav_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sass/components/nav.module.scss */ "./assets/sass/components/nav.module.scss");
/* harmony import */ var _sass_components_nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_components_nav_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "E:\\Code\\GIT\\zyl\\nextjs-template\\src\\components\\container\\Nav.js";



 // 展示組件

 // 樣式

 // 導覽列

var Nav = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function (_ref) {
  var data = _ref.data,
      router = _ref.router;
  console.log('render Nav');
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: _sass_components_nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.nav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, data.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: item.href,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _sass_components_nav_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.active, router.pathname === item.href)),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_presentational_Link_CustomLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: item.href,
      prefetch: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      title: item.display,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, item.display)));
  })));
}), function (prevProps, nextProps) {
  return prevProps.data === nextProps.data;
});
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=test.js.6ad886df4fdac0273067.hot-update.js.map