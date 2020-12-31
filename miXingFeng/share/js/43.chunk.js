(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./src/components/child/navbar.js":
/*!****************************************!*\
  !*** ./src/components/child/navbar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.13.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _statusBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statusBar */ \"./src/components/child/statusBar.js\");\n\n\n\nconst NavBar = ({ centerText = \"\", backToPreviousPage = () => {}, rightText = \"\", rightTextFunc = () => {} }) => {\n\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_statusBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"navbar-container\" }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"back-btn\", onClick: backToPreviousPage }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", { className: \"fa fa-angle-left\", \"aria-hidden\": \"true\" })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"center-text\" }, centerText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"other-text\", onClick: rightTextFunc }, rightText)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jaGlsZC9uYXZiYXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY2hpbGQvbmF2YmFyLmpzP2I5NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3RhdHVzQmFyIGZyb20gXCIuL3N0YXR1c0JhclwiO1xyXG5cclxuY29uc3QgTmF2QmFyID0gKHsgY2VudGVyVGV4dD1cIlwiLCBiYWNrVG9QcmV2aW91c1BhZ2U9KCk9Pnt9LCByaWdodFRleHQ9XCJcIiwgcmlnaHRUZXh0RnVuYz0oKT0+e319KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxGcmFnbWVudD5cclxuXHRcdFx0PFN0YXR1c0JhciAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb250YWluZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrLWJ0blwiIG9uQ2xpY2s9e2JhY2tUb1ByZXZpb3VzUGFnZX0+XHJcblx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZW50ZXItdGV4dFwiPntjZW50ZXJUZXh0fTwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3RoZXItdGV4dFwiIG9uQ2xpY2s9e3JpZ2h0VGV4dEZ1bmN9PntyaWdodFRleHR9PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9GcmFnbWVudD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQWNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/child/navbar.js\n");

/***/ }),

/***/ "./src/components/child/statusBar.js":
/*!*******************************************!*\
  !*** ./src/components/child/statusBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.13.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst StatusBar = () => {\n\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"top-status-bar\" });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StatusBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jaGlsZC9zdGF0dXNCYXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY2hpbGQvc3RhdHVzQmFyLmpzPzFlMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFN0YXR1c0JhciA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3Atc3RhdHVzLWJhclwiPjwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXR1c0JhcjtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/child/statusBar.js\n");

/***/ }),

/***/ "./src/components/loginRecord.js":
/*!***************************************!*\
  !*** ./src/components/loginRecord.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.13.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/_react-redux@7.2.0@react-redux/es/index.js\");\n/* harmony import */ var _child_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child/navbar */ \"./src/components/child/navbar.js\");\n/* harmony import */ var _child_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./child/loading */ \"./src/components/child/loading.js\");\n/* harmony import */ var _constants_httpRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/httpRoute */ \"./src/constants/httpRoute.js\");\n/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/utils */ \"./src/services/utils.js\");\n\n\n\n\n\n\n\nclass LoginRecord extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n\tconstructor(props) {\n\t\tsuper(props);\n\n\t\tthis.backToMainPage = () => {\n\t\t\twindow.goRoute(this, \"/system_setup\");\n\t\t};\n\n\t\tthis.state = {\n\t\t\trecords: [],\n\t\t\tloadingAnimation: true\n\t\t};\n\t}\n\n\tcomponentDidMount() {\n\t\tconst { token, username, setMobile } = this.props;\n\t\taxios.get(_constants_httpRoute__WEBPACK_IMPORTED_MODULE_4__[\"HTTP_URL\"].getLoginRecord.format({ token, username: username || setMobile })).then(response => {\n\t\t\tconst getLoginRecord = response.data.result.response;\n\t\t\tlogger.info('getLoginRecord', getLoginRecord);\n\t\t\tif (getLoginRecord === \"no_username\") {\n\t\t\t\treturn alertDialog(\"用户不存在\");\n\t\t\t} else if (Array.isArray(getLoginRecord)) {\n\t\t\t\tconst tempObj = {};\n\t\t\t\tgetLoginRecord.forEach(item => {\n\t\t\t\t\titem.id = item.manufacturer + item.model;\n\t\t\t\t\ttempObj[item.id] = item;\n\t\t\t\t});\n\t\t\t\tconst records = Object.values(tempObj);\n\t\t\t\tthis.setState({\n\t\t\t\t\trecords,\n\t\t\t\t\tloadingAnimation: false\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\talertDialog(\"未知错误\");\n\t\t\t\tlogger.error(\"HTTP_URL.getLoginRecord no condition getLoginRecord\", getLoginRecord);\n\t\t\t\tthis.setState({\n\t\t\t\t\tloadingAnimation: false\n\t\t\t\t});\n\t\t\t}\n\t\t}).catch(err => {\n\t\t\tthis.setState({\n\t\t\t\tloadingAnimation: false\n\t\t\t});\n\t\t\tObject(_services_utils__WEBPACK_IMPORTED_MODULE_5__[\"networkErr\"])(err, `getLoginRecord`);\n\t\t});\n\t}\n\n\trender() {\n\t\tconst { records, loadingAnimation } = this.state;\n\t\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"login-record-container\" }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_child_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { centerText: \"\\u767B\\u5F55\\u8BB0\\u5F55\", backToPreviousPage: this.backToMainPage }), loadingAnimation ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_child_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, records.map(item => (item.manufacturer || item.model) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"record-item-container\", key: item.uuid }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"item-info\" }, `${item.manufacturer} ${item.model}`), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"item-date\" }, item.date)))));\n\t}\n}\n\nconst mapStateToProps = state => {\n\treturn {\n\t\tusername: state.login.username,\n\t\ttoken: state.login.token,\n\t\tsetMobile: state.myInfo.setMobile\n\t};\n};\n\nconst mapDispatchToProps = () => ({});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(LoginRecord));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sb2dpblJlY29yZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9sb2dpblJlY29yZC5qcz84ZDRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL2NoaWxkL25hdmJhclwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9jaGlsZC9sb2FkaW5nXCJcclxuaW1wb3J0IHsgSFRUUF9VUkwgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2h0dHBSb3V0ZVwiO1xyXG5pbXBvcnQgeyBuZXR3b3JrRXJyIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBMb2dpblJlY29yZCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRyZWNvcmRzOiBbXSxcclxuXHRcdFx0bG9hZGluZ0FuaW1hdGlvbjogdHJ1ZVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcclxuXHRcdGNvbnN0IHsgdG9rZW4sIHVzZXJuYW1lLCBzZXRNb2JpbGUgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRheGlvcy5nZXQoSFRUUF9VUkwuZ2V0TG9naW5SZWNvcmQuZm9ybWF0KHt0b2tlbiwgdXNlcm5hbWU6IHVzZXJuYW1lfHxzZXRNb2JpbGV9KSlcclxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZ2V0TG9naW5SZWNvcmQgPSByZXNwb25zZS5kYXRhLnJlc3VsdC5yZXNwb25zZVxyXG5cdFx0XHRcdGxvZ2dlci5pbmZvKCdnZXRMb2dpblJlY29yZCcsIGdldExvZ2luUmVjb3JkKVxyXG5cdFx0XHRcdGlmKGdldExvZ2luUmVjb3JkID09PSBcIm5vX3VzZXJuYW1lXCIpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIGFsZXJ0RGlhbG9nKFwi55So5oi35LiN5a2Y5ZyoXCIpXHJcblx0XHRcdFx0fSBlbHNlIGlmKEFycmF5LmlzQXJyYXkoZ2V0TG9naW5SZWNvcmQpKXtcclxuXHRcdFx0XHRcdGNvbnN0IHRlbXBPYmogPSB7fVxyXG5cdFx0XHRcdFx0Z2V0TG9naW5SZWNvcmQuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRcdFx0aXRlbS5pZCA9IChpdGVtLm1hbnVmYWN0dXJlciArIGl0ZW0ubW9kZWwpXHJcblx0XHRcdFx0XHRcdHRlbXBPYmpbaXRlbS5pZF0gPSBpdGVtXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Y29uc3QgcmVjb3JkcyA9IE9iamVjdC52YWx1ZXModGVtcE9iailcclxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRyZWNvcmRzLFxyXG5cdFx0XHRcdFx0XHRsb2FkaW5nQW5pbWF0aW9uOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YWxlcnREaWFsb2coXCLmnKrnn6XplJnor69cIilcclxuXHRcdFx0XHRcdGxvZ2dlci5lcnJvcihcIkhUVFBfVVJMLmdldExvZ2luUmVjb3JkIG5vIGNvbmRpdGlvbiBnZXRMb2dpblJlY29yZFwiLCBnZXRMb2dpblJlY29yZClcclxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRsb2FkaW5nQW5pbWF0aW9uOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0bG9hZGluZ0FuaW1hdGlvbjogZmFsc2VcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdG5ldHdvcmtFcnIoZXJyLCBgZ2V0TG9naW5SZWNvcmRgKVxyXG5cdFx0XHR9KVxyXG5cdH1cclxuXHJcblx0YmFja1RvTWFpblBhZ2UgPSAoKSA9PiB7XHJcblx0XHR3aW5kb3cuZ29Sb3V0ZSh0aGlzLCBcIi9zeXN0ZW1fc2V0dXBcIik7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGNvbnN0IHsgcmVjb3JkcywgbG9hZGluZ0FuaW1hdGlvbiB9ID0gdGhpcy5zdGF0ZVxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2dpbi1yZWNvcmQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PE5hdkJhciBjZW50ZXJUZXh0PVwi55m75b2V6K6w5b2VXCIgYmFja1RvUHJldmlvdXNQYWdlPXt0aGlzLmJhY2tUb01haW5QYWdlfSAvPlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxvYWRpbmdBbmltYXRpb25cclxuXHRcdFx0XHRcdD9cdDxMb2FkaW5nIC8+XHJcblx0XHRcdFx0XHQ6XHQ8RnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVjb3Jkcy5tYXAoaXRlbSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdChpdGVtLm1hbnVmYWN0dXJlciB8fCBpdGVtLm1vZGVsKSAmJiA8ZGl2IGNsYXNzTmFtZT1cInJlY29yZC1pdGVtLWNvbnRhaW5lclwiIGtleT17aXRlbS51dWlkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIml0ZW0taW5mb1wiPntgJHtpdGVtLm1hbnVmYWN0dXJlcn0gJHtpdGVtLm1vZGVsfWB9PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpdGVtLWRhdGVcIj57aXRlbS5kYXRlfTwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdCkpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdGF0ZS5sb2dpbi51c2VybmFtZSxcclxuXHRcdHRva2VuOiBzdGF0ZS5sb2dpbi50b2tlbixcclxuXHRcdHNldE1vYmlsZTogc3RhdGUubXlJbmZvLnNldE1vYmlsZSxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoKSA9PiAoe30pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW5SZWNvcmQpO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUE0Q0E7QUE1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBdkJBO0FBMEJBO0FBQ0E7QUFEQTtBQUdBO0FBN0JBO0FBK0JBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFtQkE7QUFyRUE7QUFDQTtBQXVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQUNBO0FBT0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/loginRecord.js\n");

/***/ })

}]);