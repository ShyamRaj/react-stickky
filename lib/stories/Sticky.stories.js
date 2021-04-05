"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickyHeader = exports.StickyHeaderAndFooter = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Sticky = _interopRequireDefault(require("./../Sticky"));

var _Header = require("./Header");

var _Page = require("./Page");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Sticky',
  component: _Sticky["default"]
};
exports["default"] = _default;

var StickyHeaderAndFooter = function StickyHeaderAndFooter() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement(_Sticky["default"], {
    className: "stickyStyle",
    scrollIndex: 150
  }, /*#__PURE__*/_react["default"].createElement(_Header.Header, {
    className: "header",
    user: {}
  })), /*#__PURE__*/_react["default"].createElement(_Page.Page, {
    className: "article"
  }), /*#__PURE__*/_react["default"].createElement(_Sticky["default"], {
    className: "stickyStyle-bottom",
    scrollIndex: 10
  }, /*#__PURE__*/_react["default"].createElement("footer", null, "This is a sticky footer")));
};

exports.StickyHeaderAndFooter = StickyHeaderAndFooter;

var StickyHeader = function StickyHeader() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement(_Sticky["default"], {
    className: "stickyStyle",
    scrollIndex: 150
  }, /*#__PURE__*/_react["default"].createElement(_Header.Header, {
    className: "header",
    user: {}
  })), /*#__PURE__*/_react["default"].createElement(_Page.Page, {
    className: "article"
  }), /*#__PURE__*/_react["default"].createElement("footer", null, "This is a sticky footer"));
};

exports.StickyHeader = StickyHeader;
StickyHeaderAndFooter.storyName = 'Header and Footer';