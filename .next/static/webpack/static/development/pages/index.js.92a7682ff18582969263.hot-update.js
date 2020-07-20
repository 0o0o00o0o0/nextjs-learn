webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.10.2@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime@7.10.2@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/_react@16.13.1@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/_next@9.4.4@next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/_antd@3.26.17@antd/es/index.js");
/* harmony import */ var _components_HtmlHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HtmlHeader */ "./components/HtmlHeader.tsx");
/* harmony import */ var _utils_commonsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/commonsStore */ "./utils/commonsStore.ts");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.sass */ "./pages/index.sass");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_sass__WEBPACK_IMPORTED_MODULE_7__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Home = function Home(props) {
  // const [count, setCount] = useState(0);
  var index = props.index;
  var name = index.name,
      count = index.count;
  return __jsx("div", {
    className: "index"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/user"
  }, __jsx("a", null, "\u53BBuser")), __jsx("br", null), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/dashboard?id=90",
    as: "/dashboard/90"
  }, __jsx("a", null, "\u53BBdashboard,id\u5047\u8BBE\u4E3A90")), __jsx(_components_HtmlHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\u4E3B\u9875"
  }), __jsx("p", null, "hello world"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: function onClick() {
      return props.dispatch({
        type: "index/caculate",
        delta: -1
      });
    }
  }, "\u51CF1"), "\u5168\u5C40\u72B6\u6001\u4E2D\u7684count:", count, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: function onClick() {
      return props.dispatch({
        type: "index/caculate",
        delta: 1
      });
    }
  }, "\u52A01"), __jsx("div", null, "index-name:", name, " ", __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: function onClick() {
      return props.dispatch({
        type: "index/asyncGetData",
        pageindex: 1
      });
    }
  }, "\u6539\u53D8indexName")), __jsx("div", null, "\u540C\u65F6\u53EF\u4EE5\u83B7\u53D6user\u7684name:", props.user.name));
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_utils_commonsStore__WEBPACK_IMPORTED_MODULE_6__["WithComponent"])(Home, function (props) {
  return new Promise(function (res) {
    setTimeout( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // 这里可以触发effect中的预处理数据，事先全局渲染
              // await props.store.dispatch({ type: 'index/init' })
              res({
                a: 67
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), 0);
  });
}));

var _c, _c2;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.43.0@webpack/buildin/harmony-module.js */ "./node_modules/_webpack@4.43.0@webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiaW5kZXgiLCJuYW1lIiwiY291bnQiLCJkaXNwYXRjaCIsInR5cGUiLCJkZWx0YSIsInBhZ2VpbmRleCIsInVzZXIiLCJXaXRoQ29tcG9uZW50IiwiUHJvbWlzZSIsInJlcyIsInNldFRpbWVvdXQiLCJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7O0FBQ3RCLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBbUI7QUFDOUI7QUFEOEIsTUFFdEJDLEtBRnNCLEdBRVpELEtBRlksQ0FFdEJDLEtBRnNCO0FBQUEsTUFHdEJDLElBSHNCLEdBR05ELEtBSE0sQ0FHdEJDLElBSHNCO0FBQUEsTUFHaEJDLEtBSGdCLEdBR05GLEtBSE0sQ0FHaEJFLEtBSGdCO0FBSTlCLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxLQUNFLDhCQURGLENBREYsRUFJRSxpQkFKRixFQUtFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsa0JBQVg7QUFBOEIsTUFBRSxFQUFDO0FBQWpDLEtBQ0UsMERBREYsQ0FMRixFQVFFLE1BQUMsOERBQUQ7QUFBUSxTQUFLLEVBQUM7QUFBZCxJQVJGLEVBU0UsK0JBVEYsRUFVRSxNQUFDLDJDQUFEO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBTUgsS0FBSyxDQUFDSSxRQUFOLENBQWU7QUFBRUMsWUFBSSxFQUFFLGdCQUFSO0FBQTBCQyxhQUFLLEVBQUUsQ0FBQztBQUFsQyxPQUFmLENBQU47QUFBQTtBQURYLGVBVkYsZ0RBZWVILEtBZmYsRUFnQkUsTUFBQywyQ0FBRDtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU1ILEtBQUssQ0FBQ0ksUUFBTixDQUFlO0FBQUVDLFlBQUksRUFBRSxnQkFBUjtBQUEwQkMsYUFBSyxFQUFFO0FBQWpDLE9BQWYsQ0FBTjtBQUFBO0FBRFgsZUFoQkYsRUFxQkUsa0NBQ2NKLElBRGQsRUFDb0IsR0FEcEIsRUFFRSxNQUFDLDJDQUFEO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFDUEYsS0FBSyxDQUFDSSxRQUFOLENBQWU7QUFBRUMsWUFBSSxFQUFFLG9CQUFSO0FBQThCRSxpQkFBUyxFQUFFO0FBQXpDLE9BQWYsQ0FETztBQUFBO0FBRFgsNkJBRkYsQ0FyQkYsRUErQkUsMEVBQXNCUCxLQUFLLENBQUNRLElBQU4sQ0FBV04sSUFBakMsQ0EvQkYsQ0FERjtBQW1DRCxDQXZDRDs7S0FBTUgsSTtBQXdDUyxxRUFBQVUseUVBQWEsQ0FDMUJWLElBRDBCLEVBRTFCLFVBQUNDLEtBQUQ7QUFBQSxTQUNFLElBQUlVLE9BQUosQ0FBWSxVQUFDQyxHQUFELEVBQVM7QUFDbkJDLGNBQVUsZ01BQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUO0FBQ0E7QUFDQUQsaUJBQUcsQ0FBQztBQUFFRSxpQkFBQyxFQUFFO0FBQUwsZUFBRCxDQUFIOztBQUhTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQsSUFJUCxDQUpPLENBQVY7QUFLRCxHQU5ELENBREY7QUFBQSxDQUYwQixDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOTJhNzY4MmZmMTg1ODI5NjkyNjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IdG1sSGVhZGVyXCI7XHJcbmltcG9ydCB7IFdpdGhDb21wb25lbnQsIElwcm9wcyB9IGZyb20gXCIuLi91dGlscy9jb21tb25zU3RvcmVcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5zYXNzXCI7XHJcbmNvbnN0IEhvbWUgPSAocHJvcHM6IElwcm9wcykgPT4ge1xyXG4gIC8vIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgeyBpbmRleCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBuYW1lLCBjb3VudCB9ID0gaW5kZXg7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXhcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi91c2VyXCI+XHJcbiAgICAgICAgPGE+5Y67dXNlcjwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQ/aWQ9OTBcIiBhcz1cIi9kYXNoYm9hcmQvOTBcIj5cclxuICAgICAgICA8YT7ljrtkYXNoYm9hcmQsaWTlgYforr7kuLo5MDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8SGVhZGVyIHRpdGxlPVwi5Li76aG1XCIgLz5cclxuICAgICAgPHA+aGVsbG8gd29ybGQ8L3A+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5kaXNwYXRjaCh7IHR5cGU6IFwiaW5kZXgvY2FjdWxhdGVcIiwgZGVsdGE6IC0xIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAg5YePMVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAg5YWo5bGA54q25oCB5Lit55qEY291bnQ6e2NvdW50fVxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuZGlzcGF0Y2goeyB0eXBlOiBcImluZGV4L2NhY3VsYXRlXCIsIGRlbHRhOiAxIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAg5YqgMVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBpbmRleC1uYW1lOntuYW1lfXtcIiBcIn1cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaCh7IHR5cGU6IFwiaW5kZXgvYXN5bmNHZXREYXRhXCIsIHBhZ2VpbmRleDogMSB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOaUueWPmGluZGV4TmFtZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj7lkIzml7blj6/ku6Xojrflj5Z1c2Vy55qEbmFtZTp7cHJvcHMudXNlci5uYW1lfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgV2l0aENvbXBvbmVudChcclxuICBIb21lLFxyXG4gIChwcm9wcykgPT5cclxuICAgIG5ldyBQcm9taXNlKChyZXMpID0+IHtcclxuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8g6L+Z6YeM5Y+v5Lul6Kem5Y+RZWZmZWN05Lit55qE6aKE5aSE55CG5pWw5o2u77yM5LqL5YWI5YWo5bGA5riy5p+TXHJcbiAgICAgICAgLy8gYXdhaXQgcHJvcHMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnaW5kZXgvaW5pdCcgfSlcclxuICAgICAgICByZXMoeyBhOiA2NyB9KTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9KVxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9