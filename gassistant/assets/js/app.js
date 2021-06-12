/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.onscroll = function showHeader(){\r\n    let header = document.querySelector('.header');\r\n\r\n    if(window.pageYOffset > 250){\r\n        header.classList.add('header--fixed');\r\n    } else {\r\n        header.classList.remove('header--fixed');\r\n    }\r\n};\r\n\r\n\r\nconst registerButton = document.querySelector('.header__profile');\r\nconst closeRegisterButton = document.querySelector('.popup-reg-close');\r\nconst popupRegister = document.querySelector('.popup-reg');\r\nconst popupReg = document.querySelector('.popup-reg');\r\n\r\n\r\nregisterButton.addEventListener(\"click\", function(){\r\n    popupRegister.classList.add('active');\r\n});\r\n\r\ncloseRegisterButton.addEventListener(\"click\", function(e){\r\n    e.preventDefault();\r\n    popupRegister.classList.remove('active');\r\n});\r\n\r\nconst mobileNavReg = document.querySelector('.menu-list__media');\r\nmobileNavReg.addEventListener(\"click\", function(e){\r\n    e.preventDefault();\r\n    popupRegister.classList.add('active');\r\n    document.querySelector('.menu').classList.remove('menu_active');\r\n    document.querySelector('.content').classList.remove('content_active');\r\n});\r\n\r\nconst authEmailInput = document.getElementById('input-email-auth');\r\nconst authPassInput = document.getElementById('input-pass-auth');\r\nconst clearButton1 = document.getElementById('clear-button-1');\r\nconst clearButton2 = document.getElementById('clear-button-2');\r\n\r\nauthEmailInput.addEventListener(\"input\", (e) => {\r\n    e.preventDefault();\r\n    clearButton1.classList.add('is-active');\r\n});\r\n\r\nauthPassInput.addEventListener(\"input\", () => {\r\n    clearButton2.classList.add('is-active');\r\n});\r\n\r\nclearButton1.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    authEmailInput.value = '';\r\n    clearButton1.classList.remove('is-active');\r\n});\r\n\r\nclearButton2.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    authPassInput.value = '';\r\n    clearButton2.classList.remove('is-active');\r\n});\r\n\r\n// for (let i = 0; i < authInput; i++) {\r\n//     i.addEventListener(\"input\", () => {\r\n//         i.nextElementSibling.contains('input-clear').classList.add('is-active');\r\n//     });\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\Andrew\\Desktop\\projects\\gassistant\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\Andrew\\Desktop\\projects\\gassistant\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js?");

/***/ })

/******/ });