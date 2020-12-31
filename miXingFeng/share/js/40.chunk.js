(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

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

/***/ "./src/components/updateUserInfo/checkEmailOrMobile.js":
/*!*************************************************************!*\
  !*** ./src/components/updateUserInfo/checkEmailOrMobile.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_mobile_lib_toast_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile/lib/toast/style/css */ \"./node_modules/_antd-mobile@2.3.1@antd-mobile/lib/toast/style/css.js\");\n/* harmony import */ var antd_mobile_lib_toast_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile/lib/toast */ \"./node_modules/_antd-mobile@2.3.1@antd-mobile/lib/toast/index.js\");\n/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.13.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/_react-redux@7.2.0@react-redux/es/index.js\");\n/* harmony import */ var _child_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../child/navbar */ \"./src/components/child/navbar.js\");\n/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils */ \"./src/services/utils.js\");\n/* harmony import */ var _constants_httpRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/httpRoute */ \"./src/constants/httpRoute.js\");\n/* harmony import */ var _ducks_myInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ducks/myInfo */ \"./src/ducks/myInfo.js\");\n/* harmony import */ var _ducks_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ducks/login */ \"./src/ducks/login.js\");\n/* harmony import */ var _constants_enumeration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/enumeration */ \"./src/constants/enumeration.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst keyCode = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 229];\n\nclass CheckEmailOrMobile extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n\n\tconstructor(props) {\n\t\tsuper(props);\n\n\t\tthis.backToMainPage = () => {\n\t\t\tconst { forgetPasswordToken, registerFromLogin, self, token } = this.props;\n\t\t\tif (this.isEmail) {\n\t\t\t\tif (forgetPasswordToken || !token) {\n\t\t\t\t\t$dispatch(Object(_ducks_login__WEBPACK_IMPORTED_MODULE_8__[\"updateForgetPasswordToken\"])(\"\"));\n\t\t\t\t\t$dispatch(Object(_ducks_login__WEBPACK_IMPORTED_MODULE_8__[\"updateForgetPasswordTokenOrigin\"])(\"\"));\n\t\t\t\t\twindow.goRoute(self, \"/forget_password\");\n\t\t\t\t} else {\n\t\t\t\t\twindow.goRoute(self, \"/set_email\");\n\t\t\t\t}\n\t\t\t} else if (this.isMobile) {\n\t\t\t\tif (forgetPasswordToken || !token) {\n\t\t\t\t\t$dispatch(Object(_ducks_login__WEBPACK_IMPORTED_MODULE_8__[\"updateForgetPasswordToken\"])(\"\"));\n\t\t\t\t\t$dispatch(Object(_ducks_login__WEBPACK_IMPORTED_MODULE_8__[\"updateForgetPasswordTokenOrigin\"])(\"\"));\n\t\t\t\t\twindow.goRoute(self, \"/forget_password\");\n\t\t\t\t} else if (registerFromLogin) {\n\t\t\t\t\twindow.goRoute(self, \"/set_mobile\");\n\t\t\t\t} else {\n\t\t\t\t\twindow.goRoute(self, \"/set_mobile\");\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\tthis.switchNextInput = (e, number) => {\n\t\t\tif (e.keyCode === 8) {\n\t\t\t\tif (!this[`inputValueRef${number}`].value & number !== 1) {\n\t\t\t\t\tconst previous = --number;\n\t\t\t\t\tthis[`inputValueRef${previous}`].value = \"\";\n\t\t\t\t\tthis[`inputValueRef${previous}`].focus();\n\t\t\t\t\tthis.clearInputColor();\n\t\t\t\t\tthis[`inputValueRef${previous}`].style.borderBottom = \"1px solid red\";\n\t\t\t\t}\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tconst value1 = this.inputValueRef1.value;\n\t\t\tconst value2 = this.inputValueRef2.value;\n\t\t\tconst value3 = this.inputValueRef3.value;\n\t\t\tconst value4 = this.inputValueRef4.value;\n\t\t\tif (value1 && value2 && value3 && value4) {\n\t\t\t\tthis.submit();\n\t\t\t} else if (number !== 4 && keyCode.includes(e.keyCode)) {\n\t\t\t\tsetTimeout(() => {\n\t\t\t\t\tconst value1 = this.inputValueRef1.value;\n\t\t\t\t\tconst value2 = this.inputValueRef2.value;\n\t\t\t\t\tconst value3 = this.inputValueRef3.value;\n\t\t\t\t\tconst value4 = this.inputValueRef4.value;\n\t\t\t\t\tif (value1 && value2 && value3 && value4) {\n\t\t\t\t\t\tthis.submit();\n\t\t\t\t\t} else {\n\t\t\t\t\t\tthis[`inputValueRef${++number}`].focus();\n\t\t\t\t\t\tthis.clearInputColor();\n\t\t\t\t\t\tthis[`inputValueRef${number}`].style.borderBottom = \"1px solid red\";\n\t\t\t\t\t}\n\t\t\t\t}, 10);\n\t\t\t} else {\n\t\t\t\tsetTimeout(() => {\n\t\t\t\t\tconst value1 = this.inputValueRef1.value;\n\t\t\t\t\tconst value2 = this.inputValueRef2.value;\n\t\t\t\t\tconst value3 = this.inputValueRef3.value;\n\t\t\t\t\tconst value4 = this.inputValueRef4.value;\n\t\t\t\t\tif (value1 && value2 && value3 && value4) {\n\t\t\t\t\t\tthis.submit();\n\t\t\t\t\t}\n\t\t\t\t}, 10);\n\t\t\t}\n\t\t};\n\n\t\tthis.clearInputColor = () => {\n\t\t\tthis.inputValueRef1.style.borderBottom = \"1px solid #000\";\n\t\t\tthis.inputValueRef2.style.borderBottom = \"1px solid #000\";\n\t\t\tthis.inputValueRef3.style.borderBottom = \"1px solid #000\";\n\t\t\tthis.inputValueRef4.style.borderBottom = \"1px solid #000\";\n\t\t};\n\n\t\tthis.submit = () => {\n\t\t\tconst value1 = this.inputValueRef1.value;\n\t\t\tconst value2 = this.inputValueRef2.value;\n\t\t\tconst value3 = this.inputValueRef3.value;\n\t\t\tconst value4 = this.inputValueRef4.value;\n\t\t\tconst value = value1 + value2 + value3 + value4;\n\t\t\tconst { username, setTempEmail, setTempMobile, hasForgetPassword, registerFromLogin, self, forgetPasswordToken, setMobile, userId, token } = this.props;\n\t\t\tlogger.info(\"checkEmail submit value\", value);\n\t\t\tif (!this.startToSubmit) {\n\t\t\t\tthis.startToSubmit = true;\n\t\t\t\tantd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default.a.loading('请稍后...', _constants_enumeration__WEBPACK_IMPORTED_MODULE_9__[\"CONSTANT\"].toastLoadingTime, () => {});\n\t\t\t\tconst checkUrl = this.isEmail ? _constants_httpRoute__WEBPACK_IMPORTED_MODULE_6__[\"HTTP_URL\"].checkEmailValid.format({ value, username: username || setMobile, email: setTempEmail, mobile: setMobile }) : this.isMobile ? _constants_httpRoute__WEBPACK_IMPORTED_MODULE_6__[\"HTTP_URL\"].checkMobileValid.format({ value, username, mobile: setTempMobile || setMobile, registerFromLogin: token ? false : registerFromLogin || !!forgetPasswordToken }) : null;\n\t\t\t\tif (!checkUrl) return;\n\t\t\t\treturn axios.get(checkUrl).then(response => {\n\t\t\t\t\tantd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default.a.hide();\n\t\t\t\t\tconst result = response.data.result;\n\t\t\t\t\tif (result.response === \"modify_success\") {\n\t\t\t\t\t\tif (this.isEmail) {\n\t\t\t\t\t\t\t$dispatch(Object(_ducks_myInfo__WEBPACK_IMPORTED_MODULE_7__[\"updateSetEmail\"])(setTempEmail));\n\t\t\t\t\t\t\t$dispatch(Object(_ducks_myInfo__WEBPACK_IMPORTED_MODULE_7__[\"updateSetTempEmail\"])(\"\"));\n\t\t\t\t\t\t\tif (hasForgetPassword) {\n\t\t\t\t\t\t\t\t$dispatch(Object(_ducks_login__WEBPACK_IMPORTED_MODULE_8__[\"updateHasForgetPassword\"])(false));\n\t\t\t\t\t\t\t\twindow.goRoute(self, \"/reset_password_sys\");\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tif (result.token) $dispatch(Object(_ducks_login__WEBPACK_IMPORTED_MODULE_8__[\"updateToken\"])(result.token));\n\t\t\t\t\t\t\t\talert(\"设置成功\");\n\t\t\t\t\t\t\t\twindow.goRoute(self, \"/user_profile\");\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else if (this.isMobile) {\n\t\t\t\t\t\t\tconst { username } = this.props;\n\t\t\t\t\t\t\tif (!username) {\n\t\t\t\t\t\t\t\tlocalStorage.setItem(\"oldUserId\", userId || \"\");\n\t\t\t\t\t\t\t\t$dispatch(Object(_ducks_login__WEBPACK_IMPORTED_MODULE_8__[\"updateUserId\"])(setTempMobile));\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t$dispatch(Object(_ducks_myInfo__WEBPACK_IMPORTED_MODULE_7__[\"updateSetMobile\"])(setTempMobile));\n\t\t\t\t\t\t\t$dispatch(Object(_ducks_myInfo__WEBPACK_IMPORTED_MODULE_7__[\"updateSetTempMobile\"])(\"\"));\n\n\t\t\t\t\t\t\t$dispatch(Object(_ducks_login__WEBPACK_IMPORTED_MODULE_8__[\"updateToken\"])(result.token));\n\n\t\t\t\t\t\t\talert(\"设置成功\");\n\t\t\t\t\t\t\twindow.goRoute(self, \"/user_profile\");\n\t\t\t\t\t\t}\n\t\t\t\t\t} else if (result.response === \"no_username_or_value\") {\n\t\t\t\t\t\treturn alert(\"没有用户名或验证码或邮箱\");\n\t\t\t\t\t} else if (result.response === \"code_wrong\") {\n\t\t\t\t\t\treturn alert(\"验证码错误\");\n\t\t\t\t\t} else if (result.response === \"check_mobile_success\") {\n\t\t\t\t\t\t$dispatch(Object(_ducks_login__WEBPACK_IMPORTED_MODULE_8__[\"updateRegisterFromLogin\"])(false));\n\t\t\t\t\t\t$dispatch(Object(_ducks_login__WEBPACK_IMPORTED_MODULE_8__[\"updateToken\"])(result.token));\n\t\t\t\t\t\t$dispatch(Object(_ducks_myInfo__WEBPACK_IMPORTED_MODULE_7__[\"updateSetMobile\"])(setTempMobile));\n\t\t\t\t\t\t$dispatch(Object(_ducks_myInfo__WEBPACK_IMPORTED_MODULE_7__[\"updateSetTempMobile\"])(\"\"));\n\t\t\t\t\t\tlocalStorage.setItem(\"oldUserId\", userId || \"\");\n\t\t\t\t\t\t$dispatch(Object(_ducks_login__WEBPACK_IMPORTED_MODULE_8__[\"updateUserId\"])(setTempMobile));\n\t\t\t\t\t\tif (forgetPasswordToken) {\n\t\t\t\t\t\t\twindow.goRoute(self, \"/reset_password_sys\");\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\twindow.goRoute(self, \"/register\");\n\t\t\t\t\t\t}\n\t\t\t\t\t} else if (result.response === \"illegal_mobile\") {\n\t\t\t\t\t\treturn alert(\"手机号错误\");\n\t\t\t\t\t} else if (result.response === \"no_username_or_value_or_mobile\") {\n\t\t\t\t\t\treturn alert(\"没有用户名或验证码或手机号\");\n\t\t\t\t\t} else if (result.response === \"code_wrong\") {\n\t\t\t\t\t\treturn alert(\"验证码错误\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\treturn alert(\"设置失败\");\n\t\t\t\t\t}\n\t\t\t\t}).catch(err => {\n\t\t\t\t\tantd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default.a.hide();\n\t\t\t\t\treturn Object(_services_utils__WEBPACK_IMPORTED_MODULE_5__[\"networkErr\"])(err, this.isEmail ? \"checkEmailValid\" : \"checkMobileValid\");\n\t\t\t\t}).finally(() => {\n\t\t\t\t\tthis.startToSubmit = false;\n\t\t\t\t});\n\t\t\t}\n\t\t};\n\n\t\tthis.isEmail = props.type === \"email\";\n\t\tthis.isMobile = props.type === \"mobile\";\n\t\tthis.state = {\n\t\t\tleftTime: 60\n\t\t};\n\t}\n\n\tcomponentDidMount() {\n\t\tconst intervalTimer = setInterval(() => {\n\t\t\tlet { leftTime } = this.state;\n\t\t\tif (leftTime <= 0) return clearInterval(intervalTimer);\n\t\t\tthis.setState({\n\t\t\t\tleftTime: --leftTime\n\t\t\t});\n\t\t}, 1000);\n\t\tthis[`inputValueRef1`].style.borderBottom = \"1px solid red\";\n\t\tthis.inputValueRef1.focus();\n\t}\n\n\trender() {\n\t\tconst { leftTime } = this.state;\n\t\tconst { setTempEmail, setTempMobile } = this.props;\n\t\treturn react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", { className: \"check-email-input-container\" }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_child_navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { centerText: \"\\u586B\\u5199\\u9A8C\\u8BC1\\u7801\", backToPreviousPage: this.backToMainPage, rightText: leftTime || \"\" }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", { className: \"check-email-input-content\" }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", { className: \"check-email-input\", maxLength: 1, ref: ref => this.inputValueRef1 = ref, onKeyDown: e => this.switchNextInput(e, 1) }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", { className: \"check-email-input\", maxLength: 1, ref: ref => this.inputValueRef2 = ref, onKeyDown: e => this.switchNextInput(e, 2) }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", { className: \"check-email-input\", maxLength: 1, ref: ref => this.inputValueRef3 = ref, onKeyDown: e => this.switchNextInput(e, 3) }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", { className: \"check-email-input\", maxLength: 1, ref: ref => this.inputValueRef4 = ref, onKeyDown: e => this.switchNextInput(e, 4) })), this.isEmail ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", { className: \"tips\" }, \"\\u63D0\\u793A\\uFF1A\\u8BBE\\u7F6E\\u90AE\\u7BB1\\u53EF\\u7528\\u4E8E\\u627E\\u56DE\\u5BC6\\u7801, \\u9A8C\\u8BC1\\u780110\\u5206\\u949F\\u6709\\u6548;\", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), \"\\u60A8\\u521A\\u8F93\\u5165\\u7684\\u90AE\\u7BB1\\uFF1A\", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"strong\", null, setTempEmail), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), \"\\u5982\\u679C\\u6536\\u4EF6\\u7BB1\\u627E\\u4E0D\\u5230\\u90AE\\u4EF6\\uFF0C\\u8BF7\\u68C0\\u67E5\\u90AE\\u4EF6\\u662F\\u5426\\u88AB\\u90AE\\u7BB1\\u62E6\\u622A\\u3002 \")) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", { className: \"tips\" }, \"\\u63D0\\u793A\\uFF1A\\u624B\\u673A\\u53F7: \", setTempMobile, \", \\u9A8C\\u8BC1\\u780110\\u5206\\u949F\\u6709\\u6548;\"));\n\t}\n}\n\nconst mapStateToProps = state => {\n\treturn {\n\t\tsetTempEmail: state.myInfo.setTempEmail,\n\t\tusername: state.login.username,\n\t\thasForgetPassword: state.login.hasForgetPassword,\n\t\tsetTempMobile: state.myInfo.setTempMobile,\n\t\tregisterFromLogin: state.login.registerFromLogin,\n\t\tforgetPasswordToken: state.login.forgetPasswordToken,\n\t\ttoken: state.login.token,\n\t\tsetMobile: state.myInfo.setMobile,\n\t\tuserId: state.login.userId\n\t};\n};\n\nconst mapDispatchToProps = () => ({});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, mapDispatchToProps)(CheckEmailOrMobile));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91cGRhdGVVc2VySW5mby9jaGVja0VtYWlsT3JNb2JpbGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvdXBkYXRlVXNlckluZm8vY2hlY2tFbWFpbE9yTW9iaWxlLmpzPzA5ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcImFudGQtbW9iaWxlXCI7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NoaWxkL25hdmJhclwiO1xyXG5pbXBvcnQgeyBuZXR3b3JrRXJyIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3V0aWxzXCI7XHJcbmltcG9ydCB7IEhUVFBfVVJMIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9odHRwUm91dGVcIjtcclxuaW1wb3J0IHsgdXBkYXRlU2V0RW1haWwsIHVwZGF0ZVNldE1vYmlsZSwgdXBkYXRlU2V0VGVtcE1vYmlsZSwgdXBkYXRlU2V0VGVtcEVtYWlsIH0gZnJvbSBcIi4uLy4uL2R1Y2tzL215SW5mb1wiO1xyXG5pbXBvcnQgeyB1cGRhdGVUb2tlbiwgdXBkYXRlSGFzRm9yZ2V0UGFzc3dvcmQsIHVwZGF0ZVJlZ2lzdGVyRnJvbUxvZ2luLCB1cGRhdGVGb3JnZXRQYXNzd29yZFRva2VuLCB1cGRhdGVVc2VySWQsIHVwZGF0ZUZvcmdldFBhc3N3b3JkVG9rZW5PcmlnaW4gfSBmcm9tIFwiLi4vLi4vZHVja3MvbG9naW5cIjtcclxuaW1wb3J0IHsgQ09OU1RBTlQgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2VudW1lcmF0aW9uXCI7XHJcblxyXG5jb25zdCBrZXlDb2RlID0gW1xyXG5cdDQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3LCAgLy/mlbDlrZfplK5cclxuXHQ5NiwgOTcsIDk4LCA5OSwgMTAwLCAxMDEsIDEwMiwgMTAzLCAxMDQsIDEwNSwvLyDmlbDlrZfplK7nm5jkuIrnmoTplK5cclxuXHQyMjkgLy/miYvmnLrplK7nm5hcclxuXVxyXG5cclxuY2xhc3MgQ2hlY2tFbWFpbE9yTW9iaWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblx0XHR0aGlzLmlzRW1haWwgPSBwcm9wcy50eXBlID09PSBcImVtYWlsXCJcclxuXHRcdHRoaXMuaXNNb2JpbGUgPSBwcm9wcy50eXBlID09PSBcIm1vYmlsZVwiXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRsZWZ0VGltZTogNjBcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XHJcblx0XHRjb25zdCBpbnRlcnZhbFRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRsZXQgeyBsZWZ0VGltZSB9ID0gdGhpcy5zdGF0ZVxyXG5cdFx0XHRpZihsZWZ0VGltZSA8PSAwKSByZXR1cm4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbFRpbWVyKVxyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRsZWZ0VGltZTogLS1sZWZ0VGltZVxyXG5cdFx0XHR9KVxyXG5cdFx0fSwgMTAwMClcclxuXHRcdHRoaXNbYGlucHV0VmFsdWVSZWYxYF0uc3R5bGUuYm9yZGVyQm90dG9tID0gXCIxcHggc29saWQgcmVkXCJcclxuXHRcdHRoaXMuaW5wdXRWYWx1ZVJlZjEuZm9jdXMoKVxyXG5cdH1cclxuXHJcbiAgICBiYWNrVG9NYWluUGFnZSA9ICgpID0+IHtcclxuXHRcdGNvbnN0IHsgZm9yZ2V0UGFzc3dvcmRUb2tlbiwgcmVnaXN0ZXJGcm9tTG9naW4sIHNlbGYsIHRva2VuIH0gPSB0aGlzLnByb3BzXHJcblx0XHRpZih0aGlzLmlzRW1haWwpe1xyXG5cdFx0XHRpZihmb3JnZXRQYXNzd29yZFRva2VuIHx8ICF0b2tlbil7XHJcblx0XHRcdFx0JGRpc3BhdGNoKHVwZGF0ZUZvcmdldFBhc3N3b3JkVG9rZW4oXCJcIikpXHJcblx0XHRcdFx0JGRpc3BhdGNoKHVwZGF0ZUZvcmdldFBhc3N3b3JkVG9rZW5PcmlnaW4oXCJcIikpXHJcblx0XHRcdFx0d2luZG93LmdvUm91dGUoc2VsZiwgXCIvZm9yZ2V0X3Bhc3N3b3JkXCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHdpbmRvdy5nb1JvdXRlKHNlbGYsIFwiL3NldF9lbWFpbFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmKHRoaXMuaXNNb2JpbGUpIHtcclxuXHRcdFx0aWYoZm9yZ2V0UGFzc3dvcmRUb2tlbiB8fCAhdG9rZW4peyAgLy8g5b+Y6K6w5a+G56CB5Zy65pmvXHJcblx0XHRcdFx0JGRpc3BhdGNoKHVwZGF0ZUZvcmdldFBhc3N3b3JkVG9rZW4oXCJcIikpXHJcblx0XHRcdFx0JGRpc3BhdGNoKHVwZGF0ZUZvcmdldFBhc3N3b3JkVG9rZW5PcmlnaW4oXCJcIikpXHJcblx0XHRcdFx0d2luZG93LmdvUm91dGUoc2VsZiwgXCIvZm9yZ2V0X3Bhc3N3b3JkXCIpO1xyXG5cdFx0XHR9IGVsc2UgaWYocmVnaXN0ZXJGcm9tTG9naW4peyAgLy/ms6jlhozlnLrmma9cclxuXHRcdFx0XHR3aW5kb3cuZ29Sb3V0ZShzZWxmLCBcIi9zZXRfbW9iaWxlXCIpO1xyXG5cdFx0XHR9IGVsc2UgeyAgLy8g5Liq5Lq65Lit5b+D5pu05pS55omL5py65Y+35Zy65pmvXHJcblx0XHRcdFx0d2luZG93LmdvUm91dGUoc2VsZiwgXCIvc2V0X21vYmlsZVwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3dpdGNoTmV4dElucHV0ID0gKGUsIG51bWJlcikgPT4ge1xyXG5cdFx0aWYoZS5rZXlDb2RlID09PSA4KSB7XHJcblx0XHRcdGlmKCF0aGlzW2BpbnB1dFZhbHVlUmVmJHtudW1iZXJ9YF0udmFsdWUgJiBudW1iZXIgIT09IDEpIHtcclxuXHRcdFx0XHRjb25zdCBwcmV2aW91cyA9IC0tbnVtYmVyXHJcblx0XHRcdFx0dGhpc1tgaW5wdXRWYWx1ZVJlZiR7cHJldmlvdXN9YF0udmFsdWUgPSBcIlwiXHJcblx0XHRcdFx0dGhpc1tgaW5wdXRWYWx1ZVJlZiR7cHJldmlvdXN9YF0uZm9jdXMoKVxyXG5cdFx0XHRcdHRoaXMuY2xlYXJJbnB1dENvbG9yKClcclxuXHRcdFx0XHR0aGlzW2BpbnB1dFZhbHVlUmVmJHtwcmV2aW91c31gXS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjFweCBzb2xpZCByZWRcIlxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0IHZhbHVlMSA9IHRoaXMuaW5wdXRWYWx1ZVJlZjEudmFsdWVcclxuXHRcdGNvbnN0IHZhbHVlMiA9IHRoaXMuaW5wdXRWYWx1ZVJlZjIudmFsdWVcclxuXHRcdGNvbnN0IHZhbHVlMyA9IHRoaXMuaW5wdXRWYWx1ZVJlZjMudmFsdWVcclxuXHRcdGNvbnN0IHZhbHVlNCA9IHRoaXMuaW5wdXRWYWx1ZVJlZjQudmFsdWVcclxuXHRcdGlmKHZhbHVlMSAmJiB2YWx1ZTIgJiYgdmFsdWUzICYmIHZhbHVlNCl7XHJcblx0XHRcdHRoaXMuc3VibWl0KClcclxuXHRcdH0gZWxzZSBpZihudW1iZXIgIT09IDQgJiYga2V5Q29kZS5pbmNsdWRlcyhlLmtleUNvZGUpKSB7XHJcblx0XHRcdC8vICDovpPlhaXmoYbojrflj5bliLDlgLzmr5Tov5nkuKrkuovku7bopoHov5/kuIDngrnvvIzmiYDku6XkuLrkuoblj5bliLDliJrliJrovpPlhaXnmoTlgLzvvIzov5nph4zpnIDopoHkuIDkuKrlu7bov59cclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdmFsdWUxID0gdGhpcy5pbnB1dFZhbHVlUmVmMS52YWx1ZVxyXG5cdFx0XHRcdGNvbnN0IHZhbHVlMiA9IHRoaXMuaW5wdXRWYWx1ZVJlZjIudmFsdWVcclxuXHRcdFx0XHRjb25zdCB2YWx1ZTMgPSB0aGlzLmlucHV0VmFsdWVSZWYzLnZhbHVlXHJcblx0XHRcdFx0Y29uc3QgdmFsdWU0ID0gdGhpcy5pbnB1dFZhbHVlUmVmNC52YWx1ZVxyXG5cdFx0XHRcdGlmKHZhbHVlMSAmJiB2YWx1ZTIgJiYgdmFsdWUzICYmIHZhbHVlNCl7XHJcblx0XHRcdFx0XHR0aGlzLnN1Ym1pdCgpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXNbYGlucHV0VmFsdWVSZWYkeysrbnVtYmVyfWBdLmZvY3VzKClcclxuXHRcdFx0XHRcdHRoaXMuY2xlYXJJbnB1dENvbG9yKClcclxuXHRcdFx0XHRcdHRoaXNbYGlucHV0VmFsdWVSZWYke251bWJlcn1gXS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjFweCBzb2xpZCByZWRcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMTApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRjb25zdCB2YWx1ZTEgPSB0aGlzLmlucHV0VmFsdWVSZWYxLnZhbHVlXHJcblx0XHRcdFx0Y29uc3QgdmFsdWUyID0gdGhpcy5pbnB1dFZhbHVlUmVmMi52YWx1ZVxyXG5cdFx0XHRcdGNvbnN0IHZhbHVlMyA9IHRoaXMuaW5wdXRWYWx1ZVJlZjMudmFsdWVcclxuXHRcdFx0XHRjb25zdCB2YWx1ZTQgPSB0aGlzLmlucHV0VmFsdWVSZWY0LnZhbHVlXHJcblx0XHRcdFx0aWYodmFsdWUxICYmIHZhbHVlMiAmJiB2YWx1ZTMgJiYgdmFsdWU0KXtcclxuXHRcdFx0XHRcdHRoaXMuc3VibWl0KClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIDEwKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2xlYXJJbnB1dENvbG9yID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5pbnB1dFZhbHVlUmVmMS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjFweCBzb2xpZCAjMDAwXCJcclxuXHRcdHRoaXMuaW5wdXRWYWx1ZVJlZjIuc3R5bGUuYm9yZGVyQm90dG9tID0gXCIxcHggc29saWQgIzAwMFwiXHJcblx0XHR0aGlzLmlucHV0VmFsdWVSZWYzLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMXB4IHNvbGlkICMwMDBcIlxyXG5cdFx0dGhpcy5pbnB1dFZhbHVlUmVmNC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjFweCBzb2xpZCAjMDAwXCJcclxuXHR9XHJcblxyXG5cdHN1Ym1pdCA9ICgpID0+IHtcclxuXHRcdGNvbnN0IHZhbHVlMSA9IHRoaXMuaW5wdXRWYWx1ZVJlZjEudmFsdWVcclxuXHRcdGNvbnN0IHZhbHVlMiA9IHRoaXMuaW5wdXRWYWx1ZVJlZjIudmFsdWVcclxuXHRcdGNvbnN0IHZhbHVlMyA9IHRoaXMuaW5wdXRWYWx1ZVJlZjMudmFsdWVcclxuXHRcdGNvbnN0IHZhbHVlNCA9IHRoaXMuaW5wdXRWYWx1ZVJlZjQudmFsdWVcclxuXHRcdGNvbnN0IHZhbHVlID0gKHZhbHVlMSArIHZhbHVlMiArIHZhbHVlMyArIHZhbHVlNClcclxuXHRcdGNvbnN0IHsgdXNlcm5hbWUsIHNldFRlbXBFbWFpbCwgc2V0VGVtcE1vYmlsZSwgaGFzRm9yZ2V0UGFzc3dvcmQsIHJlZ2lzdGVyRnJvbUxvZ2luLCBzZWxmLCBmb3JnZXRQYXNzd29yZFRva2VuLCBzZXRNb2JpbGUsIHVzZXJJZCAsIHRva2VufSA9IHRoaXMucHJvcHNcclxuXHRcdGxvZ2dlci5pbmZvKFwiY2hlY2tFbWFpbCBzdWJtaXQgdmFsdWVcIiwgdmFsdWUpXHJcblx0XHRpZighdGhpcy5zdGFydFRvU3VibWl0KXtcclxuXHRcdFx0dGhpcy5zdGFydFRvU3VibWl0ID0gdHJ1ZVxyXG5cdFx0XHRUb2FzdC5sb2FkaW5nKCfor7fnqI3lkI4uLi4nLCBDT05TVEFOVC50b2FzdExvYWRpbmdUaW1lLCAoKSA9PiB7fSk7XHJcblx0XHRcdGNvbnN0IGNoZWNrVXJsID0gdGhpcy5pc0VtYWlsXHJcblx0XHRcdFx0PyBIVFRQX1VSTC5jaGVja0VtYWlsVmFsaWQuZm9ybWF0KHt2YWx1ZSwgdXNlcm5hbWU6IHVzZXJuYW1lIHx8IHNldE1vYmlsZSwgZW1haWw6IHNldFRlbXBFbWFpbCwgbW9iaWxlOiBzZXRNb2JpbGV9KVxyXG5cdFx0XHRcdDogdGhpcy5pc01vYmlsZVxyXG5cdFx0XHRcdD8gSFRUUF9VUkwuY2hlY2tNb2JpbGVWYWxpZC5mb3JtYXQoe3ZhbHVlLCB1c2VybmFtZSwgbW9iaWxlOiBzZXRUZW1wTW9iaWxlIHx8IHNldE1vYmlsZSwgcmVnaXN0ZXJGcm9tTG9naW46IHRva2VuID8gZmFsc2UgOiAocmVnaXN0ZXJGcm9tTG9naW4gfHwgISFmb3JnZXRQYXNzd29yZFRva2VuKX0pXHJcblx0XHRcdFx0OiBudWxsXHJcblx0XHRcdGlmKCFjaGVja1VybCkgcmV0dXJuXHJcblx0XHRcdHJldHVybiBheGlvcy5nZXQoY2hlY2tVcmwpXHJcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0XHRUb2FzdC5oaWRlKCk7XHJcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSByZXNwb25zZS5kYXRhLnJlc3VsdFxyXG5cdFx0XHRcdFx0aWYocmVzdWx0LnJlc3BvbnNlID09PSBcIm1vZGlmeV9zdWNjZXNzXCIpe1xyXG5cdFx0XHRcdFx0XHRpZih0aGlzLmlzRW1haWwpe1xyXG5cdFx0XHRcdFx0XHRcdC8vIOiuvue9rumCrueuseWSjOaJvuWbnuWvhueggeeahOWTjeW6lOe7k+aenOmDveaYr21vZGlmeV9zdWNjZXNzLCDmib7lm57lr4bnoIHnm7TmjqXlk43lupRtb2RpZnlfc3VjY2Vzcywg6K6+572u6YKu566x6ZyA6KaB5YWI5L+d5a2Y6YKu566xLOWGjeWTjeW6lG1vZGlmeV9zdWNjZXNzXHJcblx0XHRcdFx0XHRcdFx0JGRpc3BhdGNoKHVwZGF0ZVNldEVtYWlsKHNldFRlbXBFbWFpbCkpXHJcblx0XHRcdFx0XHRcdFx0JGRpc3BhdGNoKHVwZGF0ZVNldFRlbXBFbWFpbChcIlwiKSk7XHJcblx0XHRcdFx0XHRcdFx0aWYoaGFzRm9yZ2V0UGFzc3dvcmQpe1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8g5b+Y6K6w5a+G56CBXHJcblx0XHRcdFx0XHRcdFx0XHQkZGlzcGF0Y2godXBkYXRlSGFzRm9yZ2V0UGFzc3dvcmQoZmFsc2UpKVxyXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LmdvUm91dGUoc2VsZiwgXCIvcmVzZXRfcGFzc3dvcmRfc3lzXCIpXHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIOS4quS6uuS4reW/g+iuvue9rumCrueuse+8jOWboOS4uuWPr+iDveayoeaciXVzZXJuYW1l77yM5omA5Lul5Y+v6IO95rKh5pyJdG9rZW7kuIvlj5FcclxuXHRcdFx0XHRcdFx0XHRcdGlmKHJlc3VsdC50b2tlbikgJGRpc3BhdGNoKHVwZGF0ZVRva2VuKHJlc3VsdC50b2tlbikpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YWxlcnQoXCLorr7nva7miJDlip9cIilcclxuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5nb1JvdXRlKHNlbGYsIFwiL3VzZXJfcHJvZmlsZVwiKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmKHRoaXMuaXNNb2JpbGUpe1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHsgdXNlcm5hbWUgfSA9IHRoaXMucHJvcHNcclxuXHRcdFx0XHRcdFx0XHRpZighdXNlcm5hbWUpe1xyXG5cdFx0XHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJvbGRVc2VySWRcIiwgdXNlcklkIHx8IFwiXCIpXHJcblx0XHRcdFx0XHRcdFx0XHQkZGlzcGF0Y2godXBkYXRlVXNlcklkKHNldFRlbXBNb2JpbGUpKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0JGRpc3BhdGNoKHVwZGF0ZVNldE1vYmlsZShzZXRUZW1wTW9iaWxlKSlcclxuXHRcdFx0XHRcdFx0XHQkZGlzcGF0Y2godXBkYXRlU2V0VGVtcE1vYmlsZShcIlwiKSk7XHJcblx0XHRcdFx0XHRcdFx0Ly8g5omL5py65Y+35Y+v5L2c5Li6dG9rZW7nmoTkvp3mja7vvIzmiYDku6Xov5nph4zkuIDlrprmnIl0b2tlblxyXG5cdFx0XHRcdFx0XHRcdCRkaXNwYXRjaCh1cGRhdGVUb2tlbihyZXN1bHQudG9rZW4pKTtcclxuXHRcdFx0XHRcdFx0XHQvLyDkuKrkurrkuK3lv4Porr7nva7miYvmnLrlj7dcclxuXHRcdFx0XHRcdFx0XHRhbGVydChcIuiuvue9ruaIkOWKn1wiKVxyXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5nb1JvdXRlKHNlbGYsIFwiL3VzZXJfcHJvZmlsZVwiKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYocmVzdWx0LnJlc3BvbnNlID09PSBcIm5vX3VzZXJuYW1lX29yX3ZhbHVlXCIpe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gYWxlcnQoXCLmsqHmnInnlKjmiLflkI3miJbpqozor4HnoIHmiJbpgq7nrrFcIilcclxuXHRcdFx0XHRcdH0gZWxzZSBpZihyZXN1bHQucmVzcG9uc2UgPT09IFwiY29kZV93cm9uZ1wiKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGFsZXJ0KFwi6aqM6K+B56CB6ZSZ6K+vXCIpXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYocmVzdWx0LnJlc3BvbnNlID09PSBcImNoZWNrX21vYmlsZV9zdWNjZXNzXCIpe1xyXG5cdFx0XHRcdFx0XHQvLyDorr7nva7miYvmnLrlj7co5ZON5bqU57uT5p6c5pivbW9kaWZ5X3N1Y2Nlc3MsIOWFtuS7luS4pOS4qumDveaYr2NoZWNrX21vYmlsZV9zdWNjZXNzKSzmiYvmnLrlj7fms6jlhowo5omL5py65Y+36aqM6K+B56CB5L2Z6YeP5pyJ6ZmQLOWFiOazqOmHiuWFpeWPoynlkozmiYvmnLrlj7flv5jorrDlr4bnoIHkuInnp43lnLrmma9cclxuXHRcdFx0XHRcdFx0JGRpc3BhdGNoKHVwZGF0ZVJlZ2lzdGVyRnJvbUxvZ2luKGZhbHNlKSlcclxuXHRcdFx0XHRcdFx0JGRpc3BhdGNoKHVwZGF0ZVRva2VuKHJlc3VsdC50b2tlbikpO1xyXG5cdFx0XHRcdFx0XHQkZGlzcGF0Y2godXBkYXRlU2V0TW9iaWxlKHNldFRlbXBNb2JpbGUpKTtcclxuXHRcdFx0XHRcdFx0JGRpc3BhdGNoKHVwZGF0ZVNldFRlbXBNb2JpbGUoXCJcIikpO1xyXG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm9sZFVzZXJJZFwiLCB1c2VySWQgfHwgXCJcIilcclxuXHRcdFx0XHRcdFx0JGRpc3BhdGNoKHVwZGF0ZVVzZXJJZChzZXRUZW1wTW9iaWxlKSk7XHJcblx0XHRcdFx0XHRcdGlmKGZvcmdldFBhc3N3b3JkVG9rZW4pe1xyXG5cdFx0XHRcdFx0XHRcdC8vIOW/mOiusOWvhueggVxyXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5nb1JvdXRlKHNlbGYsIFwiL3Jlc2V0X3Bhc3N3b3JkX3N5c1wiKVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdC8vIOaJi+acuuWPt+azqOWGjFxyXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5nb1JvdXRlKHNlbGYsIFwiL3JlZ2lzdGVyXCIpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSBpZihyZXN1bHQucmVzcG9uc2UgPT09IFwiaWxsZWdhbF9tb2JpbGVcIil7XHJcblx0XHRcdFx0XHRcdHJldHVybiBhbGVydChcIuaJi+acuuWPt+mUmeivr1wiKVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmKHJlc3VsdC5yZXNwb25zZSA9PT0gXCJub191c2VybmFtZV9vcl92YWx1ZV9vcl9tb2JpbGVcIil7XHJcblx0XHRcdFx0XHRcdHJldHVybiBhbGVydChcIuayoeacieeUqOaIt+WQjeaIlumqjOivgeeggeaIluaJi+acuuWPt1wiKVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmKHJlc3VsdC5yZXNwb25zZSA9PT0gXCJjb2RlX3dyb25nXCIpe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gYWxlcnQoXCLpqozor4HnoIHplJnor69cIilcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBhbGVydChcIuiuvue9ruWksei0pVwiKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0XHRUb2FzdC5oaWRlKCk7XHJcblx0XHRcdFx0XHRyZXR1cm4gbmV0d29ya0VycihlcnIsIHRoaXMuaXNFbWFpbCA/IFwiY2hlY2tFbWFpbFZhbGlkXCIgOiBcImNoZWNrTW9iaWxlVmFsaWRcIik7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuZmluYWxseSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnN0YXJ0VG9TdWJtaXQgPSBmYWxzZVxyXG5cdFx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IGxlZnRUaW1lIH0gPSB0aGlzLnN0YXRlXHJcblx0XHRjb25zdCB7IHNldFRlbXBFbWFpbCwgc2V0VGVtcE1vYmlsZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrLWVtYWlsLWlucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdkJhciBjZW50ZXJUZXh0PVwi5aGr5YaZ6aqM6K+B56CBXCIgYmFja1RvUHJldmlvdXNQYWdlPXt0aGlzLmJhY2tUb01haW5QYWdlfSByaWdodFRleHQ9e2xlZnRUaW1lIHx8IFwiXCJ9IC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGVjay1lbWFpbC1pbnB1dC1jb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiY2hlY2stZW1haWwtaW5wdXRcIiBtYXhMZW5ndGg9ezF9IHJlZj17cmVmID0+IHRoaXMuaW5wdXRWYWx1ZVJlZjEgPSByZWZ9IG9uS2V5RG93bj17KGUpID0+IHRoaXMuc3dpdGNoTmV4dElucHV0KGUsIDEpfSAvPlxyXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImNoZWNrLWVtYWlsLWlucHV0XCIgbWF4TGVuZ3RoPXsxfSByZWY9e3JlZiA9PiB0aGlzLmlucHV0VmFsdWVSZWYyID0gcmVmfSBvbktleURvd249eyhlKSA9PiB0aGlzLnN3aXRjaE5leHRJbnB1dChlLCAyKX0gLz5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJjaGVjay1lbWFpbC1pbnB1dFwiIG1heExlbmd0aD17MX0gcmVmPXtyZWYgPT4gdGhpcy5pbnB1dFZhbHVlUmVmMyA9IHJlZn0gb25LZXlEb3duPXsoZSkgPT4gdGhpcy5zd2l0Y2hOZXh0SW5wdXQoZSwgMyl9IC8+XHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiY2hlY2stZW1haWwtaW5wdXRcIiBtYXhMZW5ndGg9ezF9IHJlZj17cmVmID0+IHRoaXMuaW5wdXRWYWx1ZVJlZjQgPSByZWZ9IG9uS2V5RG93bj17KGUpID0+IHRoaXMuc3dpdGNoTmV4dElucHV0KGUsIDQpfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuaXNFbWFpbFxyXG5cdFx0XHRcdFx0P1x0PEZyYWdtZW50PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGlwc1wiPuaPkOekuu+8muiuvue9rumCrueuseWPr+eUqOS6juaJvuWbnuWvhueggSwg6aqM6K+B56CBMTDliIbpkp/mnInmlYg7XHJcblx0XHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdFx0XHTmgqjliJrovpPlhaXnmoTpgq7nrrHvvJo8c3Ryb25nPntzZXRUZW1wRW1haWx9PC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdFx0XHTlpoLmnpzmlLbku7bnrrHmib7kuI3liLDpgq7ku7bvvIzor7fmo4Dmn6Xpgq7ku7bmmK/lkKbooqvpgq7nrrHmi6bmiKrjgIIgPC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHQ6XHQ8ZGl2IGNsYXNzTmFtZT1cInRpcHNcIj7mj5DnpLrvvJrmiYvmnLrlj7c6IHtzZXRUZW1wTW9iaWxlfSwg6aqM6K+B56CBMTDliIbpkp/mnInmlYg7PC9kaXY+XHJcblx0XHRcdFx0fVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRzZXRUZW1wRW1haWw6IHN0YXRlLm15SW5mby5zZXRUZW1wRW1haWwsXHJcblx0XHR1c2VybmFtZTogc3RhdGUubG9naW4udXNlcm5hbWUsXHJcblx0XHRoYXNGb3JnZXRQYXNzd29yZDogc3RhdGUubG9naW4uaGFzRm9yZ2V0UGFzc3dvcmQsXHJcblx0XHRzZXRUZW1wTW9iaWxlOiBzdGF0ZS5teUluZm8uc2V0VGVtcE1vYmlsZSxcclxuXHRcdHJlZ2lzdGVyRnJvbUxvZ2luOiBzdGF0ZS5sb2dpbi5yZWdpc3RlckZyb21Mb2dpbixcclxuXHRcdGZvcmdldFBhc3N3b3JkVG9rZW46IHN0YXRlLmxvZ2luLmZvcmdldFBhc3N3b3JkVG9rZW4sXHJcblx0XHR0b2tlbjogc3RhdGUubG9naW4udG9rZW4sXHJcblx0XHRzZXRNb2JpbGU6IHN0YXRlLm15SW5mby5zZXRNb2JpbGUsXHJcblx0XHR1c2VySWQ6IHN0YXRlLmxvZ2luLnVzZXJJZCxcclxuXHR9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKCkgPT4gKHt9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoZWNrRW1haWxPck1vYmlsZSk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBekNBO0FBQ0E7QUFEQTtBQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFGQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQXRGQTtBQUNBO0FBREE7QUEwRkE7QUFDQTtBQUNBO0FBQ0E7QUE3RkE7QUFDQTtBQURBO0FBaUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1QkE7QUE4QkE7QUFEQTtBQUdBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFLQTtBQUNBO0FBZEE7QUFnQkE7QUFEQTtBQUdBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQTVEQTtBQStEQTtBQUNBO0FBaEVBO0FBbUVBO0FBbkVBO0FBcUVBO0FBdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQXNLQTtBQUNBO0FBQ0E7QUFDQTtBQXVCQTtBQXROQTtBQUNBO0FBd05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQURBO0FBQ0E7QUFhQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/updateUserInfo/checkEmailOrMobile.js\n");

/***/ }),

/***/ "./src/components/updateUserInfo/checkMobile.js":
/*!******************************************************!*\
  !*** ./src/components/updateUserInfo/checkMobile.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.13.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _checkEmailOrMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkEmailOrMobile */ \"./src/components/updateUserInfo/checkEmailOrMobile.js\");\nvar _this = undefined;\n\n\n\n\nconst CheckMobile = () => {\n\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_checkEmailOrMobile__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n\t\ttype: \"mobile\",\n\t\tself: _this\n\t});\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckMobile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91cGRhdGVVc2VySW5mby9jaGVja01vYmlsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy91cGRhdGVVc2VySW5mby9jaGVja01vYmlsZS5qcz9lMjcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaGVja0VtYWlsT3JNb2JpbGUgZnJvbSBcIi4vY2hlY2tFbWFpbE9yTW9iaWxlXCJcclxuXHJcbmNvbnN0IENoZWNrTW9iaWxlID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Q2hlY2tFbWFpbE9yTW9iaWxlXHJcblx0XHRcdHR5cGU9XCJtb2JpbGVcIlxyXG5cdFx0XHRzZWxmPXt0aGlzfVxyXG5cdFx0Lz5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrTW9iaWxlXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFRQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/updateUserInfo/checkMobile.js\n");

/***/ })

}]);