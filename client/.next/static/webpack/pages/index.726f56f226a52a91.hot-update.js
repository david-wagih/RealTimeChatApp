"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./containers/Rooms.tsx":
/*!******************************!*\
  !*** ./containers/Rooms.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_socket_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/socket.context */ \"./context/socket.context.tsx\");\n\n\n\nvar _s = $RefreshSig$();\nfunction RoomsContainer() {\n    var handleCreateRoom = function handleCreateRoom() {};\n    _s();\n    var ref = (0,_context_socket_context__WEBPACK_IMPORTED_MODULE_2__.useSockets)(), socket = ref.socket, roomId = ref.roomId, rooms = ref.rooms;\n    var newRoomRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: newRoomRef,\n                        placeholder: \"Room Name\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programming\\\\myProjects\\\\RealTimeChatApp\\\\client\\\\containers\\\\Rooms.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return handleCreateRoom;\n                        },\n                        children: \"CREATE ROOM\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programming\\\\myProjects\\\\RealTimeChatApp\\\\client\\\\containers\\\\Rooms.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Programming\\\\myProjects\\\\RealTimeChatApp\\\\client\\\\containers\\\\Rooms.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Programming\\\\myProjects\\\\RealTimeChatApp\\\\client\\\\containers\\\\Rooms.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(RoomsContainer, \"pw6gZ/whbKjPNJsqbu5TWUQaUzg=\", false, function() {\n    return [\n        _context_socket_context__WEBPACK_IMPORTED_MODULE_2__.useSockets\n    ];\n});\n_c = RoomsContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomsContainer);\nvar _c;\n$RefreshReg$(_c, \"RoomsContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWluZXJzL1Jvb21zLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUErQjtBQUN3Qjs7QUFFdkQsU0FBU0UsY0FBYyxHQUFHO1FBSWZDLGdCQUFnQixHQUF6QixTQUFTQSxnQkFBZ0IsR0FBRyxFQUFFOztJQUg5QixJQUFrQ0YsR0FBWSxHQUFaQSxtRUFBVSxFQUFFLEVBQXRDRyxNQUFNLEdBQW9CSCxHQUFZLENBQXRDRyxNQUFNLEVBQUVDLE1BQU0sR0FBWUosR0FBWSxDQUE5QkksTUFBTSxFQUFFQyxLQUFLLEdBQUtMLEdBQVksQ0FBdEJLLEtBQUs7SUFDN0IsSUFBTUMsVUFBVSxHQUFHUCw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUkvQixxQkFDRTtrQkFDRSw0RUFBQ1EsS0FBRztzQkFDRiw0RUFBQ0MsS0FBRzs7a0NBQ0YsOERBQUNDLE9BQUs7d0JBQUNDLEdBQUcsRUFBRUosVUFBVTt3QkFBRUssV0FBVyxFQUFDLFdBQVc7Ozs7OzRCQUFHO2tDQUNsRCw4REFBQ0MsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFO21DQUFNWCxnQkFBZ0I7eUJBQUE7a0NBQUUsYUFBVzs7Ozs7NEJBQVM7Ozs7OztvQkFDekQ7Ozs7O2dCQUNGO3FCQUNMLENBQ0g7Q0FDSDtHQWhCUUQsY0FBYzs7UUFDYUQsK0RBQVU7OztBQURyQ0MsS0FBQUEsY0FBYztBQWtCdkIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250YWluZXJzL1Jvb21zLnRzeD9iNmMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTb2NrZXRzIH0gZnJvbSBcIi4uL2NvbnRleHQvc29ja2V0LmNvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIFJvb21zQ29udGFpbmVyKCkge1xyXG4gIGNvbnN0IHsgc29ja2V0LCByb29tSWQsIHJvb21zIH0gPSB1c2VTb2NrZXRzKCk7XHJcbiAgY29uc3QgbmV3Um9vbVJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ3JlYXRlUm9vbSgpIHt9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXQgcmVmPXtuZXdSb29tUmVmfSBwbGFjZWhvbGRlcj1cIlJvb20gTmFtZVwiIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNyZWF0ZVJvb219PkNSRUFURSBST09NPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vbXNDb250YWluZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTb2NrZXRzIiwiUm9vbXNDb250YWluZXIiLCJoYW5kbGVDcmVhdGVSb29tIiwic29ja2V0Iiwicm9vbUlkIiwicm9vbXMiLCJuZXdSb29tUmVmIiwibmF2IiwiZGl2IiwiaW5wdXQiLCJyZWYiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/Rooms.tsx\n");

/***/ })

});