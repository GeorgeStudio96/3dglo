/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_smooth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smooth */ \"./modules/smooth.js\");\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('22 march 2023')\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_smooth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = function () {\n\n    const menuBtn = document.querySelector('.menu')\n    const menu = document.querySelector('menu')\n    const closeBtn = menu.querySelector('.close-btn')\n    const menuItems = document.querySelectorAll('ul>li>a')\n\n    const handleMenu = () => {\n        // if (!menu.style.transform) {\n        //     menu.style.transform = `translateX(0)`\n        // } else {\n        //     menu.style.transform = ``\n        // }\n        menu.classList.toggle('active-menu')\n    }\n\n    menuBtn.addEventListener('click', handleMenu)\n    closeBtn.addEventListener('click', handleMenu)\n\n\n    for (let i = 0; i < menuItems.length; i++) {\n        menuItems[i].addEventListener('click', () => {\n            handleMenu()\n        })\n    }\n\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n    const popupBtn = document.querySelectorAll('.popup-btn')\n    const popup = document.querySelector('.popup')\n    const popupClose = popup.querySelector('.popup-close')\n\n    window.addEventListener('resize', () => {\n        const width = document.documentElement.clientWidth\n        if (width > 768) {\n            popup.style.opacity = 0\n\n            const modalAnimationOpen = () => {\n                popup.style.opacity = 1;\n                popup.style.transition = \"opacity 1s\";\n            }\n            const modalAnimationClose = () => {\n                popup.style.opacity = 0;\n                popup.style.transition = \"opacity 1s\";\n            }\n            const popupHide = () => {\n                popup.style.display = 'none'\n            }\n\n            popupBtn.forEach(item => {\n                item.addEventListener('click', () => {\n                    popup.style.display = 'block'\n                    setTimeout(modalAnimationOpen, 100)\n\n                })\n            })\n            popupClose.addEventListener('click', () => {\n                modalAnimationClose()\n                setTimeout(popupHide, 1000)\n            })\n        }\n    })\n\n\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/smooth.js":
/*!***************************!*\
  !*** ./modules/smooth.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smooth = () => {\n    const anchors = document.querySelectorAll('a[href*=\"#\"]')\n\n\n    anchors.forEach(item => {\n        item.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            const blockID = item.getAttribute('href').substr(1)\n\n            document.getElementById(blockID).scrollIntoView({\n                behavior: 'smooth',\n                block: 'start'\n            })\n        })\n    })\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smooth);\n\n//# sourceURL=webpack:///./modules/smooth.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n\n    const timerHours = document.getElementById('timer-hours')\n    const timerMinutes = document.getElementById('timer-minutes')\n    const timerSeconds = document.getElementById('timer-second')\n\n\n    const getTimeRemaning = () => {\n        let dateStop = new Date(deadline).getTime()\n        let dateNow = new Date().getTime()\n\n        let timeRemaning = (dateStop - dateNow) / 1000\n\n        let hours = Math.floor(timeRemaning / 60 / 60)\n        if (hours < 10) {\n            hours = '0' + Math.floor(timeRemaning / 60 / 60)\n        }\n        let minutes = Math.floor((timeRemaning / 60 % 60))\n        if (minutes < 10) {\n            minutes = '0' + Math.floor((timeRemaning / 60 % 60))\n        }\n        let seconds = Math.floor(timeRemaning % 60)\n        if (seconds < 10) {\n            seconds = '0' + Math.floor(timeRemaning % 60)\n        }\n        return { timeRemaning, hours, minutes, seconds }\n    }\n\n\n\n    const updateClock = () => {\n        let getTime = getTimeRemaning()\n        timerHours.textContent = getTime.hours\n        timerMinutes.textContent = getTime.minutes\n        timerSeconds.textContent = getTime.seconds\n\n        if (getTime.timeRemaning > 0) {\n            // setTimeout(updateClock, 1000)\n            setInterval(updateClock, 1000)\n        } else {\n            timerHours.innerHTML = '00'\n            timerMinutes.innerHTML = '00'\n            timerSeconds.innerHTML = '00'\n        }\n\n    }\n\n    updateClock()\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;