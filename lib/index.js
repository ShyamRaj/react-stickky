'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sticky = function (_React$Component) {
  _inherits(Sticky, _React$Component);

  function Sticky(props) {
    _classCallCheck(this, Sticky);

    var _this = _possibleConstructorReturn(this, (Sticky.__proto__ || Object.getPrototypeOf(Sticky)).call(this, props));

    _this.state = {
      scrollingLock: false
    };

    _this.stickyRef = Math.floor(Math.random() * (100 - 0 + 1)) + 0 + 'sticky';
    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.calculateScrollIndex = _this.calculateScrollIndex.bind(_this);
    _this.calculateWidth = _this.calculateWidth.bind(_this);
    return _this;
  }

  _createClass(Sticky, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      if (!this.props.stickyWidth) {
        this.calculateWidth();
        window.addEventListener('resize', this.calculateWidth);
      }
      this.calculateScrollIndex();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.state = {
        scrollingLock: false
      };
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.calculateWidth);
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
      if (window.scrollY > this.state.scrollIndex) {
        this.setState({
          scrollingLock: true
        });
      } else if (window.scrollY < this.state.scrollIndex) {
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

exports.default = Sticky;