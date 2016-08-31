import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillMount() {
    this.state = {
      scrollingLock: true
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {

    if (window.scrollY > this.props.scrollIndex) {
      this.setState({
        scrollingLock: true
      })
    } else if (window.scrollY < this.props.scrollIndex) {
      this.setState({
        scrollingLock: false
      })
    }

  }

  render() {
    return <div
      style={{
        width: "100%",
        zIndex: 100000,
        position: this.state.scrollingLock ? "fixed" : "relative"
      }}
      className={this.state.scrollingLock ? this.props.className : null}
    >
      {this.props.children}
    </div>
  }
}