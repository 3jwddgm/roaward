module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mobx-state-tree");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__);


var store = null;

var Store = __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__["types"].model({
  lastUpdate: __WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__["types"].Date,
  light: false
}).actions(function (self) {
  var timer = void 0;
  function start() {
    timer = setInterval(function () {
      // mobx-state-tree doesn't allow anonymous callbacks changing data
      // pass off to another action instead
      self.update();
    }, 1000);
  }

  function update() {
    self.lastUpdate = Date.now();
    self.light = true;
  }

  function stop() {
    clearInterval(timer);
  }

  return { start: start, stop: stop, update: update };
});

function initStore(isServer) {
  var snapshot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (isServer) {
    store = Store.create({ lastUpdate: Date.now() });
  }
  if (store === null) {
    store = Store.create({ lastUpdate: Date.now() });
  }
  if (snapshot) {
    Object(__WEBPACK_IMPORTED_MODULE_0_mobx_state_tree__["applySnapshot"])(store, snapshot);
  }
  return store;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(4);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "mobx-react"
var external__mobx_react_ = __webpack_require__(2);
var external__mobx_react__default = /*#__PURE__*/__webpack_require__.n(external__mobx_react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(7);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/Clock.js


/* harmony default export */ var Clock = (function (props) {
  return external__react__default.a.createElement(
    "div",
    {
      className: "jsx-1065255938" + " " + ((props.light ? "light" : "") || "")
    },
    format(new Date(props.lastUpdate)),
    external__react__default.a.createElement(style__default.a, {
      styleId: "1065255938",
      css: ["div.jsx-1065255938{padding:15px;color:#82fa58;display:inline-block;font:50px menlo,monaco,monospace;background-color:#000;}", ".light.jsx-1065255938{background-color:#999;}"]
    })
  );
});

var format = function format(t) {
  return pad(t.getUTCHours()) + ":" + pad(t.getUTCMinutes()) + ":" + pad(t.getUTCSeconds());
};

var pad = function pad(n) {
  return n < 10 ? "0" + n : n;
};
// CONCATENATED MODULE: ./components/Page.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Page_Page = (_dec = Object(external__mobx_react_["inject"])("store"), _dec(_class = Object(external__mobx_react_["observer"])(_class = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.store.start();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.store.stop();
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(
        "div",
        null,
        external__react__default.a.createElement(
          "h1",
          null,
          this.props.title
        ),
        external__react__default.a.createElement(Clock, {
          lastUpdate: this.props.store.lastUpdate,
          light: this.props.store.light
        }),
        external__react__default.a.createElement(
          "nav",
          null,
          external__react__default.a.createElement(
            link__default.a,
            { href: this.props.linkTo },
            external__react__default.a.createElement(
              "a",
              null,
              "Navigate"
            )
          )
        )
      );
    }
  }]);

  return Page;
}(external__react__default.a.Component)) || _class) || _class);


/* harmony default export */ var components_Page = __webpack_exports__["a"] = (Page_Page);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(9);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(4);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "nprogress"
var external__nprogress_ = __webpack_require__(10);
var external__nprogress__default = /*#__PURE__*/__webpack_require__.n(external__nprogress_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(11);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./core/theme/Header.js






router__default.a.onRouteChangeStart = function (url) {
  console.log("Loading: " + url);
  external__nprogress__default.a.start();
};
router__default.a.onRouteChangeComplete = function () {
  return external__nprogress__default.a.done();
};
router__default.a.onRouteChangeError = function () {
  return external__nprogress__default.a.done();
};

var linkStyle = {
  margin: "0 10px 0 0"
};

/* harmony default export */ var Header = (function () {
  return external__react__default.a.createElement(
    "div",
    { style: { marginBottom: 20 } },
    external__react__default.a.createElement(
      head__default.a,
      null,
      external__react__default.a.createElement("link", { rel: "stylesheet", type: "text/css", href: "/static/nprogress.css" })
    ),
    external__react__default.a.createElement(
      link__default.a,
      { href: "/" },
      external__react__default.a.createElement(
        "a",
        { style: linkStyle },
        "Home"
      )
    ),
    external__react__default.a.createElement(
      link__default.a,
      { href: "/other" },
      external__react__default.a.createElement(
        "a",
        { style: linkStyle },
        "About"
      )
    )
  );
});
// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(1);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// CONCATENATED MODULE: ./core/theme/Layout.js




var Layout = /*#__PURE__*/external__styled_components__default.a.div.withConfig({
  displayName: "Layout",
  componentId: "s1br9tpe-0"
})(["font-size:20px;"]);

/* harmony default export */ var theme_Layout = (function (_ref) {
  var children = _ref.children;

  return external__react__default.a.createElement(
    Layout,
    { className: "themed" },
    external__react__default.a.createElement(Header, null),
    children
  );
});
// CONCATENATED MODULE: ./core/decorators/withLayout.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/* harmony default export */ var withLayout = __webpack_exports__["a"] = (function (InnerComponent) {
  return function (_Component) {
    _inherits(LayoutHoc, _Component);

    function LayoutHoc() {
      _classCallCheck(this, LayoutHoc);

      return _possibleConstructorReturn(this, (LayoutHoc.__proto__ || Object.getPrototypeOf(LayoutHoc)).apply(this, arguments));
    }

    _createClass(LayoutHoc, [{
      key: "render",
      value: function render() {
        return external__react__default.a.createElement(
          theme_Layout,
          null,
          external__react__default.a.createElement(InnerComponent, this.props)
        );
      }
    }]);

    return LayoutHoc;
  }(external__react_["Component"]);
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Counter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_state_tree__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_state_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_state_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Page__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_decorators_withLayout__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Counter = Object(__WEBPACK_IMPORTED_MODULE_5__core_decorators_withLayout__["a" /* default */])(_class = function (_React$Component) {
  _inherits(Counter, _React$Component);

  _createClass(Counter, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req;

      var isServer = !!req;
      var store = Object(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* initStore */])(isServer);
      return { initialState: Object(__WEBPACK_IMPORTED_MODULE_2_mobx_state_tree__["getSnapshot"])(store), isServer: isServer };
    }
  }]);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.store = Object(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* initStore */])(props.isServer, props.initialState);
    return _this;
  }

  _createClass(Counter, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_mobx_react__["Provider"],
        { store: this.store },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Page__["a" /* default */], { title: "Index Pag11e", linkTo: "/other" })
      );
    }
  }]);

  return Counter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class;



/***/ })
/******/ ]);