'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _debounce = require('debounce');

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sticky = function (_React$Component) {
  _inherits(Sticky, _React$Component);

  function Sticky() {
    _classCallCheck(this, Sticky);

    var _this = _possibleConstructorReturn(this, (Sticky.__proto__ || Object.getPrototypeOf(Sticky)).call(this));

    _this.state = {
      scrollingLock: false
    };

    _this.stickyRef = Math.floor(Math.random() * (100 - 0 + 1)) + 0 + 'sticky';
    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.handleScrollDebounced = (0, _debounce2.default)(_this.handleScroll, 10);
    _this.calculateWidthDebounced = (0, _debounce2.default)(_this.calculateWidth, 10);
    return _this;
  }

  _createClass(Sticky, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScrollDebounced);
      if (!this.props.stickyWidth) {
        this.calculateWidth();
        window.addEventListener('resize', this.calculateWidthDebounced);
      }
      this.calculateScrollIndex();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        scrollingLock: false
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScrollDebounced);
      window.removeEventListener('resize', this.calculateWidthDebounced);
    }
  }, {
    key: 'calculateScrollIndex',
    value: function calculateScrollIndex() {
      if (this.props.scrollIndex) {
        this.setState({
          scrollIndex: this.props.scrollIndex && this.props.scrollIndex
        });
      } else if (this.refs[this.stickyRef]) {
        this.dimension = this.refs[this.stickyRef].getBoundingClientRect();
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        this.setState({
          scrollIndex: this.dimension.top ? this.dimension.top + scrollTop : '1'
        });
      }
    }
  }, {
    key: 'calculateWidth',
    value: function calculateWidth() {
      if (this.refs[this.stickyRef]) {
        this.dimension = this.refs[this.stickyRef].getBoundingClientRect();
        this.setState({
          width: this.dimension.width ? this.dimension.width : '100%'
        });
      }
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      var scrollBuffer = 10;
      if (window.pageYOffset + scrollBuffer > this.state.scrollIndex) {
        this.setState({
          scrollingLock: true
        });
      } else if (window.pageYOffset - scrollBuffer < this.state.scrollIndex) {
        this.setState({
          scrollingLock: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          ref: this.stickyRef
        },
        _react2.default.createElement(
          'span',
          {
            className: this.state.scrollingLock ? this.props.className : null,
            style: {
              width: this.props.stickyWidth && this.state.scrollingLock ? this.props.stickyWidth : this.state.width,
              zIndex: 100000,
              position: this.state.scrollingLock ? "fixed" : "relative"
            }
          },
          this.props.children
        )
      );
    }
  }]);

  return Sticky;
}(_react2.default.Component);

Sticky.propTypes = {
  className: _propTypes2.default.any,
  scrollIndex: _propTypes2.default.number,
  stickyWidth: _propTypes2.default.string,
  isSticky: _propTypes2.default.bool,
  children: _propTypes2.default.any
};

exports.default = Sticky;