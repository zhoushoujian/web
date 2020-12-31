(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./src/components/searchOnlineMusic.js":
/*!*********************************************!*\
  !*** ./src/components/searchOnlineMusic.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.13.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/_react-redux@7.2.0@react-redux/es/index.js\");\n/* harmony import */ var _child_searchResourceComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child/searchResourceComponent */ \"./src/components/child/searchResourceComponent.js\");\n\n\n\n\nconst SearchOnlineMusic = ({\n\tlastNetEaseCloudSearchResult,\n\tlastQQMusicSearchResult,\n\tlastKuGouMusicSearchResult,\n\tlastKuWoMusicSearchResult,\n\tlastOnlineMusicSearchString,\n\tcurrentQueryStringWithResultsSearchOnline\n}) => {\n\tconst lastSearchResult = [\"\", \"\"];\n\tlastSearchResult.push({\n\t\tlastQQMusicSearchResult\n\t});\n\tlastSearchResult.push({\n\t\tlastNetEaseCloudSearchResult\n\t});\n\tlastSearchResult.push({\n\t\tlastKuGouMusicSearchResult\n\t});\n\tlastSearchResult.push({\n\t\tlastKuWoMusicSearchResult\n\t});\n\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_child_searchResourceComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n\t\tnavbarText: '\\u641C\\u7D22\\u5728\\u7EBF\\u97F3\\u4E50',\n\t\tplaceholder: '\\u641C\\u7D22',\n\t\ttype: 'onlineMusic',\n\t\tlastSearchResult: lastSearchResult,\n\t\tlastSearchString: lastOnlineMusicSearchString,\n\t\tcurrentQueryStringWithResults: currentQueryStringWithResultsSearchOnline\n\t});\n};\n\nconst mapStateToProps = state => {\n\treturn {\n\t\tlastNetEaseCloudSearchResult: state.fileServer.lastNetEaseCloudSearchResult,\n\t\tlastQQMusicSearchResult: state.fileServer.lastQQMusicSearchResult,\n\t\tlastKuGouMusicSearchResult: state.fileServer.lastKuGouMusicSearchResult,\n\t\tlastKuWoMusicSearchResult: state.fileServer.lastKuWoMusicSearchResult,\n\t\tlastOnlineMusicSearchString: state.fileServer.lastOnlineMusicSearchString,\n\t\tcurrentQueryStringWithResultsSearchOnline: state.fileServer.currentQueryStringWithResultsSearchOnline\n\t};\n};\n\nconst mapDispatchToProps = () => ({});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(SearchOnlineMusic));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWFyY2hPbmxpbmVNdXNpYy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9zZWFyY2hPbmxpbmVNdXNpYy5qcz9iMDIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFNlYXJjaFJlc291cmNlQ29tcG9uZW50IGZyb20gJy4vY2hpbGQvc2VhcmNoUmVzb3VyY2VDb21wb25lbnQnXHJcblxyXG5jb25zdCBTZWFyY2hPbmxpbmVNdXNpYyA9ICh7XHJcblx0bGFzdE5ldEVhc2VDbG91ZFNlYXJjaFJlc3VsdCxcclxuXHRsYXN0UVFNdXNpY1NlYXJjaFJlc3VsdCxcclxuXHRsYXN0S3VHb3VNdXNpY1NlYXJjaFJlc3VsdCxcclxuXHRsYXN0S3VXb011c2ljU2VhcmNoUmVzdWx0LFxyXG5cdGxhc3RPbmxpbmVNdXNpY1NlYXJjaFN0cmluZyxcclxuXHRjdXJyZW50UXVlcnlTdHJpbmdXaXRoUmVzdWx0c1NlYXJjaE9ubGluZSxcclxufSkgPT4ge1xyXG5cdGNvbnN0IGxhc3RTZWFyY2hSZXN1bHQgPSBbXCJcIiwgXCJcIl1cclxuXHRsYXN0U2VhcmNoUmVzdWx0LnB1c2goe1xyXG5cdFx0bGFzdFFRTXVzaWNTZWFyY2hSZXN1bHRcclxuXHR9KVxyXG5cdGxhc3RTZWFyY2hSZXN1bHQucHVzaCh7XHJcblx0XHRsYXN0TmV0RWFzZUNsb3VkU2VhcmNoUmVzdWx0XHJcblx0fSlcclxuXHRsYXN0U2VhcmNoUmVzdWx0LnB1c2goe1xyXG5cdFx0bGFzdEt1R291TXVzaWNTZWFyY2hSZXN1bHRcclxuXHR9KVxyXG5cdGxhc3RTZWFyY2hSZXN1bHQucHVzaCh7XHJcblx0XHRsYXN0S3VXb011c2ljU2VhcmNoUmVzdWx0XHJcblx0fSlcclxuXHRyZXR1cm4gXHQ8U2VhcmNoUmVzb3VyY2VDb21wb25lbnRcclxuXHRcdFx0XHRuYXZiYXJUZXh0PVwi5pCc57Si5Zyo57q/6Z+z5LmQXCJcclxuXHRcdFx0XHRwbGFjZWhvbGRlcj0n5pCc57SiJ1xyXG5cdFx0XHRcdHR5cGU9XCJvbmxpbmVNdXNpY1wiXHJcblx0XHRcdFx0bGFzdFNlYXJjaFJlc3VsdD17bGFzdFNlYXJjaFJlc3VsdH1cclxuXHRcdFx0XHRsYXN0U2VhcmNoU3RyaW5nPXtsYXN0T25saW5lTXVzaWNTZWFyY2hTdHJpbmd9XHJcblx0XHRcdFx0Y3VycmVudFF1ZXJ5U3RyaW5nV2l0aFJlc3VsdHM9e2N1cnJlbnRRdWVyeVN0cmluZ1dpdGhSZXN1bHRzU2VhcmNoT25saW5lfVxyXG5cdFx0XHQvPlxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGxhc3ROZXRFYXNlQ2xvdWRTZWFyY2hSZXN1bHQ6IHN0YXRlLmZpbGVTZXJ2ZXIubGFzdE5ldEVhc2VDbG91ZFNlYXJjaFJlc3VsdCxcclxuXHRcdGxhc3RRUU11c2ljU2VhcmNoUmVzdWx0OiBzdGF0ZS5maWxlU2VydmVyLmxhc3RRUU11c2ljU2VhcmNoUmVzdWx0LFxyXG5cdFx0bGFzdEt1R291TXVzaWNTZWFyY2hSZXN1bHQ6IHN0YXRlLmZpbGVTZXJ2ZXIubGFzdEt1R291TXVzaWNTZWFyY2hSZXN1bHQsXHJcblx0XHRsYXN0S3VXb011c2ljU2VhcmNoUmVzdWx0OiBzdGF0ZS5maWxlU2VydmVyLmxhc3RLdVdvTXVzaWNTZWFyY2hSZXN1bHQsXHJcblx0XHRsYXN0T25saW5lTXVzaWNTZWFyY2hTdHJpbmc6IHN0YXRlLmZpbGVTZXJ2ZXIubGFzdE9ubGluZU11c2ljU2VhcmNoU3RyaW5nLFxyXG5cdFx0Y3VycmVudFF1ZXJ5U3RyaW5nV2l0aFJlc3VsdHNTZWFyY2hPbmxpbmU6IHN0YXRlLmZpbGVTZXJ2ZXIuY3VycmVudFF1ZXJ5U3RyaW5nV2l0aFJlc3VsdHNTZWFyY2hPbmxpbmUsXHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9ICgpID0+ICh7fSk7XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlYXJjaE9ubGluZU11c2ljKTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBckJBO0FBQ0E7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFDQTtBQVVBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/searchOnlineMusic.js\n");

/***/ })

}]);