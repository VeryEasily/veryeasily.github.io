import React, { Component } from 'react'
import styles from '../styles/art.module.scss'
import classnames from 'classnames'

export default class Art extends Component {
  static getAPosition() {
    return {
      top: Math.floor(Math.random()*500),
      left: Math.floor(Math.random()*1000),
      transform: `rotate3d(${Math.random()},${Math.random()},${Math.random()},${Math.floor(Math.random()*180)}deg)`
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      styles: Art.getAPosition()
    }
    this.handleClick = this.handleClick.bind(this)
  }

  register() {
    this.setState({
      interval: setInterval(() => (
        this.updatePosition()
      ), 3000)
    })
  }

  unregister() {
    clearInterval(this.state.interval)
  }

  handleClick() {
    this.unregister()
  }

  componentDidMount() {
    this.register()
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  updatePosition() {
    console.log({
      ...Art.getAPosition(),
      ...this.state.styles
    })
    this.setState({
      styles: {
        ...this.state.styles,
        ...Art.getAPosition()
      }
    })
  }

  render() {
    return (
      <img
        onClick={this.handleClick}
        className={classnames(
          styles.arts__art,
          styles.art
        )}
        src={this.props.src}
        style={this.state.styles}
      />
    )
  }
}
