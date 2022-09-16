/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/construct.js


function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}
;// CONCATENATED MODULE: ./src/libs/swiper/swiper-bundle.esm.browser.min.js












function _createSuper(Derived) { var hasNativeReflectConstruct = swiper_bundle_esm_browser_min_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function swiper_bundle_esm_browser_min_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Swiper 8.4.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 14, 2022
 */
function isObject$1(e) {
  return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
}

function extend$1(e, t) {
  void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (s) {
    void 0 === e[s] ? e[s] = t[s] : isObject$1(t[s]) && isObject$1(e[s]) && Object.keys(t[s]).length > 0 && extend$1(e[s], t[s]);
  });
}

var ssrDocument = {
  body: {},
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  activeElement: {
    blur: function blur() {},
    nodeName: ""
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {}
    };
  },
  createElement: function createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {},
      getElementsByTagName: function getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS: function createElementNS() {
    return {};
  },
  importNode: function importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};

function getDocument() {
  var e = "undefined" != typeof document ? document : {};
  return extend$1(e, ssrDocument), e;
}

var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState: function replaceState() {},
    pushState: function pushState() {},
    go: function go() {},
    back: function back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return "";
      }
    };
  },
  Image: function Image() {},
  Date: function Date() {},
  screen: {},
  setTimeout: function setTimeout() {},
  clearTimeout: function clearTimeout() {},
  matchMedia: function matchMedia() {
    return {};
  },
  requestAnimationFrame: function requestAnimationFrame(e) {
    return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame: function cancelAnimationFrame(e) {
    "undefined" != typeof setTimeout && clearTimeout(e);
  }
};

function getWindow() {
  var e = "undefined" != typeof window ? window : {};
  return extend$1(e, ssrWindow), e;
}

function makeReactive(e) {
  var t = e.__proto__;
  Object.defineProperty(e, "__proto__", {
    get: function get() {
      return t;
    },
    set: function set(e) {
      t.__proto__ = e;
    }
  });
}

var Dom7 = /*#__PURE__*/function (_Array) {
  _inherits(Dom7, _Array);

  var _super = _createSuper(Dom7);

  function Dom7(e) {
    var _this;

    _classCallCheck(this, Dom7);

    "number" == typeof e ? _this = _super.call(this, e) : (_this = _super.call.apply(_super, [this].concat(_toConsumableArray(e || []))), makeReactive(_assertThisInitialized(_this)));
    return _possibleConstructorReturn(_this);
  }

  return _createClass(Dom7);
}( /*#__PURE__*/_wrapNativeSuper(Array));

function arrayFlat(e) {
  void 0 === e && (e = []);
  var t = [];
  return e.forEach(function (e) {
    Array.isArray(e) ? t.push.apply(t, _toConsumableArray(arrayFlat(e))) : t.push(e);
  }), t;
}

function arrayFilter(e, t) {
  return Array.prototype.filter.call(e, t);
}

function arrayUnique(e) {
  var t = [];

  for (var s = 0; s < e.length; s += 1) {
    -1 === t.indexOf(e[s]) && t.push(e[s]);
  }

  return t;
}

function qsa(e, t) {
  if ("string" != typeof e) return [e];
  var s = [],
      a = t.querySelectorAll(e);

  for (var _e = 0; _e < a.length; _e += 1) {
    s.push(a[_e]);
  }

  return s;
}

function $(e, t) {
  var s = getWindow(),
      a = getDocument();
  var i = [];
  if (!t && e instanceof Dom7) return e;
  if (!e) return new Dom7(i);

  if ("string" == typeof e) {
    var _s = e.trim();

    if (_s.indexOf("<") >= 0 && _s.indexOf(">") >= 0) {
      var _e2 = "div";
      0 === _s.indexOf("<li") && (_e2 = "ul"), 0 === _s.indexOf("<tr") && (_e2 = "tbody"), 0 !== _s.indexOf("<td") && 0 !== _s.indexOf("<th") || (_e2 = "tr"), 0 === _s.indexOf("<tbody") && (_e2 = "table"), 0 === _s.indexOf("<option") && (_e2 = "select");

      var _t = a.createElement(_e2);

      _t.innerHTML = _s;

      for (var _e3 = 0; _e3 < _t.childNodes.length; _e3 += 1) {
        i.push(_t.childNodes[_e3]);
      }
    } else i = qsa(e.trim(), t || a);
  } else if (e.nodeType || e === s || e === a) i.push(e);else if (Array.isArray(e)) {
    if (e instanceof Dom7) return e;
    i = e;
  }

  return new Dom7(arrayUnique(i));
}

function addClass() {
  for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
    t[s] = arguments[s];
  }

  var a = arrayFlat(t.map(function (e) {
    return e.split(" ");
  }));
  return this.forEach(function (e) {
    var _e$classList;

    (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(a));
  }), this;
}

function removeClass() {
  for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
    t[s] = arguments[s];
  }

  var a = arrayFlat(t.map(function (e) {
    return e.split(" ");
  }));
  return this.forEach(function (e) {
    var _e$classList2;

    (_e$classList2 = e.classList).remove.apply(_e$classList2, _toConsumableArray(a));
  }), this;
}

function toggleClass() {
  for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
    t[s] = arguments[s];
  }

  var a = arrayFlat(t.map(function (e) {
    return e.split(" ");
  }));
  this.forEach(function (e) {
    a.forEach(function (t) {
      e.classList.toggle(t);
    });
  });
}

function hasClass() {
  for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
    t[s] = arguments[s];
  }

  var a = arrayFlat(t.map(function (e) {
    return e.split(" ");
  }));
  return arrayFilter(this, function (e) {
    return a.filter(function (t) {
      return e.classList.contains(t);
    }).length > 0;
  }).length > 0;
}

function attr(e, t) {
  if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

  for (var s = 0; s < this.length; s += 1) {
    if (2 === arguments.length) this[s].setAttribute(e, t);else for (var _t2 in e) {
      this[s][_t2] = e[_t2], this[s].setAttribute(_t2, e[_t2]);
    }
  }

  return this;
}

function removeAttr(e) {
  for (var t = 0; t < this.length; t += 1) {
    this[t].removeAttribute(e);
  }

  return this;
}

function transform(e) {
  for (var t = 0; t < this.length; t += 1) {
    this[t].style.transform = e;
  }

  return this;
}

function transition$1(e) {
  for (var t = 0; t < this.length; t += 1) {
    this[t].style.transitionDuration = "string" != typeof e ? "".concat(e, "ms") : e;
  }

  return this;
}

function on() {
  for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
    t[s] = arguments[s];
  }

  var a = t[0],
      i = t[1],
      r = t[2],
      n = t[3];

  function l(e) {
    var t = e.target;
    if (!t) return;
    var s = e.target.dom7EventData || [];
    if (s.indexOf(e) < 0 && s.unshift(e), $(t).is(i)) r.apply(t, s);else {
      var _e4 = $(t).parents();

      for (var _t3 = 0; _t3 < _e4.length; _t3 += 1) {
        $(_e4[_t3]).is(i) && r.apply(_e4[_t3], s);
      }
    }
  }

  function o(e) {
    var t = e && e.target && e.target.dom7EventData || [];
    t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
  }

  "function" == typeof t[1] && ((a = t[0], r = t[1], n = t[2]), i = void 0), n || (n = !1);
  var d = a.split(" ");
  var c;

  for (var _e5 = 0; _e5 < this.length; _e5 += 1) {
    var _t4 = this[_e5];
    if (i) for (c = 0; c < d.length; c += 1) {
      var _e6 = d[c];
      _t4.dom7LiveListeners || (_t4.dom7LiveListeners = {}), _t4.dom7LiveListeners[_e6] || (_t4.dom7LiveListeners[_e6] = []), _t4.dom7LiveListeners[_e6].push({
        listener: r,
        proxyListener: l
      }), _t4.addEventListener(_e6, l, n);
    } else for (c = 0; c < d.length; c += 1) {
      var _e7 = d[c];
      _t4.dom7Listeners || (_t4.dom7Listeners = {}), _t4.dom7Listeners[_e7] || (_t4.dom7Listeners[_e7] = []), _t4.dom7Listeners[_e7].push({
        listener: r,
        proxyListener: o
      }), _t4.addEventListener(_e7, o, n);
    }
  }

  return this;
}

function off() {
  for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) {
    t[s] = arguments[s];
  }

  var a = t[0],
      i = t[1],
      r = t[2],
      n = t[3];
  "function" == typeof t[1] && ((a = t[0], r = t[1], n = t[2]), i = void 0), n || (n = !1);
  var l = a.split(" ");

  for (var _e8 = 0; _e8 < l.length; _e8 += 1) {
    var _t5 = l[_e8];

    for (var _e9 = 0; _e9 < this.length; _e9 += 1) {
      var _s2 = this[_e9];

      var _a = void 0;

      if (!i && _s2.dom7Listeners ? _a = _s2.dom7Listeners[_t5] : i && _s2.dom7LiveListeners && (_a = _s2.dom7LiveListeners[_t5]), _a && _a.length) for (var _e10 = _a.length - 1; _e10 >= 0; _e10 -= 1) {
        var _i = _a[_e10];
        r && _i.listener === r || r && _i.listener && _i.listener.dom7proxy && _i.listener.dom7proxy === r ? (_s2.removeEventListener(_t5, _i.proxyListener, n), _a.splice(_e10, 1)) : r || (_s2.removeEventListener(_t5, _i.proxyListener, n), _a.splice(_e10, 1));
      }
    }
  }

  return this;
}

function trigger() {
  var e = getWindow();

  for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) {
    s[a] = arguments[a];
  }

  var i = s[0].split(" "),
      r = s[1];

  for (var _t6 = 0; _t6 < i.length; _t6 += 1) {
    var _a2 = i[_t6];

    for (var _t7 = 0; _t7 < this.length; _t7 += 1) {
      var _i2 = this[_t7];

      if (e.CustomEvent) {
        var _t8 = new e.CustomEvent(_a2, {
          detail: r,
          bubbles: !0,
          cancelable: !0
        });

        _i2.dom7EventData = s.filter(function (e, t) {
          return t > 0;
        }), _i2.dispatchEvent(_t8), _i2.dom7EventData = [], delete _i2.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd$1(e) {
  var t = this;
  return e && t.on("transitionend", function s(a) {
    a.target === this && (e.call(this, a), t.off("transitionend", s));
  }), this;
}

function swiper_bundle_esm_browser_min_outerWidth(e) {
  if (this.length > 0) {
    if (e) {
      var _e11 = this.styles();

      return this[0].offsetWidth + parseFloat(_e11.getPropertyValue("margin-right")) + parseFloat(_e11.getPropertyValue("margin-left"));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function swiper_bundle_esm_browser_min_outerHeight(e) {
  if (this.length > 0) {
    if (e) {
      var _e12 = this.styles();

      return this[0].offsetHeight + parseFloat(_e12.getPropertyValue("margin-top")) + parseFloat(_e12.getPropertyValue("margin-bottom"));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    var e = getWindow(),
        t = getDocument(),
        s = this[0],
        a = s.getBoundingClientRect(),
        i = t.body,
        r = s.clientTop || i.clientTop || 0,
        n = s.clientLeft || i.clientLeft || 0,
        l = s === e ? e.scrollY : s.scrollTop,
        o = s === e ? e.scrollX : s.scrollLeft;
    return {
      top: a.top + l - r,
      left: a.left + o - n
    };
  }

  return null;
}

function styles() {
  var e = getWindow();
  return this[0] ? e.getComputedStyle(this[0], null) : {};
}

function css(e, t) {
  var s = getWindow();
  var a;

  if (1 === arguments.length) {
    if ("string" != typeof e) {
      for (a = 0; a < this.length; a += 1) {
        for (var _t9 in e) {
          this[a].style[_t9] = e[_t9];
        }
      }

      return this;
    }

    if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
  }

  if (2 === arguments.length && "string" == typeof e) {
    for (a = 0; a < this.length; a += 1) {
      this[a].style[e] = t;
    }

    return this;
  }

  return this;
}

function each(e) {
  return e ? (this.forEach(function (t, s) {
    e.apply(t, [t, s]);
  }), this) : this;
}

function filter(e) {
  return $(arrayFilter(this, e));
}

function html(e) {
  if (void 0 === e) return this[0] ? this[0].innerHTML : null;

  for (var t = 0; t < this.length; t += 1) {
    this[t].innerHTML = e;
  }

  return this;
}

function swiper_bundle_esm_browser_min_text(e) {
  if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

  for (var t = 0; t < this.length; t += 1) {
    this[t].textContent = e;
  }

  return this;
}

function is(e) {
  var t = getWindow(),
      s = getDocument(),
      a = this[0];
  var i, r;
  if (!a || void 0 === e) return !1;

  if ("string" == typeof e) {
    if (a.matches) return a.matches(e);
    if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
    if (a.msMatchesSelector) return a.msMatchesSelector(e);

    for (i = $(e), r = 0; r < i.length; r += 1) {
      if (i[r] === a) return !0;
    }

    return !1;
  }

  if (e === s) return a === s;
  if (e === t) return a === t;

  if (e.nodeType || e instanceof Dom7) {
    for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1) {
      if (i[r] === a) return !0;
    }

    return !1;
  }

  return !1;
}

function index() {
  var e,
      t = this[0];

  if (t) {
    for (e = 0; null !== (t = t.previousSibling);) {
      1 === t.nodeType && (e += 1);
    }

    return e;
  }
}

function eq(e) {
  if (void 0 === e) return this;
  var t = this.length;
  if (e > t - 1) return $([]);

  if (e < 0) {
    var s = t + e;
    return $(s < 0 ? [] : [this[s]]);
  }

  return $([this[e]]);
}

function append() {
  var e;
  var t = getDocument();

  for (var s = 0; s < arguments.length; s += 1) {
    e = s < 0 || arguments.length <= s ? void 0 : arguments[s];

    for (var _s3 = 0; _s3 < this.length; _s3 += 1) {
      if ("string" == typeof e) {
        var a = t.createElement("div");

        for (a.innerHTML = e; a.firstChild;) {
          this[_s3].appendChild(a.firstChild);
        }
      } else if (e instanceof Dom7) for (var _t10 = 0; _t10 < e.length; _t10 += 1) {
        this[_s3].appendChild(e[_t10]);
      } else this[_s3].appendChild(e);
    }
  }

  return this;
}

function prepend(e) {
  var t = getDocument();
  var s, a;

  for (s = 0; s < this.length; s += 1) {
    if ("string" == typeof e) {
      var i = t.createElement("div");

      for (i.innerHTML = e, a = i.childNodes.length - 1; a >= 0; a -= 1) {
        this[s].insertBefore(i.childNodes[a], this[s].childNodes[0]);
      }
    } else if (e instanceof Dom7) for (a = 0; a < e.length; a += 1) {
      this[s].insertBefore(e[a], this[s].childNodes[0]);
    } else this[s].insertBefore(e, this[s].childNodes[0]);
  }

  return this;
}

function next(e) {
  return this.length > 0 ? e ? this[0].nextElementSibling && $(this[0].nextElementSibling).is(e) ? $([this[0].nextElementSibling]) : $([]) : this[0].nextElementSibling ? $([this[0].nextElementSibling]) : $([]) : $([]);
}

function nextAll(e) {
  var t = [];
  var s = this[0];
  if (!s) return $([]);

  for (; s.nextElementSibling;) {
    var a = s.nextElementSibling;
    e ? $(a).is(e) && t.push(a) : t.push(a), s = a;
  }

  return $(t);
}

function prev(e) {
  if (this.length > 0) {
    var t = this[0];
    return e ? t.previousElementSibling && $(t.previousElementSibling).is(e) ? $([t.previousElementSibling]) : $([]) : t.previousElementSibling ? $([t.previousElementSibling]) : $([]);
  }

  return $([]);
}

function prevAll(e) {
  var t = [];
  var s = this[0];
  if (!s) return $([]);

  for (; s.previousElementSibling;) {
    var a = s.previousElementSibling;
    e ? $(a).is(e) && t.push(a) : t.push(a), s = a;
  }

  return $(t);
}

function swiper_bundle_esm_browser_min_parent(e) {
  var t = [];

  for (var s = 0; s < this.length; s += 1) {
    null !== this[s].parentNode && (e ? $(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
  }

  return $(t);
}

function parents(e) {
  var t = [];

  for (var s = 0; s < this.length; s += 1) {
    var a = this[s].parentNode;

    for (; a;) {
      e ? $(a).is(e) && t.push(a) : t.push(a), a = a.parentNode;
    }
  }

  return $(t);
}

function closest(e) {
  var t = this;
  return void 0 === e ? $([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
}

function find(e) {
  var t = [];

  for (var s = 0; s < this.length; s += 1) {
    var a = this[s].querySelectorAll(e);

    for (var _e13 = 0; _e13 < a.length; _e13 += 1) {
      t.push(a[_e13]);
    }
  }

  return $(t);
}

function children(e) {
  var t = [];

  for (var s = 0; s < this.length; s += 1) {
    var a = this[s].children;

    for (var _s4 = 0; _s4 < a.length; _s4 += 1) {
      e && !$(a[_s4]).is(e) || t.push(a[_s4]);
    }
  }

  return $(t);
}

function remove() {
  for (var e = 0; e < this.length; e += 1) {
    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
  }

  return this;
}

$.fn = Dom7.prototype;
var Methods = {
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  toggleClass: toggleClass,
  attr: attr,
  removeAttr: removeAttr,
  transform: transform,
  transition: transition$1,
  on: on,
  off: off,
  trigger: trigger,
  transitionEnd: transitionEnd$1,
  outerWidth: swiper_bundle_esm_browser_min_outerWidth,
  outerHeight: swiper_bundle_esm_browser_min_outerHeight,
  styles: styles,
  offset: offset,
  css: css,
  each: each,
  html: html,
  text: swiper_bundle_esm_browser_min_text,
  is: is,
  index: index,
  eq: eq,
  append: append,
  prepend: prepend,
  next: next,
  nextAll: nextAll,
  prev: prev,
  prevAll: prevAll,
  parent: swiper_bundle_esm_browser_min_parent,
  parents: parents,
  closest: closest,
  find: find,
  children: children,
  filter: filter,
  remove: remove
};

function deleteProps(e) {
  var t = e;
  Object.keys(t).forEach(function (e) {
    try {
      t[e] = null;
    } catch (e) {}

    try {
      delete t[e];
    } catch (e) {}
  });
}

function nextTick(e, t) {
  return void 0 === t && (t = 0), setTimeout(e, t);
}

function now() {
  return Date.now();
}

function getComputedStyle$1(e) {
  var t = getWindow();
  var s;
  return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
}

function getTranslate(e, t) {
  void 0 === t && (t = "x");
  var s = getWindow();
  var a, i, r;
  var n = getComputedStyle$1(e);
  return s.WebKitCSSMatrix ? (i = n.transform || n.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function (e) {
    return e.replace(",", ".");
  }).join(", ")), r = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = r.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
}

function isObject(e) {
  return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
}

function isNode(e) {
  return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
}

function extend() {
  var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];

  for (var s = 1; s < arguments.length; s += 1) {
    var a = s < 0 || arguments.length <= s ? void 0 : arguments[s];

    if (null != a && !isNode(a)) {
      var _s5 = Object.keys(Object(a)).filter(function (e) {
        return t.indexOf(e) < 0;
      });

      for (var _t11 = 0, i = _s5.length; _t11 < i; _t11 += 1) {
        var _i3 = _s5[_t11],
            r = Object.getOwnPropertyDescriptor(a, _i3);
        void 0 !== r && r.enumerable && (isObject(e[_i3]) && isObject(a[_i3]) ? a[_i3].__swiper__ ? e[_i3] = a[_i3] : extend(e[_i3], a[_i3]) : !isObject(e[_i3]) && isObject(a[_i3]) ? (e[_i3] = {}, a[_i3].__swiper__ ? e[_i3] = a[_i3] : extend(e[_i3], a[_i3])) : e[_i3] = a[_i3]);
      }
    }
  }

  return e;
}

function setCSSProperty(e, t, s) {
  e.style.setProperty(t, s);
}

function animateCSSModeScroll(e) {
  var t = e.swiper,
      s = e.targetPosition,
      a = e.side;
  var i = getWindow(),
      r = -t.translate;
  var n,
      l = null;
  var o = t.params.speed;
  t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);

  var d = s > r ? "next" : "prev",
      c = function c(e, t) {
    return "next" === d && e >= t || "prev" === d && e <= t;
  },
      p = function p() {
    n = new Date().getTime(), null === l && (l = n);
    var e = Math.max(Math.min((n - l) / o, 1), 0),
        d = .5 - Math.cos(e * Math.PI) / 2;
    var u = r + d * (s - r);
    if (c(u, s) && (u = s), t.wrapperEl.scrollTo(_defineProperty({}, a, u)), c(u, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(function () {
      t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo(_defineProperty({}, a, u));
    }), void i.cancelAnimationFrame(t.cssModeFrameID);
    t.cssModeFrameID = i.requestAnimationFrame(p);
  };

  p();
}

var support, deviceCached, browser;

function calcSupport() {
  var e = getWindow(),
      t = getDocument();
  return {
    smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
    passiveListener: function () {
      var t = !1;

      try {
        var s = Object.defineProperty({}, "passive", {
          get: function get() {
            t = !0;
          }
        });
        e.addEventListener("testPassiveListener", null, s);
      } catch (e) {}

      return t;
    }(),
    gestures: "ongesturestart" in e
  };
}

function getSupport() {
  return support || (support = calcSupport()), support;
}

function calcDevice(e) {
  var _ref = void 0 === e ? {} : e,
      t = _ref.userAgent;

  var s = getSupport(),
      a = getWindow(),
      i = a.navigator.platform,
      r = t || a.navigator.userAgent,
      n = {
    ios: !1,
    android: !1
  },
      l = a.screen.width,
      o = a.screen.height,
      d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  var c = r.match(/(iPad).*OS\s([\d_]+)/);
  var p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
      u = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      h = "Win32" === i;
  var m = "MacIntel" === i;
  return !c && m && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(l, "x").concat(o)) >= 0 && (c = r.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), m = !1), d && !h && (n.os = "android", n.android = !0), (c || u || p) && (n.os = "ios", n.ios = !0), n;
}

function getDevice(e) {
  return void 0 === e && (e = {}), deviceCached || (deviceCached = calcDevice(e)), deviceCached;
}

function calcBrowser() {
  var e = getWindow();
  return {
    isSafari: function () {
      var t = e.navigator.userAgent.toLowerCase();
      return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
    }(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
  };
}

function getBrowser() {
  return browser || (browser = calcBrowser()), browser;
}

function Resize(e) {
  var t = e.swiper,
      s = e.on,
      a = e.emit;
  var i = getWindow();
  var r = null,
      n = null;

  var l = function l() {
    t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"));
  },
      o = function o() {
    t && !t.destroyed && t.initialized && a("orientationchange");
  };

  s("init", function () {
    t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (r = new ResizeObserver(function (e) {
      n = i.requestAnimationFrame(function () {
        var s = t.width,
            a = t.height;
        var i = s,
            r = a;
        e.forEach(function (e) {
          var s = e.contentBoxSize,
              a = e.contentRect,
              n = e.target;
          n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize);
        }), i === s && r === a || l();
      });
    }), r.observe(t.el)) : (i.addEventListener("resize", l), i.addEventListener("orientationchange", o));
  }), s("destroy", function () {
    n && i.cancelAnimationFrame(n), r && r.unobserve && t.el && (r.unobserve(t.el), r = null), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", o);
  });
}

function Observer(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on,
      i = e.emit;

  var r = [],
      n = getWindow(),
      l = function l(e, t) {
    void 0 === t && (t = {});
    var s = new (n.MutationObserver || n.WebkitMutationObserver)(function (e) {
      if (1 === e.length) return void i("observerUpdate", e[0]);

      var t = function t() {
        i("observerUpdate", e[0]);
      };

      n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0);
    });
    s.observe(e, {
      attributes: void 0 === t.attributes || t.attributes,
      childList: void 0 === t.childList || t.childList,
      characterData: void 0 === t.characterData || t.characterData
    }), r.push(s);
  };

  s({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), a("init", function () {
    if (t.params.observer) {
      if (t.params.observeParents) {
        var _e14 = t.$el.parents();

        for (var _t12 = 0; _t12 < _e14.length; _t12 += 1) {
          l(_e14[_t12]);
        }
      }

      l(t.$el[0], {
        childList: t.params.observeSlideChildren
      }), l(t.$wrapperEl[0], {
        attributes: !1
      });
    }
  }), a("destroy", function () {
    r.forEach(function (e) {
      e.disconnect();
    }), r.splice(0, r.length);
  });
}

Object.keys(Methods).forEach(function (e) {
  Object.defineProperty($.fn, e, {
    value: Methods[e],
    writable: !0
  });
});
var eventsEmitter = {
  on: function on(e, t, s) {
    var a = this;
    if (!a.eventsListeners || a.destroyed) return a;
    if ("function" != typeof t) return a;
    var i = s ? "unshift" : "push";
    return e.split(" ").forEach(function (e) {
      a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
    }), a;
  },
  once: function once(e, t, s) {
    var a = this;
    if (!a.eventsListeners || a.destroyed) return a;
    if ("function" != typeof t) return a;

    function i() {
      a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;

      for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) {
        r[n] = arguments[n];
      }

      t.apply(a, r);
    }

    return i.__emitterProxy = t, a.on(e, i, s);
  },
  onAny: function onAny(e, t) {
    var s = this;
    if (!s.eventsListeners || s.destroyed) return s;
    if ("function" != typeof e) return s;
    var a = t ? "unshift" : "push";
    return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
  },
  offAny: function offAny(e) {
    var t = this;
    if (!t.eventsListeners || t.destroyed) return t;
    if (!t.eventsAnyListeners) return t;
    var s = t.eventsAnyListeners.indexOf(e);
    return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
  },
  off: function off(e, t) {
    var s = this;
    return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach(function (e) {
      void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(function (a, i) {
        (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
      });
    }), s) : s;
  },
  emit: function emit() {
    var e = this;
    if (!e.eventsListeners || e.destroyed) return e;
    if (!e.eventsListeners) return e;
    var t, s, a;

    for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) {
      r[n] = arguments[n];
    }

    "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
    return (Array.isArray(t) ? t : t.split(" ")).forEach(function (t) {
      e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(function (e) {
        e.apply(a, [t].concat(_toConsumableArray(s)));
      }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(function (e) {
        e.apply(a, s);
      });
    }), e;
  }
};

function updateSize() {
  var e = this;
  var t, s;
  var a = e.$el;
  t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
    width: t,
    height: s,
    size: e.isHorizontal() ? t : s
  }));
}

function updateSlides() {
  var e = this;

  function t(t) {
    return e.isHorizontal() ? t : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[t];
  }

  function s(e, s) {
    return parseFloat(e.getPropertyValue(t(s)) || 0);
  }

  var a = e.params,
      i = e.$wrapperEl,
      r = e.size,
      n = e.rtlTranslate,
      l = e.wrongRTL,
      o = e.virtual && a.virtual.enabled,
      d = o ? e.virtual.slides.length : e.slides.length,
      c = i.children(".".concat(e.params.slideClass)),
      p = o ? e.virtual.slides.length : c.length;
  var u = [];
  var h = [],
      m = [];
  var f = a.slidesOffsetBefore;
  "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
  var g = a.slidesOffsetAfter;
  "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
  var v = e.snapGrid.length,
      w = e.slidesGrid.length;
  var b = a.spaceBetween,
      x = -f,
      y = 0,
      $ = 0;
  if (void 0 === r) return;
  "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * r), e.virtualSize = -b, n ? c.css({
    marginLeft: "",
    marginBottom: "",
    marginTop: ""
  }) : c.css({
    marginRight: "",
    marginBottom: "",
    marginTop: ""
  }), a.centeredSlides && a.cssMode && (setCSSProperty(e.wrapperEl, "--swiper-centered-offset-before", ""), setCSSProperty(e.wrapperEl, "--swiper-centered-offset-after", ""));
  var E = a.grid && a.grid.rows > 1 && e.grid;
  var C;
  E && e.grid.initSlides(p);
  var T = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter(function (e) {
    return void 0 !== a.breakpoints[e].slidesPerView;
  }).length > 0;

  for (var _i4 = 0; _i4 < p; _i4 += 1) {
    C = 0;

    var _n = c.eq(_i4);

    if (E && e.grid.updateSlide(_i4, _n, p, t), "none" !== _n.css("display")) {
      if ("auto" === a.slidesPerView) {
        T && (c[_i4].style[t("width")] = "");

        var _r = getComputedStyle(_n[0]),
            _l = _n[0].style.transform,
            _o = _n[0].style.webkitTransform;

        if (_l && (_n[0].style.transform = "none"), _o && (_n[0].style.webkitTransform = "none"), a.roundLengths) C = e.isHorizontal() ? _n.outerWidth(!0) : _n.outerHeight(!0);else {
          var _e15 = s(_r, "width"),
              _t13 = s(_r, "padding-left"),
              _a3 = s(_r, "padding-right"),
              _i5 = s(_r, "margin-left"),
              _l2 = s(_r, "margin-right"),
              _o2 = _r.getPropertyValue("box-sizing");

          if (_o2 && "border-box" === _o2) C = _e15 + _i5 + _l2;else {
            var _n$ = _n[0],
                _s6 = _n$.clientWidth,
                _r2 = _n$.offsetWidth;
            C = _e15 + _t13 + _a3 + _i5 + _l2 + (_r2 - _s6);
          }
        }
        _l && (_n[0].style.transform = _l), _o && (_n[0].style.webkitTransform = _o), a.roundLengths && (C = Math.floor(C));
      } else C = (r - (a.slidesPerView - 1) * b) / a.slidesPerView, a.roundLengths && (C = Math.floor(C)), c[_i4] && (c[_i4].style[t("width")] = "".concat(C, "px"));

      c[_i4] && (c[_i4].swiperSlideSize = C), m.push(C), a.centeredSlides ? (x = x + C / 2 + y / 2 + b, 0 === y && 0 !== _i4 && (x = x - r / 2 - b), 0 === _i4 && (x = x - r / 2 - b), Math.abs(x) < .001 && (x = 0), a.roundLengths && (x = Math.floor(x)), $ % a.slidesPerGroup == 0 && u.push(x), h.push(x)) : (a.roundLengths && (x = Math.floor(x)), ($ - Math.min(e.params.slidesPerGroupSkip, $)) % e.params.slidesPerGroup == 0 && u.push(x), h.push(x), x = x + C + b), e.virtualSize += C + b, y = C, $ += 1;
    }
  }

  if (e.virtualSize = Math.max(e.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
    width: "".concat(e.virtualSize + a.spaceBetween, "px")
  }), a.setWrapperSize && i.css(_defineProperty({}, t("width"), "".concat(e.virtualSize + a.spaceBetween, "px"))), E && e.grid.updateWrapperSize(C, u, t), !a.centeredSlides) {
    var _t14 = [];

    for (var _s7 = 0; _s7 < u.length; _s7 += 1) {
      var _i6 = u[_s7];
      a.roundLengths && (_i6 = Math.floor(_i6)), u[_s7] <= e.virtualSize - r && _t14.push(_i6);
    }

    u = _t14, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
  }

  if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
    var _s8 = e.isHorizontal() && n ? "marginLeft" : t("marginRight");

    c.filter(function (e, t) {
      return !a.cssMode || t !== c.length - 1;
    }).css(_defineProperty({}, _s8, "".concat(b, "px")));
  }

  if (a.centeredSlides && a.centeredSlidesBounds) {
    var _e16 = 0;
    m.forEach(function (t) {
      _e16 += t + (a.spaceBetween ? a.spaceBetween : 0);
    }), _e16 -= a.spaceBetween;

    var _t15 = _e16 - r;

    u = u.map(function (e) {
      return e < 0 ? -f : e > _t15 ? _t15 + g : e;
    });
  }

  if (a.centerInsufficientSlides) {
    var _e17 = 0;

    if (m.forEach(function (t) {
      _e17 += t + (a.spaceBetween ? a.spaceBetween : 0);
    }), _e17 -= a.spaceBetween, _e17 < r) {
      var _t16 = (r - _e17) / 2;

      u.forEach(function (e, s) {
        u[s] = e - _t16;
      }), h.forEach(function (e, s) {
        h[s] = e + _t16;
      });
    }
  }

  if (Object.assign(e, {
    slides: c,
    snapGrid: u,
    slidesGrid: h,
    slidesSizesGrid: m
  }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
    setCSSProperty(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), setCSSProperty(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");

    var _t17 = -e.snapGrid[0],
        _s9 = -e.slidesGrid[0];

    e.snapGrid = e.snapGrid.map(function (e) {
      return e + _t17;
    }), e.slidesGrid = e.slidesGrid.map(function (e) {
      return e + _s9;
    });
  }

  if (p !== d && e.emit("slidesLengthChange"), u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== w && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
    var _t18 = "".concat(a.containerModifierClass, "backface-hidden"),
        _s10 = e.$el.hasClass(_t18);

    p <= a.maxBackfaceHiddenSlides ? _s10 || e.$el.addClass(_t18) : _s10 && e.$el.removeClass(_t18);
  }
}

function updateAutoHeight(e) {
  var t = this,
      s = [],
      a = t.virtual && t.params.virtual.enabled;
  var i,
      r = 0;
  "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);

  var n = function n(e) {
    return a ? t.slides.filter(function (t) {
      return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
    })[0] : t.slides.eq(e)[0];
  };

  if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
    if (t.params.centeredSlides) (t.visibleSlides || $([])).each(function (e) {
      s.push(e);
    });else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
      var _e18 = t.activeIndex + i;

      if (_e18 > t.slides.length && !a) break;
      s.push(n(_e18));
    }
  } else s.push(n(t.activeIndex));

  for (i = 0; i < s.length; i += 1) {
    if (void 0 !== s[i]) {
      var _e19 = s[i].offsetHeight;
      r = _e19 > r ? _e19 : r;
    }
  }

  (r || 0 === r) && t.$wrapperEl.css("height", "".concat(r, "px"));
}

function updateSlidesOffset() {
  var e = this,
      t = e.slides;

  for (var s = 0; s < t.length; s += 1) {
    t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
  }
}

function updateSlidesProgress(e) {
  void 0 === e && (e = this && this.translate || 0);
  var t = this,
      s = t.params,
      a = t.slides,
      i = t.rtlTranslate,
      r = t.snapGrid;
  if (0 === a.length) return;
  void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
  var n = -e;
  i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

  for (var _e20 = 0; _e20 < a.length; _e20 += 1) {
    var l = a[_e20];
    var o = l.swiperSlideOffset;
    s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
    var d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
        c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
        p = -(n - o),
        u = p + t.slidesSizesGrid[_e20];
    (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(_e20), a.eq(_e20).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c;
  }

  t.visibleSlides = $(t.visibleSlides);
}

function updateProgress(e) {
  var t = this;

  if (void 0 === e) {
    var _s11 = t.rtlTranslate ? -1 : 1;

    e = t && t.translate && t.translate * _s11 || 0;
  }

  var s = t.params,
      a = t.maxTranslate() - t.minTranslate();
  var i = t.progress,
      r = t.isBeginning,
      n = t.isEnd;
  var l = r,
      o = n;
  0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
    progress: i,
    isBeginning: r,
    isEnd: n
  }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i);
}

function updateSlidesClasses() {
  var e = this,
      t = e.slides,
      s = e.params,
      a = e.$wrapperEl,
      i = e.activeIndex,
      r = e.realIndex,
      n = e.virtual && s.virtual.enabled;
  var l;
  t.removeClass("".concat(s.slideActiveClass, " ").concat(s.slideNextClass, " ").concat(s.slidePrevClass, " ").concat(s.slideDuplicateActiveClass, " ").concat(s.slideDuplicateNextClass, " ").concat(s.slideDuplicatePrevClass)), l = n ? e.$wrapperEl.find(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]")) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass));
  var o = l.nextAll(".".concat(s.slideClass)).eq(0).addClass(s.slideNextClass);
  s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
  var d = l.prevAll(".".concat(s.slideClass)).eq(0).addClass(s.slidePrevClass);
  s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses();
}

function updateActiveIndex(e) {
  var t = this,
      s = t.rtlTranslate ? t.translate : -t.translate,
      a = t.slidesGrid,
      i = t.snapGrid,
      r = t.params,
      n = t.activeIndex,
      l = t.realIndex,
      o = t.snapIndex;
  var d,
      c = e;

  if (void 0 === c) {
    for (var _e21 = 0; _e21 < a.length; _e21 += 1) {
      void 0 !== a[_e21 + 1] ? s >= a[_e21] && s < a[_e21 + 1] - (a[_e21 + 1] - a[_e21]) / 2 ? c = _e21 : s >= a[_e21] && s < a[_e21 + 1] && (c = _e21 + 1) : s >= a[_e21] && (c = _e21);
    }

    r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
  }

  if (i.indexOf(s) >= 0) d = i.indexOf(s);else {
    var _e22 = Math.min(r.slidesPerGroupSkip, c);

    d = _e22 + Math.floor((c - _e22) / r.slidesPerGroup);
  }
  if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
  var p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
  Object.assign(t, {
    snapIndex: d,
    realIndex: p,
    previousIndex: n,
    activeIndex: c
  }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}

function updateClickedSlide(e) {
  var t = this,
      s = t.params,
      a = $(e).closest(".".concat(s.slideClass))[0];
  var i,
      r = !1;
  if (a) for (var _e23 = 0; _e23 < t.slides.length; _e23 += 1) {
    if (t.slides[_e23] === a) {
      r = !0, i = _e23;
      break;
    }
  }
  if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
  t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt($(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
}

var update = {
  updateSize: updateSize,
  updateSlides: updateSlides,
  updateAutoHeight: updateAutoHeight,
  updateSlidesOffset: updateSlidesOffset,
  updateSlidesProgress: updateSlidesProgress,
  updateProgress: updateProgress,
  updateSlidesClasses: updateSlidesClasses,
  updateActiveIndex: updateActiveIndex,
  updateClickedSlide: updateClickedSlide
};

function getSwiperTranslate(e) {
  void 0 === e && (e = this.isHorizontal() ? "x" : "y");
  var t = this.params,
      s = this.rtlTranslate,
      a = this.translate,
      i = this.$wrapperEl;
  if (t.virtualTranslate) return s ? -a : a;
  if (t.cssMode) return a;
  var r = getTranslate(i[0], e);
  return s && (r = -r), r || 0;
}

function setTranslate(e, t) {
  var s = this,
      a = s.rtlTranslate,
      i = s.params,
      r = s.$wrapperEl,
      n = s.wrapperEl,
      l = s.progress;
  var o = 0,
      d = 0;
  var c;
  s.isHorizontal() ? o = a ? -e : e : d = e, i.roundLengths && (o = Math.floor(o), d = Math.floor(d)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : i.virtualTranslate || r.transform("translate3d(".concat(o, "px, ").concat(d, "px, 0px)")), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d;
  var p = s.maxTranslate() - s.minTranslate();
  c = 0 === p ? 0 : (e - s.minTranslate()) / p, c !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(e, t, s, a, i) {
  void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
  var r = this,
      n = r.params,
      l = r.wrapperEl;
  if (r.animating && n.preventInteractionOnTransition) return !1;
  var o = r.minTranslate(),
      d = r.maxTranslate();
  var c;

  if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
    var _e24 = r.isHorizontal();

    if (0 === t) l[_e24 ? "scrollLeft" : "scrollTop"] = -c;else {
      var _l$scrollTo;

      if (!r.support.smoothScroll) return animateCSSModeScroll({
        swiper: r,
        targetPosition: -c,
        side: _e24 ? "left" : "top"
      }), !0;
      l.scrollTo((_l$scrollTo = {}, _defineProperty(_l$scrollTo, _e24 ? "left" : "top", -c), _defineProperty(_l$scrollTo, "behavior", "smooth"), _l$scrollTo));
    }
    return !0;
  }

  return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
  }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate: setTranslate,
  minTranslate: minTranslate,
  maxTranslate: maxTranslate,
  translateTo: translateTo
};

function setTransition(e, t) {
  var s = this;
  s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
}

function transitionEmit(e) {
  var t = e.swiper,
      s = e.runCallbacks,
      a = e.direction,
      i = e.step;
  var r = t.activeIndex,
      n = t.previousIndex;
  var l = a;

  if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit("transition".concat(i)), s && r !== n) {
    if ("reset" === l) return void t.emit("slideResetTransition".concat(i));
    t.emit("slideChangeTransition".concat(i)), "next" === l ? t.emit("slideNextTransition".concat(i)) : t.emit("slidePrevTransition".concat(i));
  }
}

function transitionStart(e, t) {
  void 0 === e && (e = !0);
  var s = this,
      a = s.params;
  a.cssMode || (a.autoHeight && s.updateAutoHeight(), transitionEmit({
    swiper: s,
    runCallbacks: e,
    direction: t,
    step: "Start"
  }));
}

function transitionEnd(e, t) {
  void 0 === e && (e = !0);
  var s = this,
      a = s.params;
  s.animating = !1, a.cssMode || (s.setTransition(0), transitionEmit({
    swiper: s,
    runCallbacks: e,
    direction: t,
    step: "End"
  }));
}

var transition = {
  setTransition: setTransition,
  transitionStart: transitionStart,
  transitionEnd: transitionEnd
};

function slideTo(e, t, s, a, i) {
  if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(_typeof(e), "] given."));

  if ("string" == typeof e) {
    var _t19 = parseInt(e, 10);

    if (!isFinite(_t19)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
    e = _t19;
  }

  var r = this;
  var n = e;
  n < 0 && (n = 0);
  var l = r.params,
      o = r.snapGrid,
      d = r.slidesGrid,
      c = r.previousIndex,
      p = r.activeIndex,
      u = r.rtlTranslate,
      h = r.wrapperEl,
      m = r.enabled;
  if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
  var f = Math.min(r.params.slidesPerGroupSkip, n);
  var g = f + Math.floor((n - f) / r.params.slidesPerGroup);
  g >= o.length && (g = o.length - 1);
  var v = -o[g];
  if (l.normalizeSlideIndex) for (var _e25 = 0; _e25 < d.length; _e25 += 1) {
    var _t20 = -Math.floor(100 * v),
        _s12 = Math.floor(100 * d[_e25]),
        _a4 = Math.floor(100 * d[_e25 + 1]);

    void 0 !== d[_e25 + 1] ? _t20 >= _s12 && _t20 < _a4 - (_a4 - _s12) / 2 ? n = _e25 : _t20 >= _s12 && _t20 < _a4 && (n = _e25 + 1) : _t20 >= _s12 && (n = _e25);
  }

  if (r.initialized && n !== p) {
    if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
    if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1;
  }

  var w;
  if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(v), w = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== w && (r.transitionStart(s, w), r.transitionEnd(s, w)), !1;

  if (l.cssMode) {
    var _e26 = r.isHorizontal(),
        _s13 = u ? v : -v;

    if (0 === t) {
      var _t21 = r.virtual && r.params.virtual.enabled;

      _t21 && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[_e26 ? "scrollLeft" : "scrollTop"] = _s13, _t21 && requestAnimationFrame(function () {
        r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1;
      });
    } else {
      var _h$scrollTo;

      if (!r.support.smoothScroll) return animateCSSModeScroll({
        swiper: r,
        targetPosition: _s13,
        side: _e26 ? "left" : "top"
      }), !0;
      h.scrollTo((_h$scrollTo = {}, _defineProperty(_h$scrollTo, _e26 ? "left" : "top", _s13), _defineProperty(_h$scrollTo, "behavior", "smooth"), _h$scrollTo));
    }

    return !0;
  }

  return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, w), 0 === t ? r.transitionEnd(s, w) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, w));
  }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0;
}

function slideToLoop(e, t, s, a) {
  if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
    var _t22 = parseInt(e, 10);

    if (!isFinite(_t22)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
    e = _t22;
  }

  var i = this;
  var r = e;
  return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
}

function slideNext(e, t, s) {
  void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
  var a = this,
      i = a.animating,
      r = a.enabled,
      n = a.params;
  if (!r) return a;
  var l = n.slidesPerGroup;
  "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
  var o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;

  if (n.loop) {
    if (i && n.loopPreventsSlide) return !1;
    a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
  }

  return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
}

function slidePrev(e, t, s) {
  void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
  var a = this,
      i = a.params,
      r = a.animating,
      n = a.snapGrid,
      l = a.slidesGrid,
      o = a.rtlTranslate,
      d = a.enabled;
  if (!d) return a;

  if (i.loop) {
    if (r && i.loopPreventsSlide) return !1;
    a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
  }

  function c(e) {
    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
  }

  var p = c(o ? a.translate : -a.translate),
      u = n.map(function (e) {
    return c(e);
  });
  var h = n[u.indexOf(p) - 1];

  if (void 0 === h && i.cssMode) {
    var _e27;

    n.forEach(function (t, s) {
      p >= t && (_e27 = s);
    }), void 0 !== _e27 && (h = n[_e27 > 0 ? _e27 - 1 : _e27]);
  }

  var m = 0;

  if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) {
    var _i7 = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;

    return a.slideTo(_i7, e, t, s);
  }

  return a.slideTo(m, e, t, s);
}

function slideReset(e, t, s) {
  void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
  return this.slideTo(this.activeIndex, e, t, s);
}

function slideToClosest(e, t, s, a) {
  void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
  var i = this;
  var r = i.activeIndex;
  var n = Math.min(i.params.slidesPerGroupSkip, r),
      l = n + Math.floor((r - n) / i.params.slidesPerGroup),
      o = i.rtlTranslate ? i.translate : -i.translate;

  if (o >= i.snapGrid[l]) {
    var _e28 = i.snapGrid[l];
    o - _e28 > (i.snapGrid[l + 1] - _e28) * a && (r += i.params.slidesPerGroup);
  } else {
    var _e29 = i.snapGrid[l - 1];
    o - _e29 <= (i.snapGrid[l] - _e29) * a && (r -= i.params.slidesPerGroup);
  }

  return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s);
}

function slideToClickedSlide() {
  var e = this,
      t = e.params,
      s = e.$wrapperEl,
      a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
  var i,
      r = e.clickedIndex;

  if (t.loop) {
    if (e.animating) return;
    i = parseInt($(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), nextTick(function () {
      e.slideTo(r);
    })) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), nextTick(function () {
      e.slideTo(r);
    })) : e.slideTo(r);
  } else e.slideTo(r);
}

var slide = {
  slideTo: slideTo,
  slideToLoop: slideToLoop,
  slideNext: slideNext,
  slidePrev: slidePrev,
  slideReset: slideReset,
  slideToClosest: slideToClosest,
  slideToClickedSlide: slideToClickedSlide
};

function loopCreate() {
  var e = this,
      t = getDocument(),
      s = e.params,
      a = e.$wrapperEl,
      i = a.children().length > 0 ? $(a.children()[0].parentNode) : a;
  i.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass)).remove();
  var r = i.children(".".concat(s.slideClass));

  if (s.loopFillGroupWithBlank) {
    var _e30 = s.slidesPerGroup - r.length % s.slidesPerGroup;

    if (_e30 !== s.slidesPerGroup) {
      for (var _a5 = 0; _a5 < _e30; _a5 += 1) {
        var _e31 = $(t.createElement("div")).addClass("".concat(s.slideClass, " ").concat(s.slideBlankClass));

        i.append(_e31);
      }

      r = i.children(".".concat(s.slideClass));
    }
  }

  "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > r.length && e.params.loopedSlidesLimit && (e.loopedSlides = r.length);
  var n = [],
      l = [];
  r.each(function (e, t) {
    $(e).attr("data-swiper-slide-index", t);
  });

  for (var _t23 = 0; _t23 < e.loopedSlides; _t23 += 1) {
    var _e32 = _t23 - Math.floor(_t23 / r.length) * r.length;

    l.push(r.eq(_e32)[0]), n.unshift(r.eq(r.length - _e32 - 1)[0]);
  }

  for (var _e33 = 0; _e33 < l.length; _e33 += 1) {
    i.append($(l[_e33].cloneNode(!0)).addClass(s.slideDuplicateClass));
  }

  for (var _e34 = n.length - 1; _e34 >= 0; _e34 -= 1) {
    i.prepend($(n[_e34].cloneNode(!0)).addClass(s.slideDuplicateClass));
  }
}

function loopFix() {
  var e = this;
  e.emit("beforeLoopFix");
  var t = e.activeIndex,
      s = e.slides,
      a = e.loopedSlides,
      i = e.allowSlidePrev,
      r = e.allowSlideNext,
      n = e.snapGrid,
      l = e.rtlTranslate;
  var o;
  e.allowSlidePrev = !0, e.allowSlideNext = !0;
  var d = -n[t] - e.getTranslate();

  if (t < a) {
    o = s.length - 3 * a + t, o += a;
    e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
  } else if (t >= s.length - a) {
    o = -s.length + t + a, o += a;
    e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
  }

  e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix");
}

function loopDestroy() {
  var e = this.$wrapperEl,
      t = this.params,
      s = this.slides;
  e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(), s.removeAttr("data-swiper-slide-index");
}

var loop = {
  loopCreate: loopCreate,
  loopFix: loopFix,
  loopDestroy: loopDestroy
};

function setGrabCursor(e) {
  var t = this;
  if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
  var s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
  s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab";
}

function unsetGrabCursor() {
  var e = this;
  e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
}

var grabCursor = {
  setGrabCursor: setGrabCursor,
  unsetGrabCursor: unsetGrabCursor
};

function closestElement(e, t) {
  return void 0 === t && (t = this), function t(s) {
    if (!s || s === getDocument() || s === getWindow()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    var a = s.closest(e);
    return a || s.getRootNode ? a || t(s.getRootNode().host) : null;
  }(t);
}

function onTouchStart(e) {
  var t = this,
      s = getDocument(),
      a = getWindow(),
      i = t.touchEventsData,
      r = t.params,
      n = t.touches,
      l = t.enabled;
  if (!l) return;
  if (t.animating && r.preventInteractionOnTransition) return;
  !t.animating && r.cssMode && r.loop && t.loopFix();
  var o = e;
  o.originalEvent && (o = o.originalEvent);
  var d = $(o.target);
  if ("wrapper" === r.touchEventsTarget && !d.closest(t.wrapperEl).length) return;
  if (i.isTouchEvent = "touchstart" === o.type, !i.isTouchEvent && "which" in o && 3 === o.which) return;
  if (!i.isTouchEvent && "button" in o && o.button > 0) return;
  if (i.isTouched && i.isMoved) return;
  var c = !!r.noSwipingClass && "" !== r.noSwipingClass,
      p = e.composedPath ? e.composedPath() : e.path ? e.path[0] : void 0;
  c && o.target && o.target.shadowRoot && p && (d = $(e.path[0]));
  var u = r.noSwipingSelector ? r.noSwipingSelector : ".".concat(r.noSwipingClass),
      h = !(!o.target || !o.target.shadowRoot);
  if (r.noSwiping && (h ? closestElement(u, d[0]) : d.closest(u)[0])) return void (t.allowClick = !0);
  if (r.swipeHandler && !d.closest(r.swipeHandler)[0]) return;
  n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
  var m = n.currentX,
      f = n.currentY,
      g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
      v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;

  if (g && (m <= v || m >= a.innerWidth - v)) {
    if ("prevent" !== g) return;
    e.preventDefault();
  }

  if (Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), n.startX = m, n.startY = f, i.touchStartTime = now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== o.type) {
    var _e35 = !0;

    d.is(i.focusableElements) && (_e35 = !1, "SELECT" === d[0].nodeName && (i.isTouched = !1)), s.activeElement && $(s.activeElement).is(i.focusableElements) && s.activeElement !== d[0] && s.activeElement.blur();

    var _a6 = _e35 && t.allowTouchMove && r.touchStartPreventDefault;

    !r.touchStartForcePreventDefault && !_a6 || d[0].isContentEditable || o.preventDefault();
  }

  t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", o);
}

function onTouchMove(e) {
  var t = getDocument(),
      s = this,
      a = s.touchEventsData,
      i = s.params,
      r = s.touches,
      n = s.rtlTranslate,
      l = s.enabled;
  if (!l) return;
  var o = e;
  if (o.originalEvent && (o = o.originalEvent), !a.isTouched) return void (a.startMoving && a.isScrolling && s.emit("touchMoveOpposite", o));
  if (a.isTouchEvent && "touchmove" !== o.type) return;
  var d = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
      c = "touchmove" === o.type ? d.pageX : o.pageX,
      p = "touchmove" === o.type ? d.pageY : o.pageY;
  if (o.preventedByNestedSwiper) return r.startX = c, void (r.startY = p);
  if (!s.allowTouchMove) return $(o.target).is(a.focusableElements) || (s.allowClick = !1), void (a.isTouched && (Object.assign(r, {
    startX: c,
    startY: p,
    currentX: c,
    currentY: p
  }), a.touchStartTime = now()));
  if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop) if (s.isVertical()) {
    if (p < r.startY && s.translate <= s.maxTranslate() || p > r.startY && s.translate >= s.minTranslate()) return a.isTouched = !1, void (a.isMoved = !1);
  } else if (c < r.startX && s.translate <= s.maxTranslate() || c > r.startX && s.translate >= s.minTranslate()) return;
  if (a.isTouchEvent && t.activeElement && o.target === t.activeElement && $(o.target).is(a.focusableElements)) return a.isMoved = !0, void (s.allowClick = !1);
  if (a.allowTouchCallbacks && s.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1) return;
  r.currentX = c, r.currentY = p;
  var u = r.currentX - r.startX,
      h = r.currentY - r.startY;
  if (s.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(h, 2)) < s.params.threshold) return;

  if (void 0 === a.isScrolling) {
    var _e36;

    s.isHorizontal() && r.currentY === r.startY || s.isVertical() && r.currentX === r.startX ? a.isScrolling = !1 : u * u + h * h >= 25 && (_e36 = 180 * Math.atan2(Math.abs(h), Math.abs(u)) / Math.PI, a.isScrolling = s.isHorizontal() ? _e36 > i.touchAngle : 90 - _e36 > i.touchAngle);
  }

  if (a.isScrolling && s.emit("touchMoveOpposite", o), void 0 === a.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (a.startMoving = !0)), a.isScrolling) return void (a.isTouched = !1);
  if (!a.startMoving) return;
  s.allowClick = !1, !i.cssMode && o.cancelable && o.preventDefault(), i.touchMoveStopPropagation && !i.nested && o.stopPropagation(), a.isMoved || (i.loop && !i.cssMode && s.loopFix(), a.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", o)), s.emit("sliderMove", o), a.isMoved = !0;
  var m = s.isHorizontal() ? u : h;
  r.diff = m, m *= i.touchRatio, n && (m = -m), s.swipeDirection = m > 0 ? "prev" : "next", a.currentTranslate = m + a.startTranslate;
  var f = !0,
      g = i.resistanceRatio;

  if (i.touchReleaseOnEdges && (g = 0), m > 0 && a.currentTranslate > s.minTranslate() ? (f = !1, i.resistance && (a.currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + a.startTranslate + m, g))) : m < 0 && a.currentTranslate < s.maxTranslate() && (f = !1, i.resistance && (a.currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - a.startTranslate - m, g))), f && (o.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), s.allowSlidePrev || s.allowSlideNext || (a.currentTranslate = a.startTranslate), i.threshold > 0) {
    if (!(Math.abs(m) > i.threshold || a.allowThresholdMove)) return void (a.currentTranslate = a.startTranslate);
    if (!a.allowThresholdMove) return a.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, a.currentTranslate = a.startTranslate, void (r.diff = s.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
  }

  i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && s.freeMode || i.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && i.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(a.currentTranslate), s.setTranslate(a.currentTranslate));
}

function onTouchEnd(e) {
  var t = this,
      s = t.touchEventsData,
      a = t.params,
      i = t.touches,
      r = t.rtlTranslate,
      n = t.slidesGrid,
      l = t.enabled;
  if (!l) return;
  var o = e;
  if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
  a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
  var d = now(),
      c = d - s.touchStartTime;

  if (t.allowClick) {
    var _e37 = o.path || o.composedPath && o.composedPath();

    t.updateClickedSlide(_e37 && _e37[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o);
  }

  if (s.lastClickTime = now(), nextTick(function () {
    t.destroyed || (t.allowClick = !0);
  }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
  var p;
  if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, p = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
  if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
    currentPos: p
  });
  var u = 0,
      h = t.slidesSizesGrid[0];

  for (var _e38 = 0; _e38 < n.length; _e38 += _e38 < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
    var _t24 = _e38 < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

    void 0 !== n[_e38 + _t24] ? p >= n[_e38] && p < n[_e38 + _t24] && (u = _e38, h = n[_e38 + _t24] - n[_e38]) : p >= n[_e38] && (u = _e38, h = n[n.length - 1] - n[n.length - 2]);
  }

  var m = null,
      f = null;
  a.rewind && (t.isBeginning ? f = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (m = 0));
  var g = (p - n[u]) / h,
      v = u < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

  if (c > a.longSwipesMs) {
    if (!a.longSwipes) return void t.slideTo(t.activeIndex);
    "next" === t.swipeDirection && (g >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? m : u + v) : t.slideTo(u)), "prev" === t.swipeDirection && (g > 1 - a.longSwipesRatio ? t.slideTo(u + v) : null !== f && g < 0 && Math.abs(g) > a.longSwipesRatio ? t.slideTo(f) : t.slideTo(u));
  } else {
    if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
    t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(u + v) : t.slideTo(u) : ("next" === t.swipeDirection && t.slideTo(null !== m ? m : u + v), "prev" === t.swipeDirection && t.slideTo(null !== f ? f : u));
  }
}

function onResize() {
  var e = this,
      t = e.params,
      s = e.el;
  if (s && 0 === s.offsetWidth) return;
  t.breakpoints && e.setBreakpoint();
  var a = e.allowSlideNext,
      i = e.allowSlidePrev,
      r = e.snapGrid;
  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
}

function onClick(e) {
  var t = this;
  t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}

function onScroll() {
  var e = this,
      t = e.wrapperEl,
      s = e.rtlTranslate,
      a = e.enabled;
  if (!a) return;
  var i;
  e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  var r = e.maxTranslate() - e.minTranslate();
  i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}

var dummyEventAttached = !1;

function dummyEventListener() {}

var events = function events(e, t) {
  var s = getDocument(),
      a = e.params,
      i = e.touchEvents,
      r = e.el,
      n = e.wrapperEl,
      l = e.device,
      o = e.support,
      d = !!a.nested,
      c = "on" === t ? "addEventListener" : "removeEventListener",
      p = t;

  if (o.touch) {
    var _t25 = !("touchstart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
      passive: !0,
      capture: !1
    };

    r[c](i.start, e.onTouchStart, _t25), r[c](i.move, e.onTouchMove, o.passiveListener ? {
      passive: !1,
      capture: d
    } : d), r[c](i.end, e.onTouchEnd, _t25), i.cancel && r[c](i.cancel, e.onTouchEnd, _t25);
  } else r[c](i.start, e.onTouchStart, !1), s[c](i.move, e.onTouchMove, d), s[c](i.end, e.onTouchEnd, !1);

  (a.preventClicks || a.preventClicksPropagation) && r[c]("click", e.onClick, !0), a.cssMode && n[c]("scroll", e.onScroll), a.updateOnWindowResize ? e[p](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : e[p]("observerUpdate", onResize, !0);
};

function attachEvents() {
  var e = this,
      t = getDocument(),
      s = e.params,
      a = e.support;
  e.onTouchStart = onTouchStart.bind(e), e.onTouchMove = onTouchMove.bind(e), e.onTouchEnd = onTouchEnd.bind(e), s.cssMode && (e.onScroll = onScroll.bind(e)), e.onClick = onClick.bind(e), a.touch && !dummyEventAttached && (t.addEventListener("touchstart", dummyEventListener), dummyEventAttached = !0), events(e, "on");
}

function detachEvents() {
  events(this, "off");
}

var events$1 = {
  attachEvents: attachEvents,
  detachEvents: detachEvents
};

var isGridEnabled = function isGridEnabled(e, t) {
  return e.grid && t.grid && t.grid.rows > 1;
};

function setBreakpoint() {
  var e = this,
      t = e.activeIndex,
      s = e.initialized,
      _e$loopedSlides = e.loopedSlides,
      a = _e$loopedSlides === void 0 ? 0 : _e$loopedSlides,
      i = e.params,
      r = e.$el,
      n = i.breakpoints;
  if (!n || n && 0 === Object.keys(n).length) return;
  var l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
  if (!l || e.currentBreakpoint === l) return;
  var o = (l in n ? n[l] : void 0) || e.originalParams,
      d = isGridEnabled(e, i),
      c = isGridEnabled(e, o),
      p = i.enabled;
  d && !c ? (r.removeClass("".concat(i.containerModifierClass, "grid ").concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !d && c && (r.addClass("".concat(i.containerModifierClass, "grid")), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass("".concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(function (t) {
    var s = i[t] && i[t].enabled,
        a = o[t] && o[t].enabled;
    s && !a && e[t].disable(), !s && a && e[t].enable();
  });
  var u = o.direction && o.direction !== i.direction,
      h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
  u && s && e.changeDirection(), extend(e.params, o);
  var m = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o);
}

function getBreakpoint(e, t, s) {
  if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
  var a = !1;
  var i = getWindow(),
      r = "window" === t ? i.innerHeight : s.clientHeight,
      n = Object.keys(e).map(function (e) {
    if ("string" == typeof e && 0 === e.indexOf("@")) {
      var _t26 = parseFloat(e.substr(1));

      return {
        value: r * _t26,
        point: e
      };
    }

    return {
      value: e,
      point: e
    };
  });
  n.sort(function (e, t) {
    return parseInt(e.value, 10) - parseInt(t.value, 10);
  });

  for (var _e39 = 0; _e39 < n.length; _e39 += 1) {
    var _n$_e = n[_e39],
        _r3 = _n$_e.point,
        l = _n$_e.value;
    "window" === t ? i.matchMedia("(min-width: ".concat(l, "px)")).matches && (a = _r3) : l <= s.clientWidth && (a = _r3);
  }

  return a || "max";
}

var breakpoints = {
  setBreakpoint: setBreakpoint,
  getBreakpoint: getBreakpoint
};

function prepareClasses(e, t) {
  var s = [];
  return e.forEach(function (e) {
    "object" == _typeof(e) ? Object.keys(e).forEach(function (a) {
      e[a] && s.push(t + a);
    }) : "string" == typeof e && s.push(t + e);
  }), s;
}

function addClasses() {
  var e = this,
      t = e.classNames,
      s = e.params,
      a = e.rtl,
      i = e.$el,
      r = e.device,
      n = e.support,
      l = prepareClasses(["initialized", s.direction, {
    "pointer-events": !n.touch
  }, {
    "free-mode": e.params.freeMode && s.freeMode.enabled
  }, {
    autoheight: s.autoHeight
  }, {
    rtl: a
  }, {
    grid: s.grid && s.grid.rows > 1
  }, {
    "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
  }, {
    android: r.android
  }, {
    ios: r.ios
  }, {
    "css-mode": s.cssMode
  }, {
    centered: s.cssMode && s.centeredSlides
  }, {
    "watch-progress": s.watchSlidesProgress
  }], s.containerModifierClass);
  t.push.apply(t, _toConsumableArray(l)), i.addClass(_toConsumableArray(t).join(" ")), e.emitContainerClasses();
}

function removeClasses() {
  var e = this.$el,
      t = this.classNames;
  e.removeClass(t.join(" ")), this.emitContainerClasses();
}

var classes = {
  addClasses: addClasses,
  removeClasses: removeClasses
};

function loadImage(e, t, s, a, i, r) {
  var n = getWindow();
  var l;

  function o() {
    r && r();
  }

  $(e).parent("picture")[0] || e.complete && i ? o() : t ? (l = new n.Image(), l.onload = o, l.onerror = o, a && (l.sizes = a), s && (l.srcset = s), t && (l.src = t)) : o();
}

function preloadImages() {
  var e = this;

  function t() {
    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
  }

  e.imagesToLoad = e.$el.find("img");

  for (var s = 0; s < e.imagesToLoad.length; s += 1) {
    var a = e.imagesToLoad[s];
    e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t);
  }
}

var swiper_bundle_esm_browser_min_images = {
  loadImage: loadImage,
  preloadImages: preloadImages
};

function checkOverflow() {
  var e = this,
      t = e.isLocked,
      s = e.params,
      a = s.slidesOffsetBefore;

  if (a) {
    var _t27 = e.slides.length - 1,
        _s14 = e.slidesGrid[_t27] + e.slidesSizesGrid[_t27] + 2 * a;

    e.isLocked = e.size > _s14;
  } else e.isLocked = 1 === e.snapGrid.length;

  !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}

var checkOverflow$1 = {
  checkOverflow: checkOverflow
},
    defaults = {
  init: !0,
  direction: "horizontal",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  width: null,
  height: null,
  preventInteractionOnTransition: !1,
  userAgent: null,
  url: null,
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  autoHeight: !1,
  setWrapperSize: !1,
  virtualTranslate: !1,
  effect: "slide",
  breakpoints: void 0,
  breakpointsBase: "window",
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  watchOverflow: !0,
  roundLengths: !1,
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: .5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 0,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  uniqueNavElements: !0,
  resistance: !0,
  resistanceRatio: .85,
  watchSlidesProgress: !1,
  grabCursor: !1,
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  preloadImages: !0,
  updateOnImagesReady: !0,
  loop: !1,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopedSlidesLimit: !0,
  loopFillGroupWithBlank: !1,
  loopPreventsSlide: !0,
  rewind: !1,
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  containerModifierClass: "swiper-",
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-invisible-blank",
  slideActiveClass: "swiper-slide-active",
  slideDuplicateActiveClass: "swiper-slide-duplicate-active",
  slideVisibleClass: "swiper-slide-visible",
  slideDuplicateClass: "swiper-slide-duplicate",
  slideNextClass: "swiper-slide-next",
  slideDuplicateNextClass: "swiper-slide-duplicate-next",
  slidePrevClass: "swiper-slide-prev",
  slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
  wrapperClass: "swiper-wrapper",
  runCallbacksOnInit: !0,
  _emitClasses: !1
};

function moduleExtendParams(e, t) {
  return function (s) {
    void 0 === s && (s = {});
    var a = Object.keys(s)[0],
        i = s[a];
    "object" == _typeof(i) && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
      auto: !0
    }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
      enabled: !0
    }), "object" != _typeof(e[a]) || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
      enabled: !1
    }), extend(t, s)) : extend(t, s)) : extend(t, s);
  };
}

var prototypes = {
  eventsEmitter: eventsEmitter,
  update: update,
  translate: translate,
  transition: transition,
  slide: slide,
  loop: loop,
  grabCursor: grabCursor,
  events: events$1,
  breakpoints: breakpoints,
  checkOverflow: checkOverflow$1,
  classes: classes,
  images: swiper_bundle_esm_browser_min_images
},
    extendedDefaults = {};

var Swiper = /*#__PURE__*/function () {
  function Swiper() {
    var _a7, _a8, _r$modules;

    _classCallCheck(this, Swiper);

    var e, t;

    for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) {
      a[i] = arguments[i];
    }

    if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : (_a7 = a, _a8 = _slicedToArray(_a7, 2), e = _a8[0], t = _a8[1], _a7), t || (t = {}), t = extend({}, t), e && !t.el && (t.el = e), t.el && $(t.el).length > 1) {
      var _e40 = [];
      return $(t.el).each(function (s) {
        var a = extend({}, t, {
          el: s
        });

        _e40.push(new Swiper(a));
      }), _e40;
    }

    var r = this;
    r.__swiper__ = !0, r.support = getSupport(), r.device = getDevice({
      userAgent: t.userAgent
    }), r.browser = getBrowser(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = _toConsumableArray(r.__modules__), t.modules && Array.isArray(t.modules) && (_r$modules = r.modules).push.apply(_r$modules, _toConsumableArray(t.modules));
    var n = {};
    r.modules.forEach(function (e) {
      e({
        swiper: r,
        extendParams: moduleExtendParams(t, n),
        on: r.on.bind(r),
        once: r.once.bind(r),
        off: r.off.bind(r),
        emit: r.emit.bind(r)
      });
    });
    var l = extend({}, defaults, n);
    return r.params = extend({}, l, extendedDefaults, t), r.originalParams = extend({}, r.params), r.passedParams = extend({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach(function (e) {
      r.on(e, r.params.on[e]);
    }), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = $, Object.assign(r, {
      enabled: r.params.enabled,
      el: e,
      classNames: [],
      slides: $(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      isHorizontal: function isHorizontal() {
        return "horizontal" === r.params.direction;
      },
      isVertical: function isVertical() {
        return "vertical" === r.params.direction;
      },
      activeIndex: 0,
      realIndex: 0,
      isBeginning: !0,
      isEnd: !1,
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      allowSlideNext: r.params.allowSlideNext,
      allowSlidePrev: r.params.allowSlidePrev,
      touchEvents: function () {
        var e = ["touchstart", "touchmove", "touchend", "touchcancel"],
            t = ["pointerdown", "pointermove", "pointerup"];
        return r.touchEventsTouch = {
          start: e[0],
          move: e[1],
          end: e[2],
          cancel: e[3]
        }, r.touchEventsDesktop = {
          start: t[0],
          move: t[1],
          end: t[2]
        }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        focusableElements: r.params.focusableElements,
        lastClickTime: now(),
        clickTimeout: void 0,
        velocities: [],
        allowMomentumBounce: void 0,
        isTouchEvent: void 0,
        startMoving: void 0
      },
      allowClick: !0,
      allowTouchMove: r.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      imagesToLoad: [],
      imagesLoaded: 0
    }), r.emit("_swiper"), r.params.init && r.init(), r;
  }

  _createClass(Swiper, [{
    key: "enable",
    value: function enable() {
      var e = this;
      e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }
  }, {
    key: "disable",
    value: function disable() {
      var e = this;
      e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }
  }, {
    key: "setProgress",
    value: function setProgress(e, t) {
      var s = this;
      e = Math.min(Math.max(e, 0), 1);
      var a = s.minTranslate(),
          i = (s.maxTranslate() - a) * e + a;
      s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
    }
  }, {
    key: "emitContainerClasses",
    value: function emitContainerClasses() {
      var e = this;
      if (!e.params._emitClasses || !e.el) return;
      var t = e.el.className.split(" ").filter(function (t) {
        return 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass);
      });
      e.emit("_containerClasses", t.join(" "));
    }
  }, {
    key: "getSlideClasses",
    value: function getSlideClasses(e) {
      var t = this;
      return t.destroyed ? "" : e.className.split(" ").filter(function (e) {
        return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
      }).join(" ");
    }
  }, {
    key: "emitSlidesClasses",
    value: function emitSlidesClasses() {
      var e = this;
      if (!e.params._emitClasses || !e.el) return;
      var t = [];
      e.slides.each(function (s) {
        var a = e.getSlideClasses(s);
        t.push({
          slideEl: s,
          classNames: a
        }), e.emit("_slideClass", s, a);
      }), e.emit("_slideClasses", t);
    }
  }, {
    key: "slidesPerViewDynamic",
    value: function slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      var s = this.params,
          a = this.slides,
          i = this.slidesGrid,
          r = this.slidesSizesGrid,
          n = this.size,
          l = this.activeIndex;
      var o = 1;

      if (s.centeredSlides) {
        var _e41,
            _t28 = a[l].swiperSlideSize;

        for (var _s15 = l + 1; _s15 < a.length; _s15 += 1) {
          a[_s15] && !_e41 && (_t28 += a[_s15].swiperSlideSize, o += 1, _t28 > n && (_e41 = !0));
        }

        for (var _s16 = l - 1; _s16 >= 0; _s16 -= 1) {
          a[_s16] && !_e41 && (_t28 += a[_s16].swiperSlideSize, o += 1, _t28 > n && (_e41 = !0));
        }
      } else if ("current" === e) for (var _e42 = l + 1; _e42 < a.length; _e42 += 1) {
        (t ? i[_e42] + r[_e42] - i[l] < n : i[_e42] - i[l] < n) && (o += 1);
      } else for (var _e43 = l - 1; _e43 >= 0; _e43 -= 1) {
        i[l] - i[_e43] < n && (o += 1);
      }

      return o;
    }
  }, {
    key: "update",
    value: function update() {
      var e = this;
      if (!e || e.destroyed) return;
      var t = e.snapGrid,
          s = e.params;

      function a() {
        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      var i;
      s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
  }, {
    key: "changeDirection",
    value: function changeDirection(e, t) {
      void 0 === t && (t = !0);
      var s = this,
          a = s.params.direction;
      return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass("".concat(s.params.containerModifierClass).concat(a)).addClass("".concat(s.params.containerModifierClass).concat(e)), s.emitContainerClasses(), s.params.direction = e, s.slides.each(function (t) {
        "vertical" === e ? t.style.width = "" : t.style.height = "";
      }), s.emit("changeDirection"), t && s.update()), s;
    }
  }, {
    key: "changeLanguageDirection",
    value: function changeLanguageDirection(e) {
      var t = this;
      t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "rtl") : (t.$el.removeClass("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "ltr"), t.update());
    }
  }, {
    key: "mount",
    value: function mount(e) {
      var t = this;
      if (t.mounted) return !0;
      var s = $(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;

      var a = function a() {
        return ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));
      };

      var i = function () {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          var _t29 = $(e.shadowRoot.querySelector(a()));

          return _t29.children = function (e) {
            return s.children(e);
          }, _t29;
        }

        return s.children ? s.children(a()) : $(s).children(a());
      }();

      if (0 === i.length && t.params.createElements) {
        var _e44 = getDocument().createElement("div");

        i = $(_e44), _e44.className = t.params.wrapperClass, s.append(_e44), s.children(".".concat(t.params.slideClass)).each(function (e) {
          i.append(e);
        });
      }

      return Object.assign(t, {
        $el: s,
        el: e,
        $wrapperEl: i,
        wrapperEl: i[0],
        mounted: !0,
        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
        wrongRTL: "-webkit-box" === i.css("display")
      }), !0;
    }
  }, {
    key: "init",
    value: function init(e) {
      var t = this;
      if (t.initialized) return t;
      return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
    }
  }, {
    key: "destroy",
    value: function destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      var s = this,
          a = s.params,
          i = s.$el,
          r = s.$wrapperEl,
          n = s.slides;
      return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
        s.off(e);
      }), !1 !== e && (s.$el[0].swiper = null, deleteProps(s)), s.destroyed = !0), null;
    }
  }], [{
    key: "extendDefaults",
    value: function extendDefaults(e) {
      extend(extendedDefaults, e);
    }
  }, {
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return defaults;
    }
  }, {
    key: "installModule",
    value: function installModule(e) {
      Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
      var t = Swiper.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
  }, {
    key: "use",
    value: function use(e) {
      return Array.isArray(e) ? (e.forEach(function (e) {
        return Swiper.installModule(e);
      }), Swiper) : (Swiper.installModule(e), Swiper);
    }
  }]);

  return Swiper;
}();

function Virtual(e) {
  var t,
      s = e.swiper,
      a = e.extendParams,
      i = e.on,
      r = e.emit;

  function n(e, t) {
    var a = s.params.virtual;
    if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
    var i = a.renderSlide ? $(a.renderSlide.call(s, e, t)) : $("<div class=\"".concat(s.params.slideClass, "\" data-swiper-slide-index=\"").concat(t, "\">").concat(e, "</div>"));
    return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i;
  }

  function l(e) {
    var _s$params = s.params,
        t = _s$params.slidesPerView,
        a = _s$params.slidesPerGroup,
        i = _s$params.centeredSlides,
        _s$params$virtual = s.params.virtual,
        l = _s$params$virtual.addSlidesBefore,
        o = _s$params$virtual.addSlidesAfter,
        _s$virtual = s.virtual,
        d = _s$virtual.from,
        c = _s$virtual.to,
        p = _s$virtual.slides,
        u = _s$virtual.slidesGrid,
        h = _s$virtual.offset;
    s.params.cssMode || s.updateActiveIndex();
    var m = s.activeIndex || 0;
    var f, g, v;
    f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (g = Math.floor(t / 2) + a + o, v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o, v = a + l);
    var w = Math.max((m || 0) - v, 0),
        b = Math.min((m || 0) + g, p.length - 1),
        x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);

    function y() {
      s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r("virtualUpdate");
    }

    if (Object.assign(s.virtual, {
      from: w,
      to: b,
      offset: x,
      slidesGrid: s.slidesGrid
    }), d === w && c === b && !e) return s.slidesGrid !== u && x !== h && s.slides.css(f, "".concat(x, "px")), s.updateProgress(), void r("virtualUpdate");
    if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
      offset: x,
      from: w,
      to: b,
      slides: function () {
        var e = [];

        for (var _t30 = w; _t30 <= b; _t30 += 1) {
          e.push(p[_t30]);
        }

        return e;
      }()
    }), void (s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
    var $ = [],
        E = [];
    if (e) s.$wrapperEl.find(".".concat(s.params.slideClass)).remove();else for (var _e45 = d; _e45 <= c; _e45 += 1) {
      (_e45 < w || _e45 > b) && s.$wrapperEl.find(".".concat(s.params.slideClass, "[data-swiper-slide-index=\"").concat(_e45, "\"]")).remove();
    }

    for (var _t31 = 0; _t31 < p.length; _t31 += 1) {
      _t31 >= w && _t31 <= b && (void 0 === c || e ? E.push(_t31) : (_t31 > c && E.push(_t31), _t31 < d && $.push(_t31)));
    }

    E.forEach(function (e) {
      s.$wrapperEl.append(n(p[e], e));
    }), $.sort(function (e, t) {
      return t - e;
    }).forEach(function (e) {
      s.$wrapperEl.prepend(n(p[e], e));
    }), s.$wrapperEl.children(".swiper-slide").css(f, "".concat(x, "px")), y();
  }

  a({
    virtual: {
      enabled: !1,
      slides: [],
      cache: !0,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: !0,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  }), s.virtual = {
    cache: {},
    from: void 0,
    to: void 0,
    slides: [],
    offset: 0,
    slidesGrid: []
  }, i("beforeInit", function () {
    s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push("".concat(s.params.containerModifierClass, "virtual")), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || l());
  }), i("setTranslate", function () {
    s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout(function () {
      l();
    }, 100)) : l());
  }), i("init update resize", function () {
    s.params.virtual.enabled && s.params.cssMode && setCSSProperty(s.wrapperEl, "--swiper-virtual-size", "".concat(s.virtualSize, "px"));
  }), Object.assign(s.virtual, {
    appendSlide: function appendSlide(e) {
      if ("object" == _typeof(e) && "length" in e) for (var _t32 = 0; _t32 < e.length; _t32 += 1) {
        e[_t32] && s.virtual.slides.push(e[_t32]);
      } else s.virtual.slides.push(e);
      l(!0);
    },
    prependSlide: function prependSlide(e) {
      var t = s.activeIndex;
      var a = t + 1,
          i = 1;

      if (Array.isArray(e)) {
        for (var _t33 = 0; _t33 < e.length; _t33 += 1) {
          e[_t33] && s.virtual.slides.unshift(e[_t33]);
        }

        a = t + e.length, i = e.length;
      } else s.virtual.slides.unshift(e);

      if (s.params.virtual.cache) {
        var _e46 = s.virtual.cache,
            _t34 = {};
        Object.keys(_e46).forEach(function (s) {
          var a = _e46[s],
              r = a.attr("data-swiper-slide-index");
          r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), _t34[parseInt(s, 10) + i] = a;
        }), s.virtual.cache = _t34;
      }

      l(!0), s.slideTo(a, 0);
    },
    removeSlide: function removeSlide(e) {
      if (null == e) return;
      var t = s.activeIndex;
      if (Array.isArray(e)) for (var _a9 = e.length - 1; _a9 >= 0; _a9 -= 1) {
        s.virtual.slides.splice(e[_a9], 1), s.params.virtual.cache && delete s.virtual.cache[e[_a9]], e[_a9] < t && (t -= 1), t = Math.max(t, 0);
      } else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
      l(!0), s.slideTo(t, 0);
    },
    removeAllSlides: function removeAllSlides() {
      s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), l(!0), s.slideTo(0, 0);
    },
    update: l
  });
}

function Keyboard(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on,
      i = e.emit;
  var r = getDocument(),
      n = getWindow();

  function l(e) {
    if (!t.enabled) return;
    var s = t.rtlTranslate;
    var a = e;
    a.originalEvent && (a = a.originalEvent);
    var l = a.keyCode || a.charCode,
        o = t.params.keyboard.pageUpDown,
        d = o && 33 === l,
        c = o && 34 === l,
        p = 37 === l,
        u = 39 === l,
        h = 38 === l,
        m = 40 === l;
    if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
    if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return !1;

    if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || r.activeElement && r.activeElement.nodeName && ("input" === r.activeElement.nodeName.toLowerCase() || "textarea" === r.activeElement.nodeName.toLowerCase()))) {
      if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
        var _e47 = !1;

        if (t.$el.parents(".".concat(t.params.slideClass)).length > 0 && 0 === t.$el.parents(".".concat(t.params.slideActiveClass)).length) return;

        var _a10 = t.$el,
            _i8 = _a10[0].clientWidth,
            _r4 = _a10[0].clientHeight,
            _l3 = n.innerWidth,
            _o3 = n.innerHeight,
            _d = t.$el.offset();

        s && (_d.left -= t.$el[0].scrollLeft);
        var _c = [[_d.left, _d.top], [_d.left + _i8, _d.top], [_d.left, _d.top + _r4], [_d.left + _i8, _d.top + _r4]];

        for (var _t35 = 0; _t35 < _c.length; _t35 += 1) {
          var _s17 = _c[_t35];

          if (_s17[0] >= 0 && _s17[0] <= _l3 && _s17[1] >= 0 && _s17[1] <= _o3) {
            if (0 === _s17[0] && 0 === _s17[1]) continue;
            _e47 = !0;
          }
        }

        if (!_e47) return;
      }

      t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), i("keyPress", l);
    }
  }

  function o() {
    t.keyboard.enabled || ($(r).on("keydown", l), t.keyboard.enabled = !0);
  }

  function d() {
    t.keyboard.enabled && ($(r).off("keydown", l), t.keyboard.enabled = !1);
  }

  t.keyboard = {
    enabled: !1
  }, s({
    keyboard: {
      enabled: !1,
      onlyInViewport: !0,
      pageUpDown: !0
    }
  }), a("init", function () {
    t.params.keyboard.enabled && o();
  }), a("destroy", function () {
    t.keyboard.enabled && d();
  }), Object.assign(t.keyboard, {
    enable: o,
    disable: d
  });
}

function Mousewheel(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on,
      i = e.emit;
  var r = getWindow();
  var n;
  s({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null
    }
  }), t.mousewheel = {
    enabled: !1
  };
  var l,
      o = now();
  var d = [];

  function c() {
    t.enabled && (t.mouseEntered = !0);
  }

  function p() {
    t.enabled && (t.mouseEntered = !1);
  }

  function u(e) {
    return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && !(t.params.mousewheel.thresholdTime && now() - o < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && now() - o < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), o = new r.Date().getTime(), !1));
  }

  function h(e) {
    var s = e,
        a = !0;
    if (!t.enabled) return;
    var r = t.params.mousewheel;
    t.params.cssMode && s.preventDefault();
    var o = t.$el;
    if ("container" !== t.params.mousewheel.eventsTarget && (o = $(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !o[0].contains(s.target) && !r.releaseOnEdges) return !0;
    s.originalEvent && (s = s.originalEvent);
    var c = 0;

    var p = t.rtlTranslate ? -1 : 1,
        h = function (e) {
      var t = 0,
          s = 0,
          a = 0,
          i = 0;
      return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
        spinX: t,
        spinY: s,
        pixelX: a,
        pixelY: i
      };
    }(s);

    if (r.forceToAxis) {
      if (t.isHorizontal()) {
        if (!(Math.abs(h.pixelX) > Math.abs(h.pixelY))) return !0;
        c = -h.pixelX * p;
      } else {
        if (!(Math.abs(h.pixelY) > Math.abs(h.pixelX))) return !0;
        c = -h.pixelY;
      }
    } else c = Math.abs(h.pixelX) > Math.abs(h.pixelY) ? -h.pixelX * p : -h.pixelY;
    if (0 === c) return !0;
    r.invert && (c = -c);
    var m = t.getTranslate() + c * r.sensitivity;

    if (m >= t.minTranslate() && (m = t.minTranslate()), m <= t.maxTranslate() && (m = t.maxTranslate()), a = !!t.params.loop || !(m === t.minTranslate() || m === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
      var _e48 = {
        time: now(),
        delta: Math.abs(c),
        direction: Math.sign(c)
      },
          _a11 = l && _e48.time < l.time + 500 && _e48.delta <= l.delta && _e48.direction === l.direction;

      if (!_a11) {
        l = void 0, t.params.loop && t.loopFix();

        var _o4 = t.getTranslate() + c * r.sensitivity;

        var _p = t.isBeginning,
            _u = t.isEnd;

        if (_o4 >= t.minTranslate() && (_o4 = t.minTranslate()), _o4 <= t.maxTranslate() && (_o4 = t.maxTranslate()), t.setTransition(0), t.setTranslate(_o4), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!_p && t.isBeginning || !_u && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
          clearTimeout(n), n = void 0, d.length >= 15 && d.shift();

          var _s18 = d.length ? d[d.length - 1] : void 0,
              _a12 = d[0];

          if (d.push(_e48), _s18 && (_e48.delta > _s18.delta || _e48.direction !== _s18.direction)) d.splice(0);else if (d.length >= 15 && _e48.time - _a12.time < 500 && _a12.delta - _e48.delta >= 1 && _e48.delta <= 6) {
            var _s19 = c > 0 ? .8 : .2;

            l = _e48, d.splice(0), n = nextTick(function () {
              t.slideToClosest(t.params.speed, !0, void 0, _s19);
            }, 0);
          }
          n || (n = nextTick(function () {
            l = _e48, d.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5);
          }, 500));
        }

        if (_a11 || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), _o4 === t.minTranslate() || _o4 === t.maxTranslate()) return !0;
      }
    } else {
      var _s20 = {
        time: now(),
        delta: Math.abs(c),
        direction: Math.sign(c),
        raw: e
      };
      d.length >= 2 && d.shift();

      var _a13 = d.length ? d[d.length - 1] : void 0;

      if (d.push(_s20), _a13 ? (_s20.direction !== _a13.direction || _s20.delta > _a13.delta || _s20.time > _a13.time + 150) && u(_s20) : u(_s20), function (e) {
        var s = t.params.mousewheel;

        if (e.direction < 0) {
          if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
        } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;

        return !1;
      }(_s20)) return !0;
    }

    return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1;
  }

  function m(e) {
    var s = t.$el;
    "container" !== t.params.mousewheel.eventsTarget && (s = $(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", c), s[e]("mouseleave", p), s[e]("wheel", h);
  }

  function f() {
    return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", h), !0) : !t.mousewheel.enabled && (m("on"), t.mousewheel.enabled = !0, !0);
  }

  function g() {
    return t.params.cssMode ? (t.wrapperEl.addEventListener(event, h), !0) : !!t.mousewheel.enabled && (m("off"), t.mousewheel.enabled = !1, !0);
  }

  a("init", function () {
    !t.params.mousewheel.enabled && t.params.cssMode && g(), t.params.mousewheel.enabled && f();
  }), a("destroy", function () {
    t.params.cssMode && f(), t.mousewheel.enabled && g();
  }), Object.assign(t.mousewheel, {
    enable: f,
    disable: g
  });
}

function createElementIfNotDefined(e, t, s, a) {
  var i = getDocument();
  return e.params.createElements && Object.keys(a).forEach(function (r) {
    if (!s[r] && !0 === s.auto) {
      var n = e.$el.children(".".concat(a[r]))[0];
      n || (n = i.createElement("div"), n.className = a[r], e.$el.append(n)), s[r] = n, t[r] = n;
    }
  }), s;
}

function Navigation(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on,
      i = e.emit;

  function r(e) {
    var s;
    return e && (s = $(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s;
  }

  function n(e, s) {
    var a = t.params.navigation;
    e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass));
  }

  function l() {
    if (t.params.loop) return;
    var _t$navigation = t.navigation,
        e = _t$navigation.$nextEl,
        s = _t$navigation.$prevEl;
    n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind);
  }

  function o(e) {
    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
  }

  function d(e) {
    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"));
  }

  function c() {
    var e = t.params.navigation;
    if (t.params.navigation = createElementIfNotDefined(t, t.originalParams.navigation, t.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    }), !e.nextEl && !e.prevEl) return;
    var s = r(e.nextEl),
        a = r(e.prevEl);
    s && s.length > 0 && s.on("click", d), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, {
      $nextEl: s,
      nextEl: s && s[0],
      $prevEl: a,
      prevEl: a && a[0]
    }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass));
  }

  function p() {
    var _t$navigation2 = t.navigation,
        e = _t$navigation2.$nextEl,
        s = _t$navigation2.$prevEl;
    e && e.length && (e.off("click", d), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass));
  }

  s({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), t.navigation = {
    nextEl: null,
    $nextEl: null,
    prevEl: null,
    $prevEl: null
  }, a("init", function () {
    !1 === t.params.navigation.enabled ? u() : (c(), l());
  }), a("toEdge fromEdge lock unlock", function () {
    l();
  }), a("destroy", function () {
    p();
  }), a("enable disable", function () {
    var _t$navigation3 = t.navigation,
        e = _t$navigation3.$nextEl,
        s = _t$navigation3.$prevEl;
    e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass);
  }), a("click", function (e, s) {
    var _t$navigation4 = t.navigation,
        a = _t$navigation4.$nextEl,
        r = _t$navigation4.$prevEl,
        n = s.target;

    if (t.params.navigation.hideOnClick && !$(n).is(r) && !$(n).is(a)) {
      if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;

      var _e49;

      a ? _e49 = a.hasClass(t.params.navigation.hiddenClass) : r && (_e49 = r.hasClass(t.params.navigation.hiddenClass)), i(!0 === _e49 ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass);
    }
  });

  var u = function u() {
    t.$el.addClass(t.params.navigation.navigationDisabledClass), p();
  };

  Object.assign(t.navigation, {
    enable: function enable() {
      t.$el.removeClass(t.params.navigation.navigationDisabledClass), c(), l();
    },
    disable: u,
    update: l,
    init: c,
    destroy: p
  });
}

function classesToSelector(e) {
  return void 0 === e && (e = ""), ".".concat(e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, "."));
}

function Pagination(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on,
      i = e.emit;
  var r = "swiper-pagination";
  var n;
  s({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: function formatFractionCurrent(e) {
        return e;
      },
      formatFractionTotal: function formatFractionTotal(e) {
        return e;
      },
      bulletClass: "".concat(r, "-bullet"),
      bulletActiveClass: "".concat(r, "-bullet-active"),
      modifierClass: "".concat(r, "-"),
      currentClass: "".concat(r, "-current"),
      totalClass: "".concat(r, "-total"),
      hiddenClass: "".concat(r, "-hidden"),
      progressbarFillClass: "".concat(r, "-progressbar-fill"),
      progressbarOppositeClass: "".concat(r, "-progressbar-opposite"),
      clickableClass: "".concat(r, "-clickable"),
      lockClass: "".concat(r, "-lock"),
      horizontalClass: "".concat(r, "-horizontal"),
      verticalClass: "".concat(r, "-vertical"),
      paginationDisabledClass: "".concat(r, "-disabled")
    }
  }), t.pagination = {
    el: null,
    $el: null,
    bullets: []
  };
  var l = 0;

  function o() {
    return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length;
  }

  function d(e, s) {
    var a = t.params.pagination.bulletActiveClass;
    e[s]().addClass("".concat(a, "-").concat(s))[s]().addClass("".concat(a, "-").concat(s, "-").concat(s));
  }

  function c() {
    var e = t.rtl,
        s = t.params.pagination;
    if (o()) return;
    var a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
        r = t.pagination.$el;
    var c;
    var p = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;

    if (t.params.loop ? (c = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), c > a - 1 - 2 * t.loopedSlides && (c -= a - 2 * t.loopedSlides), c > p - 1 && (c -= p), c < 0 && "bullets" !== t.params.paginationType && (c = p + c)) : c = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
      var _a14 = t.pagination.bullets;

      var _i9, _o5, _p2;

      if (s.dynamicBullets && (n = _a14.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += c - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), _i9 = Math.max(c - l, 0), _o5 = _i9 + (Math.min(_a14.length, s.dynamicMainBullets) - 1), _p2 = (_o5 + _i9) / 2), _a14.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(function (e) {
        return "".concat(s.bulletActiveClass).concat(e);
      }).join(" ")), r.length > 1) _a14.each(function (e) {
        var t = $(e),
            a = t.index();
        a === c && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= _i9 && a <= _o5 && t.addClass("".concat(s.bulletActiveClass, "-main")), a === _i9 && d(t, "prev"), a === _o5 && d(t, "next"));
      });else {
        var _e50 = _a14.eq(c),
            _r5 = _e50.index();

        if (_e50.addClass(s.bulletActiveClass), s.dynamicBullets) {
          var _e51 = _a14.eq(_i9),
              _n2 = _a14.eq(_o5);

          for (var _e52 = _i9; _e52 <= _o5; _e52 += 1) {
            _a14.eq(_e52).addClass("".concat(s.bulletActiveClass, "-main"));
          }

          if (t.params.loop) {
            if (_r5 >= _a14.length) {
              for (var _e53 = s.dynamicMainBullets; _e53 >= 0; _e53 -= 1) {
                _a14.eq(_a14.length - _e53).addClass("".concat(s.bulletActiveClass, "-main"));
              }

              _a14.eq(_a14.length - s.dynamicMainBullets - 1).addClass("".concat(s.bulletActiveClass, "-prev"));
            } else d(_e51, "prev"), d(_n2, "next");
          } else d(_e51, "prev"), d(_n2, "next");
        }
      }

      if (s.dynamicBullets) {
        var _i10 = Math.min(_a14.length, s.dynamicMainBullets + 4),
            _r6 = (n * _i10 - n) / 2 - _p2 * n,
            _l4 = e ? "right" : "left";

        _a14.css(t.isHorizontal() ? _l4 : "top", "".concat(_r6, "px"));
      }
    }

    if ("fraction" === s.type && (r.find(classesToSelector(s.currentClass)).text(s.formatFractionCurrent(c + 1)), r.find(classesToSelector(s.totalClass)).text(s.formatFractionTotal(p))), "progressbar" === s.type) {
      var _e54;

      _e54 = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";

      var _a15 = (c + 1) / p;

      var _i11 = 1,
          _n3 = 1;
      "horizontal" === _e54 ? _i11 = _a15 : _n3 = _a15, r.find(classesToSelector(s.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(_i11, ") scaleY(").concat(_n3, ")")).transition(t.params.speed);
    }

    "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, c + 1, p)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
  }

  function p() {
    var e = t.params.pagination;
    if (o()) return;
    var s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
        a = t.pagination.$el;
    var r = "";

    if ("bullets" === e.type) {
      var _i12 = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;

      t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && _i12 > s && (_i12 = s);

      for (var _s21 = 0; _s21 < _i12; _s21 += 1) {
        e.renderBullet ? r += e.renderBullet.call(t, _s21, e.bulletClass) : r += "<".concat(e.bulletElement, " class=\"").concat(e.bulletClass, "\"></").concat(e.bulletElement, ">");
      }

      a.html(r), t.pagination.bullets = a.find(classesToSelector(e.bulletClass));
    }

    "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : "<span class=\"".concat(e.currentClass, "\"></span> / <span class=\"").concat(e.totalClass, "\"></span>"), a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : "<span class=\"".concat(e.progressbarFillClass, "\"></span>"), a.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
  }

  function u() {
    t.params.pagination = createElementIfNotDefined(t, t.originalParams.pagination, t.params.pagination, {
      el: "swiper-pagination"
    });
    var e = t.params.pagination;
    if (!e.el) return;
    var s = $(e.el);
    0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter(function (e) {
      return $(e).parents(".swiper")[0] === t.el;
    }))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass("".concat(e.modifierClass).concat(e.type, "-dynamic")), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", classesToSelector(e.bulletClass), function (e) {
      e.preventDefault();
      var s = $(this).index() * t.params.slidesPerGroup;
      t.params.loop && (s += t.loopedSlides), t.slideTo(s);
    }), Object.assign(t.pagination, {
      $el: s,
      el: s[0]
    }), t.enabled || s.addClass(e.lockClass));
  }

  function h() {
    var e = t.params.pagination;
    if (o()) return;
    var s = t.pagination.$el;
    s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", classesToSelector(e.bulletClass));
  }

  a("init", function () {
    !1 === t.params.pagination.enabled ? m() : (u(), p(), c());
  }), a("activeIndexChange", function () {
    (t.params.loop || void 0 === t.snapIndex) && c();
  }), a("snapIndexChange", function () {
    t.params.loop || c();
  }), a("slidesLengthChange", function () {
    t.params.loop && (p(), c());
  }), a("snapGridLengthChange", function () {
    t.params.loop || (p(), c());
  }), a("destroy", function () {
    h();
  }), a("enable disable", function () {
    var e = t.pagination.$el;
    e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass);
  }), a("lock unlock", function () {
    c();
  }), a("click", function (e, s) {
    var a = s.target,
        r = t.pagination.$el;

    if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !$(a).hasClass(t.params.pagination.bulletClass)) {
      if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;

      var _e55 = r.hasClass(t.params.pagination.hiddenClass);

      i(!0 === _e55 ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass);
    }
  });

  var m = function m() {
    t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), h();
  };

  Object.assign(t.pagination, {
    enable: function enable() {
      t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), u(), p(), c();
    },
    disable: m,
    render: p,
    update: c,
    init: u,
    destroy: h
  });
}

function Scrollbar(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on,
      i = e.emit;
  var r = getDocument();
  var n,
      l,
      o,
      d,
      c = !1,
      p = null,
      u = null;

  function h() {
    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
    var e = t.scrollbar,
        s = t.rtlTranslate,
        a = t.progress,
        i = e.$dragEl,
        r = e.$el,
        n = t.params.scrollbar;
    var d = l,
        c = (o - l) * a;
    s ? (c = -c, c > 0 ? (d = l - c, c = 0) : -c + l > o && (d = o + c)) : c < 0 ? (d = l + c, c = 0) : c + l > o && (d = o - c), t.isHorizontal() ? (i.transform("translate3d(".concat(c, "px, 0, 0)")), i[0].style.width = "".concat(d, "px")) : (i.transform("translate3d(0px, ".concat(c, "px, 0)")), i[0].style.height = "".concat(d, "px")), n.hide && (clearTimeout(p), r[0].style.opacity = 1, p = setTimeout(function () {
      r[0].style.opacity = 0, r.transition(400);
    }, 1e3));
  }

  function m() {
    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
    var e = t.scrollbar,
        s = e.$dragEl,
        a = e.$el;
    s[0].style.width = "", s[0].style.height = "", o = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, d = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), l = "auto" === t.params.scrollbar.dragSize ? o * d : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = "".concat(l, "px") : s[0].style.height = "".concat(l, "px"), a[0].style.display = d >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass);
  }

  function f(e) {
    return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
  }

  function g(e) {
    var s = t.scrollbar,
        a = t.rtlTranslate,
        i = s.$el;
    var r;
    r = (f(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== n ? n : l / 2)) / (o - l), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
    var d = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
    t.updateProgress(d), t.setTranslate(d), t.updateActiveIndex(), t.updateSlidesClasses();
  }

  function v(e) {
    var s = t.params.scrollbar,
        a = t.scrollbar,
        r = t.$wrapperEl,
        l = a.$el,
        o = a.$dragEl;
    c = !0, n = e.target === o[0] || e.target === o ? f(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), r.transition(100), o.transition(100), g(e), clearTimeout(u), l.transition(0), s.hide && l.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), i("scrollbarDragStart", e);
  }

  function w(e) {
    var s = t.scrollbar,
        a = t.$wrapperEl,
        r = s.$el,
        n = s.$dragEl;
    c && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, g(e), a.transition(0), r.transition(0), n.transition(0), i("scrollbarDragMove", e));
  }

  function b(e) {
    var s = t.params.scrollbar,
        a = t.scrollbar,
        r = t.$wrapperEl,
        n = a.$el;
    c && (c = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), r.transition("")), s.hide && (clearTimeout(u), u = nextTick(function () {
      n.css("opacity", 0), n.transition(400);
    }, 1e3)), i("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
  }

  function x(e) {
    var s = t.scrollbar,
        a = t.touchEventsTouch,
        i = t.touchEventsDesktop,
        n = t.params,
        l = t.support,
        o = s.$el;
    if (!o) return;
    var d = o[0],
        c = !(!l.passiveListener || !n.passiveListeners) && {
      passive: !1,
      capture: !1
    },
        p = !(!l.passiveListener || !n.passiveListeners) && {
      passive: !0,
      capture: !1
    };
    if (!d) return;
    var u = "on" === e ? "addEventListener" : "removeEventListener";
    l.touch ? (d[u](a.start, v, c), d[u](a.move, w, c), d[u](a.end, b, p)) : (d[u](i.start, v, c), r[u](i.move, w, c), r[u](i.end, b, p));
  }

  function y() {
    var e = t.scrollbar,
        s = t.$el;
    t.params.scrollbar = createElementIfNotDefined(t, t.originalParams.scrollbar, t.params.scrollbar, {
      el: "swiper-scrollbar"
    });
    var a = t.params.scrollbar;
    if (!a.el) return;
    var i = $(a.el);
    t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)), i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
    var r = i.find(".".concat(t.params.scrollbar.dragClass));
    0 === r.length && (r = $("<div class=\"".concat(t.params.scrollbar.dragClass, "\"></div>")), i.append(r)), Object.assign(e, {
      $el: i,
      el: i[0],
      $dragEl: r,
      dragEl: r[0]
    }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && x("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
  }

  function E() {
    var e = t.params.scrollbar,
        s = t.scrollbar.$el;
    s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && x("off");
  }

  s({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical"
    }
  }), t.scrollbar = {
    el: null,
    dragEl: null,
    $el: null,
    $dragEl: null
  }, a("init", function () {
    !1 === t.params.scrollbar.enabled ? C() : (y(), m(), h());
  }), a("update resize observerUpdate lock unlock", function () {
    m();
  }), a("setTranslate", function () {
    h();
  }), a("setTransition", function (e, s) {
    !function (e) {
      t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
    }(s);
  }), a("enable disable", function () {
    var e = t.scrollbar.$el;
    e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
  }), a("destroy", function () {
    E();
  });

  var C = function C() {
    t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), E();
  };

  Object.assign(t.scrollbar, {
    enable: function enable() {
      t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), y(), m(), h();
    },
    disable: C,
    updateSize: m,
    setTranslate: h,
    init: y,
    destroy: E
  });
}

function Parallax(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on;
  s({
    parallax: {
      enabled: !1
    }
  });

  var i = function i(e, s) {
    var a = t.rtl,
        i = $(e),
        r = a ? -1 : 1,
        n = i.attr("data-swiper-parallax") || "0";
    var l = i.attr("data-swiper-parallax-x"),
        o = i.attr("data-swiper-parallax-y");
    var d = i.attr("data-swiper-parallax-scale"),
        c = i.attr("data-swiper-parallax-opacity");

    if (l || o ? (l = l || "0", o = o || "0") : t.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != c) {
      var _e56 = c - (c - 1) * (1 - Math.abs(s));

      i[0].style.opacity = _e56;
    }

    if (null == d) i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px)"));else {
      var _e57 = d - (d - 1) * (1 - Math.abs(s));

      i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px) scale(").concat(_e57, ")"));
    }
  },
      r = function r() {
    var e = t.$el,
        s = t.slides,
        a = t.progress,
        r = t.snapGrid;
    e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
      i(e, a);
    }), s.each(function (e, s) {
      var n = e.progress;
      t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), $(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
        i(e, n);
      });
    });
  };

  a("beforeInit", function () {
    t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0);
  }), a("init", function () {
    t.params.parallax.enabled && r();
  }), a("setTranslate", function () {
    t.params.parallax.enabled && r();
  }), a("setTransition", function (e, s) {
    t.params.parallax.enabled && function (e) {
      void 0 === e && (e = t.params.speed);
      var s = t.$el;
      s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
        var s = $(t);
        var a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
        0 === e && (a = 0), s.transition(a);
      });
    }(s);
  });
}

function Zoom(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on,
      i = e.emit;
  var r = getWindow();
  s({
    zoom: {
      enabled: !1,
      maxRatio: 3,
      minRatio: 1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  }), t.zoom = {
    enabled: !1
  };
  var n,
      l,
      o,
      d = 1,
      c = !1;
  var p = {
    $slideEl: void 0,
    slideWidth: void 0,
    slideHeight: void 0,
    $imageEl: void 0,
    $imageWrapEl: void 0,
    maxRatio: 3
  },
      u = {
    isTouched: void 0,
    isMoved: void 0,
    currentX: void 0,
    currentY: void 0,
    minX: void 0,
    minY: void 0,
    maxX: void 0,
    maxY: void 0,
    width: void 0,
    height: void 0,
    startX: void 0,
    startY: void 0,
    touchesStart: {},
    touchesCurrent: {}
  },
      h = {
    x: void 0,
    y: void 0,
    prevPositionX: void 0,
    prevPositionY: void 0,
    prevTime: void 0
  };
  var m = 1;

  function f(e) {
    if (e.targetTouches.length < 2) return 1;
    var t = e.targetTouches[0].pageX,
        s = e.targetTouches[0].pageY,
        a = e.targetTouches[1].pageX,
        i = e.targetTouches[1].pageY;
    return Math.sqrt(Math.pow(a - t, 2) + Math.pow(i - s, 2));
  }

  function g(e) {
    var s = t.support,
        a = t.params.zoom;

    if (l = !1, o = !1, !s.gestures) {
      if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
      l = !0, p.scaleStart = f(e);
    }

    p.$slideEl && p.$slideEl.length || (p.$slideEl = $(e.target).closest(".".concat(t.params.slideClass)), 0 === p.$slideEl.length && (p.$slideEl = t.slides.eq(t.activeIndex)), p.$imageEl = p.$slideEl.find(".".concat(a.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), p.$imageWrapEl = p.$imageEl.parent(".".concat(a.containerClass)), p.maxRatio = p.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== p.$imageWrapEl.length) ? (p.$imageEl && p.$imageEl.transition(0), c = !0) : p.$imageEl = void 0;
  }

  function v(e) {
    var s = t.support,
        a = t.params.zoom,
        i = t.zoom;

    if (!s.gestures) {
      if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
      o = !0, p.scaleMove = f(e);
    }

    p.$imageEl && 0 !== p.$imageEl.length ? (s.gestures ? i.scale = e.scale * d : i.scale = p.scaleMove / p.scaleStart * d, i.scale > p.maxRatio && (i.scale = p.maxRatio - 1 + Math.pow(i.scale - p.maxRatio + 1, .5)), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)), p.$imageEl.transform("translate3d(0,0,0) scale(".concat(i.scale, ")"))) : "gesturechange" === e.type && g(e);
  }

  function w(e) {
    var s = t.device,
        a = t.support,
        i = t.params.zoom,
        r = t.zoom;

    if (!a.gestures) {
      if (!l || !o) return;
      if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return;
      l = !1, o = !1;
    }

    p.$imageEl && 0 !== p.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, p.maxRatio), i.minRatio), p.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(".concat(r.scale, ")")), d = r.scale, c = !1, 1 === r.scale && (p.$slideEl = void 0));
  }

  function b(e) {
    var s = t.zoom;
    if (!p.$imageEl || 0 === p.$imageEl.length) return;
    if (t.allowClick = !1, !u.isTouched || !p.$slideEl) return;
    u.isMoved || (u.width = p.$imageEl[0].offsetWidth, u.height = p.$imageEl[0].offsetHeight, u.startX = getTranslate(p.$imageWrapEl[0], "x") || 0, u.startY = getTranslate(p.$imageWrapEl[0], "y") || 0, p.slideWidth = p.$slideEl[0].offsetWidth, p.slideHeight = p.$slideEl[0].offsetHeight, p.$imageWrapEl.transition(0));
    var a = u.width * s.scale,
        i = u.height * s.scale;

    if (!(a < p.slideWidth && i < p.slideHeight)) {
      if (u.minX = Math.min(p.slideWidth / 2 - a / 2, 0), u.maxX = -u.minX, u.minY = Math.min(p.slideHeight / 2 - i / 2, 0), u.maxY = -u.minY, u.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, u.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !u.isMoved && !c) {
        if (t.isHorizontal() && (Math.floor(u.minX) === Math.floor(u.startX) && u.touchesCurrent.x < u.touchesStart.x || Math.floor(u.maxX) === Math.floor(u.startX) && u.touchesCurrent.x > u.touchesStart.x)) return void (u.isTouched = !1);
        if (!t.isHorizontal() && (Math.floor(u.minY) === Math.floor(u.startY) && u.touchesCurrent.y < u.touchesStart.y || Math.floor(u.maxY) === Math.floor(u.startY) && u.touchesCurrent.y > u.touchesStart.y)) return void (u.isTouched = !1);
      }

      e.cancelable && e.preventDefault(), e.stopPropagation(), u.isMoved = !0, u.currentX = u.touchesCurrent.x - u.touchesStart.x + u.startX, u.currentY = u.touchesCurrent.y - u.touchesStart.y + u.startY, u.currentX < u.minX && (u.currentX = u.minX + 1 - Math.pow(u.minX - u.currentX + 1, .8)), u.currentX > u.maxX && (u.currentX = u.maxX - 1 + Math.pow(u.currentX - u.maxX + 1, .8)), u.currentY < u.minY && (u.currentY = u.minY + 1 - Math.pow(u.minY - u.currentY + 1, .8)), u.currentY > u.maxY && (u.currentY = u.maxY - 1 + Math.pow(u.currentY - u.maxY + 1, .8)), h.prevPositionX || (h.prevPositionX = u.touchesCurrent.x), h.prevPositionY || (h.prevPositionY = u.touchesCurrent.y), h.prevTime || (h.prevTime = Date.now()), h.x = (u.touchesCurrent.x - h.prevPositionX) / (Date.now() - h.prevTime) / 2, h.y = (u.touchesCurrent.y - h.prevPositionY) / (Date.now() - h.prevTime) / 2, Math.abs(u.touchesCurrent.x - h.prevPositionX) < 2 && (h.x = 0), Math.abs(u.touchesCurrent.y - h.prevPositionY) < 2 && (h.y = 0), h.prevPositionX = u.touchesCurrent.x, h.prevPositionY = u.touchesCurrent.y, h.prevTime = Date.now(), p.$imageWrapEl.transform("translate3d(".concat(u.currentX, "px, ").concat(u.currentY, "px,0)"));
    }
  }

  function x() {
    var e = t.zoom;
    p.$slideEl && t.previousIndex !== t.activeIndex && (p.$imageEl && p.$imageEl.transform("translate3d(0,0,0) scale(1)"), p.$imageWrapEl && p.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, d = 1, p.$slideEl = void 0, p.$imageEl = void 0, p.$imageWrapEl = void 0);
  }

  function y(e) {
    var s = t.zoom,
        a = t.params.zoom;
    if (p.$slideEl || (e && e.target && (p.$slideEl = $(e.target).closest(".".concat(t.params.slideClass))), p.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? p.$slideEl = t.$wrapperEl.children(".".concat(t.params.slideActiveClass)) : p.$slideEl = t.slides.eq(t.activeIndex)), p.$imageEl = p.$slideEl.find(".".concat(a.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), p.$imageWrapEl = p.$imageEl.parent(".".concat(a.containerClass))), !p.$imageEl || 0 === p.$imageEl.length || !p.$imageWrapEl || 0 === p.$imageWrapEl.length) return;
    var i, n, l, o, c, h, m, f, g, v, w, b, x, y, E, C, T, S;
    t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), p.$slideEl.addClass("".concat(a.zoomedSlideClass)), void 0 === u.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, n = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = u.touchesStart.x, n = u.touchesStart.y), s.scale = p.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, d = p.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? (T = p.$slideEl[0].offsetWidth, S = p.$slideEl[0].offsetHeight, l = p.$slideEl.offset().left + r.scrollX, o = p.$slideEl.offset().top + r.scrollY, c = l + T / 2 - i, h = o + S / 2 - n, g = p.$imageEl[0].offsetWidth, v = p.$imageEl[0].offsetHeight, w = g * s.scale, b = v * s.scale, x = Math.min(T / 2 - w / 2, 0), y = Math.min(S / 2 - b / 2, 0), E = -x, C = -y, m = c * s.scale, f = h * s.scale, m < x && (m = x), m > E && (m = E), f < y && (f = y), f > C && (f = C)) : (m = 0, f = 0), p.$imageWrapEl.transition(300).transform("translate3d(".concat(m, "px, ").concat(f, "px,0)")), p.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(s.scale, ")"));
  }

  function E() {
    var e = t.zoom,
        s = t.params.zoom;
    p.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? p.$slideEl = t.$wrapperEl.children(".".concat(t.params.slideActiveClass)) : p.$slideEl = t.slides.eq(t.activeIndex), p.$imageEl = p.$slideEl.find(".".concat(s.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), p.$imageWrapEl = p.$imageEl.parent(".".concat(s.containerClass))), p.$imageEl && 0 !== p.$imageEl.length && p.$imageWrapEl && 0 !== p.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, d = 1, p.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), p.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), p.$slideEl.removeClass("".concat(s.zoomedSlideClass)), p.$slideEl = void 0);
  }

  function C(e) {
    var s = t.zoom;
    s.scale && 1 !== s.scale ? E() : y(e);
  }

  function T() {
    var e = t.support;
    return {
      passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
        passive: !0,
        capture: !1
      },
      activeListenerWithCapture: !e.passiveListener || {
        passive: !1,
        capture: !0
      }
    };
  }

  function S() {
    return ".".concat(t.params.slideClass);
  }

  function M(e) {
    var _T = T(),
        s = _T.passiveListener,
        a = S();

    t.$wrapperEl[e]("gesturestart", a, g, s), t.$wrapperEl[e]("gesturechange", a, v, s), t.$wrapperEl[e]("gestureend", a, w, s);
  }

  function P() {
    n || (n = !0, M("on"));
  }

  function k() {
    n && (n = !1, M("off"));
  }

  function z() {
    var e = t.zoom;
    if (e.enabled) return;
    e.enabled = !0;

    var s = t.support,
        _T2 = T(),
        a = _T2.passiveListener,
        i = _T2.activeListenerWithCapture,
        r = S();

    s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, P, a), t.$wrapperEl.on(t.touchEvents.end, k, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, g, a), t.$wrapperEl.on(t.touchEvents.move, r, v, i), t.$wrapperEl.on(t.touchEvents.end, r, w, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, w, a)), t.$wrapperEl.on(t.touchEvents.move, ".".concat(t.params.zoom.containerClass), b, i);
  }

  function O() {
    var e = t.zoom;
    if (!e.enabled) return;
    var s = t.support;
    e.enabled = !1;

    var _T3 = T(),
        a = _T3.passiveListener,
        i = _T3.activeListenerWithCapture,
        r = S();

    s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, P, a), t.$wrapperEl.off(t.touchEvents.end, k, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, g, a), t.$wrapperEl.off(t.touchEvents.move, r, v, i), t.$wrapperEl.off(t.touchEvents.end, r, w, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, w, a)), t.$wrapperEl.off(t.touchEvents.move, ".".concat(t.params.zoom.containerClass), b, i);
  }

  Object.defineProperty(t.zoom, "scale", {
    get: function get() {
      return m;
    },
    set: function set(e) {
      if (m !== e) {
        var _t36 = p.$imageEl ? p.$imageEl[0] : void 0,
            _s22 = p.$slideEl ? p.$slideEl[0] : void 0;

        i("zoomChange", e, _t36, _s22);
      }

      m = e;
    }
  }), a("init", function () {
    t.params.zoom.enabled && z();
  }), a("destroy", function () {
    O();
  }), a("touchStart", function (e, s) {
    t.zoom.enabled && function (e) {
      var s = t.device;
      p.$imageEl && 0 !== p.$imageEl.length && (u.isTouched || (s.android && e.cancelable && e.preventDefault(), u.isTouched = !0, u.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, u.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    }(s);
  }), a("touchEnd", function (e, s) {
    t.zoom.enabled && function () {
      var e = t.zoom;
      if (!p.$imageEl || 0 === p.$imageEl.length) return;
      if (!u.isTouched || !u.isMoved) return u.isTouched = !1, void (u.isMoved = !1);
      u.isTouched = !1, u.isMoved = !1;
      var s = 300,
          a = 300;
      var i = h.x * s,
          r = u.currentX + i,
          n = h.y * a,
          l = u.currentY + n;
      0 !== h.x && (s = Math.abs((r - u.currentX) / h.x)), 0 !== h.y && (a = Math.abs((l - u.currentY) / h.y));
      var o = Math.max(s, a);
      u.currentX = r, u.currentY = l;
      var d = u.width * e.scale,
          c = u.height * e.scale;
      u.minX = Math.min(p.slideWidth / 2 - d / 2, 0), u.maxX = -u.minX, u.minY = Math.min(p.slideHeight / 2 - c / 2, 0), u.maxY = -u.minY, u.currentX = Math.max(Math.min(u.currentX, u.maxX), u.minX), u.currentY = Math.max(Math.min(u.currentY, u.maxY), u.minY), p.$imageWrapEl.transition(o).transform("translate3d(".concat(u.currentX, "px, ").concat(u.currentY, "px,0)"));
    }();
  }), a("doubleTap", function (e, s) {
    !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && C(s);
  }), a("transitionEnd", function () {
    t.zoom.enabled && t.params.zoom.enabled && x();
  }), a("slideChange", function () {
    t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && x();
  }), Object.assign(t.zoom, {
    enable: z,
    disable: O,
    "in": y,
    out: E,
    toggle: C
  });
}

function Lazy(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on,
      i = e.emit;
  s({
    lazy: {
      checkInView: !1,
      enabled: !1,
      loadPrevNext: !1,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: !1,
      scrollingElement: "",
      elementClass: "swiper-lazy",
      loadingClass: "swiper-lazy-loading",
      loadedClass: "swiper-lazy-loaded",
      preloaderClass: "swiper-lazy-preloader"
    }
  }), t.lazy = {};
  var r = !1,
      n = !1;

  function l(e, s) {
    void 0 === s && (s = !0);
    var a = t.params.lazy;
    if (void 0 === e) return;
    if (0 === t.slides.length) return;
    var r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(".".concat(t.params.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")) : t.slides.eq(e),
        n = r.find(".".concat(a.elementClass, ":not(.").concat(a.loadedClass, "):not(.").concat(a.loadingClass, ")"));
    !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]), 0 !== n.length && n.each(function (e) {
      var n = $(e);
      n.addClass(a.loadingClass);
      var o = n.attr("data-background"),
          d = n.attr("data-src"),
          c = n.attr("data-srcset"),
          p = n.attr("data-sizes"),
          u = n.parent("picture");
      t.loadImage(n[0], d || o, c, p, !1, function () {
        if (null != t && t && (!t || t.params) && !t.destroyed) {
          if (o ? (n.css("background-image", "url(\"".concat(o, "\")")), n.removeAttr("data-background")) : (c && (n.attr("srcset", c), n.removeAttr("data-srcset")), p && (n.attr("sizes", p), n.removeAttr("data-sizes")), u.length && u.children("source").each(function (e) {
            var t = $(e);
            t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
          }), d && (n.attr("src", d), n.removeAttr("data-src"))), n.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(".".concat(a.preloaderClass)).remove(), t.params.loop && s) {
            var _e58 = r.attr("data-swiper-slide-index");

            if (r.hasClass(t.params.slideDuplicateClass)) {
              l(t.$wrapperEl.children("[data-swiper-slide-index=\"".concat(_e58, "\"]:not(.").concat(t.params.slideDuplicateClass, ")")).index(), !1);
            } else {
              l(t.$wrapperEl.children(".".concat(t.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(_e58, "\"]")).index(), !1);
            }
          }

          i("lazyImageReady", r[0], n[0]), t.params.autoHeight && t.updateAutoHeight();
        }
      }), i("lazyImageLoad", r[0], n[0]);
    });
  }

  function o() {
    var e = t.$wrapperEl,
        s = t.params,
        a = t.slides,
        i = t.activeIndex,
        r = t.virtual && s.virtual.enabled,
        o = s.lazy;
    var d = s.slidesPerView;

    function c(t) {
      if (r) {
        if (e.children(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(t, "\"]")).length) return !0;
      } else if (a[t]) return !0;

      return !1;
    }

    function p(e) {
      return r ? $(e).attr("data-swiper-slide-index") : $(e).index();
    }

    if ("auto" === d && (d = 0), n || (n = !0), t.params.watchSlidesProgress) e.children(".".concat(s.slideVisibleClass)).each(function (e) {
      l(r ? $(e).attr("data-swiper-slide-index") : $(e).index());
    });else if (d > 1) for (var _e59 = i; _e59 < i + d; _e59 += 1) {
      c(_e59) && l(_e59);
    } else l(i);
    if (o.loadPrevNext) if (d > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
      var _e60 = o.loadPrevNextAmount,
          _t37 = Math.ceil(d),
          _s23 = Math.min(i + _t37 + Math.max(_e60, _t37), a.length),
          _r7 = Math.max(i - Math.max(_t37, _e60), 0);

      for (var _e61 = i + _t37; _e61 < _s23; _e61 += 1) {
        c(_e61) && l(_e61);
      }

      for (var _e62 = _r7; _e62 < i; _e62 += 1) {
        c(_e62) && l(_e62);
      }
    } else {
      var _t38 = e.children(".".concat(s.slideNextClass));

      _t38.length > 0 && l(p(_t38));

      var _a16 = e.children(".".concat(s.slidePrevClass));

      _a16.length > 0 && l(p(_a16));
    }
  }

  function d() {
    var e = getWindow();
    if (!t || t.destroyed) return;
    var s = t.params.lazy.scrollingElement ? $(t.params.lazy.scrollingElement) : $(e),
        a = s[0] === e,
        i = a ? e.innerWidth : s[0].offsetWidth,
        n = a ? e.innerHeight : s[0].offsetHeight,
        l = t.$el.offset(),
        c = t.rtlTranslate;
    var p = !1;
    c && (l.left -= t.$el[0].scrollLeft);
    var u = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]];

    for (var _e63 = 0; _e63 < u.length; _e63 += 1) {
      var _t39 = u[_e63];

      if (_t39[0] >= 0 && _t39[0] <= i && _t39[1] >= 0 && _t39[1] <= n) {
        if (0 === _t39[0] && 0 === _t39[1]) continue;
        p = !0;
      }
    }

    var h = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
      passive: !0,
      capture: !1
    };
    p ? (o(), s.off("scroll", d, h)) : r || (r = !0, s.on("scroll", d, h));
  }

  a("beforeInit", function () {
    t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1);
  }), a("init", function () {
    t.params.lazy.enabled && (t.params.lazy.checkInView ? d() : o());
  }), a("scroll", function () {
    t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && o();
  }), a("scrollbarDragMove resize _freeModeNoMomentumRelease", function () {
    t.params.lazy.enabled && (t.params.lazy.checkInView ? d() : o());
  }), a("transitionStart", function () {
    t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !n) && (t.params.lazy.checkInView ? d() : o());
  }), a("transitionEnd", function () {
    t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? d() : o());
  }), a("slideChange", function () {
    var _t$params = t.params,
        e = _t$params.lazy,
        s = _t$params.cssMode,
        a = _t$params.watchSlidesProgress,
        i = _t$params.touchReleaseOnEdges,
        r = _t$params.resistanceRatio;
    e.enabled && (s || a && (i || 0 === r)) && o();
  }), a("destroy", function () {
    t.$el && t.$el.find(".".concat(t.params.lazy.loadingClass)).removeClass(t.params.lazy.loadingClass);
  }), Object.assign(t.lazy, {
    load: o,
    loadInSlide: l
  });
}

function Controller(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on;

  function i(e, t) {
    var s = function () {
      var e, t, s;
      return function (a, i) {
        for (t = -1, e = a.length; e - t > 1;) {
          s = e + t >> 1, a[s] <= i ? t = s : e = s;
        }

        return e;
      };
    }();

    var a, i;
    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
      return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0;
    }, this;
  }

  function r() {
    t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline);
  }

  s({
    controller: {
      control: void 0,
      inverse: !1,
      by: "slide"
    }
  }), t.controller = {
    control: void 0
  }, a("beforeInit", function () {
    t.controller.control = t.params.controller.control;
  }), a("update", function () {
    r();
  }), a("resize", function () {
    r();
  }), a("observerUpdate", function () {
    r();
  }), a("setTranslate", function (e, s, a) {
    t.controller.control && t.controller.setTranslate(s, a);
  }), a("setTransition", function (e, s, a) {
    t.controller.control && t.controller.setTransition(s, a);
  }), Object.assign(t.controller, {
    setTranslate: function setTranslate(e, s) {
      var a = t.controller.control;
      var r, n;
      var l = t.constructor;

      function o(e) {
        var s = t.rtlTranslate ? -t.translate : t.translate;
        "slide" === t.params.controller.by && (!function (e) {
          t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid));
        }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      if (Array.isArray(a)) for (var _e64 = 0; _e64 < a.length; _e64 += 1) {
        a[_e64] !== s && a[_e64] instanceof l && o(a[_e64]);
      } else a instanceof l && s !== a && o(a);
    },
    setTransition: function setTransition(e, s) {
      var a = t.constructor,
          i = t.controller.control;
      var r;

      function n(s) {
        s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && nextTick(function () {
          s.updateAutoHeight();
        }), s.$wrapperEl.transitionEnd(function () {
          i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd());
        }));
      }

      if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) {
        i[r] !== s && i[r] instanceof a && n(i[r]);
      } else i instanceof a && s !== i && n(i);
    }
  });
}

function A11y(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on;
  s({
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null
    }
  }), t.a11y = {
    clicked: !1
  };
  var i = null;

  function r(e) {
    var t = i;
    0 !== t.length && (t.html(""), t.html(e));
  }

  function n(e) {
    e.attr("tabIndex", "0");
  }

  function l(e) {
    e.attr("tabIndex", "-1");
  }

  function o(e, t) {
    e.attr("role", t);
  }

  function d(e, t) {
    e.attr("aria-roledescription", t);
  }

  function c(e, t) {
    e.attr("aria-label", t);
  }

  function p(e) {
    e.attr("aria-disabled", !0);
  }

  function u(e) {
    e.attr("aria-disabled", !1);
  }

  function h(e) {
    if (13 !== e.keyCode && 32 !== e.keyCode) return;
    var s = t.params.a11y,
        a = $(e.target);
    t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.is(classesToSelector(t.params.pagination.bulletClass)) && a[0].click();
  }

  function m() {
    return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
  }

  function f() {
    return m() && t.params.pagination.clickable;
  }

  var g = function g(e, t, s) {
    n(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", h)), c(e, s), function (e, t) {
      e.attr("aria-controls", t);
    }(e, t);
  },
      v = function v() {
    t.a11y.clicked = !0;
  },
      w = function w() {
    t.a11y.clicked = !1;
  },
      b = function b(e) {
    if (t.a11y.clicked) return;
    var s = e.target.closest(".".concat(t.params.slideClass));
    if (!s || !t.slides.includes(s)) return;
    var a = t.slides.indexOf(s) === t.activeIndex,
        i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
    a || i || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0));
  },
      x = function x() {
    var e = t.params.a11y;
    e.itemRoleDescriptionMessage && d($(t.slides), e.itemRoleDescriptionMessage), e.slideRole && o($(t.slides), e.slideRole);
    var s = t.params.loop ? t.slides.filter(function (e) {
      return !e.classList.contains(t.params.slideDuplicateClass);
    }).length : t.slides.length;
    e.slideLabelMessage && t.slides.each(function (a, i) {
      var r = $(a),
          n = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
      c(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s));
    });
  },
      y = function y() {
    var e = t.params.a11y;
    t.$el.append(i);
    var s = t.$el;
    e.containerRoleDescriptionMessage && d(s, e.containerRoleDescriptionMessage), e.containerMessage && c(s, e.containerMessage);
    var a = t.$wrapperEl,
        r = e.id || a.attr("id") || "swiper-wrapper-".concat((n = 16, void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, function () {
      return Math.round(16 * Math.random()).toString(16);
    })));
    var n;
    var l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
    var o;
    var p, u;
    o = r, a.attr("id", o), function (e, t) {
      e.attr("aria-live", t);
    }(a, l), x(), t.navigation && t.navigation.$nextEl && (p = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl), p && p.length && g(p, r, e.nextSlideMessage), u && u.length && g(u, r, e.prevSlideMessage), f() && t.pagination.$el.on("keydown", classesToSelector(t.params.pagination.bulletClass), h), t.$el.on("focus", b, !0), t.$el.on("pointerdown", v, !0), t.$el.on("pointerup", w, !0);
  };

  a("beforeInit", function () {
    i = $("<span class=\"".concat(t.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"));
  }), a("afterInit", function () {
    t.params.a11y.enabled && y();
  }), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", function () {
    t.params.a11y.enabled && x();
  }), a("fromEdge toEdge afterInit lock unlock", function () {
    t.params.a11y.enabled && function () {
      if (t.params.loop || t.params.rewind || !t.navigation) return;
      var _t$navigation5 = t.navigation,
          e = _t$navigation5.$nextEl,
          s = _t$navigation5.$prevEl;
      s && s.length > 0 && (t.isBeginning ? (p(s), l(s)) : (u(s), n(s))), e && e.length > 0 && (t.isEnd ? (p(e), l(e)) : (u(e), n(e)));
    }();
  }), a("paginationUpdate", function () {
    t.params.a11y.enabled && function () {
      var e = t.params.a11y;
      m() && t.pagination.bullets.each(function (s) {
        var a = $(s);
        t.params.pagination.clickable && (n(a), t.params.pagination.renderBullet || (o(a, "button"), c(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(".".concat(t.params.pagination.bulletActiveClass)) ? a.attr("aria-current", "true") : a.removeAttr("aria-current");
      });
    }();
  }), a("destroy", function () {
    t.params.a11y.enabled && function () {
      var e, s;
      i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", h), s && s.off("keydown", h), f() && t.pagination.$el.off("keydown", classesToSelector(t.params.pagination.bulletClass), h), t.$el.off("focus", b, !0), t.$el.off("pointerdown", v, !0), t.$el.off("pointerup", w, !0);
    }();
  });
}

function History(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on;
  s({
    history: {
      enabled: !1,
      root: "",
      replaceState: !1,
      key: "slides",
      keepQuery: !1
    }
  });
  var i = !1,
      r = {};

  var n = function n(e) {
    return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  },
      l = function l(e) {
    var t = getWindow();
    var s;
    s = e ? new URL(e) : t.location;
    var a = s.pathname.slice(1).split("/").filter(function (e) {
      return "" !== e;
    }),
        i = a.length;
    return {
      key: a[i - 2],
      value: a[i - 1]
    };
  },
      o = function o(e, s) {
    var a = getWindow();
    if (!i || !t.params.history.enabled) return;
    var r;
    r = t.params.url ? new URL(t.params.url) : a.location;
    var l = t.slides.eq(s);
    var o = n(l.attr("data-history"));

    if (t.params.history.root.length > 0) {
      var _s24 = t.params.history.root;
      "/" === _s24[_s24.length - 1] && (_s24 = _s24.slice(0, _s24.length - 1)), o = "".concat(_s24, "/").concat(e, "/").concat(o);
    } else r.pathname.includes(e) || (o = "".concat(e, "/").concat(o));

    t.params.history.keepQuery && (o += r.search);
    var d = a.history.state;
    d && d.value === o || (t.params.history.replaceState ? a.history.replaceState({
      value: o
    }, null, o) : a.history.pushState({
      value: o
    }, null, o));
  },
      d = function d(e, s, a) {
    if (s) for (var _i13 = 0, _r8 = t.slides.length; _i13 < _r8; _i13 += 1) {
      var _r9 = t.slides.eq(_i13);

      if (n(_r9.attr("data-history")) === s && !_r9.hasClass(t.params.slideDuplicateClass)) {
        var _s25 = _r9.index();

        t.slideTo(_s25, e, a);
      }
    } else t.slideTo(0, e, a);
  },
      c = function c() {
    r = l(t.params.url), d(t.params.speed, r.value, !1);
  };

  a("init", function () {
    t.params.history.enabled && function () {
      var e = getWindow();

      if (t.params.history) {
        if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
        i = !0, r = l(t.params.url), (r.key || r.value) && (d(0, r.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", c));
      }
    }();
  }), a("destroy", function () {
    t.params.history.enabled && function () {
      var e = getWindow();
      t.params.history.replaceState || e.removeEventListener("popstate", c);
    }();
  }), a("transitionEnd _freeModeNoMomentumRelease", function () {
    i && o(t.params.history.key, t.activeIndex);
  }), a("slideChange", function () {
    i && t.params.cssMode && o(t.params.history.key, t.activeIndex);
  });
}

function HashNavigation(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.emit,
      i = e.on,
      r = !1;
  var n = getDocument(),
      l = getWindow();
  s({
    hashNavigation: {
      enabled: !1,
      replaceState: !1,
      watchState: !1
    }
  });

  var o = function o() {
    a("hashChange");
    var e = n.location.hash.replace("#", "");

    if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
      var _s26 = t.$wrapperEl.children(".".concat(t.params.slideClass, "[data-hash=\"").concat(e, "\"]")).index();

      if (void 0 === _s26) return;
      t.slideTo(_s26);
    }
  },
      d = function d() {
    if (r && t.params.hashNavigation.enabled) if (t.params.hashNavigation.replaceState && l.history && l.history.replaceState) l.history.replaceState(null, null, "#".concat(t.slides.eq(t.activeIndex).attr("data-hash")) || 0), a("hashSet");else {
      var _e65 = t.slides.eq(t.activeIndex),
          _s27 = _e65.attr("data-hash") || _e65.attr("data-history");

      n.location.hash = _s27 || "", a("hashSet");
    }
  };

  i("init", function () {
    t.params.hashNavigation.enabled && function () {
      if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
      r = !0;
      var e = n.location.hash.replace("#", "");

      if (e) {
        var _s28 = 0;

        for (var _a17 = 0, _i14 = t.slides.length; _a17 < _i14; _a17 += 1) {
          var _i15 = t.slides.eq(_a17);

          if ((_i15.attr("data-hash") || _i15.attr("data-history")) === e && !_i15.hasClass(t.params.slideDuplicateClass)) {
            var _e66 = _i15.index();

            t.slideTo(_e66, _s28, t.params.runCallbacksOnInit, !0);
          }
        }
      }

      t.params.hashNavigation.watchState && $(l).on("hashchange", o);
    }();
  }), i("destroy", function () {
    t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && $(l).off("hashchange", o);
  }), i("transitionEnd _freeModeNoMomentumRelease", function () {
    r && d();
  }), i("slideChange", function () {
    r && t.params.cssMode && d();
  });
}

function Autoplay(e) {
  var t,
      s = e.swiper,
      a = e.extendParams,
      i = e.on,
      r = e.emit;

  function n() {
    if (!s.size) return s.autoplay.running = !1, void (s.autoplay.paused = !1);
    var e = s.slides.eq(s.activeIndex);
    var a = s.params.autoplay.delay;
    e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = nextTick(function () {
      var e;
      s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), r("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? o() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), r("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), r("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), r("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? o() : (e = s.slideTo(0, s.params.speed, !0, !0), r("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), r("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && n();
    }, a);
  }

  function l() {
    return void 0 === t && !s.autoplay.running && (s.autoplay.running = !0, r("autoplayStart"), n(), !0);
  }

  function o() {
    return !!s.autoplay.running && void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, r("autoplayStop"), !0);
  }

  function d(e) {
    s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
      s.$wrapperEl[0].addEventListener(e, p);
    }) : (s.autoplay.paused = !1, n())));
  }

  function c() {
    var e = getDocument();
    "hidden" === e.visibilityState && s.autoplay.running && d(), "visible" === e.visibilityState && s.autoplay.paused && (n(), s.autoplay.paused = !1);
  }

  function p(e) {
    s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
      s.$wrapperEl[0].removeEventListener(e, p);
    }), s.autoplay.paused = !1, s.autoplay.running ? n() : o());
  }

  function u() {
    s.params.autoplay.disableOnInteraction ? o() : (r("autoplayPause"), d()), ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
      s.$wrapperEl[0].removeEventListener(e, p);
    });
  }

  function h() {
    s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, r("autoplayResume"), n());
  }

  s.autoplay = {
    running: !1,
    paused: !1
  }, a({
    autoplay: {
      enabled: !1,
      delay: 3e3,
      waitForTransition: !0,
      disableOnInteraction: !0,
      stopOnLastSlide: !1,
      reverseDirection: !1,
      pauseOnMouseEnter: !1
    }
  }), i("init", function () {
    if (s.params.autoplay.enabled) {
      l();
      getDocument().addEventListener("visibilitychange", c), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", u), s.$el.on("mouseleave", h));
    }
  }), i("beforeTransitionStart", function (e, t, a) {
    s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : o());
  }), i("sliderFirstMove", function () {
    s.autoplay.running && (s.params.autoplay.disableOnInteraction ? o() : d());
  }), i("touchEnd", function () {
    s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && n();
  }), i("destroy", function () {
    s.$el.off("mouseenter", u), s.$el.off("mouseleave", h), s.autoplay.running && o();
    getDocument().removeEventListener("visibilitychange", c);
  }), Object.assign(s.autoplay, {
    pause: d,
    run: n,
    start: l,
    stop: o
  });
}

function Thumb(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on;
  s({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  var i = !1,
      r = !1;

  function n() {
    var e = t.thumbs.swiper;
    if (!e || e.destroyed) return;
    var s = e.clickedIndex,
        a = e.clickedSlide;
    if (a && $(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
    if (null == s) return;
    var i;

    if (i = e.params.loop ? parseInt($(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
      var _e67 = t.activeIndex;
      t.slides.eq(_e67).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, _e67 = t.activeIndex);

      var _s29 = t.slides.eq(_e67).prevAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index(),
          _a18 = t.slides.eq(_e67).nextAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index();

      i = void 0 === _s29 ? _a18 : void 0 === _a18 ? _s29 : _a18 - _e67 < _e67 - _s29 ? _a18 : _s29;
    }

    t.slideTo(i);
  }

  function l() {
    var e = t.params.thumbs;
    if (i) return !1;
    i = !0;
    var s = t.constructor;
    if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
      watchSlidesProgress: !0,
      slideToClickedSlide: !1
    }), Object.assign(t.thumbs.swiper.params, {
      watchSlidesProgress: !0,
      slideToClickedSlide: !1
    });else if (isObject(e.swiper)) {
      var _a19 = Object.assign({}, e.swiper);

      Object.assign(_a19, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), t.thumbs.swiper = new s(_a19), r = !0;
    }
    return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0;
  }

  function o(e) {
    var s = t.thumbs.swiper;
    if (!s || s.destroyed) return;
    var a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
    var i = 1;
    var r = t.params.thumbs.slideThumbActiveClass;
    if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.removeClass(r), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (var _e68 = 0; _e68 < i; _e68 += 1) {
      s.$wrapperEl.children("[data-swiper-slide-index=\"".concat(t.realIndex + _e68, "\"]")).addClass(r);
    } else for (var _e69 = 0; _e69 < i; _e69 += 1) {
      s.slides.eq(t.realIndex + _e69).addClass(r);
    }
    var n = t.params.thumbs.autoScrollOffset,
        l = n && !s.params.loop;

    if (t.realIndex !== s.realIndex || l) {
      var _i16,
          _r10,
          _o6 = s.activeIndex;

      if (s.params.loop) {
        s.slides.eq(_o6).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, _o6 = s.activeIndex);

        var _e70 = s.slides.eq(_o6).prevAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index(),
            _a20 = s.slides.eq(_o6).nextAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index();

        _i16 = void 0 === _e70 ? _a20 : void 0 === _a20 ? _e70 : _a20 - _o6 == _o6 - _e70 ? s.params.slidesPerGroup > 1 ? _a20 : _o6 : _a20 - _o6 < _o6 - _e70 ? _a20 : _e70, _r10 = t.activeIndex > t.previousIndex ? "next" : "prev";
      } else _i16 = t.realIndex, _r10 = _i16 > t.previousIndex ? "next" : "prev";

      l && (_i16 += "next" === _r10 ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(_i16) < 0 && (s.params.centeredSlides ? _i16 = _i16 > _o6 ? _i16 - Math.floor(a / 2) + 1 : _i16 + Math.floor(a / 2) - 1 : _i16 > _o6 && s.params.slidesPerGroup, s.slideTo(_i16, e ? 0 : void 0));
    }
  }

  t.thumbs = {
    swiper: null
  }, a("beforeInit", function () {
    var e = t.params.thumbs;
    e && e.swiper && (l(), o(!0));
  }), a("slideChange update resize observerUpdate", function () {
    o();
  }), a("setTransition", function (e, s) {
    var a = t.thumbs.swiper;
    a && !a.destroyed && a.setTransition(s);
  }), a("beforeDestroy", function () {
    var e = t.thumbs.swiper;
    e && !e.destroyed && r && e.destroy();
  }), Object.assign(t.thumbs, {
    init: l,
    update: o
  });
}

function freeMode(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.emit,
      i = e.once;
  s({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: .02
    }
  }), Object.assign(t, {
    freeMode: {
      onTouchStart: function onTouchStart() {
        var e = t.getTranslate();
        t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
          currentPos: t.rtl ? t.translate : -t.translate
        });
      },
      onTouchMove: function onTouchMove() {
        var e = t.touchEventsData,
            s = t.touches;
        0 === e.velocities.length && e.velocities.push({
          position: s[t.isHorizontal() ? "startX" : "startY"],
          time: e.touchStartTime
        }), e.velocities.push({
          position: s[t.isHorizontal() ? "currentX" : "currentY"],
          time: now()
        });
      },
      onTouchEnd: function onTouchEnd(e) {
        var s = e.currentPos;
        var r = t.params,
            n = t.$wrapperEl,
            l = t.rtlTranslate,
            o = t.snapGrid,
            d = t.touchEventsData,
            c = now() - d.touchStartTime;
        if (s < -t.minTranslate()) t.slideTo(t.activeIndex);else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);else {
          if (r.freeMode.momentum) {
            if (d.velocities.length > 1) {
              var _e72 = d.velocities.pop(),
                  _s31 = d.velocities.pop(),
                  _a21 = _e72.position - _s31.position,
                  _i17 = _e72.time - _s31.time;

              t.velocity = _a21 / _i17, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (_i17 > 150 || now() - _e72.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;

            t.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;

            var _e71 = 1e3 * r.freeMode.momentumRatio;

            var _s30 = t.velocity * _e71;

            var _c2 = t.translate + _s30;

            l && (_c2 = -_c2);
            var p,
                u = !1;
            var h = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
            var m;
            if (_c2 < t.maxTranslate()) r.freeMode.momentumBounce ? (_c2 + t.maxTranslate() < -h && (_c2 = t.maxTranslate() - h), p = t.maxTranslate(), u = !0, d.allowMomentumBounce = !0) : _c2 = t.maxTranslate(), r.loop && r.centeredSlides && (m = !0);else if (_c2 > t.minTranslate()) r.freeMode.momentumBounce ? (_c2 - t.minTranslate() > h && (_c2 = t.minTranslate() + h), p = t.minTranslate(), u = !0, d.allowMomentumBounce = !0) : _c2 = t.minTranslate(), r.loop && r.centeredSlides && (m = !0);else if (r.freeMode.sticky) {
              var _e73;

              for (var _t40 = 0; _t40 < o.length; _t40 += 1) {
                if (o[_t40] > -_c2) {
                  _e73 = _t40;
                  break;
                }
              }

              _c2 = Math.abs(o[_e73] - _c2) < Math.abs(o[_e73 - 1] - _c2) || "next" === t.swipeDirection ? o[_e73] : o[_e73 - 1], _c2 = -_c2;
            }

            if (m && i("transitionEnd", function () {
              t.loopFix();
            }), 0 !== t.velocity) {
              if (_e71 = l ? Math.abs((-_c2 - t.translate) / t.velocity) : Math.abs((_c2 - t.translate) / t.velocity), r.freeMode.sticky) {
                var _s32 = Math.abs((l ? -_c2 : _c2) - t.translate),
                    _a22 = t.slidesSizesGrid[t.activeIndex];

                _e71 = _s32 < _a22 ? r.speed : _s32 < 2 * _a22 ? 1.5 * r.speed : 2.5 * r.speed;
              }
            } else if (r.freeMode.sticky) return void t.slideToClosest();

            r.freeMode.momentumBounce && u ? (t.updateProgress(p), t.setTransition(_e71), t.setTranslate(_c2), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
              t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout(function () {
                t.setTranslate(p), n.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                });
              }, 0));
            })) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(_c2), t.setTransition(_e71), t.setTranslate(_c2), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            }))) : t.updateProgress(_c2), t.updateActiveIndex(), t.updateSlidesClasses();
          } else {
            if (r.freeMode.sticky) return void t.slideToClosest();
            r.freeMode && a("_freeModeNoMomentumRelease");
          }

          (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
        }
      }
    }
  });
}

function Grid(e) {
  var t,
      s,
      a,
      i = e.swiper,
      r = e.extendParams;
  r({
    grid: {
      rows: 1,
      fill: "column"
    }
  });
  i.grid = {
    initSlides: function initSlides(e) {
      var r = i.params.slidesPerView,
          _i$params$grid = i.params.grid,
          n = _i$params$grid.rows,
          l = _i$params$grid.fill;
      s = t / n, a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n));
    },
    updateSlide: function updateSlide(e, r, n, l) {
      var _i$params = i.params,
          o = _i$params.slidesPerGroup,
          d = _i$params.spaceBetween,
          _i$params$grid2 = i.params.grid,
          c = _i$params$grid2.rows,
          p = _i$params$grid2.fill;
      var u, h, m;

      if ("row" === p && o > 1) {
        var _s33 = Math.floor(e / (o * c)),
            _a23 = e - c * o * _s33,
            _i18 = 0 === _s33 ? o : Math.min(Math.ceil((n - _s33 * c * o) / c), o);

        m = Math.floor(_a23 / _i18), h = _a23 - m * _i18 + _s33 * o, u = h + m * t / c, r.css({
          "-webkit-order": u,
          order: u
        });
      } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a || h === a && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s), h = e - m * s);

      r.css(l("margin-top"), 0 !== m ? d && "".concat(d, "px") : "");
    },
    updateWrapperSize: function updateWrapperSize(e, s, a) {
      var _i$params2 = i.params,
          r = _i$params2.spaceBetween,
          n = _i$params2.centeredSlides,
          l = _i$params2.roundLengths,
          o = i.params.grid.rows;

      if (i.virtualSize = (e + r) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - r, i.$wrapperEl.css(_defineProperty({}, a("width"), "".concat(i.virtualSize + r, "px"))), n) {
        s.splice(0, s.length);
        var _e74 = [];

        for (var _t41 = 0; _t41 < s.length; _t41 += 1) {
          var _a24 = s[_t41];
          l && (_a24 = Math.floor(_a24)), s[_t41] < i.virtualSize + s[0] && _e74.push(_a24);
        }

        s.push.apply(s, _e74);
      }
    }
  };
}

function appendSlide(e) {
  var t = this,
      s = t.$wrapperEl,
      a = t.params;
  if (a.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var _t42 = 0; _t42 < e.length; _t42 += 1) {
    e[_t42] && s.append(e[_t42]);
  } else s.append(e);
  a.loop && t.loopCreate(), a.observer || t.update();
}

function prependSlide(e) {
  var t = this,
      s = t.params,
      a = t.$wrapperEl,
      i = t.activeIndex;
  s.loop && t.loopDestroy();
  var r = i + 1;

  if ("object" == _typeof(e) && "length" in e) {
    for (var _t43 = 0; _t43 < e.length; _t43 += 1) {
      e[_t43] && a.prepend(e[_t43]);
    }

    r = i + e.length;
  } else a.prepend(e);

  s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
}

function addSlide(e, t) {
  var s = this,
      a = s.$wrapperEl,
      i = s.params,
      r = s.activeIndex;
  var n = r;
  i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(".".concat(i.slideClass)));
  var l = s.slides.length;
  if (e <= 0) return void s.prependSlide(t);
  if (e >= l) return void s.appendSlide(t);
  var o = n > e ? n + 1 : n;
  var d = [];

  for (var _t44 = l - 1; _t44 >= e; _t44 -= 1) {
    var _e75 = s.slides.eq(_t44);

    _e75.remove(), d.unshift(_e75);
  }

  if ("object" == _typeof(t) && "length" in t) {
    for (var _e76 = 0; _e76 < t.length; _e76 += 1) {
      t[_e76] && a.append(t[_e76]);
    }

    o = n > e ? n + t.length : n;
  } else a.append(t);

  for (var _e77 = 0; _e77 < d.length; _e77 += 1) {
    a.append(d[_e77]);
  }

  i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
}

function removeSlide(e) {
  var t = this,
      s = t.params,
      a = t.$wrapperEl,
      i = t.activeIndex;
  var r = i;
  s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(".".concat(s.slideClass)));
  var n,
      l = r;

  if ("object" == _typeof(e) && "length" in e) {
    for (var _s34 = 0; _s34 < e.length; _s34 += 1) {
      n = e[_s34], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
    }

    l = Math.max(l, 0);
  } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);

  s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
}

function removeAllSlides() {
  var e = this,
      t = [];

  for (var s = 0; s < e.slides.length; s += 1) {
    t.push(s);
  }

  e.removeSlide(t);
}

function Manipulation(e) {
  var t = e.swiper;
  Object.assign(t, {
    appendSlide: appendSlide.bind(t),
    prependSlide: prependSlide.bind(t),
    addSlide: addSlide.bind(t),
    removeSlide: removeSlide.bind(t),
    removeAllSlides: removeAllSlides.bind(t)
  });
}

function effectInit(e) {
  var t = e.effect,
      s = e.swiper,
      a = e.on,
      i = e.setTranslate,
      r = e.setTransition,
      n = e.overwriteParams,
      l = e.perspective,
      o = e.recreateShadows,
      d = e.getEffectParams;
  var c;
  a("beforeInit", function () {
    if (s.params.effect !== t) return;
    s.classNames.push("".concat(s.params.containerModifierClass).concat(t)), l && l() && s.classNames.push("".concat(s.params.containerModifierClass, "3d"));
    var e = n ? n() : {};
    Object.assign(s.params, e), Object.assign(s.originalParams, e);
  }), a("setTranslate", function () {
    s.params.effect === t && i();
  }), a("setTransition", function (e, a) {
    s.params.effect === t && r(a);
  }), a("transitionEnd", function () {
    if (s.params.effect === t && o) {
      if (!d || !d().slideShadows) return;
      s.slides.each(function (e) {
        s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
      }), o();
    }
  }), a("virtualUpdate", function () {
    s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame(function () {
      c && s.slides && s.slides.length && (i(), c = !1);
    }));
  });
}

function effectTarget(e, t) {
  return e.transformEl ? t.find(e.transformEl).css({
    "backface-visibility": "hidden",
    "-webkit-backface-visibility": "hidden"
  }) : t;
}

function effectVirtualTransitionEnd(e) {
  var t = e.swiper,
      s = e.duration,
      a = e.transformEl,
      i = e.allSlides;
  var r = t.slides,
      n = t.activeIndex,
      l = t.$wrapperEl;

  if (t.params.virtualTranslate && 0 !== s) {
    var _e78,
        _s35 = !1;

    _e78 = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), _e78.transitionEnd(function () {
      if (_s35) return;
      if (!t || t.destroyed) return;
      _s35 = !0, t.animating = !1;
      var e = ["webkitTransitionEnd", "transitionend"];

      for (var _t45 = 0; _t45 < e.length; _t45 += 1) {
        l.trigger(e[_t45]);
      }
    });
  }
}

function EffectFade(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on;
  s({
    fadeEffect: {
      crossFade: !1,
      transformEl: null
    }
  });
  effectInit({
    effect: "fade",
    swiper: t,
    on: a,
    setTranslate: function setTranslate() {
      var e = t.slides,
          s = t.params.fadeEffect;

      for (var _a25 = 0; _a25 < e.length; _a25 += 1) {
        var _e79 = t.slides.eq(_a25);

        var i = -_e79[0].swiperSlideOffset;
        t.params.virtualTranslate || (i -= t.translate);
        var r = 0;
        t.isHorizontal() || (r = i, i = 0);
        var n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(_e79[0].progress), 0) : 1 + Math.min(Math.max(_e79[0].progress, -1), 0);
        effectTarget(s, _e79).css({
          opacity: n
        }).transform("translate3d(".concat(i, "px, ").concat(r, "px, 0px)"));
      }
    },
    setTransition: function setTransition(e) {
      var s = t.params.fadeEffect.transformEl;
      (s ? t.slides.find(s) : t.slides).transition(e), effectVirtualTransitionEnd({
        swiper: t,
        duration: e,
        transformEl: s,
        allSlides: !0
      });
    },
    overwriteParams: function overwriteParams() {
      return {
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !t.params.cssMode
      };
    }
  });
}

function EffectCube(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on;
  s({
    cubeEffect: {
      slideShadows: !0,
      shadow: !0,
      shadowOffset: 20,
      shadowScale: .94
    }
  });

  var i = function i(e, t, s) {
    var a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
        i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
    0 === a.length && (a = $("<div class=\"swiper-slide-shadow-".concat(s ? "left" : "top", "\"></div>")), e.append(a)), 0 === i.length && (i = $("<div class=\"swiper-slide-shadow-".concat(s ? "right" : "bottom", "\"></div>")), e.append(i)), a.length && (a[0].style.opacity = Math.max(-t, 0)), i.length && (i[0].style.opacity = Math.max(t, 0));
  };

  effectInit({
    effect: "cube",
    swiper: t,
    on: a,
    setTranslate: function setTranslate() {
      var e = t.$el,
          s = t.$wrapperEl,
          a = t.slides,
          r = t.width,
          n = t.height,
          l = t.rtlTranslate,
          o = t.size,
          d = t.browser,
          c = t.params.cubeEffect,
          p = t.isHorizontal(),
          u = t.virtual && t.params.virtual.enabled;
      var h,
          m = 0;
      c.shadow && (p ? (h = s.find(".swiper-cube-shadow"), 0 === h.length && (h = $('<div class="swiper-cube-shadow"></div>'), s.append(h)), h.css({
        height: "".concat(r, "px")
      })) : (h = e.find(".swiper-cube-shadow"), 0 === h.length && (h = $('<div class="swiper-cube-shadow"></div>'), e.append(h))));

      for (var _e80 = 0; _e80 < a.length; _e80 += 1) {
        var _t46 = a.eq(_e80);

        var _s36 = _e80;
        u && (_s36 = parseInt(_t46.attr("data-swiper-slide-index"), 10));

        var _r11 = 90 * _s36,
            _n4 = Math.floor(_r11 / 360);

        l && (_r11 = -_r11, _n4 = Math.floor(-_r11 / 360));

        var _d2 = Math.max(Math.min(_t46[0].progress, 1), -1);

        var _h = 0,
            _f = 0,
            g = 0;
        _s36 % 4 == 0 ? (_h = 4 * -_n4 * o, g = 0) : (_s36 - 1) % 4 == 0 ? (_h = 0, g = 4 * -_n4 * o) : (_s36 - 2) % 4 == 0 ? (_h = o + 4 * _n4 * o, g = o) : (_s36 - 3) % 4 == 0 && (_h = -o, g = 3 * o + 4 * o * _n4), l && (_h = -_h), p || (_f = _h, _h = 0);
        var v = "rotateX(".concat(p ? 0 : -_r11, "deg) rotateY(").concat(p ? _r11 : 0, "deg) translate3d(").concat(_h, "px, ").concat(_f, "px, ").concat(g, "px)");
        _d2 <= 1 && _d2 > -1 && (m = 90 * _s36 + 90 * _d2, l && (m = 90 * -_s36 - 90 * _d2)), _t46.transform(v), c.slideShadows && i(_t46, _d2, p);
      }

      if (s.css({
        "-webkit-transform-origin": "50% 50% -".concat(o / 2, "px"),
        "transform-origin": "50% 50% -".concat(o / 2, "px")
      }), c.shadow) if (p) h.transform("translate3d(0px, ".concat(r / 2 + c.shadowOffset, "px, ").concat(-r / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(c.shadowScale, ")"));else {
        var _e81 = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
            _t47 = 1.5 - (Math.sin(2 * _e81 * Math.PI / 360) / 2 + Math.cos(2 * _e81 * Math.PI / 360) / 2),
            _s37 = c.shadowScale,
            _a26 = c.shadowScale / _t47,
            _i19 = c.shadowOffset;

        h.transform("scale3d(".concat(_s37, ", 1, ").concat(_a26, ") translate3d(0px, ").concat(n / 2 + _i19, "px, ").concat(-n / 2 / _a26, "px) rotateX(-90deg)"));
      }
      var f = d.isSafari || d.isWebView ? -o / 2 : 0;
      s.transform("translate3d(0px,0,".concat(f, "px) rotateX(").concat(t.isHorizontal() ? 0 : m, "deg) rotateY(").concat(t.isHorizontal() ? -m : 0, "deg)")), s[0].style.setProperty("--swiper-cube-translate-z", "".concat(f, "px"));
    },
    setTransition: function setTransition(e) {
      var s = t.$el,
          a = t.slides;
      a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e);
    },
    recreateShadows: function recreateShadows() {
      var e = t.isHorizontal();
      t.slides.each(function (t) {
        var s = Math.max(Math.min(t.progress, 1), -1);
        i($(t), s, e);
      });
    },
    getEffectParams: function getEffectParams() {
      return t.params.cubeEffect;
    },
    perspective: function perspective() {
      return !0;
    },
    overwriteParams: function overwriteParams() {
      return {
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: !1,
        virtualTranslate: !0
      };
    }
  });
}

function createShadow(e, t, s) {
  var a = "swiper-slide-shadow" + (s ? "-".concat(s) : ""),
      i = e.transformEl ? t.find(e.transformEl) : t;
  var r = i.children(".".concat(a));
  return r.length || (r = $("<div class=\"swiper-slide-shadow".concat(s ? "-".concat(s) : "", "\"></div>")), i.append(r)), r;
}

function EffectFlip(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on;
  s({
    flipEffect: {
      slideShadows: !0,
      limitRotation: !0,
      transformEl: null
    }
  });

  var i = function i(e, s, a) {
    var i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
        r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
    0 === i.length && (i = createShadow(a, e, t.isHorizontal() ? "left" : "top")), 0 === r.length && (r = createShadow(a, e, t.isHorizontal() ? "right" : "bottom")), i.length && (i[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0));
  };

  effectInit({
    effect: "flip",
    swiper: t,
    on: a,
    setTranslate: function setTranslate() {
      var e = t.slides,
          s = t.rtlTranslate,
          a = t.params.flipEffect;

      for (var r = 0; r < e.length; r += 1) {
        var n = e.eq(r);
        var l = n[0].progress;
        t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
        var o = n[0].swiperSlideOffset;
        var d = -180 * l,
            c = 0,
            p = t.params.cssMode ? -o - t.translate : -o,
            u = 0;
        t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length, a.slideShadows && i(n, l, a);
        var h = "translate3d(".concat(p, "px, ").concat(u, "px, 0px) rotateX(").concat(c, "deg) rotateY(").concat(d, "deg)");
        effectTarget(a, n).transform(h);
      }
    },
    setTransition: function setTransition(e) {
      var s = t.params.flipEffect.transformEl;
      (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), effectVirtualTransitionEnd({
        swiper: t,
        duration: e,
        transformEl: s
      });
    },
    recreateShadows: function recreateShadows() {
      var e = t.params.flipEffect;
      t.slides.each(function (s) {
        var a = $(s);
        var r = a[0].progress;
        t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i(a, r, e);
      });
    },
    getEffectParams: function getEffectParams() {
      return t.params.flipEffect;
    },
    perspective: function perspective() {
      return !0;
    },
    overwriteParams: function overwriteParams() {
      return {
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !t.params.cssMode
      };
    }
  });
}

function EffectCoverflow(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on;
  s({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0,
      transformEl: null
    }
  });
  effectInit({
    effect: "coverflow",
    swiper: t,
    on: a,
    setTranslate: function setTranslate() {
      var e = t.width,
          s = t.height,
          a = t.slides,
          i = t.slidesSizesGrid,
          r = t.params.coverflowEffect,
          n = t.isHorizontal(),
          l = t.translate,
          o = n ? e / 2 - l : s / 2 - l,
          d = n ? r.rotate : -r.rotate,
          c = r.depth;

      for (var _e82 = 0, _t48 = a.length; _e82 < _t48; _e82 += 1) {
        var _t49 = a.eq(_e82),
            _s38 = i[_e82],
            _l5 = (o - _t49[0].swiperSlideOffset - _s38 / 2) / _s38,
            p = "function" == typeof r.modifier ? r.modifier(_l5) : _l5 * r.modifier;

        var u = n ? d * p : 0,
            h = n ? 0 : d * p,
            m = -c * Math.abs(p),
            f = r.stretch;
        "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * _s38);
        var g = n ? 0 : f * p,
            v = n ? f * p : 0,
            w = 1 - (1 - r.scale) * Math.abs(p);
        Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(h) < .001 && (h = 0), Math.abs(w) < .001 && (w = 0);
        var b = "translate3d(".concat(v, "px,").concat(g, "px,").concat(m, "px)  rotateX(").concat(h, "deg) rotateY(").concat(u, "deg) scale(").concat(w, ")");

        if (effectTarget(r, _t49).transform(b), _t49[0].style.zIndex = 1 - Math.abs(Math.round(p)), r.slideShadows) {
          var _e83 = n ? _t49.find(".swiper-slide-shadow-left") : _t49.find(".swiper-slide-shadow-top"),
              _s39 = n ? _t49.find(".swiper-slide-shadow-right") : _t49.find(".swiper-slide-shadow-bottom");

          0 === _e83.length && (_e83 = createShadow(r, _t49, n ? "left" : "top")), 0 === _s39.length && (_s39 = createShadow(r, _t49, n ? "right" : "bottom")), _e83.length && (_e83[0].style.opacity = p > 0 ? p : 0), _s39.length && (_s39[0].style.opacity = -p > 0 ? -p : 0);
        }
      }
    },
    setTransition: function setTransition(e) {
      var s = t.params.coverflowEffect.transformEl;
      (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    },
    perspective: function perspective() {
      return !0;
    },
    overwriteParams: function overwriteParams() {
      return {
        watchSlidesProgress: !0
      };
    }
  });
}

function EffectCreative(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on;
  s({
    creativeEffect: {
      transformEl: null,
      limitProgress: 1,
      shadowPerProgress: !1,
      progressMultiplier: 1,
      perspective: !0,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });

  var i = function i(e) {
    return "string" == typeof e ? e : "".concat(e, "px");
  };

  effectInit({
    effect: "creative",
    swiper: t,
    on: a,
    setTranslate: function setTranslate() {
      var e = t.slides,
          s = t.$wrapperEl,
          a = t.slidesSizesGrid,
          r = t.params.creativeEffect,
          n = r.progressMultiplier,
          l = t.params.centeredSlides;

      if (l) {
        var _e84 = a[0] / 2 - t.params.slidesOffsetBefore || 0;

        s.transform("translateX(calc(50% - ".concat(_e84, "px))"));
      }

      var _loop = function _loop(_s40) {
        var a = e.eq(_s40),
            o = a[0].progress,
            d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
        var c = d;
        l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
        var p = a[0].swiperSlideOffset,
            u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
            h = [0, 0, 0];
        var m = !1;
        t.isHorizontal() || (u[1] = u[0], u[0] = 0);
        var f = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach(function (e, t) {
          u[t] = "calc(".concat(e, "px + (").concat(i(f.translate[t]), " * ").concat(Math.abs(d * n), "))");
        }), h.forEach(function (e, t) {
          h[t] = f.rotate[t] * Math.abs(d * n);
        }), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
        var g = u.join(", "),
            v = "rotateX(".concat(h[0], "deg) rotateY(").concat(h[1], "deg) rotateZ(").concat(h[2], "deg)"),
            w = c < 0 ? "scale(".concat(1 + (1 - f.scale) * c * n, ")") : "scale(".concat(1 - (1 - f.scale) * c * n, ")"),
            b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
            x = "translate3d(".concat(g, ") ").concat(v, " ").concat(w);

        if (m && f.shadow || !m) {
          var _e85 = a.children(".swiper-slide-shadow");

          if (0 === _e85.length && f.shadow && (_e85 = createShadow(r, a)), _e85.length) {
            var _t50 = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;

            _e85[0].style.opacity = Math.min(Math.max(Math.abs(_t50), 0), 1);
          }
        }

        var y = effectTarget(r, a);
        y.transform(x).css({
          opacity: b
        }), f.origin && y.css("transform-origin", f.origin);
      };

      for (var _s40 = 0; _s40 < e.length; _s40 += 1) {
        _loop(_s40);
      }
    },
    setTransition: function setTransition(e) {
      var s = t.params.creativeEffect.transformEl;
      (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), effectVirtualTransitionEnd({
        swiper: t,
        duration: e,
        transformEl: s,
        allSlides: !0
      });
    },
    perspective: function perspective() {
      return t.params.creativeEffect.perspective;
    },
    overwriteParams: function overwriteParams() {
      return {
        watchSlidesProgress: !0,
        virtualTranslate: !t.params.cssMode
      };
    }
  });
}

function EffectCards(e) {
  var t = e.swiper,
      s = e.extendParams,
      a = e.on;
  s({
    cardsEffect: {
      slideShadows: !0,
      transformEl: null,
      rotate: !0,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  effectInit({
    effect: "cards",
    swiper: t,
    on: a,
    setTranslate: function setTranslate() {
      var e = t.slides,
          s = t.activeIndex,
          a = t.params.cardsEffect,
          _t$touchEventsData = t.touchEventsData,
          i = _t$touchEventsData.startTranslate,
          r = _t$touchEventsData.isTouched,
          n = t.translate;

      for (var l = 0; l < e.length; l += 1) {
        var o = e.eq(l),
            d = o[0].progress,
            c = Math.min(Math.max(d, -4), 4);
        var p = o[0].swiperSlideOffset;
        t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform("translateX(".concat(t.minTranslate(), "px)")), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
        var u = t.params.cssMode ? -p - t.translate : -p,
            h = 0;
        var m = -100 * Math.abs(c);
        var f = 1,
            g = -a.perSlideRotate * c,
            v = a.perSlideOffset - .75 * Math.abs(c);
        var w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
            b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i,
            x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;

        if (b || x) {
          var _e86 = Math.pow(1 - Math.abs((Math.abs(c) - .5) / .5), .5);

          g += -28 * c * _e86, f += -.5 * _e86, v += 96 * _e86, h = -25 * _e86 * Math.abs(c) + "%";
        }

        if (u = c < 0 ? "calc(".concat(u, "px + (").concat(v * Math.abs(c), "%))") : c > 0 ? "calc(".concat(u, "px + (-").concat(v * Math.abs(c), "%))") : "".concat(u, "px"), !t.isHorizontal()) {
          var _e87 = h;
          h = u, u = _e87;
        }

        var y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c),
            _$ = "\n        translate3d(".concat(u, ", ").concat(h, ", ").concat(m, "px)\n        rotateZ(").concat(a.rotate ? g : 0, "deg)\n        scale(").concat(y, ")\n      ");

        if (a.slideShadows) {
          var _e88 = o.find(".swiper-slide-shadow");

          0 === _e88.length && (_e88 = createShadow(a, o)), _e88.length && (_e88[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1));
        }

        o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
        effectTarget(a, o).transform(_$);
      }
    },
    setTransition: function setTransition(e) {
      var s = t.params.cardsEffect.transformEl;
      (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), effectVirtualTransitionEnd({
        swiper: t,
        duration: e,
        transformEl: s
      });
    },
    perspective: function perspective() {
      return !0;
    },
    overwriteParams: function overwriteParams() {
      return {
        watchSlidesProgress: !0,
        virtualTranslate: !t.params.cssMode
      };
    }
  });
}

Object.keys(prototypes).forEach(function (e) {
  Object.keys(prototypes[e]).forEach(function (t) {
    Swiper.prototype[t] = prototypes[e][t];
  });
}), Swiper.use([Resize, Observer]);
var modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
Swiper.use(modules);

;// CONCATENATED MODULE: ./src/js/modules/vars.js
var API_KEY = 'zq3yFsrFbEDGCDMc72QxsvS43d2uIFQG'; // export const API_KEY = 'u4ygV9HY1NGmKNFRCNxxH4AbNzjcSWIb';
;// CONCATENATED MODULE: ./src/js/modules/price.js

var dataCurrency = {};

var formatCurrency = function formatCurrency(value, currency) {
  return new Intl.NumberFormat('BY', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 2
  }).format(value);
};

var showPrice = function showPrice() {
  var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'USD';
  var priceElems = document.querySelectorAll('[data-price]');
  priceElems.forEach(function (elem) {
    elem.textContent = formatCurrency(elem.dataset.price * dataCurrency[currency], currency);
  });
};
var myHeaders = new Headers();
myHeaders.append('apikey', API_KEY);
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
fetch('https://api.apilayer.com/fixer/latest?base=USD', requestOptions).then(function (response) {
  return response.json();
}).then(function (result) {
  Object.assign(dataCurrency, result.rates);
  showPrice();
})["catch"](function (error) {
  return console.log('error', error);
});
;// CONCATENATED MODULE: ./src/js/modules/country.js


var country = function country() {
  var countryBtn = document.querySelector('.country__btn');
  var countryWrapper = document.querySelector('.country__wrapper');

  var countryOpen = function countryOpen() {
    countryWrapper.classList.toggle('country__wrapper_open');
  };

  var countryClose = function countryClose() {
    countryWrapper.classList.remove('country__wrapper_open');
  };

  countryBtn.addEventListener('click', countryOpen);
  countryWrapper.addEventListener('click', function (_ref) {
    var target = _ref.target;

    if (target.classList.contains('country__choise')) {
      countryBtn.textContent = target.textContent;
      countryClose();
      showPrice(target.dataset.currency);
    }
  });
  new SimpleBar(document.querySelector('.country__list'), {
    classNames: {
      scrollbar: 'country__scrollbar',
      track: 'country__track'
    }
  });
};

/* harmony default export */ var modules_country = (country);
;// CONCATENATED MODULE: ./src/js/modules/modal.js
var modal = function modal() {
  var productMore = document.querySelectorAll('.product__more');
  var modal = document.querySelector('.modal');

  var modalOpen = function modalOpen() {
    modal.classList.add('modal_open');
    window.removeEventListener('keyup', modalClose);
  };

  var modalClose = function modalClose(event) {
    if (event.type === 'keyup' && event.key === 'Escape' || event.type === 'click' && event.target === modal) {
      modal.classList.remove('modal_open');
    }
  };

  productMore.forEach(function (btn) {
    btn.addEventListener('click', function () {
      modalOpen();
      window.addEventListener('keyup', modalClose);
    });
  });
  modal.addEventListener('click', modalClose);
};

/* harmony default export */ var modules_modal = (modal);
;// CONCATENATED MODULE: ./src/js/modules/declOfNum.js
// возвращает только слово
var declOfNum = function declOfNum(n, titles) {
  return titles[n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
};

/* harmony default export */ var modules_declOfNum = (declOfNum);
;// CONCATENATED MODULE: ./src/js/modules/timer.js
 // Форматирование вывода: добавляем нули, если меньше 10

var fTime = function fTime(time) {
  return time < 10 ? "0".concat(time) : time;
};

var timer = function timer(deadline) {
  var unitDay = document.querySelector('.timer__unit_day');
  var unitHour = document.querySelector('.timer__unit_hour');
  var unitMinute = document.querySelector('.timer__unit_minute');
  var descriptionDay = document.querySelector('.timer__unit-description_day');
  var descriptionHour = document.querySelector('.timer__unit-description_hour');
  var descriptionMinute = document.querySelector('.timer__unit-description_minute');

  var getTimeRemaining = function getTimeRemaining() {
    var dateStop = new Date(deadline).getTime();
    var dateNow = Date.now();
    var timeRemaining = dateStop - dateNow; // const ms = timeRemaining;
    // console.log('ms: ', ms);
    // const s = timeRemaining / 1000 % 60;
    // console.log('s: ', s);

    var minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    var hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    var days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
    return {
      timeRemaining: timeRemaining,
      minutes: minutes,
      hours: hours,
      days: days
    };
  };

  var start = function start() {
    var timer = getTimeRemaining();
    unitDay.textContent = fTime(timer.days);
    unitHour.textContent = fTime(timer.hours);
    unitMinute.textContent = fTime(timer.minutes);
    descriptionDay.textContent = modules_declOfNum(timer.days, ['день', 'дня', 'дней']);
    descriptionHour.textContent = modules_declOfNum(timer.hours, ['час', 'часа', 'часов']);
    descriptionMinute.textContent = modules_declOfNum(timer.minutes, ['минута', 'минуты', 'минут']);
    var timerId = setTimeout(start, 30000);

    if (timer.timeRemaining < 0) {
      clearTimeout(timerId);
      unitDay.textContent = '00';
      unitHour.textContent = '00';
      unitMinute.textContent = '00';
    }
  };

  start();
};

/* harmony default export */ var modules_timer = (timer);
;// CONCATENATED MODULE: ./src/js/modules/smoothScroll.js
var smoothScroll = function smoothScroll(trigger) {
  var SPEED = 0.3;

  var scrolled = function scrolled(e) {
    e.preventDefault();
    var target = e.target;

    if (target.matches('[href^="#"]')) {
      var start = 0;
      var pageY = window.pageYOffset;
      var hash = target.getAttribute('href');
      if (hash === '#') return;
      var elem = document.querySelector(hash);
      var coordinateElem = elem.getBoundingClientRect().top;
      var allDistance = pageY + coordinateElem;

      var scroll = function scroll(time) {
        if (!start) start = time;
        var progress = time - start;
        var r = coordinateElem < 0 ? Math.max(pageY - progress / SPEED, allDistance) : Math.min(pageY + progress / SPEED, allDistance);
        window.scrollTo(0, r);
        var scrolling = coordinateElem < 0 ? r > allDistance : r < allDistance;
        if (scrolling) requestAnimationFrame(scroll);
      };

      requestAnimationFrame(scroll);
    }
  };

  trigger.addEventListener('click', scrolled);
};

/* harmony default export */ var modules_smoothScroll = (smoothScroll);
;// CONCATENATED MODULE: ./src/js/index.js




 // import price from './modules/price.js';

new Swiper('.goods__block', {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  },
  navigation: {
    prevEl: '.goods__arrow_prev',
    nextEl: '.goods__arrow_next'
  }
});
modules_modal(); // price();

modules_country();
modules_smoothScroll(document.querySelector('.header__navigation'));
modules_smoothScroll(document.querySelector('.footer__navigation'));
modules_smoothScroll(document.querySelector('.hero__btn'));
modules_timer('2023/09/30 23:59');
/******/ })()
;