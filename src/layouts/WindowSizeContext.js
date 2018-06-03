import React, { Component } from 'react'

const WindowSizeContext = React.createContext({
  window: {
    height: 960,
    width: 960
  }
})

export default WindowSizeContext

export class WrappedWindowSizeContext extends Component {
  constructor(props) {
    super(props)
    this.state = {
      window: null
    }
    this.setWindowSize = this.setWindowSize.bind(this)
  }

  setWindowSize() {
    this.setState({
      window: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    })
  }

  componentDidMount() {
    setTimeout(this.setWindowSize, 0)
    window.addEventListener('resize', this.setWindowSize)
  }

  render() {
    return (
      <WindowSizeContext.Provider value={this.state.window || false}>
        {this.props.children}
      </WindowSizeContext.Provider>
    )
  }
}
