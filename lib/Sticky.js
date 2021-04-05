"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _debounce = _interopRequireDefault(require("debounce"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Sticky = function Sticky(_ref) {
  var className = _ref.className,
      scrollIndex = _ref.scrollIndex,
      stickyWidth = _ref.stickyWidth,
      children = _ref.children;
  var stickyRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      scrollLock = _useState2[0],
      setScrollLock = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      width = _useState4[0],
      setWidth = _useState4[1];

  var calculateWidth = function calculateWidth() {
    var elementWidth = stickyRef.current.getBoundingClientRect().width;

    if (elementWidth !== width) {
      setWidth(elementWidth ? elementWidth : '100%');
    }
  };

  var calculateAndGetScrollIndex = function calculateAndGetScrollIndex() {
    var elementTop = stickyRef.current.getBoundingClientRect().top;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var calculatedScrollIndex = scrollIndex ? scrollIndex : elementTop + scrollTop;
    return scrollIndex ? scrollIndex : calculatedScrollIndex;
  };

  var handleScroll = function handleScroll() {
    var scrollBuffer = 10;
    var sIndex = calculateAndGetScrollIndex();

    if (window.pageYOffset + scrollBuffer > sIndex) {
      setScrollLock(true);
    } else if (window.pageYOffset - scrollBuffer < sIndex) {
      setScrollLock(false);
    }
  };

  (0, _react.useEffect)(function () {
    calculateWidth(); // initiate the event handler

    window.addEventListener('scroll', (0, _debounce["default"])(handleScroll, 10));
    window.addEventListener('resize', (0, _debounce["default"])(calculateWidth, 10)); // this will clean up the event every time the component is re-rendered

    return function () {
      setScrollLock(false);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateWidth);
    };
  }, [scrollIndex]);
  var styles = {
    top: 0
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: stickyRef
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      width: stickyWidth && scrollLock ? stickyWidth : width,
      zIndex: 100000,
      position: scrollLock ? "fixed" : "relative"
    },
    className: scrollLock ? className : null
  }, children));
};

Sticky.propTypes = {
  className: _propTypes["default"].any,
  scrollIndex: _propTypes["default"].number,
  stickyWidth: _propTypes["default"].string,
  children: _propTypes["default"].any
};
var _default = Sticky;
exports["default"] = _default;