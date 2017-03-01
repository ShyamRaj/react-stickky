import React from 'react'
import Dimensions from 'react-dimensions'

class Sticky extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
    this.scrollIndex = props.scrollIndex ? props.scrollIndex : 1;
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillMount() {
    this.state = {
      scrollingLock: false
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {

    if (window.scrollY > this.scrollIndex) {
      this.setState({
        scrollingLock: true
      })
    } else if (window.scrollY < this.scrollIndex) {
      this.setState({
        scrollingLock: false
      })
    }

  }

  render() {
    return <div
      style={{
        width: this.props.stickyWidth  && this.state.scrollingLock ? this.props.stickyWidth : this.props.containerWidth,
        zIndex: 100000,
        position: this.state.scrollingLock ? "fixed" : "relative"
      }}
      className={this.state.scrollingLock ? this.props.className : null}
    >
      {this.props.children}
    </div>
  }
}

export default Dimensions()(Sticky)