/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Header */ \"./src/js/modules/Header.js\");\n/* harmony import */ var _modules_Scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Scroll */ \"./src/js/modules/Scroll.js\");\n/* harmony import */ var _modules_Faq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Faq */ \"./src/js/modules/Faq.js\");\n/* harmony import */ var _modules_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Slider */ \"./src/js/modules/Slider.js\");\n/* harmony import */ var _modules_Popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Popup */ \"./src/js/modules/Popup.js\");\n\n\n\n\n\n\nconst header = new _modules_Header__WEBPACK_IMPORTED_MODULE_0__.default()\nheader.init()\n\nconst scroll = new _modules_Scroll__WEBPACK_IMPORTED_MODULE_1__.default()\nscroll.init()\n\nconst popup = new _modules_Popup__WEBPACK_IMPORTED_MODULE_4__.default()\npopup.init()\n\n;(0,_modules_Faq__WEBPACK_IMPORTED_MODULE_2__.initFaq)()\n\n;(0,_modules_Slider__WEBPACK_IMPORTED_MODULE_3__.default)()\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/Faq.js":
/*!*******************************!*\
  !*** ./src/js/modules/Faq.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initFaq\": () => (/* binding */ initFaq)\n/* harmony export */ });\nconst initFaq = () => {\n    const container = document.querySelectorAll('section.faq')\n\n    if (!container) {\n        return\n    }\n\n    const toggle = (row) => {\n        if (typeof row.querySelector !== 'function') {\n            return\n        }\n        let icon = row.querySelector('svg')\n        let body = row.parentNode.querySelector('.faqItemBody')\n        if (!icon || !body) {\n            return\n        }\n        icon.classList.toggle('transform')\n        icon.classList.toggle('rotate-45')\n        if (body.classList.contains('max-h-0')) {\n            body.classList.remove('max-h-0', 'mt-0')\n            body.classList.add('max-h-max', 'mt-3')\n        } else {\n            body.classList.remove('max-h-max', 'mt-3')\n            body.classList.add('max-h-0', 'mt-0')\n        }\n    }\n\n    for (let i = 0, max = container.length; i < max; i += 1) {\n        let items = container[i].querySelectorAll('.faqItem')\n        if (!items) {\n            continue\n        }\n        for (let j = 0, maxJ = items.length; j < maxJ; j += 1) {\n            let row = items[j].querySelector('.faqItemOpen')\n            if (!row) {\n                continue\n            }\n            row.addEventListener('click', () => toggle(row))\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/js/modules/Faq.js?");

/***/ }),

/***/ "./src/js/modules/Header.js":
/*!**********************************!*\
  !*** ./src/js/modules/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Header {\n    constructor() {\n        this.topbar = document.querySelector('#topbar')\n        this.menuContainer = document.querySelector('#mainMenu')\n        this.menuSidebar = this.menuContainer.querySelector('#mainSidebar')\n        const openMenuBtnContainer = this.topbar.querySelector('#openMenuBtn')\n        this.openMenuBtn = openMenuBtnContainer.querySelector('.open')\n        let topCloseButtons = openMenuBtnContainer.querySelectorAll('.close')\n        this.closeMenuIcon = openMenuBtnContainer.querySelector('.close')\n\n        this.isOpen = false\n    }\n\n    init() {\n        this.openMenuBtn.addEventListener('click', this._openMenu.bind(this))\n        this.closeMenuIcon.addEventListener('click', this._closeMenu.bind(this))\n        document.body.addEventListener('scroll', this._onBodyScroll.bind(this))\n        this.menuContainer.addEventListener('click', this._onContainerClick.bind(this))\n    }\n\n    _openMenu() {\n        this.menuContainer.classList.remove('hidden')\n        this.menuContainer.classList.add('block')\n\n        document.body.classList.add('overflow-hidden', 'relative')\n\n        this.openMenuBtn.classList.add('hidden')\n        this.openMenuBtn.classList.remove('block')\n\n        this.closeMenuIcon.classList.add('block')\n        this.closeMenuIcon.classList.remove('hidden')\n\n        this.isOpen = true\n    }\n\n    _closeMenu() {\n        this.menuContainer.classList.add('hidden')\n        this.menuContainer.classList.remove('block')\n\n        document.body.classList.remove('overflow-hidden', 'relative')\n\n        this.openMenuBtn.classList.add('block')\n        this.openMenuBtn.classList.remove('hidden')\n\n        this.closeMenuIcon.classList.add('hidden')\n        this.closeMenuIcon.classList.remove('block')\n\n        this.isOpen = false\n    }\n\n    _onBodyScroll() {\n        if (this.isOpen) {\n            this._closeMenu()\n        }\n    }\n\n    _onContainerClick(e) {\n        if (this.isOpen && !this.menuSidebar.contains(e.target) && !this.closeMenuIcon.contains(e.target)) {\n            this._closeMenu()\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack:///./src/js/modules/Header.js?");

/***/ }),

/***/ "./src/js/modules/Popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var postcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! postcss */ \"./node_modules/postcss/lib/postcss.mjs\");\n\n\nconst axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\")\n\nclass Popup {\n    constructor() {\n        this.container = document.querySelector('#price')\n        this.modal = document.querySelector('#priceModal')\n\n        this.button = this.container.querySelector('button')\n\n        this.closeBtn = this.modal.querySelector('#priceModalCloseBtn')\n        this.priceModalBody = this.modal.querySelector('#priceModalBody')\n\n        this.titleContainer = this.priceModalBody.querySelector('#priceModalTitle')\n        this.rowsContainer = this.priceModalBody.querySelector('#priceRowsContainer')\n        this.modalListsContainer = this.priceModalBody.querySelector('#pricePopupListsContainer')\n        this.notesContainer = this.priceModalBody.querySelector('#pricePopupNotesContainer')\n        this.infoContainer = this.priceModalBody.querySelector('#priceModalInfo')\n\n        this.listContainer = this.container.querySelector('#priceListContainer')\n\n        this.rulesContainer = this.modal.querySelector('#rulesContainer')\n\n        this.isListOpen = false\n        this.isModalOpen = false\n    }\n\n    init() {\n        this._addListeners()\n    }\n\n    _addListeners() {\n        this.button.addEventListener('click', this._handleButton.bind(this))\n\n        const links = this.listContainer.querySelectorAll('.openPriceItem')\n        for (let i = 0, max = links.length; i < max; i += 1) {\n            links[i].addEventListener('click', this._onLinkClick.bind(this))\n        }\n\n        this.modal.addEventListener('click', this._onModalClick.bind(this))\n        this.closeBtn.addEventListener('click', this._closeModal.bind(this))\n\n        const showRulesBtn = document.querySelectorAll('.showRulesBtn')\n        for (let i = 0, max = showRulesBtn.length; i < max; i += 1) {\n            showRulesBtn[i].addEventListener('click', this._showRules.bind(this))\n        }\n    }\n\n    _fetch(filename) {\n        if (typeof filename !== 'string') {\n            return\n        }\n\n        filename = `/store/${filename}`\n\n        this._openModal()\n\n        axios(filename)\n            .then((response) => {\n                this._openModal()\n\n                if (response.status !== 200) {\n                    console.log('Error in fetch data price')\n                    this._showError()\n\n                    return null\n                }\n\n                this._buildPriceModal(response.data)\n                this.infoContainer.classList.remove('hidden')\n            })\n            .catch((e) => {\n                this._showError()\n                this.infoContainer.classList.add('hidden')\n            })\n    }\n\n    _buildPriceModal(data) {\n        const title = data.title ? data.title : 'Прайс-лист'\n        this.titleContainer.innerHTML = data.title\n\n        this._buildRows(data.rows)\n        this._buildLists(data.lists)\n        this._buildNotes(data.notes)\n    }\n\n    _buildRows(rows) {\n        if (typeof rows === 'undefined') {\n            return\n        }\n\n        let response = ''\n\n        const commonContainerClasses = 'w-full flex justify-between items-center px-2 '\n        const headingClasses = 'bg-blue-200 py-2 md:py-4 md:text-lg font-semibold '\n        const defaultContainerClasses = 'py-1 '\n\n        const getRow = (classes, first = '', second = '', third = '') => {\n\n            return `<div class=\"${classes}\">\n                        <div class=\"w-1/2 pr-1\">\n                            ${first}\n                        </div>\n                        <div class=\"w-1/4 px-1\">\n                            ${second}\n                        </div>\n                        <div class=\"w-1/4 pl-1\">\n                            ${third}\n                        </div>\n                    </div>`\n        }\n\n        for (let i = 0, max = rows.length; i < max; i += 1) {\n            let containerClasses = rows[i].isHeading ? commonContainerClasses + headingClasses\n                : commonContainerClasses + defaultContainerClasses\n\n            if (!rows[i].isHeading) {\n                let bg = i % 2 !== 0 ? 'bg-blue-100' : 'bg-green-50'\n                containerClasses += bg\n            }\n\n            let row = getRow(containerClasses, rows[i].first, rows[i].second, rows[i].third)\n\n            response += row\n        }\n\n        this.rowsContainer.innerHTML = response\n    }\n\n    _buildNotes(notes) {\n        if (typeof notes === 'undefined') {\n            return null\n        }\n\n        let notesData = ''\n\n        const getNoteTemplate = (text = '') => {\n            return `<div class=\"text-lg font-semibold mb-4\">\n                        ${text}\n                    </div>`\n        }\n\n        for (let i = 0, max = notes.length; i < max; i += 1) {\n            let template = getNoteTemplate(notes[i])\n            notesData += template\n        }\n\n        if (notesData) {\n            this.notesContainer.innerHTML = notesData\n        }\n    }\n\n    _buildLists(lists) {\n        if (typeof lists === 'undefined') {\n            return\n        }\n\n        let listsData = ''\n\n        const getListTemplate = (title = '', rows = []) => {\n            if (!title && !rows) {\n                return ''\n            }\n\n            let li = ''\n            for (let i = 0, max = rows.length; i < max; i += 1) {\n                let el = rows[i] ? `<li>${ rows[i] }</li>` : ''\n                li += el\n            }\n\n            return `<div class=\"mb-4\">\n                        <div class=\"text-lg font-semibold mb-2\">${title}</div>\n                        <div class=\"w-full h-px bg-blue-300 mb-2\"></div>\n                        <ul class=\"list-inside list-disc\">\n                            ${li}\n                        </ul>\n                    </div>`\n        }\n\n        for (let i = 0, max = lists.length; i < max; i += 1) {\n            let template = getListTemplate(lists[i].title, lists[i].ul)\n\n            listsData += template\n        }\n\n        if (listsData) {\n            this.modalListsContainer.innerHTML = listsData\n        }\n    }\n\n    _showError() {\n        this.titleContainer.innerHTML = 'Возникла ошибка, попробуйте перезагрузить страницу'\n    }\n\n    _clearModal() {\n        this.titleContainer.innerHTML = 'Загрузка ...'\n        this.rowsContainer.innerHTML = ''\n        this.modalListsContainer.innerHTML = ''\n        this.notesContainer.innerHTML = ''\n    }\n\n    _closeModal() {\n        // close\n        this.modal.classList.add('hidden')\n        this.modal.classList.remove('flex')\n\n        this.isModalOpen = false\n\n        document.body.classList.remove('overflow-hidden', 'relative')\n\n        // clear\n        this._clearModal()\n\n        // Hide rules\n        if (!this.rulesContainer.classList.contains('hidden')) {\n            this.rulesContainer.classList.add('hidden')\n        }\n    }\n\n    _openModal() {\n        this.modal.classList.add('flex')\n        this.modal.classList.remove('hidden')\n\n        document.body.classList.add('overflow-hidden', 'relative')\n\n        this.isModalOpen = true\n    }\n\n    _showRules() {\n        this._openModal()\n        this.rulesContainer.classList.remove('hidden')\n        this.titleContainer.innerHTML = 'Правила работы сервисного центра'\n    }\n\n    _handleButton() {\n        const show = () => {\n            this.listContainer.classList.add('max-h-max')\n            this.listContainer.classList.remove('max-h-0')\n        }\n\n        const hide = () => {\n            this.listContainer.classList.add('max-h-0')\n            this.listContainer.classList.remove('max-h-max')\n        }\n\n        this.isListOpen ? hide() : show()\n\n        this.isListOpen = !this.isListOpen\n        this.button.innerText = this.isListOpen ? 'Скрыть цены' : 'Показать цены'\n    }\n\n    _onModalClick(e) {\n        if (this.isModalOpen && !this.priceModalBody.contains(e.target)) {\n            this._closeModal()\n        }\n    }\n\n    _onLinkClick(e) {\n        const filename = e.target.getAttribute('data-filename')\n\n        if (typeof filename === 'undefined') {\n            return null\n        }\n\n        this._fetch(filename)\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);\n\n//# sourceURL=webpack:///./src/js/modules/Popup.js?");

/***/ }),

/***/ "./src/js/modules/Scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/Scroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smoothscroll-polyfill */ \"./node_modules/smoothscroll-polyfill/dist/smoothscroll.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n\n\nsmoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default().polyfill()\n\nclass ScrollToObject {\n    constructor() {\n        this.elements = document.querySelectorAll('.scrollToElement')\n    }\n\n    init() {\n        for (let i = 0, max = this.elements.length; i < max; i += 1) {\n            const el = this.elements[i]\n            const id = el.getAttribute('data-anchor-id')\n            const topPosition = el.getAttribute('data-position')\n            if (topPosition) { // absolute position is set\n                this.elements[i].addEventListener('click', () => {\n                    window.scroll({ top: topPosition, left: 0, behavior: 'smooth' } )\n                })\n            } else if (id) { // relative element is set\n                const reference = document.querySelector('#' + id)\n                this.elements[i].addEventListener('click', () => {\n                    reference.scrollIntoView({behavior: 'smooth'})\n                })\n            }\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToObject);\n\n//# sourceURL=webpack:///./src/js/modules/Scroll.js?");

/***/ }),

/***/ "./src/js/modules/Slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/Slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ \"./node_modules/@glidejs/glide/dist/glide.esm.js\");\n\n\nconst initSlider = () => {\n    const serviceReviews = document.querySelector('#reviews #reviewsGlide')\n    if (serviceReviews) {\n        new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__.default(serviceReviews, {\n            classes: { activeNav: 'bg-blue-400' },\n            perView: 1\n        }).mount()\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initSlider);\n\n//# sourceURL=webpack:///./src/js/modules/Slider.js?");

/***/ }),

/***/ "?5580":
/*!**************************************!*\
  !*** ./terminal-highlight (ignored) ***!
  \**************************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///./terminal-highlight_(ignored)?");

/***/ }),

/***/ "?51ca":
/*!***************************!*\
  !*** colorette (ignored) ***!
  \***************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///colorette_(ignored)?");

/***/ }),

/***/ "?03fb":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ }),

/***/ "?6197":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///path_(ignored)?");

/***/ }),

/***/ "?b8cb":
/*!*******************************!*\
  !*** source-map-js (ignored) ***!
  \*******************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///source-map-js_(ignored)?");

/***/ }),

/***/ "?c717":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///url_(ignored)?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_glidejs_glide_dist_glide_esm_js-node_modules_axios_index_js-node_modules-1ce152"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;