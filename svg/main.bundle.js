/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors-main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugin/js/index.tsx":
/*!*****************************!*\
  !*** ./plugin/js/index.tsx ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./plugin/js/main.tsx\");\n\r\n\r\n\r\nvar generateForHtml = true;\r\nwindow.onload = function () {\r\n    if (location.host === \"newtab\"\r\n        || location.host === \"local-ntp\"\r\n        || location.href === \"https://www.zhoushoujian.com/svg/\"\r\n        || /chrome\\-extension/.test(location.origin)\r\n        || generateForHtml) {\r\n        var ele = document.createElement('div');\r\n        ele.id = 'svg-viewer-chrome-plugin';\r\n        document.body.appendChild(ele);\r\n        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.querySelector('#svg-viewer-chrome-plugin'));\r\n    }\r\n    else {\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW4vanMvaW5kZXgudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3BsdWdpbi9qcy9pbmRleC50c3g/NDY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9tYWluXCI7XG5cbmNvbnN0IGdlbmVyYXRlRm9ySHRtbCA9IHRydWU7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGlmIChsb2NhdGlvbi5ob3N0ID09PSBcIm5ld3RhYlwiXG4gICAgfHwgbG9jYXRpb24uaG9zdCA9PT0gXCJsb2NhbC1udHBcIlxuICAgIHx8IGxvY2F0aW9uLmhyZWYgPT09IFwiaHR0cHM6Ly93d3cuemhvdXNob3VqaWFuLmNvbS9zdmcvXCJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICB8fCAvY2hyb21lXFwtZXh0ZW5zaW9uLy50ZXN0KGxvY2F0aW9uLm9yaWdpbilcbiAgICB8fCBnZW5lcmF0ZUZvckh0bWwpIHtcbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGUuaWQgPSAnc3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3RhcmdldCcpXG4gICAgUmVhY3RET00ucmVuZGVyKDxNYWluIC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luJykpO1xuICB9IGVsc2Uge1xuICAgIC8vIGNvbnNvbGUubG9nKCdubyBzdWl0YWJsZSBjYXNlJyk7XG4gIH1cbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./plugin/js/index.tsx\n");

/***/ }),

/***/ "./plugin/js/main.tsx":
/*!****************************!*\
  !*** ./plugin/js/main.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dropzone */ \"./node_modules/react-dropzone/dist/es/index.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __read = (undefined && undefined.__read) || function (o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n};\r\nvar __spread = (undefined && undefined.__spread) || function () {\r\n    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n};\r\n\r\n\r\nvar btnArray = [\r\n    {\r\n        type: \"svgBtn\",\r\n        title: \"show svg\",\r\n        text: \"SVG\"\r\n    },\r\n    {\r\n        type: \"gifBtn\",\r\n        title: \"show gif\",\r\n        text: \"GIF\"\r\n    },\r\n    {\r\n        type: \"jpgBtn\",\r\n        title: \"show jpg\",\r\n        text: \"JPG\"\r\n    },\r\n    {\r\n        type: \"pngBtn\",\r\n        title: \"show png\",\r\n        text: \"PNG\"\r\n    },\r\n    {\r\n        type: \"bmpBtn\",\r\n        title: \"show bmp\",\r\n        text: \"BMP\"\r\n    },\r\n    {\r\n        type: \"iconBtn\",\r\n        title: \"show icon\",\r\n        text: \"ICON\"\r\n    },\r\n];\r\nvar availableMimeArray = ['image/svg+xml', 'image/gif', 'image/jpeg', 'image/bmp', 'image/x-icon', 'image/png'];\r\nvar initState = true;\r\nvar mimeObjectInfo = {};\r\nfunction MyDropzone() {\r\n    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]), 2), availableFiles = _a[0], setAvailableFiles = _a[1];\r\n    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\r\n        svgBtn: true,\r\n        gifBtn: true,\r\n        jpgBtn: false,\r\n        pngBtn: false,\r\n        bmpBtn: false,\r\n        iconBtn: false\r\n    }), 2), selectedBtns = _b[0], setSelectedBtns = _b[1];\r\n    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\r\n        width: 200,\r\n        height: 200\r\n    }), 2), container = _c[0], setContainer = _c[1];\r\n    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\r\n        width: 150,\r\n        height: 150\r\n    }), 2), content = _d[0], setContent = _d[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        console.log(\"multi-svgs-viewer actived\");\r\n        if (document.querySelector('body')) {\r\n            document.querySelector('body').style.overflow = \"hidden\";\r\n        }\r\n    }, []);\r\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\r\n        var svgBtn = selectedBtns.svgBtn, gifBtn = selectedBtns.gifBtn, jpgBtn = selectedBtns.jpgBtn, pngBtn = selectedBtns.pngBtn, bmpBtn = selectedBtns.bmpBtn, iconBtn = selectedBtns.iconBtn;\r\n        availableFiles.forEach(function (item) {\r\n            if (item.type === 'image/svg+xml') {\r\n                item.visible = svgBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/gif') {\r\n                item.visible = gifBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/jpeg') {\r\n                item.visible = jpgBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/bmp') {\r\n                item.visible = bmpBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/x-icon') {\r\n                item.visible = iconBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/png') {\r\n                item.visible = pngBtn ? true : false;\r\n            }\r\n        });\r\n        console.log('filter changed, files: ', availableFiles);\r\n        setAvailableFiles(__spread(availableFiles));\r\n    }, [selectedBtns]);\r\n    var onDrop = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (acceptedFiles) {\r\n        console.log('selected files: ', acceptedFiles);\r\n        acceptedFiles = acceptedFiles.filter(function (item) {\r\n            var mimeInfo = mimeObjectInfo[item.type];\r\n            mimeObjectInfo[item.type] = mimeInfo ? mimeInfo + 1 : 1;\r\n            return availableMimeArray.indexOf(item.type) !== -1;\r\n        });\r\n        console.log(\"mime count\", mimeObjectInfo);\r\n        mimeObjectInfo = {};\r\n        acceptedFiles.forEach(function (item) {\r\n            if (item.type === 'image/svg+xml') {\r\n                item.visible = selectedBtns.svgBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/gif') {\r\n                item.visible = selectedBtns.gifBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/jpeg') {\r\n                item.visible = selectedBtns.jpgBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/bmp') {\r\n                item.visible = selectedBtns.bmpBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/x-icon') {\r\n                item.visible = selectedBtns.iconBtn ? true : false;\r\n            }\r\n            else if (item.type === 'image/png') {\r\n                item.visible = selectedBtns.pngBtn ? true : false;\r\n            }\r\n        });\r\n        console.log('available files: ', acceptedFiles);\r\n        if (acceptedFiles.length) {\r\n            initState = false;\r\n        }\r\n        setAvailableFiles(__spread(availableFiles, acceptedFiles));\r\n    }, [availableFiles]);\r\n    var _e = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_1__[\"useDropzone\"])({ onDrop: onDrop }), getRootProps = _e.getRootProps, getInputProps = _e.getInputProps, isDragActive = _e.isDragActive;\r\n    var zoomOut = function () {\r\n        setContainer({\r\n            width: container.width + 20,\r\n            height: container.height + 20\r\n        });\r\n        setContent({\r\n            width: content.width + 20,\r\n            height: content.height + 20\r\n        });\r\n    };\r\n    var zoomIn = function () {\r\n        if (container.width === 100)\r\n            return;\r\n        setContainer({\r\n            width: container.width - 20,\r\n            height: container.height - 20\r\n        });\r\n        setContent({\r\n            width: content.width - 20,\r\n            height: content.height - 20\r\n        });\r\n    };\r\n    var changeSelectedBtn = function (type) {\r\n        var _a;\r\n        setSelectedBtns(__assign(__assign({}, selectedBtns), (_a = {}, _a[type] = !selectedBtns[type], _a)));\r\n    };\r\n    var availableFilesVisible = availableFiles.filter(function (item) { return item.visible; });\r\n    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-show-svg-container\" },\r\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-show-svg-header-container\" },\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", { className: \"svg-viewer-chrome-plugin-css-style-plugin-header-content\" },\r\n                \"Multiple SVG And GIF Viewer \",\r\n                availableFilesVisible.length ? \"( \" + availableFilesVisible.length + \" )\" : \"\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-tool\" },\r\n                btnArray.map(function (item) {\r\n                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { key: item.type, className: \"svg-viewer-chrome-plugin-css-style-file-type-button\", style: {\r\n                            backgroundColor: selectedBtns[item.type] ? \"#ccc\" : \"#fff\",\r\n                            color: selectedBtns[item.type] ? \"#fff\" : \"#ccc\"\r\n                        }, onClick: function () { return changeSelectedBtn(item.type); }, title: item.title }, item.text);\r\n                }),\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { marginRight: 20, cursor: 'pointer' }, onClick: zoomOut, title: \"zoom out\" }, \"+\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { cursor: 'pointer' }, onClick: zoomIn, title: \"zoom in\" }, \"-\"))),\r\n        initState\r\n            ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { title: \"\" + (isDragActive\r\n                    ? 'Drop the files here ...'\r\n                    : 'Drag some files here, or click to select files') },\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", __assign({}, getRootProps({ accept: 'image/svg+xml' })),\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", __assign({}, getInputProps())),\r\n                    isDragActive ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-upload-button-init\" }, \"Drop the files here ...\")) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-upload-button-init\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-upload-button-init-middle\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { fontSize: '72px' } }, \"+\"),\r\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { textAlign: 'center', fontWeight: 600, fontSize: 20 } }, \"Drag some files here, or click to select files\")))))))\r\n            : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { title: \"\" + (isDragActive\r\n                    ? 'Drop the files here ...'\r\n                    : availableFilesVisible.length\r\n                        ? \"\"\r\n                        : 'Drag some files here, or click to select files'), className: \"svg-viewer-chrome-plugin-css-style-multi-svg-container-used\" },\r\n                availableFilesVisible.map(function (file, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-svg-items\", style: { width: container.width, height: container.height }, key: index },\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-filename\", style: { width: container.width }, title: file.name }, file.name),\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", { title: file.name, alt: file.name, style: { width: content.width, height: content.height }, className: \"svg-viewer-chrome-plugin-css-style-react-svg\", src: window.webkitURL.createObjectURL(file) }))); }),\r\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-svg-items svg-viewer-chrome-plugin-css-style-upload-button-content\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", __assign({}, getRootProps()),\r\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", __assign({}, getInputProps())),\r\n                        isDragActive ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-upload-button-content-border svg-viewer-chrome-plugin-css-style-drop-file-here\" }, \"Drop the files here ...\")) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-upload-button-content-border\" },\r\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-plus\" }, \"+\"),\r\n                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { className: \"svg-viewer-chrome-plugin-css-style-plus-text\" }, \"Drag some files here, or click to select files\")))))))));\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyDropzone);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW4vanMvbWFpbi50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcGx1Z2luL2pzL21haW4udHN4Pzk1N2EiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xuXG5jb25zdCBidG5BcnJheSA9IFtcbiAge1xuICAgIHR5cGU6IFwic3ZnQnRuXCIsXG4gICAgdGl0bGU6IFwic2hvdyBzdmdcIixcbiAgICB0ZXh0OiBcIlNWR1wiXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImdpZkJ0blwiLFxuICAgIHRpdGxlOiBcInNob3cgZ2lmXCIsXG4gICAgdGV4dDogXCJHSUZcIlxuICB9LFxuICB7XG4gICAgdHlwZTogXCJqcGdCdG5cIixcbiAgICB0aXRsZTogXCJzaG93IGpwZ1wiLFxuICAgIHRleHQ6IFwiSlBHXCJcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwicG5nQnRuXCIsXG4gICAgdGl0bGU6IFwic2hvdyBwbmdcIixcbiAgICB0ZXh0OiBcIlBOR1wiXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImJtcEJ0blwiLFxuICAgIHRpdGxlOiBcInNob3cgYm1wXCIsXG4gICAgdGV4dDogXCJCTVBcIlxuICB9LFxuICB7XG4gICAgdHlwZTogXCJpY29uQnRuXCIsXG4gICAgdGl0bGU6IFwic2hvdyBpY29uXCIsXG4gICAgdGV4dDogXCJJQ09OXCJcbiAgfSxcbl07XG5cbmNvbnN0IGF2YWlsYWJsZU1pbWVBcnJheSA9IFsnaW1hZ2Uvc3ZnK3htbCcsICdpbWFnZS9naWYnLCAnaW1hZ2UvanBlZycsICdpbWFnZS9ibXAnLCAnaW1hZ2UveC1pY29uJywgJ2ltYWdlL3BuZyddO1xuXG5sZXQgaW5pdFN0YXRlID0gdHJ1ZTtcbmxldCBtaW1lT2JqZWN0SW5mbyA9IHt9O1xuXG5mdW5jdGlvbiBNeURyb3B6b25lKCkge1xuICBjb25zdCBbYXZhaWxhYmxlRmlsZXMsIHNldEF2YWlsYWJsZUZpbGVzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZEJ0bnMsIHNldFNlbGVjdGVkQnRuc10gPSB1c2VTdGF0ZSh7XG4gICAgc3ZnQnRuOiB0cnVlLFxuICAgIGdpZkJ0bjogdHJ1ZSxcbiAgICBqcGdCdG46IGZhbHNlLFxuICAgIHBuZ0J0bjogZmFsc2UsXG4gICAgYm1wQnRuOiBmYWxzZSxcbiAgICBpY29uQnRuOiBmYWxzZVxuICB9KTtcbiAgY29uc3QgW2NvbnRhaW5lciwgc2V0Q29udGFpbmVyXSA9IHVzZVN0YXRlKHtcbiAgICB3aWR0aDogMjAwLFxuICAgIGhlaWdodDogMjAwXG4gIH0pO1xuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSh7XG4gICAgd2lkdGg6IDE1MCxcbiAgICBoZWlnaHQ6IDE1MFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwibXVsdGktc3Zncy12aWV3ZXIgYWN0aXZlZFwiKTtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpKSB7XG4gICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIGFzIGFueSkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBzdmdCdG4sIGdpZkJ0biwganBnQnRuLCBwbmdCdG4sIGJtcEJ0biwgaWNvbkJ0biB9ID0gc2VsZWN0ZWRCdG5zO1xuICAgIGF2YWlsYWJsZUZpbGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnaW1hZ2Uvc3ZnK3htbCcpIHtcbiAgICAgICAgaXRlbS52aXNpYmxlID0gc3ZnQnRuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdpbWFnZS9naWYnKSB7XG4gICAgICAgIGl0ZW0udmlzaWJsZSA9IGdpZkJ0biA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnaW1hZ2UvanBlZycpIHtcbiAgICAgICAgaXRlbS52aXNpYmxlID0ganBnQnRuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdpbWFnZS9ibXAnKSB7XG4gICAgICAgIGl0ZW0udmlzaWJsZSA9IGJtcEJ0biA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnaW1hZ2UveC1pY29uJykge1xuICAgICAgICBpdGVtLnZpc2libGUgPSBpY29uQnRuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdpbWFnZS9wbmcnKSB7XG4gICAgICAgIGl0ZW0udmlzaWJsZSA9IHBuZ0J0biA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnZmlsdGVyIGNoYW5nZWQsIGZpbGVzOiAnLCBhdmFpbGFibGVGaWxlcyk7XG4gICAgc2V0QXZhaWxhYmxlRmlsZXMoWy4uLmF2YWlsYWJsZUZpbGVzXSk7XG4gIH0sIFtzZWxlY3RlZEJ0bnNdKTtcblxuICBjb25zdCBvbkRyb3AgPSB1c2VDYWxsYmFjayhcbiAgICBhY2NlcHRlZEZpbGVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCBmaWxlczogJywgYWNjZXB0ZWRGaWxlcyk7XG4gICAgICBhY2NlcHRlZEZpbGVzID0gYWNjZXB0ZWRGaWxlcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IG1pbWVJbmZvID0gbWltZU9iamVjdEluZm9baXRlbS50eXBlXTtcbiAgICAgICAgbWltZU9iamVjdEluZm9baXRlbS50eXBlXSA9IG1pbWVJbmZvID8gbWltZUluZm8gKyAxIDogMTtcbiAgICAgICAgcmV0dXJuIGF2YWlsYWJsZU1pbWVBcnJheS5pbmRleE9mKGl0ZW0udHlwZSkgIT09IC0xO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcIm1pbWUgY291bnRcIiwgbWltZU9iamVjdEluZm8pO1xuICAgICAgbWltZU9iamVjdEluZm8gPSB7fTtcbiAgICAgIGFjY2VwdGVkRmlsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2ltYWdlL3N2Zyt4bWwnKSB7XG4gICAgICAgICAgaXRlbS52aXNpYmxlID0gc2VsZWN0ZWRCdG5zLnN2Z0J0biA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdpbWFnZS9naWYnKSB7XG4gICAgICAgICAgaXRlbS52aXNpYmxlID0gc2VsZWN0ZWRCdG5zLmdpZkJ0biA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09ICdpbWFnZS9qcGVnJykge1xuICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHNlbGVjdGVkQnRucy5qcGdCdG4gPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnaW1hZ2UvYm1wJykge1xuICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHNlbGVjdGVkQnRucy5ibXBCdG4gPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnaW1hZ2UveC1pY29uJykge1xuICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHNlbGVjdGVkQnRucy5pY29uQnRuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ2ltYWdlL3BuZycpIHtcbiAgICAgICAgICBpdGVtLnZpc2libGUgPSBzZWxlY3RlZEJ0bnMucG5nQnRuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCdhdmFpbGFibGUgZmlsZXM6ICcsIGFjY2VwdGVkRmlsZXMpO1xuICAgICAgaWYgKGFjY2VwdGVkRmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIGluaXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgc2V0QXZhaWxhYmxlRmlsZXMoWy4uLmF2YWlsYWJsZUZpbGVzLCAuLi5hY2NlcHRlZEZpbGVzXSk7XG4gICAgfSxcbiAgICBbYXZhaWxhYmxlRmlsZXNdXG4gICk7XG5cbiAgY29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoeyBvbkRyb3AgfSk7XG5cbiAgY29uc3Qgem9vbU91dCA9ICgpID0+IHtcbiAgICBzZXRDb250YWluZXIoe1xuICAgICAgd2lkdGg6IGNvbnRhaW5lci53aWR0aCArIDIwLFxuICAgICAgaGVpZ2h0OiBjb250YWluZXIuaGVpZ2h0ICsgMjBcbiAgICB9KTtcbiAgICBzZXRDb250ZW50KHtcbiAgICAgIHdpZHRoOiBjb250ZW50LndpZHRoICsgMjAsXG4gICAgICBoZWlnaHQ6IGNvbnRlbnQuaGVpZ2h0ICsgMjBcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB6b29tSW4gPSAoKSA9PiB7XG4gICAgaWYgKGNvbnRhaW5lci53aWR0aCA9PT0gMTAwKSByZXR1cm47XG4gICAgc2V0Q29udGFpbmVyKHtcbiAgICAgIHdpZHRoOiBjb250YWluZXIud2lkdGggLSAyMCxcbiAgICAgIGhlaWdodDogY29udGFpbmVyLmhlaWdodCAtIDIwXG4gICAgfSk7XG4gICAgc2V0Q29udGVudCh7XG4gICAgICB3aWR0aDogY29udGVudC53aWR0aCAtIDIwLFxuICAgICAgaGVpZ2h0OiBjb250ZW50LmhlaWdodCAtIDIwXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlU2VsZWN0ZWRCdG4gPSAodHlwZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRCdG5zKHtcbiAgICAgIC4uLnNlbGVjdGVkQnRucyxcbiAgICAgIFt0eXBlXTogIXNlbGVjdGVkQnRuc1t0eXBlXVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGF2YWlsYWJsZUZpbGVzVmlzaWJsZSA9IGF2YWlsYWJsZUZpbGVzLmZpbHRlcihpdGVtID0+IGl0ZW0udmlzaWJsZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXNob3ctc3ZnLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXNob3ctc3ZnLWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtcGx1Z2luLWhlYWRlci1jb250ZW50XCI+XG4gICAgICAgICAgTXVsdGlwbGUgU1ZHIEFuZCBHSUYgVmlld2VyIHthdmFpbGFibGVGaWxlc1Zpc2libGUubGVuZ3RoID8gYCggJHthdmFpbGFibGVGaWxlc1Zpc2libGUubGVuZ3RofSApYCA6IFwiXCJ9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS10b29sXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgYnRuQXJyYXkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aXRlbS50eXBlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtZmlsZS10eXBlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWRCdG5zW2l0ZW0udHlwZV0gPyBcIiNjY2NcIiA6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IHNlbGVjdGVkQnRuc1tpdGVtLnR5cGVdID8gXCIjZmZmXCIgOiBcIiNjY2NcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU2VsZWN0ZWRCdG4oaXRlbS50eXBlKX1cbiAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX0+e2l0ZW0udGV4dH08L2Rpdj47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAyMCwgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17em9vbU91dH0gdGl0bGU9XCJ6b29tIG91dFwiPis8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e3pvb21Jbn0gdGl0bGU9XCJ6b29tIGluXCI+LTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2luaXRTdGF0ZVxuICAgICAgICA/IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICB0aXRsZT17YCR7aXNEcmFnQWN0aXZlXG4gICAgICAgICAgICAgID8gJ0Ryb3AgdGhlIGZpbGVzIGhlcmUgLi4uJ1xuICAgICAgICAgICAgICA6ICdEcmFnIHNvbWUgZmlsZXMgaGVyZSwgb3IgY2xpY2sgdG8gc2VsZWN0IGZpbGVzJ31gfT5cbiAgICAgICAgICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcyh7IGFjY2VwdDogJ2ltYWdlL3N2Zyt4bWwnIH0pfT5cbiAgICAgICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gICAgICAgICAgICAgIHtpc0RyYWdBY3RpdmUgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXVwbG9hZC1idXR0b24taW5pdFwiPlxuICAgICAgICAgICAgICAgICAgRHJvcCB0aGUgZmlsZXMgaGVyZSAuLi5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6ICg8ZGl2IGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtdXBsb2FkLWJ1dHRvbi1pbml0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXVwbG9hZC1idXR0b24taW5pdC1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICc3MnB4JyB9fT4rPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRXZWlnaHQ6IDYwMCwgZm9udFNpemU6IDIwIH19PlxuICAgICAgICAgICAgICAgICAgICBEcmFnIHNvbWUgZmlsZXMgaGVyZSwgb3IgY2xpY2sgdG8gc2VsZWN0IGZpbGVzXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgIDogKDxkaXZcbiAgICAgICAgICB0aXRsZT17YCR7aXNEcmFnQWN0aXZlXG4gICAgICAgICAgICA/ICdEcm9wIHRoZSBmaWxlcyBoZXJlIC4uLidcbiAgICAgICAgICAgIDogYXZhaWxhYmxlRmlsZXNWaXNpYmxlLmxlbmd0aFxuICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgOiAnRHJhZyBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlcyd9YH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLW11bHRpLXN2Zy1jb250YWluZXItdXNlZFwiPlxuICAgICAgICAgIHthdmFpbGFibGVGaWxlc1Zpc2libGUubWFwKChmaWxlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXN2Zy1pdGVtc1wiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBjb250YWluZXIud2lkdGgsIGhlaWdodDogY29udGFpbmVyLmhlaWdodCB9fVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtZmlsZW5hbWVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBjb250YWluZXIud2lkdGggfX1cbiAgICAgICAgICAgICAgICB0aXRsZT17ZmlsZS5uYW1lfT5cbiAgICAgICAgICAgICAgICB7ZmlsZS5uYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHRpdGxlPXtmaWxlLm5hbWV9XG4gICAgICAgICAgICAgICAgYWx0PXtmaWxlLm5hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGNvbnRlbnQud2lkdGgsIGhlaWdodDogY29udGVudC5oZWlnaHQgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXJlYWN0LXN2Z1wiXG4gICAgICAgICAgICAgICAgc3JjPXt3aW5kb3cud2Via2l0VVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS1zdmctaXRlbXMgc3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS11cGxvYWQtYnV0dG9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcygpfT5cbiAgICAgICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gICAgICAgICAgICAgIHtpc0RyYWdBY3RpdmUgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctdmlld2VyLWNocm9tZS1wbHVnaW4tY3NzLXN0eWxlLXVwbG9hZC1idXR0b24tY29udGVudC1ib3JkZXIgc3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS1kcm9wLWZpbGUtaGVyZVwiPlxuICAgICAgICAgICAgICAgICAgRHJvcCB0aGUgZmlsZXMgaGVyZSAuLi5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS11cGxvYWQtYnV0dG9uLWNvbnRlbnQtYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLXZpZXdlci1jaHJvbWUtcGx1Z2luLWNzcy1zdHlsZS1wbHVzXCI+KzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy12aWV3ZXItY2hyb21lLXBsdWdpbi1jc3Mtc3R5bGUtcGx1cy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgRHJhZyBzb21lIGZpbGVzIGhlcmUsIG9yIGNsaWNrIHRvIHNlbGVjdCBmaWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlEcm9wem9uZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBTUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFTQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./plugin/js/main.tsx\n");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./plugin/js/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./plugin/js/index.tsx */"./plugin/js/index.tsx");


/***/ })

/******/ });