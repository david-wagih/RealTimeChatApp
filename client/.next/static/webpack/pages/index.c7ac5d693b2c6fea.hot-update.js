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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_socket_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/socket.context */ \"./context/socket.context.tsx\");\n/* harmony import */ var _containers_Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/Messages */ \"./containers/Messages.tsx\");\n/* harmony import */ var _containers_Rooms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/Rooms */ \"./containers/Rooms.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var handleSetUserName = function handleSetUserName() {\n        var value = userNameRef.current.value;\n        if (!value) {\n            return;\n        }\n        setUsername(value);\n        localStorage.setItem(\"userName\", value);\n    };\n    _s();\n    var ref = (0,_context_socket_context__WEBPACK_IMPORTED_MODULE_1__.useSockets)(), socket = ref.socket, userName = ref.userName, setUsername = ref.setUsername;\n    var userNameRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            !userName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Username\",\n                        ref: userNameRef\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programming\\\\myProjects\\\\RealTimeChatApp\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSetUserName,\n                        children: \"Set Username\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programming\\\\myProjects\\\\RealTimeChatApp\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Programming\\\\myProjects\\\\RealTimeChatApp\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_Rooms__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Programming\\\\myProjects\\\\RealTimeChatApp\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_Messages__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Programming\\\\myProjects\\\\RealTimeChatApp\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Programming\\\\myProjects\\\\RealTimeChatApp\\\\client\\\\pages\\\\index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"G1agM4m4SAdhIj9nqyipdKsy4bc=\", false, function() {\n    return [\n        _context_socket_context__WEBPACK_IMPORTED_MODULE_1__.useSockets\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUF1RDtBQUNBO0FBQ047QUFDbEI7O0FBRWhCLFNBQVNJLElBQUksR0FBRztRQUlwQkMsaUJBQWlCLEdBQTFCLFNBQVNBLGlCQUFpQixHQUFHO1FBQzNCLElBQU1DLEtBQUssR0FBR0MsV0FBVyxDQUFDQyxPQUFPLENBQUNGLEtBQUs7UUFDdkMsSUFBSSxDQUFDQSxLQUFLLEVBQUU7WUFDVixPQUFPO1NBQ1I7UUFDREcsV0FBVyxDQUFDSCxLQUFLLENBQUMsQ0FBQztRQUVuQkksWUFBWSxDQUFDQyxPQUFPLENBQUMsVUFBVSxFQUFFTCxLQUFLLENBQUMsQ0FBQztLQUN6Qzs7SUFYRCxJQUEwQ04sR0FBWSxHQUFaQSxtRUFBVSxFQUFFLEVBQTlDWSxNQUFNLEdBQTRCWixHQUFZLENBQTlDWSxNQUFNLEVBQUVDLFFBQVEsR0FBa0JiLEdBQVksQ0FBdENhLFFBQVEsRUFBRUosV0FBVyxHQUFLVCxHQUFZLENBQTVCUyxXQUFXO0lBQ3JDLElBQU1GLFdBQVcsR0FBR0osNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFZaEMscUJBQ0UsOERBQUNXLEtBQUc7O1lBQ0QsQ0FBQ0QsUUFBUSxrQkFDUiw4REFBQ0MsS0FBRzs7a0NBQ0YsOERBQUNDLE9BQUs7d0JBQUNDLFdBQVcsRUFBQyxVQUFVO3dCQUFDQyxHQUFHLEVBQUVWLFdBQVc7Ozs7OzRCQUFJO2tDQUNsRCw4REFBQ1csUUFBTTt3QkFBQ0MsT0FBTyxFQUFFZCxpQkFBaUI7a0NBQUUsY0FBWTs7Ozs7NEJBQVM7Ozs7OztvQkFDckQ7MEJBRVIsOERBQUNILHlEQUFjOzs7O29CQUFHOzBCQUNsQiw4REFBQ0QsNERBQWlCOzs7O29CQUFHOzs7Ozs7WUFDakIsQ0FDTjtDQUNIO0dBMUJ1QkcsSUFBSTs7UUFDZ0JKLCtEQUFVOzs7QUFEOUJJLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU29ja2V0cyB9IGZyb20gXCIuLi9jb250ZXh0L3NvY2tldC5jb250ZXh0XCI7XG5pbXBvcnQgTWVzc2FnZXNDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvTWVzc2FnZXNcIjtcbmltcG9ydCBSb29tc0NvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9Sb29tc1wiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgc29ja2V0LCB1c2VyTmFtZSwgc2V0VXNlcm5hbWUgfSA9IHVzZVNvY2tldHMoKTtcbiAgY29uc3QgdXNlck5hbWVSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2V0VXNlck5hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB1c2VyTmFtZVJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0VXNlcm5hbWUodmFsdWUpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyTmFtZVwiLCB2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7IXVzZXJOYW1lICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHJlZj17dXNlck5hbWVSZWZ9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZXRVc2VyTmFtZX0+U2V0IFVzZXJuYW1lPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxSb29tc0NvbnRhaW5lciAvPlxuICAgICAgPE1lc3NhZ2VzQ29udGFpbmVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU29ja2V0cyIsIk1lc3NhZ2VzQ29udGFpbmVyIiwiUm9vbXNDb250YWluZXIiLCJ1c2VSZWYiLCJIb21lIiwiaGFuZGxlU2V0VXNlck5hbWUiLCJ2YWx1ZSIsInVzZXJOYW1lUmVmIiwiY3VycmVudCIsInNldFVzZXJuYW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNvY2tldCIsInVzZXJOYW1lIiwiZGl2IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});