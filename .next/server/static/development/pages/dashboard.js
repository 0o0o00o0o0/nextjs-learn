module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./model/index.model.ts":
/*!******************************!*\
  !*** ./model/index.model.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/axios */ "./utils/axios.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const model = {
  namespace: 'index',
  state: {
    name: 'i am index',
    count: 0,
    init: false
  },
  reducers: {
    caculate(state, payload) {
      const {
        count
      } = state;
      const {
        delta
      } = payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        count: count + delta
      });
    },

    changeName(state, payload) {
      return _objectSpread(_objectSpread({}, state), {}, {
        name: payload.name
      });
    }

  },
  effects: {
    *init(action, {
      put
    }) {
      yield put({
        type: 'caculate',
        delta: 1
      });
    },

    *asyncGetData(action, {
      put
    }) {
      const result = yield _utils_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/getString');
      yield put({
        type: 'changeName',
        name: result.data.str
      });
    }

  }
};
/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ }),

/***/ "./model/index.ts":
/*!************************!*\
  !*** ./model/index.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.model */ "./model/index.model.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.model */ "./model/user.model.ts");
// 引入各个部分的全局数据


const model = [_index_model__WEBPACK_IMPORTED_MODULE_0__["default"], _user_model__WEBPACK_IMPORTED_MODULE_1__["default"]];
/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ }),

/***/ "./model/user.model.ts":
/*!*****************************!*\
  !*** ./model/user.model.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const model = {
  namespace: 'user',
  state: {
    name: 'hopperhuang'
  },
  reducers: {
    changeName(state, payload) {
      return _objectSpread(_objectSpread({}, state), {}, {
        name: payload.name
      });
    }

  },
  effects: {
    *change(action, {
      put
    }) {
      // yield delay(2000);
      yield put({
        type: 'changeName',
        name: Math.random().toString(32).slice(2)
      });
    }

  }
};
/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ }),

/***/ "./pages/dashboard/index.tsx":
/*!***********************************!*\
  !*** ./pages/dashboard/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_commonsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/commonsStore */ "./utils/commonsStore.ts");
var _jsxFileName = "E:\\zsDir\\nextjs-learn\\pages\\dashboard\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_commonsStore__WEBPACK_IMPORTED_MODULE_1__["WithComponent"])(prop => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 48
  }
}, "\u8FD9\u91CC\u662Fdashboard,\u83B7\u53D6\u7684id\u4E3A", prop.query.id, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 87
  }
}, "\u8FD9\u91CC\u5982\u679C\u6CA1\u6709\u7ED9server.js\u91CD\u5B9A\u5411\uFF0C\u5E76\u4E14\u91C7\u7528\u7684\u662F\u52A8\u6001\u8DEF\u7531\uFF0C\u90A3\u4E48\u5237\u65B0\u4F1A404")), prop => {
  console.log(prop.query.id);
  return {
    a: 6
  };
}));

/***/ }),

/***/ "./utils/axios.ts":
/*!************************!*\
  !*** ./utils/axios.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = ''; //配置baseurl

const ajax = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
ajax.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});
ajax.interceptors.response.use(response => {
  if (response && response.status === 200) {
    return response;
  }
}, error => {
  if (error && error.response && error.response.status === 401) {} //
  // tslint:disable-next-line:no-console


  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["default"] = (ajax);

/***/ }),

/***/ "./utils/commonsStore.ts":
/*!*******************************!*\
  !*** ./utils/commonsStore.ts ***!
  \*******************************/
/*! exports provided: WithComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithComponent", function() { return WithComponent; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./utils/store.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const WithComponent = (Components, initData) => {
  Components.getInitialProps = async props => {
    const {
      pathname,
      query,
      isServer,
      store
    } = props;
    let result = {}; // 扩展初始化数据

    if (initData) {
      result = await initData(props);
    }

    return _objectSpread({
      pathname,
      query,
      isServer,
      dvaStore: store
    }, result);
  };

  return Object(_store__WEBPACK_IMPORTED_MODULE_0__["default"])(state => state)(Components);
};

/***/ }),

/***/ "./utils/store.ts":
/*!************************!*\
  !*** ./utils/store.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withDva; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dva_no_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dva-no-router */ "dva-no-router");
/* harmony import */ var dva_no_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dva_no_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/index */ "./model/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const checkServer = () => Object.prototype.toString.call(global.process) === '[object process]'; // eslint-disable-next-line


const __NEXT_DVA_STORE__ = '__NEXT_DVA_STORE__';

function createDvaStore(initialState) {
  let app;

  if (initialState) {
    app = dva_no_router__WEBPACK_IMPORTED_MODULE_1___default()({
      initialState
    });
  } else {
    app = dva_no_router__WEBPACK_IMPORTED_MODULE_1___default()({});
  }

  const isArray = Array.isArray(_model_index__WEBPACK_IMPORTED_MODULE_3__["default"]);

  if (isArray) {
    _model_index__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(m => {
      app.model(m);
    });
  } else {
    app.model(_model_index__WEBPACK_IMPORTED_MODULE_3__["default"]);
  }

  app.router(() => {});
  app.start(); // console.log(app);
  // eslint-disable-next-line

  const store = app._store;
  return store;
}

function getOrCreateStore(initialState) {
  const isServer = checkServer();

  if (isServer) {
    // run in server
    // console.log('server');
    return createDvaStore(initialState);
  } // eslint-disable-next-line


  if (!window[__NEXT_DVA_STORE__]) {
    // console.log('client');
    // eslint-disable-next-line
    window[__NEXT_DVA_STORE__] = createDvaStore(initialState);
  } // eslint-disable-next-line


  return window[__NEXT_DVA_STORE__];
}

function withDva(...args) {
  return function CreateNextPage(Component) {
    const ComponentWithDva = (props = {}) => {
      const {
        store,
        initialProps,
        initialState
      } = props;
      const ConnectedComponent = Object(dva_no_router__WEBPACK_IMPORTED_MODULE_1__["connect"])(...args)(Component);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], // in client side, it will init store with the initial state tranfer from server side
      {
        store: store && store.dispatch ? store : getOrCreateStore(initialState)
      }, // transfer next.js's props to the page
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConnectedComponent, initialProps));
    };

    ComponentWithDva.getInitialProps = async (props = {}) => {
      // console.log('get......');
      const isServer = checkServer();
      const store = getOrCreateStore(props.req); // call children's getInitialProps
      // get initProps and transfer in to the page

      const initialProps = Component.getInitialProps ? await Component.getInitialProps(_objectSpread(_objectSpread({}, props), {}, {
        isServer,
        store
      })) : {};
      return {
        store,
        initialProps,
        initialState: store.getState()
      };
    };

    return ComponentWithDva;
  };
}

/***/ }),

/***/ 5:
/*!*****************************************!*\
  !*** multi ./pages/dashboard/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\zsDir\nextjs-learn\pages\dashboard\index.tsx */"./pages/dashboard/index.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "dva-no-router":
/*!********************************!*\
  !*** external "dva-no-router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dva-no-router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWwvaW5kZXgubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWwvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2F4aW9zLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbW1vbnNTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdG9yZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImR2YS1uby1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiXSwibmFtZXMiOlsibW9kZWwiLCJuYW1lc3BhY2UiLCJzdGF0ZSIsIm5hbWUiLCJjb3VudCIsImluaXQiLCJyZWR1Y2VycyIsImNhY3VsYXRlIiwicGF5bG9hZCIsImRlbHRhIiwiY2hhbmdlTmFtZSIsImVmZmVjdHMiLCJhY3Rpb24iLCJwdXQiLCJ0eXBlIiwiYXN5bmNHZXREYXRhIiwicmVzdWx0IiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwic3RyIiwiaG9tZXBhZ2UiLCJ1c2VyIiwiY2hhbmdlIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJXaXRoQ29tcG9uZW50IiwicHJvcCIsInF1ZXJ5IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiYSIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImFqYXgiLCJjcmVhdGUiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJDb21wb25lbnRzIiwiaW5pdERhdGEiLCJnZXRJbml0aWFsUHJvcHMiLCJwcm9wcyIsInBhdGhuYW1lIiwiaXNTZXJ2ZXIiLCJzdG9yZSIsImR2YVN0b3JlIiwiV2l0aER2YSIsImNoZWNrU2VydmVyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsImdsb2JhbCIsInByb2Nlc3MiLCJfX05FWFRfRFZBX1NUT1JFX18iLCJjcmVhdGVEdmFTdG9yZSIsImluaXRpYWxTdGF0ZSIsImFwcCIsImR2YSIsImlzQXJyYXkiLCJBcnJheSIsImZvckVhY2giLCJtIiwicm91dGVyIiwic3RhcnQiLCJfc3RvcmUiLCJnZXRPckNyZWF0ZVN0b3JlIiwid2luZG93Iiwid2l0aER2YSIsImFyZ3MiLCJDcmVhdGVOZXh0UGFnZSIsIkNvbXBvbmVudCIsIkNvbXBvbmVudFdpdGhEdmEiLCJpbml0aWFsUHJvcHMiLCJDb25uZWN0ZWRDb21wb25lbnQiLCJjb25uZWN0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJkaXNwYXRjaCIsInJlcSIsImdldFN0YXRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIs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QkFBcEIsRUFBd0NELFlBQXhDLENBTEssQ0FBUDtBQU9ELEtBVkQ7O0FBV0FELG9CQUFnQixDQUFDL0IsZUFBakIsR0FBbUMsT0FBT0MsS0FBb0IsR0FBRyxFQUE5QixLQUFxQztBQUN0RTtBQUNBLFlBQU1FLFFBQVEsR0FBR0ksV0FBVyxFQUE1QjtBQUNBLFlBQU1ILEtBQUssR0FBR3FCLGdCQUFnQixDQUFDeEIsS0FBSyxDQUFDc0MsR0FBUCxDQUE5QixDQUhzRSxDQUl0RTtBQUNBOztBQUNBLFlBQU1QLFlBQVksR0FBR0YsU0FBUyxDQUFDOUIsZUFBVixHQUNqQixNQUFNOEIsU0FBUyxDQUFDOUIsZUFBVixpQ0FBK0JDLEtBQS9CO0FBQXNDRSxnQkFBdEM7QUFBZ0RDO0FBQWhELFNBRFcsR0FFakIsRUFGSjtBQUdBLGFBQU87QUFDTEEsYUFESztBQUVMNEIsb0JBRks7QUFHTGpCLG9CQUFZLEVBQUVYLEtBQUssQ0FBQ29DLFFBQU47QUFIVCxPQUFQO0FBS0QsS0FkRDs7QUFlQSxXQUFPVCxnQkFBUDtBQUNELEdBNUJEO0FBNkJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZELGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxkYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnLi4vdXRpbHMvYXhpb3MnO1xuZXhwb3J0IGludGVyZmFjZSBJaW5kZXhTdGF0ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY291bnQ6IG51bWJlcjtcbiAgaW5pdDogYm9vbGVhbjtcbn1cbmNvbnN0IG1vZGVsID0ge1xuICBuYW1lc3BhY2U6ICdpbmRleCcsXG4gIHN0YXRlOiB7XG4gICAgbmFtZTogJ2kgYW0gaW5kZXgnLFxuICAgIGNvdW50OiAwLFxuICAgIGluaXQ6IGZhbHNlLFxuICB9LFxuICByZWR1Y2Vyczoge1xuICAgIGNhY3VsYXRlKHN0YXRlOiBJaW5kZXhTdGF0ZSwgcGF5bG9hZCkge1xuICAgICAgY29uc3QgeyBjb3VudCB9ID0gc3RhdGU7XG4gICAgICBjb25zdCB7IGRlbHRhIH0gPSBwYXlsb2FkO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNvdW50OiBjb3VudCArIGRlbHRhIH07XG4gICAgfSxcbiAgICBjaGFuZ2VOYW1lKHN0YXRlOiBJaW5kZXhTdGF0ZSwgcGF5bG9hZCkge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG5hbWU6IHBheWxvYWQubmFtZSB9O1xuICAgIH1cbiAgfSxcbiAgZWZmZWN0czoge1xuICAgICppbml0KGFjdGlvbiwgeyBwdXQgfSkge1xuICAgICAgeWllbGQgcHV0KHsgdHlwZTogJ2NhY3VsYXRlJywgZGVsdGE6IDEgfSk7XG4gICAgfSxcbiAgICAqYXN5bmNHZXREYXRhKGFjdGlvbiwgeyBwdXQgfSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgYXhpb3MuZ2V0KCcvYXBpL2dldFN0cmluZycpO1xuICAgICAgeWllbGQgcHV0KHsgdHlwZTogJ2NoYW5nZU5hbWUnLCBuYW1lOiByZXN1bHQuZGF0YS5zdHIgfSlcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2RlbDtcblxuIiwiLy8g5byV5YWl5ZCE5Liq6YOo5YiG55qE5YWo5bGA5pWw5o2uXG5pbXBvcnQgaG9tZXBhZ2UgZnJvbSAnLi9pbmRleC5tb2RlbCc7XG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXIubW9kZWwnXG5jb25zdCBtb2RlbCA9IFtcbiAgaG9tZXBhZ2UsXG4gIHVzZXJcbl07XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGVsO1xuIiwiaW50ZXJmYWNlIEl1c2VyIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5jb25zdCBtb2RlbCA9IHtcclxuICAgIG5hbWVzcGFjZTogJ3VzZXInLFxyXG4gICAgc3RhdGU6IHtcclxuICAgICAgICBuYW1lOiAnaG9wcGVyaHVhbmcnLFxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgY2hhbmdlTmFtZShzdGF0ZTogSXVzZXIsIHBheWxvYWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG5hbWU6IHBheWxvYWQubmFtZSB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBlZmZlY3RzOiB7XHJcbiAgICAgICAgKmNoYW5nZShhY3Rpb24sIHsgcHV0IH0pIHtcclxuICAgICAgICAgICAgLy8geWllbGQgZGVsYXkoMjAwMCk7XHJcblxyXG4gICAgICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiAnY2hhbmdlTmFtZScsIG5hbWU6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9kZWw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFdpdGhDb21wb25lbnQsIElwcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbnNTdG9yZSdcclxuZXhwb3J0IGRlZmF1bHQgV2l0aENvbXBvbmVudCgocHJvcDogSXByb3BzKSA9PiA8ZGl2Pui/memHjOaYr2Rhc2hib2FyZCzojrflj5bnmoRpZOS4untwcm9wLnF1ZXJ5LmlkfTxkaXY+6L+Z6YeM5aaC5p6c5rKh5pyJ57uZc2VydmVyLmpz6YeN5a6a5ZCR77yM5bm25LiU6YeH55So55qE5piv5Yqo5oCB6Lev55Sx77yM6YKj5LmI5Yi35paw5LyaNDA0PC9kaXY+PC9kaXY+LCBwcm9wID0+IHtcclxuICBjb25zb2xlLmxvZyhwcm9wLnF1ZXJ5LmlkKTtcclxuICByZXR1cm4geyBhOiA2IH1cclxufSkiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJyc7IC8v6YWN572uYmFzZXVybFxyXG5jb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKCk7XHJcbmFqYXguaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG4gIGNvbmZpZyA9PiB7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0sXHJcbiAgZXJyb3IgPT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICB9XHJcbik7XHJcblxyXG5cclxuYWpheC5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gIHJlc3BvbnNlID0+IHtcclxuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gIHJlc3BvbnNlO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZXJyb3IgPT4ge1xyXG4gICAgaWYgKGVycm9yICYmIGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgLy9cclxuICAgIH1cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFqYXg7XHJcbiIsImltcG9ydCBXaXRoRHZhIGZyb20gJy4vc3RvcmUnO1xyXG5pbnRlcmZhY2UgSW5pdGlhbHByb3BzIHtcclxuICAgIHBhdGhuYW1lOiBzdHJpbmc7XHJcbiAgICBxdWVyeTogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuICAgIGFzUGF0aDogc3RyaW5nO1xyXG4gICAgcmVxPzogYW55O1xyXG4gICAgcmVzPzogYW55O1xyXG4gICAgZXJyOiBzdHJpbmc7XHJcbiAgICBpc1NlcnZlcjogYm9vbGVhbjtcclxuICAgIHN0b3JlOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gICAgICAgIGRpc3BhdGNoPzogKHByb3A6IHsgdHlwZTogc3RyaW5nLCBba2V5OiBzdHJpbmddOiBhbnkgfSkgPT4gdm9pZDtcclxuICAgIH07XHJcblxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSXByb3BzIHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICAgIHF1ZXJ5OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG4gICAgcGF0aG5hbWU6IHN0cmluZztcclxuICAgIGlzU2VydmVyOiBib29sZWFuO1xyXG4gICAgZHZhU3RvcmU6IGFueTtcclxuICAgIGRpc3BhdGNoOiAocHJvcDogeyB0eXBlOiBzdHJpbmcsIFtrZXk6IHN0cmluZ106IGFueSB9KSA9PiB2b2lkO1xyXG59XHJcbmV4cG9ydCBjb25zdCBXaXRoQ29tcG9uZW50ID0gKENvbXBvbmVudHM6IHtcclxuICAgIChwcm9wczogYW55KTogSlNYLkVsZW1lbnQ7XHJcbiAgICBnZXRJbml0aWFsUHJvcHM/OiAocHJvcHM6IGFueSkgPT4gUHJvbWlzZTx7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gICAgICAgIHBhdGhuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcXVlcnk6IHsgW2tleTogc3RyaW5nXTogYW55IH07XHJcbiAgICAgICAgaXNTZXJ2ZXI6IGJvb2xlYW47XHJcbiAgICAgICAgZHZhU3RvcmU6IHsgW2tleTogc3RyaW5nXTogYW55IH07XHJcbiAgICB9PlxyXG59LCBpbml0RGF0YT86IChwcm9wcz86IEluaXRpYWxwcm9wcykgPT4gUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueSB9PiB8IHsgW2tleTogc3RyaW5nXTogYW55IH0pID0+IHtcclxuICAgIENvbXBvbmVudHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHByb3BzOiBJbml0aWFscHJvcHMpID0+IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXIsIHN0b3JlLFxyXG4gICAgICAgIH0gPSBwcm9wcztcclxuICAgICAgICBsZXQgcmVzdWx0OiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgICAgICAgLy8g5omp5bGV5Yid5aeL5YyW5pWw5o2uXHJcbiAgICAgICAgaWYgKGluaXREYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IGluaXREYXRhKHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlciwgZHZhU3RvcmU6IHN0b3JlLCAuLi5yZXN1bHRcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXaXRoRHZhKChzdGF0ZSkgPT4gc3RhdGUpKENvbXBvbmVudHMpXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGR2YSwgeyBjb25uZWN0IH0gZnJvbSAnZHZhLW5vLXJvdXRlcic7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBtb2RlbCBmcm9tICcuLi9tb2RlbC9pbmRleCc7XG5cbmNvbnN0IGNoZWNrU2VydmVyID0gKCkgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IF9fTkVYVF9EVkFfU1RPUkVfXyA9ICdfX05FWFRfRFZBX1NUT1JFX18nXG5cbmZ1bmN0aW9uIGNyZWF0ZUR2YVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICBsZXQgYXBwO1xuICBpZiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgYXBwID0gZHZhKHtcbiAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBhcHAgPSBkdmEoe30pO1xuICB9XG4gIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KG1vZGVsKTtcbiAgaWYgKGlzQXJyYXkpIHtcbiAgICBtb2RlbC5mb3JFYWNoKChtKSA9PiB7XG4gICAgICBhcHAubW9kZWwobSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgYXBwLm1vZGVsKG1vZGVsKTtcbiAgfVxuICBhcHAucm91dGVyKCgpID0+IHsgfSk7XG4gIGFwcC5zdGFydCgpO1xuICAvLyBjb25zb2xlLmxvZyhhcHApO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3Qgc3RvcmUgPSBhcHAuX3N0b3JlXG4gIHJldHVybiBzdG9yZTtcbn1cblxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgY29uc3QgaXNTZXJ2ZXIgPSBjaGVja1NlcnZlcigpO1xuICBpZiAoaXNTZXJ2ZXIpIHsgLy8gcnVuIGluIHNlcnZlclxuICAgIC8vIGNvbnNvbGUubG9nKCdzZXJ2ZXInKTtcbiAgICByZXR1cm4gY3JlYXRlRHZhU3RvcmUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgaWYgKCF3aW5kb3dbX19ORVhUX0RWQV9TVE9SRV9fXSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjbGllbnQnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB3aW5kb3dbX19ORVhUX0RWQV9TVE9SRV9fXSA9IGNyZWF0ZUR2YVN0b3JlKGluaXRpYWxTdGF0ZSk7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIHJldHVybiB3aW5kb3dbX19ORVhUX0RWQV9TVE9SRV9fXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aER2YSguLi5hcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBDcmVhdGVOZXh0UGFnZShDb21wb25lbnQpIHtcbiAgICBjb25zdCBDb21wb25lbnRXaXRoRHZhID0gKHByb3BzOiBhbnkgPSB7fSkgPT4ge1xuICAgICAgY29uc3QgeyBzdG9yZSwgaW5pdGlhbFByb3BzLCBpbml0aWFsU3RhdGUgfSA9IHByb3BzO1xuICAgICAgY29uc3QgQ29ubmVjdGVkQ29tcG9uZW50ID0gY29ubmVjdCguLi5hcmdzKShDb21wb25lbnQpO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFByb3ZpZGVyLFxuICAgICAgICAvLyBpbiBjbGllbnQgc2lkZSwgaXQgd2lsbCBpbml0IHN0b3JlIHdpdGggdGhlIGluaXRpYWwgc3RhdGUgdHJhbmZlciBmcm9tIHNlcnZlciBzaWRlXG4gICAgICAgIHsgc3RvcmU6IHN0b3JlICYmIHN0b3JlLmRpc3BhdGNoID8gc3RvcmUgOiBnZXRPckNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSkgfSxcbiAgICAgICAgLy8gdHJhbnNmZXIgbmV4dC5qcydzIHByb3BzIHRvIHRoZSBwYWdlXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29ubmVjdGVkQ29tcG9uZW50LCBpbml0aWFsUHJvcHMpLFxuICAgICAgKTtcbiAgICB9O1xuICAgIENvbXBvbmVudFdpdGhEdmEuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHByb3BzOiB7IHJlcT86IGFueSB9ID0ge30pID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXQuLi4uLi4nKTtcbiAgICAgIGNvbnN0IGlzU2VydmVyID0gY2hlY2tTZXJ2ZXIoKTtcbiAgICAgIGNvbnN0IHN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZShwcm9wcy5yZXEpO1xuICAgICAgLy8gY2FsbCBjaGlsZHJlbidzIGdldEluaXRpYWxQcm9wc1xuICAgICAgLy8gZ2V0IGluaXRQcm9wcyBhbmQgdHJhbnNmZXIgaW4gdG8gdGhlIHBhZ2VcbiAgICAgIGNvbnN0IGluaXRpYWxQcm9wcyA9IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKHsgLi4ucHJvcHMsIGlzU2VydmVyLCBzdG9yZSB9KVxuICAgICAgICA6IHt9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RvcmUsXG4gICAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgICAgaW5pdGlhbFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBDb21wb25lbnRXaXRoRHZhO1xuICB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZHZhLW5vLXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9