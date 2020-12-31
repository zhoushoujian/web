(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./src/components/searchMusic.js":
/*!***************************************!*\
  !*** ./src/components/searchMusic.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.13.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/_react-redux@7.2.0@react-redux/es/index.js\");\n/* harmony import */ var _child_searchResourceComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child/searchResourceComponent */ \"./src/components/child/searchResourceComponent.js\");\n\n\n\n\nconst SearchMusic = ({ musicList, lastMusicSearchResult, lastMusicSearchString }) => {\n\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_child_searchResourceComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n\t\tmusicDatalist: musicList,\n\t\tnavbarText: '\\u641C\\u7D22\\u97F3\\u4E50',\n\t\tplaceholder: '\\u641C\\u7D22',\n\t\ttype: 'music',\n\t\tlastSearchResult: lastMusicSearchResult,\n\t\tlastSearchString: lastMusicSearchString\n\t});\n};\n\nconst mapStateToProps = state => {\n\treturn {\n\t\tmusicList: state.fileServer.musicList,\n\t\tlastMusicSearchResult: state.fileServer.lastMusicSearchResult,\n\t\tlastMusicSearchString: state.fileServer.lastMusicSearchString\n\t};\n};\n\nconst mapDispatchToProps = () => ({});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(SearchMusic));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWFyY2hNdXNpYy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9zZWFyY2hNdXNpYy5qcz8yYWQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFNlYXJjaFJlc291cmNlQ29tcG9uZW50IGZyb20gJy4vY2hpbGQvc2VhcmNoUmVzb3VyY2VDb21wb25lbnQnXHJcblxyXG5jb25zdCBTZWFyY2hNdXNpYyA9ICh7IG11c2ljTGlzdCwgbGFzdE11c2ljU2VhcmNoUmVzdWx0LCBsYXN0TXVzaWNTZWFyY2hTdHJpbmcgfSkgPT4ge1xyXG5cdHJldHVybiBcdDxTZWFyY2hSZXNvdXJjZUNvbXBvbmVudFxyXG5cdFx0XHRcdG11c2ljRGF0YWxpc3Q9e211c2ljTGlzdH1cclxuXHRcdFx0XHRuYXZiYXJUZXh0PVwi5pCc57Si6Z+z5LmQXCJcclxuXHRcdFx0XHRwbGFjZWhvbGRlcj0n5pCc57SiJ1xyXG5cdFx0XHRcdHR5cGU9XCJtdXNpY1wiXHJcblx0XHRcdFx0bGFzdFNlYXJjaFJlc3VsdD17bGFzdE11c2ljU2VhcmNoUmVzdWx0fVxyXG5cdFx0XHRcdGxhc3RTZWFyY2hTdHJpbmc9e2xhc3RNdXNpY1NlYXJjaFN0cmluZ31cclxuXHRcdFx0Lz5cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRtdXNpY0xpc3Q6IHN0YXRlLmZpbGVTZXJ2ZXIubXVzaWNMaXN0LFxyXG5cdFx0bGFzdE11c2ljU2VhcmNoUmVzdWx0OiBzdGF0ZS5maWxlU2VydmVyLmxhc3RNdXNpY1NlYXJjaFJlc3VsdCxcclxuXHRcdGxhc3RNdXNpY1NlYXJjaFN0cmluZzogc3RhdGUuZmlsZVNlcnZlci5sYXN0TXVzaWNTZWFyY2hTdHJpbmcsXHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9ICgpID0+ICh7fSk7XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlYXJjaE11c2ljKTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFDQTtBQU9BO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/searchMusic.js\n");

/***/ })

}]);