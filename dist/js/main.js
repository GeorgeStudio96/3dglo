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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_smooth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smooth */ \"./modules/smooth.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validate */ \"./modules/validate.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('22 march 2023')\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_smooth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_validate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/animate.js":
/*!****************************!*\
  !*** ./modules/animate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst animate = ({ duration, draw, timing }) => {\n    let start = performance.now();\n\n    requestAnimationFrame(function animate(time) {\n        let timeFraction = (time - start) / duration;\n        if (timeFraction > 1) timeFraction = 1;\n\n        let progress = timing(timeFraction)\n\n        draw(progress);\n\n        if (timeFraction < 1) {\n            requestAnimationFrame(animate);\n        }\n\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animate);\n\n//# sourceURL=webpack:///./modules/animate.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = function () {\n\n    const menuBtn = document.querySelector('.menu')\n    const menu = document.querySelector('menu')\n\n    const handleMenu = () => {\n        menu.classList.toggle('active-menu')\n    }\n\n    menu.addEventListener('click', (e) => {\n        if (e.target.closest('ul>li>a') || e.target.classList.contains('close-btn')) {\n            handleMenu()\n        }\n    })\n\n    menuBtn.addEventListener('click', handleMenu)\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate */ \"./modules/animate.js\");\n\n\nconst modal = () => {\n\n    const popupBtn = document.querySelectorAll('.popup-btn')\n    const popup = document.querySelector('.popup')\n\n    popupBtn.forEach(item => {\n        item.addEventListener('click', () => {\n            if (window.innerWidth < 700) {\n                popup.style.display = 'block'\n                popup.style.opacity = '1';\n            } else {\n                popup.style.display = 'block'\n                ;(0,_animate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n                    duration: 1000,\n                    timing: function (timeFraction) {\n                        return timeFraction;\n                    },\n                    draw: function (progress) {\n                        popup.style.opacity = progress;\n                    }\n                })\n            }\n        })\n    })\n\n    popup.addEventListener('click', (e) => {\n        console.log(e.target.closest('.popup-content'));\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n            popup.style.display = 'none'\n            popup.style.opacity = '0';\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/smooth.js":
/*!***************************!*\
  !*** ./modules/smooth.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smooth = () => {\n    const anchors = document.querySelectorAll('a[href*=\"#\"]')\n\n\n    anchors.forEach(item => {\n        item.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            const blockID = item.getAttribute('href').substr(1)\n\n            document.getElementById(blockID).scrollIntoView({\n                behavior: 'smooth',\n                block: 'start'\n            })\n        })\n    })\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smooth);\n\n//# sourceURL=webpack:///./modules/smooth.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n    console.log('tabs');\n\n    const tabPanel = document.querySelector('.service-header')\n    const tabs = document.querySelectorAll('.service-header-tab')\n    const tabContent = document.querySelectorAll('.service-tab')\n\n\n    tabPanel.addEventListener('click', (e) => {\n\n        if (e.target.closest('.service-header-tab')) {\n            const tabBtn = e.target.closest('.service-header-tab')\n\n            tabs.forEach((item, index) => {\n                if (item === tabBtn) {\n                    item.classList.add('active')\n                    tabContent[index].classList.remove('d-none')\n                } else {\n                    item.classList.remove('active')\n                    tabContent[index].classList.add('d-none')\n                }\n\n            })\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n\n    const timerHours = document.getElementById('timer-hours')\n    const timerMinutes = document.getElementById('timer-minutes')\n    const timerSeconds = document.getElementById('timer-second')\n\n\n    const getTimeRemaning = () => {\n        let dateStop = new Date(deadline).getTime()\n        let dateNow = new Date().getTime()\n\n        let timeRemaning = (dateStop - dateNow) / 1000\n\n        let hours = Math.floor(timeRemaning / 60 / 60)\n        if (hours < 10) {\n            hours = '0' + Math.floor(timeRemaning / 60 / 60)\n        }\n        let minutes = Math.floor((timeRemaning / 60 % 60))\n        if (minutes < 10) {\n            minutes = '0' + Math.floor((timeRemaning / 60 % 60))\n        }\n        let seconds = Math.floor(timeRemaning % 60)\n        if (seconds < 10) {\n            seconds = '0' + Math.floor(timeRemaning % 60)\n        }\n        return { timeRemaning, hours, minutes, seconds }\n    }\n\n\n\n\n    const updateClock = () => {\n        let getTime = getTimeRemaning()\n        timerHours.textContent = getTime.hours\n        timerMinutes.textContent = getTime.minutes\n        timerSeconds.textContent = getTime.seconds\n\n        if (getTime.timeRemaning > 0) {\n            console.log('проверка setInterval');\n        } else {\n            timerHours.innerHTML = '00'\n            timerMinutes.innerHTML = '00'\n            timerSeconds.innerHTML = '00'\n            clearInterval(timerID)\n        }\n    }\n\n    let timerID = setInterval(updateClock, 1000)\n\n\n\n    updateClock()\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validate.js":
/*!*****************************!*\
  !*** ./modules/validate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = () => {\n    console.log('calc');\n\n    const calcSquare = document.querySelector('.calc-square')\n    const calcCount = document.querySelector('.calc-count')\n    const calcDay = document.querySelector('.calc-day')\n    const inputEmail = document.querySelectorAll('input[type=email]')\n    const inputTel = document.querySelectorAll('input[type=tel]')\n    const form2Message = document.getElementById('form2-message')\n    const inputTextPlaceholder = document.querySelectorAll('*[placeholder=\"Ваше имя\"]')\n\n\n    console.log(inputTextPlaceholder);\n\n    const validateInputOnlyNumber = (e) => {\n        e.target.value = e.target.value.replace(/\\D+/, '')\n    }\n\n    const validateInputText = (e) => {\n        e.target.value = e.target.value.replace(/[^а-яА-Я -]+$/i, '') // только ру + дефис и пробел\n    }\n\n    const validateEmail = (e) => {\n        e.target.value = e.target.value.replace(/[^ A-Za-z @-_.!~*']$/, '')\n    }\n\n    const validatePhone = (e) => {\n        e.target.value = e.target.value.replace(/[^0-9()]$/, '')\n    }\n\n\n    calcSquare.addEventListener('input', validateInputOnlyNumber)\n    calcCount.addEventListener('input', validateInputOnlyNumber)\n    calcDay.addEventListener('input', validateInputOnlyNumber)\n    inputTextPlaceholder.forEach(item => item.addEventListener('input', validateInputText))\n    form2Message.addEventListener('input', validateInputText)\n    inputEmail.forEach(item => item.addEventListener('input', validateEmail))\n    inputTel.forEach(item => item.addEventListener('input', validatePhone))\n\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack:///./modules/validate.js?");

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