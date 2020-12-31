(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./src/components/searchAll.js":
/*!*************************************!*\
  !*** ./src/components/searchAll.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.13.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/_react-redux@7.2.0@react-redux/es/index.js\");\n/* harmony import */ var _child_searchResourceComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child/searchResourceComponent */ \"./src/components/child/searchResourceComponent.js\");\n\n\n\n\nconst SearchAll = ({\n\tlastSearchAllNetEaseCloudResult,\n\tlastSearchAllQQMusicSearchResult,\n\tlastSearchAllKuGouMusicSearchResult,\n\tlastSearchAllKuWoMusicSearchResult,\n\tlastSearchAllSearchString,\n\tlastSearchAllFileResult,\n\tlastSearchAllMusicResult,\n\tmusicList,\n\tfileList,\n\tcurrentQueryStringWithResultsSearchAll\n}) => {\n\tconst lastSearchResult = [];\n\tlastSearchResult.push({\n\t\tlastSearchAllFileResult\n\t});\n\tlastSearchResult.push({\n\t\tlastSearchAllMusicResult\n\t});\n\tlastSearchResult.push({\n\t\tlastQQMusicSearchResult: lastSearchAllQQMusicSearchResult\n\t});\n\tlastSearchResult.push({\n\t\tlastNetEaseCloudSearchResult: lastSearchAllNetEaseCloudResult\n\t});\n\tlastSearchResult.push({\n\t\tlastKuGouMusicSearchResult: lastSearchAllKuGouMusicSearchResult\n\t});\n\tlastSearchResult.push({\n\t\tlastKuWoMusicSearchResult: lastSearchAllKuWoMusicSearchResult\n\t});\n\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_child_searchResourceComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n\t\tnavbarText: '\\u5168\\u5C40\\u641C\\u7D22',\n\t\tplaceholder: '\\u641C\\u7D22',\n\t\ttype: 'searchAll',\n\t\tlastSearchResult: lastSearchResult,\n\t\tlastSearchString: lastSearchAllSearchString,\n\t\tmusicDatalist: musicList,\n\t\tfileDatalist: fileList,\n\t\tcurrentQueryStringWithResults: currentQueryStringWithResultsSearchAll\n\t});\n};\n\nconst mapStateToProps = state => {\n\treturn {\n\t\tlastSearchAllNetEaseCloudResult: state.fileServer.lastSearchAllNetEaseCloudResult,\n\t\tlastSearchAllQQMusicSearchResult: state.fileServer.lastSearchAllQQMusicSearchResult,\n\t\tlastSearchAllKuGouMusicSearchResult: state.fileServer.lastSearchAllKuGouMusicSearchResult,\n\t\tlastSearchAllKuWoMusicSearchResult: state.fileServer.lastSearchAllKuWoMusicSearchResult,\n\t\tlastSearchAllSearchString: state.fileServer.lastSearchAllSearchString,\n\t\tlastSearchAllFileResult: state.fileServer.lastSearchAllFileResult,\n\t\tlastSearchAllMusicResult: state.fileServer.lastSearchAllMusicResult,\n\t\tmusicList: state.fileServer.musicList,\n\t\tfileList: state.fileServer.fileList,\n\t\tcurrentQueryStringWithResultsSearchAll: state.fileServer.currentQueryStringWithResultsSearchAll\n\t};\n};\n\nconst mapDispatchToProps = () => ({});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(SearchAll));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWFyY2hBbGwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvc2VhcmNoQWxsLmpzPzQ1N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgU2VhcmNoUmVzb3VyY2VDb21wb25lbnQgZnJvbSAnLi9jaGlsZC9zZWFyY2hSZXNvdXJjZUNvbXBvbmVudCdcclxuXHJcbmNvbnN0IFNlYXJjaEFsbCA9ICh7XHJcblx0bGFzdFNlYXJjaEFsbE5ldEVhc2VDbG91ZFJlc3VsdCxcclxuXHRsYXN0U2VhcmNoQWxsUVFNdXNpY1NlYXJjaFJlc3VsdCxcclxuXHRsYXN0U2VhcmNoQWxsS3VHb3VNdXNpY1NlYXJjaFJlc3VsdCxcclxuXHRsYXN0U2VhcmNoQWxsS3VXb011c2ljU2VhcmNoUmVzdWx0LFxyXG5cdGxhc3RTZWFyY2hBbGxTZWFyY2hTdHJpbmcsXHJcblx0bGFzdFNlYXJjaEFsbEZpbGVSZXN1bHQsXHJcblx0bGFzdFNlYXJjaEFsbE11c2ljUmVzdWx0LFxyXG5cdG11c2ljTGlzdCxcclxuXHRmaWxlTGlzdCxcclxuXHRjdXJyZW50UXVlcnlTdHJpbmdXaXRoUmVzdWx0c1NlYXJjaEFsbCxcclxufSkgPT4ge1xyXG5cdGNvbnN0IGxhc3RTZWFyY2hSZXN1bHQgPSBbXVxyXG5cdGxhc3RTZWFyY2hSZXN1bHQucHVzaCh7XHJcblx0XHRsYXN0U2VhcmNoQWxsRmlsZVJlc3VsdFxyXG5cdH0pXHJcblx0bGFzdFNlYXJjaFJlc3VsdC5wdXNoKHtcclxuXHRcdGxhc3RTZWFyY2hBbGxNdXNpY1Jlc3VsdFxyXG5cdH0pXHJcblx0bGFzdFNlYXJjaFJlc3VsdC5wdXNoKHtcclxuXHRcdGxhc3RRUU11c2ljU2VhcmNoUmVzdWx0OiBsYXN0U2VhcmNoQWxsUVFNdXNpY1NlYXJjaFJlc3VsdFxyXG5cdH0pXHJcblx0bGFzdFNlYXJjaFJlc3VsdC5wdXNoKHtcclxuXHRcdGxhc3ROZXRFYXNlQ2xvdWRTZWFyY2hSZXN1bHQ6IGxhc3RTZWFyY2hBbGxOZXRFYXNlQ2xvdWRSZXN1bHRcclxuXHR9KVxyXG5cdGxhc3RTZWFyY2hSZXN1bHQucHVzaCh7XHJcblx0XHRsYXN0S3VHb3VNdXNpY1NlYXJjaFJlc3VsdDogbGFzdFNlYXJjaEFsbEt1R291TXVzaWNTZWFyY2hSZXN1bHRcclxuXHR9KVxyXG5cdGxhc3RTZWFyY2hSZXN1bHQucHVzaCh7XHJcblx0XHRsYXN0S3VXb011c2ljU2VhcmNoUmVzdWx0OiBsYXN0U2VhcmNoQWxsS3VXb011c2ljU2VhcmNoUmVzdWx0XHJcblx0fSlcclxuXHRyZXR1cm4gXHQ8U2VhcmNoUmVzb3VyY2VDb21wb25lbnRcclxuXHRcdFx0XHRuYXZiYXJUZXh0PVwi5YWo5bGA5pCc57SiXCJcclxuXHRcdFx0XHRwbGFjZWhvbGRlcj0n5pCc57SiJ1xyXG5cdFx0XHRcdHR5cGU9XCJzZWFyY2hBbGxcIlxyXG5cdFx0XHRcdGxhc3RTZWFyY2hSZXN1bHQ9e2xhc3RTZWFyY2hSZXN1bHR9XHJcblx0XHRcdFx0bGFzdFNlYXJjaFN0cmluZz17bGFzdFNlYXJjaEFsbFNlYXJjaFN0cmluZ31cclxuXHRcdFx0XHRtdXNpY0RhdGFsaXN0PXttdXNpY0xpc3R9XHJcblx0XHRcdFx0ZmlsZURhdGFsaXN0PXtmaWxlTGlzdH1cclxuXHRcdFx0XHRjdXJyZW50UXVlcnlTdHJpbmdXaXRoUmVzdWx0cz17Y3VycmVudFF1ZXJ5U3RyaW5nV2l0aFJlc3VsdHNTZWFyY2hBbGx9XHJcblx0XHRcdC8+XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0bGFzdFNlYXJjaEFsbE5ldEVhc2VDbG91ZFJlc3VsdDogc3RhdGUuZmlsZVNlcnZlci5sYXN0U2VhcmNoQWxsTmV0RWFzZUNsb3VkUmVzdWx0LFxyXG5cdFx0bGFzdFNlYXJjaEFsbFFRTXVzaWNTZWFyY2hSZXN1bHQ6IHN0YXRlLmZpbGVTZXJ2ZXIubGFzdFNlYXJjaEFsbFFRTXVzaWNTZWFyY2hSZXN1bHQsXHJcblx0XHRsYXN0U2VhcmNoQWxsS3VHb3VNdXNpY1NlYXJjaFJlc3VsdDogc3RhdGUuZmlsZVNlcnZlci5sYXN0U2VhcmNoQWxsS3VHb3VNdXNpY1NlYXJjaFJlc3VsdCxcclxuXHRcdGxhc3RTZWFyY2hBbGxLdVdvTXVzaWNTZWFyY2hSZXN1bHQ6IHN0YXRlLmZpbGVTZXJ2ZXIubGFzdFNlYXJjaEFsbEt1V29NdXNpY1NlYXJjaFJlc3VsdCxcclxuXHRcdGxhc3RTZWFyY2hBbGxTZWFyY2hTdHJpbmc6IHN0YXRlLmZpbGVTZXJ2ZXIubGFzdFNlYXJjaEFsbFNlYXJjaFN0cmluZyxcclxuXHRcdGxhc3RTZWFyY2hBbGxGaWxlUmVzdWx0OiBzdGF0ZS5maWxlU2VydmVyLmxhc3RTZWFyY2hBbGxGaWxlUmVzdWx0LFxyXG5cdFx0bGFzdFNlYXJjaEFsbE11c2ljUmVzdWx0OiBzdGF0ZS5maWxlU2VydmVyLmxhc3RTZWFyY2hBbGxNdXNpY1Jlc3VsdCxcclxuXHRcdG11c2ljTGlzdDogc3RhdGUuZmlsZVNlcnZlci5tdXNpY0xpc3QsXHJcblx0XHRmaWxlTGlzdDogc3RhdGUuZmlsZVNlcnZlci5maWxlTGlzdCxcclxuXHRcdGN1cnJlbnRRdWVyeVN0cmluZ1dpdGhSZXN1bHRzU2VhcmNoQWxsOiBzdGF0ZS5maWxlU2VydmVyLmN1cnJlbnRRdWVyeVN0cmluZ1dpdGhSZXN1bHRzU2VhcmNoQWxsLFxyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoKSA9PiAoe30pO1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZWFyY2hBbGwpO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUEvQkE7QUFDQTtBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQURBO0FBQ0E7QUFjQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/searchAll.js\n");

/***/ })

}]);