webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/app */ "../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "../node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-seo */ "../node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! nprogress */ "../node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _config_seo_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @config/seo.config */ "../config/seo.config.js");
/* harmony import */ var _utils_gtag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @utils/gtag */ "./assets/utils/gtag.js");






var _jsxFileName = "E:\\Code\\GIT\\zyl\\nextjs-template\\src\\pages\\_app.js";

/**
Next.js 使用該App 組件初始化頁面。您可以覆蓋它並控制頁面初始化。這可以讓你做出驚人的事情：
 * 在頁面更改之間保持佈局
 * 導航頁面時保持狀態
 * 使用自定義錯誤處理 componentDidCatch
 * 將其他數據注入頁面（例如，通過處理GraphQL查詢）
 */






 // import your default seo configuration

 // GA

 // Router.events.on('routeChangeComplete', url => gtag.pageview(url))

var startProgressTimer = null;

var startProgress = function startProgress() {
  return nprogress__WEBPACK_IMPORTED_MODULE_11___default.a.start();
};

var stopProgress = function stopProgress() {
  console.log('stopProgress');
  clearTimeout(startProgressTimer);
  next_router__WEBPACK_IMPORTED_MODULE_9___default.a.events.off('beforeHistoryChange', stopProgress);
  next_router__WEBPACK_IMPORTED_MODULE_9___default.a.events.off('routeChangeComplete', stopProgress);
  next_router__WEBPACK_IMPORTED_MODULE_9___default.a.events.off('routeChangeError', stopProgress);
  nprogress__WEBPACK_IMPORTED_MODULE_11___default.a.done();
};

var showProgressBar = function showProgressBar(delay) {
  startProgressTimer = setTimeout(startProgress, delay);
  next_router__WEBPACK_IMPORTED_MODULE_9___default.a.events.on('beforeHistoryChange', stopProgress);
  next_router__WEBPACK_IMPORTED_MODULE_9___default.a.events.on('routeChangeComplete', stopProgress);
  next_router__WEBPACK_IMPORTED_MODULE_9___default.a.events.on('routeChangeError', stopProgress);
};

var handlerChangeStart = function handlerChangeStart(url) {
  console.log('App is changing to: ', url);
  showProgressBar(300);
};

next_router__WEBPACK_IMPORTED_MODULE_9___default.a.events.on('routeChangeStart', handlerChangeStart);
next_router__WEBPACK_IMPORTED_MODULE_9___default.a.events.on('routeChangeComplete', function () {
  // dev mode路由跳转后样式丢失
  // 原因：dev下样式根据页面动态加载，浏览器缓存文件styles.chunk.css造成样式不更新。
  // 解决方案： 利用版本号强制重载样式文件
  if (true) {
    var els = document.querySelectorAll('link[href*="/_next/static/css/styles.chunk.css"]');
    var timestamp = new Date().valueOf();
    els[0].href = "/_next/static/css/styles.chunk.css?v=".concat(timestamp);
  }

  _utils_gtag__WEBPACK_IMPORTED_MODULE_14__["pageview"](next_router__WEBPACK_IMPORTED_MODULE_9___default.a.pathname);
});
var theme = {
  colors: {
    primary: '#0070f3'
  }
};

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "componentWillUnmount",
    // static async getInitialProps({ Component, ctx }) {
    //   let pageProps = {}
    //   if (Component.getInitialProps) {
    //     pageProps = await Component.getInitialProps(ctx)
    //   }
    //   return { pageProps }
    // }
    value: function componentWillUnmount() {
      clearTimeout(startProgressTimer);
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.events.off('routeChangeStart', handlerChangeStart);
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.events.off('beforeHistoryChange', stopProgress);
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.events.off('routeChangeComplete', stopProgress);
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.events.off('routeChangeError', stopProgress);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      nprogress__WEBPACK_IMPORTED_MODULE_11___default.a.done(true);
    }
  }, {
    key: "render",
    value: function render() {
      console.log('render MyApp');
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          router = _this$props.router;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        key: "meta_viewport",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_10__["DefaultSeo"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _config_seo_config__WEBPACK_IMPORTED_MODULE_13__["default"], {
        canonical: "https://localhost:3000" + router.pathname,
        openGraph: {
          url: "https://localhost:3000" + router.pathname
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_10__["LogoJsonLd"], {
        logo: "".concat("https://localhost:3000", "/static/images/logo.png"),
        url: "https://localhost:3000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_12__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      })))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_7___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(MyApp));

/***/ })

})
//# sourceMappingURL=_app.js.2eeaeac1712d4f21f948.hot-update.js.map