/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/default.ts":
/*!***************************!*\
  !*** ./config/default.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SOCKET_URL\": () => (/* binding */ SOCKET_URL)\n/* harmony export */ });\nconst SOCKET_URL = process.env.SOCKET_URL || \"http://localhost:4000\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZGVmYXVsdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsVUFBVSxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsVUFBVSxJQUFJLHVCQUF1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29uZmlnL2RlZmF1bHQudHM/NWMxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU09DS0VUX1VSTCA9IHByb2Nlc3MuZW52LlNPQ0tFVF9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjQwMDBcIjtcclxuIl0sIm5hbWVzIjpbIlNPQ0tFVF9VUkwiLCJwcm9jZXNzIiwiZW52Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/default.ts\n");

/***/ }),

/***/ "./config/events.ts":
/*!**************************!*\
  !*** ./config/events.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst EVENTS = {\n    connection: \"connection\",\n    CLIENT: {\n        CREATE_ROOM: \"CREATE_ROOM\"\n    },\n    SERVER: {\n        ROOMS: \"ROOMS\",\n        JOINED_ROOM: \"JOINED_ROOM\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EVENTS);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZXZlbnRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxNQUFNLEdBQUc7SUFDYkMsVUFBVSxFQUFFLFlBQVk7SUFDeEJDLE1BQU0sRUFBRTtRQUNOQyxXQUFXLEVBQUUsYUFBYTtLQUMzQjtJQUNEQyxNQUFNLEVBQUU7UUFDTkMsS0FBSyxFQUFFLE9BQU87UUFDZEMsV0FBVyxFQUFFLGFBQWE7S0FDM0I7Q0FDRjtBQUVELGlFQUFlTixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb25maWcvZXZlbnRzLnRzPzZhZjkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRVZFTlRTID0ge1xyXG4gIGNvbm5lY3Rpb246IFwiY29ubmVjdGlvblwiLFxyXG4gIENMSUVOVDoge1xyXG4gICAgQ1JFQVRFX1JPT006IFwiQ1JFQVRFX1JPT01cIixcclxuICB9LFxyXG4gIFNFUlZFUjoge1xyXG4gICAgUk9PTVM6IFwiUk9PTVNcIixcclxuICAgIEpPSU5FRF9ST09NOiBcIkpPSU5FRF9ST09NXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVWRU5UUztcclxuIl0sIm5hbWVzIjpbIkVWRU5UUyIsImNvbm5lY3Rpb24iLCJDTElFTlQiLCJDUkVBVEVfUk9PTSIsIlNFUlZFUiIsIlJPT01TIiwiSk9JTkVEX1JPT00iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/events.ts\n");

/***/ }),

/***/ "./context/socket.context.tsx":
/*!************************************!*\
  !*** ./context/socket.context.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useSockets\": () => (/* binding */ useSockets)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/default */ \"./config/default.ts\");\n/* harmony import */ var _config_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/events */ \"./config/events.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_config_default__WEBPACK_IMPORTED_MODULE_3__.SOCKET_URL);\nconst SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    socket,\n    setUsername: ()=>false\n    ,\n    rooms: {},\n    messages: [],\n    setMessage: ()=>false\n});\nfunction SocketsProvider(props) {\n    const { 0: userName , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: roomId , 1: setRoomId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: rooms , 1: setRooms  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { 0: messages , 1: setMessages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    socket.on(_config_events__WEBPACK_IMPORTED_MODULE_4__[\"default\"].SERVER.ROOMS, (value)=>{\n        setRooms(value);\n    });\n    socket.on(_config_events__WEBPACK_IMPORTED_MODULE_4__[\"default\"].SERVER.JOINED_ROOM, (value)=>{\n        setRoomId(value);\n        setMessages([]);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocketContext.Provider, {\n        value: {\n            socket,\n            userName,\n            setUsername,\n            rooms,\n            roomId\n        },\n        ...props\n    }, void 0, false, {\n        fileName: \"D:\\\\Programming\\\\myProjects\\\\RealTimeChatApp\\\\client\\\\context\\\\socket.context.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\nconst useSockets = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SocketContext)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketsProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3NvY2tldC5jb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE0RDtBQUNkO0FBQ0M7QUFDVDtBQVl0QyxNQUFNTSxNQUFNLEdBQUdILDREQUFFLENBQUNDLHVEQUFVLENBQUM7QUFFN0IsTUFBTUcsYUFBYSxpQkFBR1Asb0RBQWEsQ0FBVTtJQUMzQ00sTUFBTTtJQUNORSxXQUFXLEVBQUUsSUFBTSxLQUFLO0lBQUE7SUFDeEJDLEtBQUssRUFBRSxFQUFFO0lBQ1RDLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLFVBQVUsRUFBRSxJQUFNLEtBQUs7Q0FDeEIsQ0FBQztBQUVGLFNBQVNDLGVBQWUsQ0FBQ0MsS0FBVSxFQUFFO0lBQ25DLE1BQU0sRUExQlIsR0EwQlNDLFFBQVEsR0ExQmpCLEdBMEJtQk4sV0FBVyxNQUFJTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUM1QyxNQUFNLEVBM0JSLEdBMkJTYSxNQUFNLEdBM0JmLEdBMkJpQkMsU0FBUyxNQUFJZCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUN4QyxNQUFNLEVBNUJSLEdBNEJTTyxLQUFLLEdBNUJkLEdBNEJnQlEsUUFBUSxNQUFJZiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUN0QyxNQUFNLEVBN0JSLEdBNkJTUSxRQUFRLEdBN0JqQixHQTZCbUJRLFdBQVcsTUFBSWhCLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRTVDSSxNQUFNLENBQUNhLEVBQUUsQ0FBQ2QsbUVBQW1CLEVBQUUsQ0FBQ2lCLEtBQUssR0FBSztRQUN4Q0wsUUFBUSxDQUFDSyxLQUFLLENBQUMsQ0FBQztLQUNqQixDQUFDLENBQUM7SUFDSGhCLE1BQU0sQ0FBQ2EsRUFBRSxDQUFDZCx5RUFBeUIsRUFBRSxDQUFDaUIsS0FBSyxHQUFLO1FBQzlDTixTQUFTLENBQUNNLEtBQUssQ0FBQyxDQUFDO1FBQ2pCSixXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDakIsQ0FBQyxDQUFDO0lBRUgscUJBQ0UsOERBQUNYLGFBQWEsQ0FBQ2lCLFFBQVE7UUFDckJGLEtBQUssRUFBRTtZQUFFaEIsTUFBTTtZQUFFUSxRQUFRO1lBQUVOLFdBQVc7WUFBRUMsS0FBSztZQUFFTSxNQUFNO1NBQUU7UUFDdEQsR0FBR0YsS0FBSzs7Ozs7WUFDVCxDQUNGO0NBQ0g7QUFFTSxNQUFNWSxVQUFVLEdBQUcsSUFBTXhCLGlEQUFVLENBQUNNLGFBQWEsQ0FBQztBQUFBLENBQUM7QUFFMUQsaUVBQWVLLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbnRleHQvc29ja2V0LmNvbnRleHQudHN4PzUwMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGlvLCB7IFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCB7IFNPQ0tFVF9VUkwgfSBmcm9tIFwiLi4vY29uZmlnL2RlZmF1bHRcIjtcclxuaW1wb3J0IEVWRU5UUyBmcm9tIFwiLi4vY29uZmlnL2V2ZW50c1wiO1xyXG5cclxuaW50ZXJmYWNlIENvbnRleHQge1xyXG4gIHNvY2tldDogU29ja2V0O1xyXG4gIHVzZXJOYW1lPzogc3RyaW5nO1xyXG4gIHNldFVzZXJuYW1lOiBGdW5jdGlvbjtcclxuICByb29tSWQ/OiBzdHJpbmc7XHJcbiAgcm9vbXM6IG9iamVjdDtcclxuICBtZXNzYWdlcz86IGFueVtdO1xyXG4gIHNldE1lc3NhZ2U6IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5jb25zdCBzb2NrZXQgPSBpbyhTT0NLRVRfVVJMKTtcclxuXHJcbmNvbnN0IFNvY2tldENvbnRleHQgPSBjcmVhdGVDb250ZXh0PENvbnRleHQ+KHtcclxuICBzb2NrZXQsXHJcbiAgc2V0VXNlcm5hbWU6ICgpID0+IGZhbHNlLFxyXG4gIHJvb21zOiB7fSxcclxuICBtZXNzYWdlczogW10sXHJcbiAgc2V0TWVzc2FnZTogKCkgPT4gZmFsc2UsXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gU29ja2V0c1Byb3ZpZGVyKHByb3BzOiBhbnkpIHtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyb29tSWQsIHNldFJvb21JZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcm9vbXMsIHNldFJvb21zXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgc29ja2V0Lm9uKEVWRU5UUy5TRVJWRVIuUk9PTVMsICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0Um9vbXModmFsdWUpO1xyXG4gIH0pO1xyXG4gIHNvY2tldC5vbihFVkVOVFMuU0VSVkVSLkpPSU5FRF9ST09NLCAodmFsdWUpID0+IHtcclxuICAgIHNldFJvb21JZCh2YWx1ZSk7XHJcbiAgICBzZXRNZXNzYWdlcyhbXSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U29ja2V0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyBzb2NrZXQsIHVzZXJOYW1lLCBzZXRVc2VybmFtZSwgcm9vbXMsIHJvb21JZCB9fVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTb2NrZXRzID0gKCkgPT4gdXNlQ29udGV4dChTb2NrZXRDb250ZXh0KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvY2tldHNQcm92aWRlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJpbyIsIlNPQ0tFVF9VUkwiLCJFVkVOVFMiLCJzb2NrZXQiLCJTb2NrZXRDb250ZXh0Iiwic2V0VXNlcm5hbWUiLCJyb29tcyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZSIsIlNvY2tldHNQcm92aWRlciIsInByb3BzIiwidXNlck5hbWUiLCJyb29tSWQiLCJzZXRSb29tSWQiLCJzZXRSb29tcyIsInNldE1lc3NhZ2VzIiwib24iLCJTRVJWRVIiLCJST09NUyIsInZhbHVlIiwiSk9JTkVEX1JPT00iLCJQcm92aWRlciIsInVzZVNvY2tldHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/socket.context.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_socket_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/socket.context */ \"./context/socket.context.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_socket_context__WEBPACK_IMPORTED_MODULE_2__]);\n_context_socket_context__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_socket_context__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\Programming\\\\myProjects\\\\RealTimeChatApp\\\\client\\\\pages\\\\_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Programming\\\\myProjects\\\\RealTimeChatApp\\\\client\\\\pages\\\\_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUN5QjtBQUV4RCxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ0gsK0RBQWU7a0JBQ2QsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDWixDQUNsQjtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgU29ja2V0c1Byb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0L3NvY2tldC5jb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxTb2NrZXRzUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Tb2NrZXRzUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlNvY2tldHNQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();