import React from 'react'

class Sticky extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };

    this.stickyRef = Math.floor(Math.random() * (100 - 0 + 1)) + 0 + 'sticky'
    this.handleScroll = this.handleScroll.bind(this)
    this.calculateScrollIndex = this.calculateScrollIndex.bind(this)
    this.calculateWidth = this.calculateWidth.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    if(!this.props.stickyWidth) {
      this.calculateWidth()
      window.addEventListener('resize', this.calculateWidth)
    }
    this.calculateScrollIndex()
  }

  componentWillMount() {
    this.state = {
      scrollingLock: false
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.calculateWidth)
  }

  calculateScrollIndex() {
    if(this.props.scrollIndex) {
      this.setState({
        scrollIndex: this.props.scrollIndex && this.props.scrollIndex
      })
    }

    else if (this.refs[this.stickyRef]) {
      this.dimension = this.refs[this.stickyRef].getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.setState({
        scrollIndex: this.dimension.top ? this.dimension.top + scrollTop : '1'
      });
    }
  }

  calculateWidth() {
    if (this.refs[this.stickyRef]) {
      this.dimension = this.refs[this.stickyRef].getBoundingClientRect();
      this.setState({
        width: this.dimension.width ? this.dimension.width : '100%'
      });
    }
  }

  handleScroll() {
    const scrollBuffer = 10;
    if (window.scrollY + scrollBuffer > this.state.scrollIndex) {
      this.setState({
        scrollingLock: true
      })
    } else if (window.scrollY - scrollBuffer < this.state.scrollIndex) {
      this.setState({
        scrollingLock: false
      })
    }
  }

  render() {
    return <div
      ref={this.stickyRef}
    >
      <span
        className={this.state.scrollingLock ? this.props.className : null}
        style={{
          width: this.props.stickyWidth  && this.state.scrollingLock ? this.props.stickyWidth : this.state.width,
          zIndex: 100000,
          position: this.state.scrollingLock ? "fixed" : "relative"
        }}
      >
      {this.props.children}
      </span>
    </div>
  }
}

export default Sticky