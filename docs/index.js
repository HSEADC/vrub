/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 315:
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _config = /*#__PURE__*/new WeakMap();

var _state = /*#__PURE__*/new WeakMap();

var _onClick = /*#__PURE__*/new WeakSet();

var _onMouseEnter = /*#__PURE__*/new WeakSet();

var _onMouseLeave = /*#__PURE__*/new WeakSet();

var _onTransitionStart = /*#__PURE__*/new WeakSet();

var _onTransitionEnd = /*#__PURE__*/new WeakSet();

var _onDragStart = /*#__PURE__*/new WeakSet();

var _onVisibilityChange = /*#__PURE__*/new WeakSet();

var _touchStart = /*#__PURE__*/new WeakSet();

var _touchEnd = /*#__PURE__*/new WeakSet();

var _touchMove = /*#__PURE__*/new WeakSet();

var _attachEvents = /*#__PURE__*/new WeakSet();

var _detachEvents = /*#__PURE__*/new WeakSet();

var _autoplay = /*#__PURE__*/new WeakSet();

var _balanceItems = /*#__PURE__*/new WeakSet();

var _updateClasses = /*#__PURE__*/new WeakSet();

var _move = /*#__PURE__*/new WeakSet();

var _moveTo = /*#__PURE__*/new WeakSet();

var _init = /*#__PURE__*/new WeakSet();

var _reset = /*#__PURE__*/new WeakSet();

var _updateExProperties = /*#__PURE__*/new WeakSet();

/**
 * @class ItcSlider
 * @version 1.0.1
 * @author https://github.com/itchief
 * @copyright Alexander Maltsev 2020 - 2023
 * @license MIT (https://github.com/itchief/ui-components/blob/master/LICENSE)
 * @tutorial https://itchief.ru/javascript/slider
 */
var ItcSlider = /*#__PURE__*/function () {
  /**
   * @param {HTMLElement} el
   * @param {Object} config
   * @param {String} prefix
   */
  function ItcSlider(_el) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'itc-slider-';

    _classCallCheck(this, ItcSlider);

    _classPrivateMethodInitSpec(this, _updateExProperties);

    _classPrivateMethodInitSpec(this, _reset);

    _classPrivateMethodInitSpec(this, _init);

    _classPrivateMethodInitSpec(this, _moveTo);

    _classPrivateMethodInitSpec(this, _move);

    _classPrivateMethodInitSpec(this, _updateClasses);

    _classPrivateMethodInitSpec(this, _balanceItems);

    _classPrivateMethodInitSpec(this, _autoplay);

    _classPrivateMethodInitSpec(this, _detachEvents);

    _classPrivateMethodInitSpec(this, _attachEvents);

    _classPrivateMethodInitSpec(this, _touchMove);

    _classPrivateMethodInitSpec(this, _touchEnd);

    _classPrivateMethodInitSpec(this, _touchStart);

    _classPrivateMethodInitSpec(this, _onVisibilityChange);

    _classPrivateMethodInitSpec(this, _onDragStart);

    _classPrivateMethodInitSpec(this, _onTransitionEnd);

    _classPrivateMethodInitSpec(this, _onTransitionStart);

    _classPrivateMethodInitSpec(this, _onMouseLeave);

    _classPrivateMethodInitSpec(this, _onMouseEnter);

    _classPrivateMethodInitSpec(this, _onClick);

    _classPrivateFieldInitSpec(this, _config, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _state, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _state, {
      prefix: prefix,
      // префикс для классов
      el: _el,
      // элемент который нужно активировать как ItcSlider
      elWrapper: _el.querySelector(".".concat(prefix).concat(_classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _EL_WRAPPER))),
      // элемент с #CLASS_WRAPPER
      elItems: _el.querySelector(".".concat(prefix).concat(_classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _EL_ITEMS))),
      // элемент, в котором находятся слайды
      elListItem: _el.querySelectorAll(".".concat(prefix).concat(_classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _EL_ITEM))),
      // список элементов, являющиеся слайдами
      btnPrev: _el.querySelector(".".concat(prefix).concat(_classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _BTN_PREV))),
      // кнопка, для перехода к предыдущему слайду
      btnNext: _el.querySelector(".".concat(prefix).concat(_classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _BTN_NEXT))),
      // кнопка, для перехода к следующему слайду
      btnClassHide: prefix + _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _BTN_HIDE),
      // класс для скрытия кнопки
      exOrderMin: 0,
      exOrderMax: 0,
      exItemMin: null,
      exItemMax: null,
      exTranslateMin: 0,
      exTranslateMax: 0,
      direction: 'next',
      // направление смены слайдов
      intervalId: null,
      // id таймера
      isSwiping: false,
      swipeX: 0,
      swipeY: 0
    });

    _classPrivateFieldSet(this, _config, _objectSpread({
      loop: true,
      direction: 'next',
      autoplay: false,
      interval: 5000,
      refresh: true,
      swipe: true
    }, config));

    _classPrivateMethodGet(this, _init, _init2).call(this);

    _classPrivateMethodGet(this, _attachEvents, _attachEvents2).call(this);
  }
  /**
   * Статический метод, который возвращает экземпляр ItcSlider, связанный с DOM-элементом
   * @param {HTMLElement} elSlider
   * @returns {?ItcSlider}
   */


  _createClass(ItcSlider, [{
    key: "slideNext",
    value: function slideNext() {
      _classPrivateFieldGet(this, _state).direction = 'next';

      _classPrivateMethodGet(this, _move, _move2).call(this);
    }
  }, {
    key: "slidePrev",
    value: function slidePrev() {
      _classPrivateFieldGet(this, _state).direction = 'prev';

      _classPrivateMethodGet(this, _move, _move2).call(this);
    }
  }, {
    key: "slideTo",
    value: function slideTo(index) {
      _classPrivateMethodGet(this, _moveTo, _moveTo2).call(this, index);
    }
  }, {
    key: "reset",
    value: function reset() {
      _classPrivateMethodGet(this, _reset, _reset2).call(this);
    }
  }, {
    key: "autoplay",
    get: function get() {
      var _this = this;

      return {
        // Start autoplay
        start: function start() {
          _classPrivateFieldGet(_this, _config).autoplay = true;

          _classPrivateMethodGet(_this, _autoplay, _autoplay2).call(_this);
        },
        // Stop autoplay
        stop: function stop() {
          _classPrivateMethodGet(_this, _autoplay, _autoplay2).call(_this, 'stop');

          _classPrivateFieldGet(_this, _config).autoplay = false;
        }
      };
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _this2 = this;

      _classPrivateMethodGet(this, _detachEvents, _detachEvents2).call(this);

      var transitionNoneClass = _classPrivateFieldGet(this, _state).prefix + _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _TRANSITION_NONE);

      var activeClass = _classPrivateFieldGet(this, _state).prefix + _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _EL_ITEM_ACTIVE);

      _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this, 'stop');

      _classPrivateFieldGet(this, _state).elItems.classList.add(transitionNoneClass);

      _classPrivateFieldGet(this, _state).elItems.style.transform = '';

      _classPrivateFieldGet(this, _state).elListItem.forEach(function (el) {
        el.style.transform = '';
        el.classList.remove(activeClass);
      });

      var selIndicators = "".concat(_classPrivateFieldGet(this, _state).prefix).concat(_classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _EL_INDICATOR_ACTIVE));
      document.querySelectorAll(".".concat(selIndicators)).forEach(function (el) {
        el.classList.remove(selIndicators);
      });
      _classPrivateFieldGet(this, _state).elItems.offsetHeight;

      _classPrivateFieldGet(this, _state).elItems.classList.remove(transitionNoneClass);

      var index = _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _instances).findIndex(function (el) {
        return el.target === _classPrivateFieldGet(_this2, _state).el;
      });

      _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _instances).splice(index, 1);
    }
  }], [{
    key: "checkSupportPassiveEvents",
    value: function checkSupportPassiveEvents() {
      var passiveSupported = false;

      try {
        var options = Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
          }
        });
        window.addEventListener('testPassiveListener', null, options);
        window.removeEventListener('testPassiveListener', null, options);
      } catch (error) {
        passiveSupported = false;
      }

      return passiveSupported;
    }
  }, {
    key: "getInstance",
    value: function getInstance(elSlider) {
      var found = _classStaticPrivateFieldSpecGet(this, ItcSlider, _instances).find(function (el) {
        return el.target === elSlider;
      });

      if (found) {
        return found.instance;
      }

      return null;
    }
    /**
     * @param {String|HTMLElement} target
     * @param {Object} config
     * @param {String} prefix
     */

  }, {
    key: "getOrCreateInstance",
    value: function getOrCreateInstance(target) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'itc-slider-';
      var elSlider = typeof target === 'string' ? document.querySelector(target) : target;
      var result = this.getInstance(elSlider);

      if (result) {
        return result;
      }

      var slider = new this(elSlider, config, prefix);

      _classStaticPrivateFieldSpecGet(this, ItcSlider, _instances).push({
        target: elSlider,
        instance: slider
      });

      return slider;
    } // статический метод для активирования элементов как ItcSlider на основе data-атрибутов

  }, {
    key: "createInstances",
    value: function createInstances() {
      var _this3 = this;

      document.querySelectorAll('[data-slider="itc-slider"]').forEach(function (el) {
        var dataset = el.dataset;
        var params = {};
        Object.keys(dataset).forEach(function (key) {
          if (key === 'slider') {
            return;
          }

          var value = dataset[key];
          value = Number.isNaN(Number(value)) ? value : Number(value);
          value = value === 'true' ? true : value;
          value = value === 'false' ? false : value;
          params[key] = value;
        });

        _this3.getOrCreateInstance(el, params);
      });
    }
  }]);

  return ItcSlider;
}();

function _onClick2(e) {
  if (_classPrivateFieldGet(this, _state).isMoving) {
    e.preventDefault();
  }

  if (!(e.target.closest('.itc-slider-btn') || e.target.closest('.itc-slider-indicators'))) {
    return;
  }

  var classBtnPrev = _classPrivateFieldGet(this, _state).prefix + _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _BTN_PREV);

  var classBtnNext = _classPrivateFieldGet(this, _state).prefix + _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _BTN_NEXT);

  _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this, 'stop');

  if (e.target.closest(".".concat(classBtnPrev)) || e.target.closest(".".concat(classBtnNext))) {
    _classPrivateFieldGet(this, _state).direction = e.target.closest(".".concat(classBtnPrev)) ? 'prev' : 'next';

    _classPrivateMethodGet(this, _move, _move2).call(this);
  } else if (e.target.dataset.slideTo) {
    var index = parseInt(e.target.dataset.slideTo, 10);

    _classPrivateMethodGet(this, _moveTo, _moveTo2).call(this, index);
  }

  _classPrivateFieldGet(this, _config).loop ? _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this) : null;
}

function _onMouseEnter2() {
  _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this, 'stop');
}

function _onMouseLeave2() {
  _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this);
}

function _onTransitionStart2() {
  var _this4 = this;

  if (_classPrivateFieldGet(this, _config).loop) {
    if (_classPrivateFieldGet(this, _state).isBalancing) {
      return;
    }

    _classPrivateFieldGet(this, _state).isBalancing = true;
    window.requestAnimationFrame(function () {
      _classPrivateMethodGet(_this4, _balanceItems, _balanceItems2).call(_this4, false);
    });
  }
}

function _onTransitionEnd2() {
  if (_classPrivateFieldGet(this, _config).loop) {
    _classPrivateFieldGet(this, _state).isBalancing = false;
  }
}

function _onDragStart2(e) {
  e.preventDefault();
}

function _onVisibilityChange2() {
  if (document.visibilityState === 'hidden') {
    _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this, 'stop');
  } else if (document.visibilityState === 'visible' && _classPrivateFieldGet(this, _config).loop) {
    _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this);
  }
}

function _touchStart2(e) {
  _classPrivateFieldGet(this, _state).isMoving = false;

  _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this, 'stop');

  var event = e.type.search('touch') === 0 ? e.touches[0] : e;
  _classPrivateFieldGet(this, _state).swipeX = event.clientX;
  _classPrivateFieldGet(this, _state).swipeY = event.clientY;
  _classPrivateFieldGet(this, _state).isSwiping = true;
  _classPrivateFieldGet(this, _state).isTouchMoving = false;
}

function _touchEnd2(e) {
  if (!_classPrivateFieldGet(this, _state).isSwiping) {
    return;
  }

  var event = e.type.search('touch') === 0 ? e.changedTouches[0] : e;

  var wrapperRect = _classPrivateFieldGet(this, _state).elWrapper.getBoundingClientRect();

  var clientX = event.clientX < wrapperRect.left ? wrapperRect.left : event.clientX;
  clientX = clientX > wrapperRect.right ? wrapperRect.right : clientX;
  var diffPosX = _classPrivateFieldGet(this, _state).swipeX - clientX;

  if (diffPosX === 0) {
    _classPrivateFieldGet(this, _state).isSwiping = false;
    return;
  }

  if (!_classPrivateFieldGet(this, _config).loop) {
    var isNotMoveFirst = _classPrivateFieldGet(this, _state).activeItems[0] === 1 && diffPosX <= 0;
    var isNotMoveLast = _classPrivateFieldGet(this, _state).activeItems[_classPrivateFieldGet(this, _state).activeItems.length - 1] && diffPosX >= 0;

    if (isNotMoveFirst || isNotMoveLast) {
      diffPosX = 0;
    }
  }

  var value = diffPosX / _classPrivateFieldGet(this, _state).width * 100;

  var transitionNoneClass = _classPrivateFieldGet(this, _state).prefix + _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _TRANSITION_NONE);

  _classPrivateFieldGet(this, _state).elItems.classList.remove(transitionNoneClass);

  if (value > _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _SWIPE_THRESHOLD)) {
    _classPrivateFieldGet(this, _state).direction = 'next';
    var count = 0;

    while (count <= Math.floor(Math.abs(value) - _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _SWIPE_THRESHOLD)) / 100) {
      _classPrivateMethodGet(this, _move, _move2).call(this);

      count += 1;
    }
  } else if (value < -_classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _SWIPE_THRESHOLD)) {
    _classPrivateFieldGet(this, _state).direction = 'prev';
    var _count = 0;

    while (_count <= Math.floor(Math.abs(value) - _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _SWIPE_THRESHOLD)) / 100) {
      _classPrivateMethodGet(this, _move, _move2).call(this);

      _count += 1;
    }
  } else {
    _classPrivateFieldGet(this, _state).direction = 'none';

    _classPrivateMethodGet(this, _move, _move2).call(this);
  }

  _classPrivateFieldGet(this, _state).isSwiping = false;

  if (_classPrivateFieldGet(this, _config).loop) {
    _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this);
  }

  _classPrivateFieldGet(this, _state).isBalancing = false;
}

function _touchMove2(e) {
  var _this5 = this;

  if (!_classPrivateFieldGet(this, _state).isSwiping) {
    return;
  }

  _classPrivateFieldGet(this, _state).isMoving = true;
  var event = e.type.search('touch') === 0 ? e.changedTouches[0] : e;
  var diffPosX = _classPrivateFieldGet(this, _state).swipeX - event.clientX;
  var diffPosY = _classPrivateFieldGet(this, _state).swipeY - event.clientY;
  var prevPosX = _classPrivateFieldGet(this, _state).prevPosX ? _classPrivateFieldGet(this, _state).prevPosX : event.clientX;
  var direction = prevPosX > event.clientX ? 'next' : 'prev';
  _classPrivateFieldGet(this, _state).prevPosX = event.clientX;

  if (!_classPrivateFieldGet(this, _state).isTouchMoving) {
    if (Math.abs(diffPosY) > Math.abs(diffPosX) || Math.abs(diffPosX) === 0) {
      _classPrivateFieldGet(this, _state).isSwiping = false;
      return;
    }

    _classPrivateFieldGet(this, _state).isTouchMoving = true;
  }

  e.preventDefault();

  if (!_classPrivateFieldGet(this, _config).loop) {
    var isNotMoveFirst = _classPrivateFieldGet(this, _state).activeItems[0] === 1 && diffPosX <= 0;
    var isNotMoveLast = _classPrivateFieldGet(this, _state).activeItems[_classPrivateFieldGet(this, _state).activeItems.length - 1] && diffPosX >= 0;

    if (isNotMoveFirst || isNotMoveLast) {
      diffPosX /= 4;
    }
  }

  var transitionNoneClass = _classPrivateFieldGet(this, _state).prefix + _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _TRANSITION_NONE);

  _classPrivateFieldGet(this, _state).elItems.classList.add(transitionNoneClass);

  var translate = _classPrivateFieldGet(this, _state).translate - diffPosX;
  _classPrivateFieldGet(this, _state).elItems.style.transform = "translate3D(".concat(translate, "px, 0px, 0.1px)");

  if (_classPrivateFieldGet(this, _config).loop) {
    _classPrivateFieldGet(this, _state).direction = diffPosX > 0 ? 'next' : 'prev';
    _classPrivateFieldGet(this, _state).direction = direction;
    window.requestAnimationFrame(function () {
      _classPrivateMethodGet(_this5, _balanceItems, _balanceItems2).call(_this5, true);
    });
  }
}

function _attachEvents2() {
  var _this6 = this;

  _classPrivateFieldGet(this, _state).events = {
    click: [_classPrivateFieldGet(this, _state).el, _classPrivateMethodGet(this, _onClick, _onClick2).bind(this), true],
    mouseenter: [_classPrivateFieldGet(this, _state).el, _classPrivateMethodGet(this, _onMouseEnter, _onMouseEnter2).bind(this), true],
    mouseleave: [_classPrivateFieldGet(this, _state).el, _classPrivateMethodGet(this, _onMouseLeave, _onMouseLeave2).bind(this), true],
    transitionstart: [_classPrivateFieldGet(this, _state).elItems, _classPrivateMethodGet(this, _onTransitionStart, _onTransitionStart2).bind(this), _classPrivateFieldGet(this, _config).loop],
    transitionend: [_classPrivateFieldGet(this, _state).elItems, _classPrivateMethodGet(this, _onTransitionEnd, _onTransitionEnd2).bind(this), _classPrivateFieldGet(this, _config).loop],
    touchstart: [_classPrivateFieldGet(this, _state).el, _classPrivateMethodGet(this, _touchStart, _touchStart2).bind(this), _classPrivateFieldGet(this, _config).swipe],
    mousedown: [_classPrivateFieldGet(this, _state).el, _classPrivateMethodGet(this, _touchStart, _touchStart2).bind(this), _classPrivateFieldGet(this, _config).swipe],
    touchend: [document, _classPrivateMethodGet(this, _touchEnd, _touchEnd2).bind(this), _classPrivateFieldGet(this, _config).swipe],
    mouseup: [document, _classPrivateMethodGet(this, _touchEnd, _touchEnd2).bind(this), _classPrivateFieldGet(this, _config).swipe],
    touchmove: [_classPrivateFieldGet(this, _state).el, _classPrivateMethodGet(this, _touchMove, _touchMove2).bind(this), _classPrivateFieldGet(this, _config).swipe],
    mousemove: [_classPrivateFieldGet(this, _state).el, _classPrivateMethodGet(this, _touchMove, _touchMove2).bind(this), _classPrivateFieldGet(this, _config).swipe],
    dragstart: [_classPrivateFieldGet(this, _state).el, _classPrivateMethodGet(this, _onDragStart, _onDragStart2).bind(this), true],
    visibilitychange: [document, _classPrivateMethodGet(this, _onVisibilityChange, _onVisibilityChange2).bind(this), true]
  };
  Object.keys(_classPrivateFieldGet(this, _state).events).forEach(function (type) {
    if (_classPrivateFieldGet(_this6, _state).events[type][2]) {
      var el = _classPrivateFieldGet(_this6, _state).events[type][0];

      var fn = _classPrivateFieldGet(_this6, _state).events[type][1];

      if (type === 'touchstart' || type === 'touchmove') {
        var options = _this6.constructor.checkSupportPassiveEvents() ? {
          passive: false
        } : false;
        el.addEventListener(type, fn, options);
      } else {
        el.addEventListener(type, fn);
      }
    }
  });
  var resizeObserver = new ResizeObserver(function (entries) {
    window.requestAnimationFrame(_classPrivateMethodGet(_this6, _reset, _reset2).bind(_this6));
  });
  resizeObserver.observe(_classPrivateFieldGet(this, _state).elWrapper);
}

function _detachEvents2() {
  var _this7 = this;

  Object.keys(_classPrivateFieldGet(this, _state).events).forEach(function (type) {
    if (_classPrivateFieldGet(_this7, _state).events[type][2]) {
      var el = _classPrivateFieldGet(_this7, _state).events[type][0];

      var fn = _classPrivateFieldGet(_this7, _state).events[type][1];

      el.removeEventListener(type, fn);
    }
  });
}

function _autoplay2(action) {
  var _this8 = this;

  if (!_classPrivateFieldGet(this, _config).autoplay) {
    return;
  }

  if (action === 'stop') {
    clearInterval(_classPrivateFieldGet(this, _state).intervalId);
    _classPrivateFieldGet(this, _state).intervalId = null;
    return;
  }

  if (_classPrivateFieldGet(this, _state).intervalId === null) {
    _classPrivateFieldGet(this, _state).intervalId = setInterval(function () {
      _classPrivateFieldGet(_this8, _state).direction = _classPrivateFieldGet(_this8, _config).direction === 'prev' ? 'prev' : 'next';

      _classPrivateMethodGet(_this8, _move, _move2).call(_this8);
    }, _classPrivateFieldGet(this, _config).interval);
  }
}

function _balanceItems2() {
  var _this9 = this;

  var once = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (!_classPrivateFieldGet(this, _state).isBalancing && !once) {
    return;
  }

  var wrapperRect = _classPrivateFieldGet(this, _state).elWrapper.getBoundingClientRect();

  var targetWidth = wrapperRect.width / _classPrivateFieldGet(this, _state).countActiveItems / 2;

  var countItems = _classPrivateFieldGet(this, _state).elListItem.length;

  if (_classPrivateFieldGet(this, _state).direction === 'next') {
    var exItemRectRight = _classPrivateFieldGet(this, _state).exItemMin.getBoundingClientRect().right;

    if (exItemRectRight < wrapperRect.left - targetWidth) {
      var elFound = _classPrivateFieldGet(this, _state).els.find(function (item) {
        return item.el === _classPrivateFieldGet(_this9, _state).exItemMin;
      });

      elFound.order = _classPrivateFieldGet(this, _state).exOrderMin + countItems;

      var translate = _classPrivateFieldGet(this, _state).exTranslateMin + countItems * _classPrivateFieldGet(this, _state).width;

      elFound.translate = translate;
      _classPrivateFieldGet(this, _state).exItemMin.style.transform = "translate3D(".concat(translate, "px, 0px, 0.1px)");

      _classPrivateMethodGet(this, _updateExProperties, _updateExProperties2).call(this);
    }
  } else {
    var exItemRectLeft = _classPrivateFieldGet(this, _state).exItemMax.getBoundingClientRect().left;

    if (exItemRectLeft > wrapperRect.right + targetWidth) {
      var _elFound = _classPrivateFieldGet(this, _state).els.find(function (item) {
        return item.el === _classPrivateFieldGet(_this9, _state).exItemMax;
      });

      _elFound.order = _classPrivateFieldGet(this, _state).exOrderMax - countItems;

      var _translate = _classPrivateFieldGet(this, _state).exTranslateMax - countItems * _classPrivateFieldGet(this, _state).width;

      _elFound.translate = _translate;
      _classPrivateFieldGet(this, _state).exItemMax.style.transform = "translate3D(".concat(_translate, "px, 0px, 0.1px)");

      _classPrivateMethodGet(this, _updateExProperties, _updateExProperties2).call(this);
    }
  }

  if (!once) {
    window.requestAnimationFrame(function () {
      _classPrivateMethodGet(_this9, _balanceItems, _balanceItems2).call(_this9, false);
    });
  }
}

function _updateClasses2() {
  var _this10 = this;

  var activeClass = _classPrivateFieldGet(this, _state).prefix + _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _EL_ITEM_ACTIVE);

  _classPrivateFieldGet(this, _state).activeItems.forEach(function (item, index) {
    if (item) {
      _classPrivateFieldGet(_this10, _state).elListItem[index].classList.add(activeClass);
    } else {
      _classPrivateFieldGet(_this10, _state).elListItem[index].classList.remove(activeClass);
    }

    var elListIndicators = _classPrivateFieldGet(_this10, _state).el.querySelectorAll(".".concat(_classPrivateFieldGet(_this10, _state).prefix).concat(_classStaticPrivateFieldSpecGet(_this10.constructor, ItcSlider, _EL_INDICATOR)));

    if (elListIndicators.length && item) {
      elListIndicators[index].classList.add("".concat(_classPrivateFieldGet(_this10, _state).prefix).concat(_classStaticPrivateFieldSpecGet(_this10.constructor, ItcSlider, _EL_INDICATOR_ACTIVE)));
    } else if (elListIndicators.length && !item) {
      elListIndicators[index].classList.remove("".concat(_classPrivateFieldGet(_this10, _state).prefix).concat(_classStaticPrivateFieldSpecGet(_this10.constructor, ItcSlider, _EL_INDICATOR_ACTIVE)));
    }
  });
}

function _move2() {
  if (_classPrivateFieldGet(this, _state).direction === 'none') {
    var _transform = _classPrivateFieldGet(this, _state).translate;

    _classPrivateFieldGet(this, _state).elItems.style.transform = "translate3D(".concat(_transform, "px, 0px, 0.1px)");
    return;
  }

  var widthItem = _classPrivateFieldGet(this, _state).direction === 'next' ? -_classPrivateFieldGet(this, _state).width : _classPrivateFieldGet(this, _state).width;
  var transform = _classPrivateFieldGet(this, _state).translate + widthItem;

  if (!_classPrivateFieldGet(this, _config).loop) {
    var limit = _classPrivateFieldGet(this, _state).width * (_classPrivateFieldGet(this, _state).elListItem.length - _classPrivateFieldGet(this, _state).countActiveItems);

    if (transform < -limit || transform > 0) {
      return;
    }

    if (_classPrivateFieldGet(this, _state).btnPrev) {
      _classPrivateFieldGet(this, _state).btnPrev.classList.remove(_classPrivateFieldGet(this, _state).btnClassHide);

      _classPrivateFieldGet(this, _state).btnNext.classList.remove(_classPrivateFieldGet(this, _state).btnClassHide);
    }

    if (_classPrivateFieldGet(this, _state).btnPrev && transform === -limit) {
      _classPrivateFieldGet(this, _state).btnNext.classList.add(_classPrivateFieldGet(this, _state).btnClassHide);
    } else if (_classPrivateFieldGet(this, _state).btnPrev && transform === 0) {
      _classPrivateFieldGet(this, _state).btnPrev.classList.add(_classPrivateFieldGet(this, _state).btnClassHide);
    }
  }

  if (_classPrivateFieldGet(this, _state).direction === 'next') {
    _classPrivateFieldGet(this, _state).activeItems = [].concat(_toConsumableArray(_classPrivateFieldGet(this, _state).activeItems.slice(-1)), _toConsumableArray(_classPrivateFieldGet(this, _state).activeItems.slice(0, -1)));
  } else {
    _classPrivateFieldGet(this, _state).activeItems = [].concat(_toConsumableArray(_classPrivateFieldGet(this, _state).activeItems.slice(1)), _toConsumableArray(_classPrivateFieldGet(this, _state).activeItems.slice(0, 1)));
  }

  _classPrivateMethodGet(this, _updateClasses, _updateClasses2).call(this);

  _classPrivateFieldGet(this, _state).translate = transform;
  _classPrivateFieldGet(this, _state).elItems.style.transform = "translate3D(".concat(transform, "px, 0px, 0.1px)");
}

function _moveTo2(index) {
  var delta = _classPrivateFieldGet(this, _state).activeItems.reduce(function (acc, current, currentIndex) {
    var diff = current ? index - currentIndex : acc;
    return Math.abs(diff) < Math.abs(acc) ? diff : acc;
  }, _classPrivateFieldGet(this, _state).activeItems.length);

  if (delta !== 0) {
    _classPrivateFieldGet(this, _state).direction = delta > 0 ? 'next' : 'prev';

    for (var i = 0; i < Math.abs(delta); i++) {
      _classPrivateMethodGet(this, _move, _move2).call(this);
    }
  }
}

function _init2() {
  var _this11 = this;

  // состояние элементов
  _classPrivateFieldGet(this, _state).els = []; // текущее значение translate

  _classPrivateFieldGet(this, _state).translate = 0; // позиции активных элементов

  _classPrivateFieldGet(this, _state).activeItems = []; // состояние элементов

  _classPrivateFieldGet(this, _state).isBalancing = false; // получаем gap между слайдами

  var gap = parseFloat(getComputedStyle(_classPrivateFieldGet(this, _state).elItems).gap) || 0; // ширина одного слайда

  _classPrivateFieldGet(this, _state).width = _classPrivateFieldGet(this, _state).elListItem[0].getBoundingClientRect().width + gap; // ширина #EL_WRAPPER

  var widthWrapper = _classPrivateFieldGet(this, _state).elWrapper.getBoundingClientRect().width; // количество активных элементов


  _classPrivateFieldGet(this, _state).countActiveItems = Math.round(widthWrapper / _classPrivateFieldGet(this, _state).width);

  _classPrivateFieldGet(this, _state).elListItem.forEach(function (el, index) {
    el.style.transform = '';

    _classPrivateFieldGet(_this11, _state).activeItems.push(index < _classPrivateFieldGet(_this11, _state).countActiveItems ? 1 : 0);

    _classPrivateFieldGet(_this11, _state).els.push({
      el: el,
      index: index,
      order: index,
      translate: 0
    });
  });

  if (_classPrivateFieldGet(this, _config).loop) {
    var lastIndex = _classPrivateFieldGet(this, _state).elListItem.length - 1;

    var translate = -(lastIndex + 1) * _classPrivateFieldGet(this, _state).width;

    _classPrivateFieldGet(this, _state).elListItem[lastIndex].style.transform = "translate3D(".concat(translate, "px, 0px, 0.1px)");
    _classPrivateFieldGet(this, _state).els[lastIndex].order = -1;
    _classPrivateFieldGet(this, _state).els[lastIndex].translate = translate;

    _classPrivateMethodGet(this, _updateExProperties, _updateExProperties2).call(this);
  } else if (_classPrivateFieldGet(this, _state).btnPrev) {
    _classPrivateFieldGet(this, _state).btnPrev.classList.add(_classPrivateFieldGet(this, _state).btnClassHide);
  }

  _classPrivateMethodGet(this, _updateClasses, _updateClasses2).call(this);

  _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this);
}

function _reset2() {
  var _this12 = this;

  var transitionNoneClass = _classPrivateFieldGet(this, _state).prefix + _classStaticPrivateFieldSpecGet(this.constructor, ItcSlider, _TRANSITION_NONE); // получаем gap между слайдами


  var gap = parseFloat(getComputedStyle(_classPrivateFieldGet(this, _state).elItems).gap) || 0; // ширина одного слайда

  var widthItem = _classPrivateFieldGet(this, _state).elListItem[0].getBoundingClientRect().width + gap;

  var widthWrapper = _classPrivateFieldGet(this, _state).elWrapper.getBoundingClientRect().width;

  var countActiveEls = Math.round(widthWrapper / widthItem);

  if (widthItem === _classPrivateFieldGet(this, _state).width && countActiveEls === _classPrivateFieldGet(this, _state).countActiveItems) {
    return;
  }

  _classPrivateMethodGet(this, _autoplay, _autoplay2).call(this, 'stop');

  _classPrivateFieldGet(this, _state).elItems.classList.add(transitionNoneClass);

  _classPrivateFieldGet(this, _state).elItems.style.transform = 'translate3D(0px, 0px, 0.1px)';

  _classPrivateMethodGet(this, _init, _init2).call(this);

  window.requestAnimationFrame(function () {
    _classPrivateFieldGet(_this12, _state).elItems.classList.remove(transitionNoneClass);
  });
}

function _updateExProperties2() {
  var els = _classPrivateFieldGet(this, _state).els.map(function (item) {
    return item.el;
  });

  var orders = _classPrivateFieldGet(this, _state).els.map(function (item) {
    return item.order;
  });

  _classPrivateFieldGet(this, _state).exOrderMin = Math.min.apply(Math, _toConsumableArray(orders));
  _classPrivateFieldGet(this, _state).exOrderMax = Math.max.apply(Math, _toConsumableArray(orders));
  var min = orders.indexOf(_classPrivateFieldGet(this, _state).exOrderMin);
  var max = orders.indexOf(_classPrivateFieldGet(this, _state).exOrderMax);
  _classPrivateFieldGet(this, _state).exItemMin = els[min];
  _classPrivateFieldGet(this, _state).exItemMax = els[max];
  _classPrivateFieldGet(this, _state).exTranslateMin = _classPrivateFieldGet(this, _state).els[min].translate;
  _classPrivateFieldGet(this, _state).exTranslateMax = _classPrivateFieldGet(this, _state).els[max].translate;
}

var _EL_WRAPPER = {
  writable: true,
  value: 'wrapper'
};
var _EL_ITEMS = {
  writable: true,
  value: 'items'
};
var _EL_ITEM = {
  writable: true,
  value: 'item'
};
var _EL_ITEM_ACTIVE = {
  writable: true,
  value: 'item-active'
};
var _EL_INDICATOR = {
  writable: true,
  value: 'indicator'
};
var _EL_INDICATOR_ACTIVE = {
  writable: true,
  value: 'indicator-active'
};
var _BTN_PREV = {
  writable: true,
  value: 'btn-prev'
};
var _BTN_NEXT = {
  writable: true,
  value: 'btn-next'
};
var _BTN_HIDE = {
  writable: true,
  value: 'btn-hide'
};
var _TRANSITION_NONE = {
  writable: true,
  value: 'transition-none'
};
var _SWIPE_THRESHOLD = {
  writable: true,
  value: 20
};
var _instances = {
  writable: true,
  value: []
};
ItcSlider.createInstances();

/***/ }),

/***/ 534:
/***/ (() => {

$(document).ready(function () {
  $('.menu_mob_icon').click(function () {
    $('.menu_mob').toggleClass('none');
    $('.main_menu').toggleClass('none');
  });
  $('.esc').click(function () {
    $('.menu_mob').toggleClass('none');
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
/* harmony import */ var _javascript_itc_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(315);
/* harmony import */ var _javascript_itc_slider_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_javascript_itc_slider_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _javascript_menu_mob_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(534);
/* harmony import */ var _javascript_menu_mob_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_javascript_menu_mob_js__WEBPACK_IMPORTED_MODULE_1__);



})();

/******/ })()
;