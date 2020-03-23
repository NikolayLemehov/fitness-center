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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _season_tickets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./season-tickets */ \"./js/season-tickets.js\");\n/* harmony import */ var _trainers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainers */ \"./js/trainers.js\");\n/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews */ \"./js/reviews.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./js/utils.js\");\n\n\n\n\nObject(_utils__WEBPACK_IMPORTED_MODULE_3__[\"activeForEeachNodeListForIE\"])();\nvar seasonTickets = new _season_tickets__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nseasonTickets.active();\nvar trainers = new _trainers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ntrainers.active();\nvar reviews = new _reviews__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nreviews.active();\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/reviews.js":
/*!***********************!*\
  !*** ./js/reviews.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Reviews; });\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./js/slider.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Reviews =\n/*#__PURE__*/\nfunction () {\n  function Reviews() {\n    _classCallCheck(this, Reviews);\n\n    this.section = document.querySelector(\".reviews\");\n    this.cardCollection = this.section.querySelectorAll(\".review-card\");\n    this.isAllExisting = !!this.section;\n    this.slider = null;\n  }\n\n  _createClass(Reviews, [{\n    key: \"active\",\n    value: function active() {\n      if (!this.isAllExisting) {\n        return;\n      }\n\n      this.slider = new _slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.section, this.cardCollection);\n      this.slider.active();\n    }\n  }]);\n\n  return Reviews;\n}();\n\n\n\n//# sourceURL=webpack:///./js/reviews.js?");

/***/ }),

/***/ "./js/season-tickets.js":
/*!******************************!*\
  !*** ./js/season-tickets.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SeasonTickets; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SeasonTickets =\n/*#__PURE__*/\nfunction () {\n  function SeasonTickets() {\n    _classCallCheck(this, SeasonTickets);\n\n    this.tabs = document.querySelectorAll(\".season-tickets__tabs-item > button\");\n    this.sets = document.querySelectorAll(\".season-tickets__offers-item\");\n    this.isAllExisting = this.tabs.length > 0 && this.sets.length > 0 && this.tabs.length === this.sets.length;\n    this.currentTab = null;\n    this.numberToTabSet = new Map();\n    this.tabToSet = new Map();\n  }\n\n  _createClass(SeasonTickets, [{\n    key: \"active\",\n    value: function active() {\n      var _this = this;\n\n      if (!this.isAllExisting) {\n        return;\n      }\n\n      this.tabs.forEach(function (tab, i) {\n        if (tab.parentElement.classList.contains(\"season-tickets__tabs-item--active\")) {\n          _this.currentTab = i;\n        }\n\n        _this.numberToTabSet.set(i, {\n          number: i,\n          tab: tab,\n          set: _this.sets[i]\n        });\n\n        _this.tabToSet.set(tab, {\n          number: i,\n          set: _this.sets[i]\n        });\n\n        tab.addEventListener(\"click\", function (evt) {\n          evt.preventDefault();\n\n          if (tab.parentElement.classList.contains(\"season-tickets__tabs-item--active\")) {\n            return;\n          }\n\n          _this._onViewChange();\n\n          tab.parentElement.classList.add(\"season-tickets__tabs-item--active\");\n\n          _this.numberToTabSet.get(_this.currentTab).set.classList.remove(\"season-tickets__offers-item--active\");\n\n          _this.tabToSet.get(tab).set.classList.add(\"season-tickets__offers-item--active\");\n\n          _this.currentTab = _this.tabToSet.get(tab).number;\n        });\n      });\n      this.sets.forEach(function (set, i) {\n        if (i === _this.currentTab) {\n          if (!set.classList.contains(\"season-tickets__tabs-item--active\")) {\n            set.classList.add(\"season-tickets__tabs-item--active\");\n          }\n        } else {\n          if (set.classList.contains(\"season-tickets__tabs-item--active\")) {\n            set.classList.remove(\"season-tickets__tabs-item--active\");\n          }\n        }\n      });\n    }\n  }, {\n    key: \"_onViewChange\",\n    value: function _onViewChange() {\n      this.tabs.forEach(function (tab) {\n        if (tab.parentElement.classList.contains(\"season-tickets__tabs-item--active\")) {\n          tab.parentElement.classList.remove(\"season-tickets__tabs-item--active\");\n        }\n      });\n    }\n  }]);\n\n  return SeasonTickets;\n}();\n\n\n\n//# sourceURL=webpack:///./js/season-tickets.js?");

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\n/* harmony import */ var _trainer_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trainer-card */ \"./js/trainer-card.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar FIRST_CARD_NUMBER = 0;\nvar names = [\"\\u0410\\u043D\\u043D\\u0430 \\u041F\\u0430\\u0432\\u043B\\u043E\\u0432\\u0430\", \"\\u0410\\u043B\\u0435\\u043A\\u0441\\u0435\\u0439 \\u041B\\u0430\\u0432\\u0440\\u043E\\u0432\", \"\\u0410\\u043B\\u0435\\u043A\\u0441\\u0430\\u043D\\u0434\\u0440 \\u041F\\u0430\\u0448\\u043A\\u043E\\u0432\", \"\\u041C\\u0430\\u0440\\u0438\\u044F \\u041A\\u0435\\u0442\\u043E\\u0432\\u0430\"];\nvar SLIDER_SET_COUNT = 4;\n\nvar Slider =\n/*#__PURE__*/\nfunction () {\n  function Slider(section, cardCollection) {\n    _classCallCheck(this, Slider);\n\n    this.section = section;\n    this.cardCollection = cardCollection;\n    this.slider = this.section.querySelector(\".slider\");\n    this.carousel = this.slider.querySelector(\".slider__carousel\");\n    this.ul = this.carousel.querySelector(\".slider__list\");\n    this.liCollection = this.carousel.querySelectorAll(\".slider__item\");\n    this.leftBtn = this.slider.querySelector(\".slider__btn--left\");\n    this.rightBtn = this.slider.querySelector(\".slider__btn--right\");\n    this.isAllExisting = this.cardCollection.length > 0 && this.cardCollection.length === this.liCollection.length && this.section && this.slider && this.carousel && this.leftBtn && this.rightBtn;\n    this.cardCount = null;\n    this.visibleCardCount = null;\n    this.firstVisibleCard = FIRST_CARD_NUMBER;\n  }\n\n  _createClass(Slider, [{\n    key: \"active\",\n    value: function active() {\n      var _this = this;\n\n      if (!this.isAllExisting) {\n        return;\n      }\n\n      this.ul.style.left = \"0px\";\n\n      this._getParameter();\n\n      this.cardCount = this.liCollection.length;\n      this.cardCollection.forEach(function (it, i) {\n        var setId = i % SLIDER_SET_COUNT + 1;\n        var trainerCard = new _trainer_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"](it, names[setId - 1], setId, i + 1);\n        trainerCard.active();\n      });\n      this.leftBtn.addEventListener(\"click\", function (evt) {\n        evt.preventDefault();\n\n        switch (true) {\n          case _this.firstVisibleCard >= _this.visibleCardCount:\n            _this.firstVisibleCard -= _this.visibleCardCount;\n            break;\n\n          case _this.firstVisibleCard < _this.visibleCardCount && _this.firstVisibleCard > FIRST_CARD_NUMBER:\n            _this.firstVisibleCard = FIRST_CARD_NUMBER;\n            break;\n\n          case _this.firstVisibleCard <= FIRST_CARD_NUMBER:\n            _this.firstVisibleCard = _this.cardCount - _this.visibleCardCount;\n        }\n\n        _this._setStyleLeft();\n      });\n      this.rightBtn.addEventListener(\"click\", function (evt) {\n        evt.preventDefault();\n\n        switch (true) {\n          case _this.firstVisibleCard <= _this.cardCount - 2 * _this.visibleCardCount:\n            _this.firstVisibleCard += _this.visibleCardCount;\n            break;\n\n          case _this.firstVisibleCard > _this.cardCount - 2 * _this.visibleCardCount && _this.firstVisibleCard < _this.cardCount - _this.visibleCardCount:\n            _this.firstVisibleCard = _this.cardCount - _this.visibleCardCount;\n            break;\n\n          case _this.firstVisibleCard >= _this.cardCount - _this.visibleCardCount:\n            _this.firstVisibleCard = FIRST_CARD_NUMBER;\n        }\n\n        _this._setStyleLeft();\n      });\n      window.addEventListener(\"resize\", function () {\n        _this._getParameter();\n\n        _this._setStyleLeft();\n      });\n    }\n  }, {\n    key: \"_getParameter\",\n    value: function _getParameter() {\n      var carouselWidth = this.carousel.offsetWidth;\n      var liWidth = this.liCollection[0].offsetWidth;\n      this.visibleCardCount = Math.round(carouselWidth / liWidth);\n    }\n  }, {\n    key: \"_setStyleLeft\",\n    value: function _setStyleLeft() {\n      var shiftLeft = this.liCollection[0].offsetWidth * this.firstVisibleCard;\n      this.ul.style.left = \"-\".concat(shiftLeft, \"px\");\n    }\n  }]);\n\n  return Slider;\n}();\n\n\n\n//# sourceURL=webpack:///./js/slider.js?");

/***/ }),

/***/ "./js/trainer-card.js":
/*!****************************!*\
  !*** ./js/trainer-card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TrainerCard; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TrainerCard =\n/*#__PURE__*/\nfunction () {\n  function TrainerCard(cardElement, name, setNumber, id) {\n    _classCallCheck(this, TrainerCard);\n\n    this.cardElement = cardElement;\n    this.name = name;\n    this.setNumber = setNumber;\n    this.id = id;\n    this.nameElement = cardElement.querySelector(\".trainer-card__name\");\n    this.isAllExisting = this.cardElement && this.nameElement;\n  }\n\n  _createClass(TrainerCard, [{\n    key: \"active\",\n    value: function active() {\n      if (!this.isAllExisting) {\n        return;\n      }\n\n      this.cardElement.classList.add(\"trainer-card--\".concat(this.setNumber)); // this.nameElement.textContent = `${this.name} ${this.id}`;\n\n      this.nameElement.textContent = \"\".concat(this.name);\n    }\n  }]);\n\n  return TrainerCard;\n}();\n\n\n\n//# sourceURL=webpack:///./js/trainer-card.js?");

/***/ }),

/***/ "./js/trainers.js":
/*!************************!*\
  !*** ./js/trainers.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Trainers; });\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./js/slider.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Trainers =\n/*#__PURE__*/\nfunction () {\n  function Trainers() {\n    _classCallCheck(this, Trainers);\n\n    this.section = document.querySelector(\".trainers\");\n    this.cardCollection = this.section.querySelectorAll(\".trainer-card\");\n    this.isAllExisting = this.section && this.cardCollection.length > 0;\n    this.slider = null;\n  }\n\n  _createClass(Trainers, [{\n    key: \"active\",\n    value: function active() {\n      if (!this.isAllExisting) {\n        return;\n      }\n\n      this.slider = new _slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.section, this.cardCollection);\n      this.slider.active();\n    }\n  }]);\n\n  return Trainers;\n}();\n\n\n\n//# sourceURL=webpack:///./js/trainers.js?");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/*! exports provided: activeForEeachNodeListForIE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activeForEeachNodeListForIE\", function() { return activeForEeachNodeListForIE; });\nvar activeForEeachNodeListForIE = function activeForEeachNodeListForIE() {\n  if (typeof NodeList.prototype.forEach !== \"function\") {\n    NodeList.prototype.forEach = Array.prototype.forEach;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/utils.js?");

/***/ })

/******/ });