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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_smooth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smooth */ \"./modules/smooth.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validate */ \"./modules/validate.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_test__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/test */ \"./modules/test.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('22 march 2023')\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_smooth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_validate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\n;(0,_modules_test__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\n    {\n        formId: 'form113',\n        someElem: [\n            {\n                type: 'block',\n                id: 'total'\n            }\n        ]\n    }\n)\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\n    console.log(price)\n\n    const calcBlock = document.querySelector('.calc-block')\n    const calcType = document.querySelector('.calc-type')\n    const calcSquare = document.querySelector('.calc-square')\n    const calcCount = document.querySelector('.calc-count')\n    const calcDay = document.querySelector('.calc-day')\n    const total = document.getElementById('total')\n\n    const countCalc = () => {\n        const calcTypeValue = calcType.options[calcType.selectedIndex].value\n        const calcSquareValue = +calcSquare.value\n\n        let totalValue = 0\n        let calcCountValue = 1\n        let calcDayValue = 1\n\n        if (calcDay.value && calcDay.value < 5) {\n            calcDayValue = 2\n        } else if (calcDay.value && calcDay.value < 10) {\n            calcDayValue = 1.5\n        }\n\n        if (calcCount.value > 1) {\n            console.log('Больше');\n            calcCountValue += +calcCount.value / 10\n        }\n\n        if (calcType.value && calcSquare.value) {\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue\n        } else {\n            totalValue = 0\n        }\n\n        total.textContent = totalValue\n\n        console.log(calcSquareValue);\n        console.log(+calcTypeValue);\n    }\n\n    calcBlock.addEventListener('input', (e) => {\n        if (e.target === calcType ||\n            e.target === calcSquare ||\n            e.target === calcCount ||\n            e.target === calcDay) {\n            countCalc()\n        }\n        // countCalc()\n    })\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"slicer\": () => (/* binding */ slicer)\n/* harmony export */ });\nconst slicer = (str, num) => {\n    return str.trim().length > num ? str.trim().substring(0, num).trim() + '...' : str.trim()\n}\n\n\n\n\n\n\nconst animate = ({ duration, draw, timing }) => {\n    let start = performance.now();\n\n    requestAnimationFrame(function animate(time) {\n        let timeFraction = (time - start) / duration;\n        if (timeFraction > 1) timeFraction = 1;\n\n        let progress = timing(timeFraction)\n\n        draw(progress);\n\n        if (timeFraction < 1) {\n            requestAnimationFrame(animate);\n        }\n\n    });\n}\n\n\n\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst modal = () => {\n\n    const popupBtn = document.querySelectorAll('.popup-btn')\n    const popup = document.querySelector('.popup')\n\n    popupBtn.forEach(item => {\n        item.addEventListener('click', () => {\n            if (window.innerWidth < 700) {\n                popup.style.display = 'block'\n                popup.style.opacity = '1';\n            } else {\n                popup.style.display = 'block'\n                ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n                    duration: 1000,\n                    timing: function (timeFraction) {\n                        return timeFraction;\n                    },\n                    draw: function (progress) {\n                        popup.style.opacity = progress;\n                    }\n                })\n            }\n        })\n    })\n\n    popup.addEventListener('click', (e) => {\n        console.log(e.target.closest('.popup-content'));\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n            popup.style.display = 'none'\n            popup.style.opacity = '0';\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\n    const form = document.getElementById(formId)\n    const statusBlock = document.createElement('div')\n    const loadText = 'Загрузка'\n    const errorText = 'Ошибка'\n    const successText = 'Успешная отправка'\n\n\n\n    const validate = (list) => {\n        let success = true\n\n        return success\n    }\n\n    const sendData = async (data) => {\n        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {\n            method: 'POST',\n            body: JSON.stringify(data),\n            // headers: {\n            //     'Content-Type': 'multipart/form-data'\n            // }\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        })\n        return await res.json()\n    }\n\n    const submitForm = () => {\n        const formElems = form.querySelectorAll('input')\n        const formData = new FormData(form)\n        const formBody = {}\n\n        statusBlock.textContent = loadText\n        form.append(statusBlock)\n\n\n        formData.forEach((val, key) => {\n            formBody[key] = val\n        })\n\n        someElem.forEach(item => {\n            const elem = document.getElementById(item.id)\n            if (item.type === 'block') {\n                formBody[item.id] = elem.textContent\n            } else if (elem.type === 'input') {\n                formBody[item.id] = elem.value\n            }\n        })\n\n\n        if (validate(formElems)) {\n            sendData(formBody)\n                .then(data => {\n                    statusBlock.textContent = successText\n                    formElems.forEach(item => {\n                        item.value = ''\n                    })\n                })\n                .catch(error => {\n                    statusBlock.textContent = errorText\n                })\n        } else {\n            alert('Данные не валидны')\n        }\n    }\n\n\n    try {\n        if (!form) {\n            throw new Error('Верните форму на место')\n        }\n\n        form.addEventListener('submit', (e) => {\n            e.preventDefault()\n            submitForm()\n        })\n    } catch (error) {\n        console.log(error.message)\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n    console.log('slider');\n    const potrfolioContent = document.querySelector('.portfolio-content')\n    const potrfolioItems = document.querySelectorAll('.portfolio-item')\n    const dotsWrapper = document.querySelector('.portfolio-dots')\n\n    const dotsAdded = () => {\n        for (let i = 0; i < potrfolioItems.length; i++) {\n            const newDot = document.createElement('li')\n            newDot.classList.add('dot')\n            dotsWrapper.append(newDot)\n        }\n    }\n    dotsAdded()\n\n    const dots = document.querySelectorAll('.dot')\n    console.log(dots);\n\n\n    let currentSlide = 0;\n    let interval\n    let timerInterval = 2000\n\n\n    const startSlide = (timerInterval) => {\n        interval = setInterval(autoSlide, timerInterval)\n    }\n\n\n\n\n    const autoSlide = () => {\n        prevSlide(potrfolioItems, currentSlide, 'portfolio-item-active')\n        prevSlide(dots, currentSlide, 'dot-active')\n        currentSlide++\n\n        if (currentSlide >= potrfolioItems.length) {\n            currentSlide = 0\n        }\n\n        nextSlide(potrfolioItems, currentSlide, 'portfolio-item-active')\n        nextSlide(dots, currentSlide, 'dot-active')\n\n    }\n\n\n\n    const nextSlide = (elems, index, strClass) => {\n        elems[index].classList.add(strClass)\n\n    }\n\n    const prevSlide = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass)\n    }\n\n    const stopSlide = () => {\n        clearInterval(interval)\n    }\n\n\n\n    potrfolioContent.addEventListener('click', (e) => {\n        e.preventDefault()\n\n        if (!e.target.matches('.dot, portfolio-btn')) {\n            return\n        }\n\n        prevSlide(potrfolioItems, currentSlide, 'portfolio-item-active')\n        prevSlide(dots, currentSlide, 'dot-active')\n\n        if (e.target.matches('#arrow-right')) {\n            console.log('arrow-right');\n            currentSlide++\n        } else if (e.target.matches('#arrow-left')) {\n            console.log('arrow-left');\n            currentSlide--\n        } else if (e.target.classList.contains('dot'))\n            console.log('dot');\n        dots.forEach((dot, index) => {\n            if (e.target === dot) {\n                currentSlide = index\n            }\n        })\n\n        if (currentSlide >= potrfolioItems.length) {\n            currentSlide = 0\n        }\n        if (currentSlide < 0) {\n            currentSlide = potrfolioItems.length - 1\n        }\n\n        nextSlide(potrfolioItems, currentSlide, 'portfolio-item-active')\n        nextSlide(dots, currentSlide, 'dot-active')\n    })\n\n\n    potrfolioContent.addEventListener('mouseenter', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            stopSlide()\n        }\n    }, true)\n\n    potrfolioContent.addEventListener('mouseleave', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            startSlide(timerInterval)\n        }\n    }, true)\n\n    startSlide(timerInterval)\n\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

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

/***/ "./modules/test.js":
/*!*************************!*\
  !*** ./modules/test.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst test = () => {\n    const text = '    Это рыбный текст для проверки функции слайсер    '\n    console.log((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.slicer)(text, 20));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (test);\n\n\n\n//# sourceURL=webpack:///./modules/test.js?");

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