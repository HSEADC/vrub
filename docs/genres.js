/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 158:
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var allFilter = document.querySelector('.filter-div[data-genre="all"]');
  var genreFilters = document.querySelectorAll('.filter-div:not([data-genre="all"])');

  function applyFilters() {
    var selectedGenres = Array.from(document.querySelectorAll('.filter-div.selected')).map(function (filter) {
      return filter.getAttribute('data-genre');
    });
    var articles = document.querySelectorAll('.article');

    if (selectedGenres.length === 0 || selectedGenres.includes('all')) {
      articles.forEach(function (article) {
        article.style.display = '';
      });
    } else {
      articles.forEach(function (article) {
        var articleGenres = article.getAttribute('data-genres').split(',');
        var matches = selectedGenres.some(function (genre) {
          return articleGenres.includes(genre);
        });
        article.style.display = matches ? '' : 'none';
      });
    }
  }

  allFilter.addEventListener('click', function () {
    if (this.classList.contains('selected') && document.querySelectorAll('.filter-div.selected').length === 1) {
      this.classList.remove('selected');
    } else {
      // Выбрать ВСЕ и снять выделение с других фильтров
      this.classList.add('selected');
      genreFilters.forEach(function (filter) {
        return filter.classList.remove('selected');
      });
    }

    applyFilters();
  });
  genreFilters.forEach(function (filter) {
    filter.addEventListener('click', function () {
      // Снять ВСЕ если другие фильтры выбраны
      allFilter.classList.remove('selected');
      this.classList.toggle('selected');
      applyFilters();
    });
  });
});

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _javascript_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _javascript_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_javascript_filter_js__WEBPACK_IMPORTED_MODULE_0__);



})();

/******/ })()
;