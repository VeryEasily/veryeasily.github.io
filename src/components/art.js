import React, { Component } from 'react'
import styles from '../styles/art.module.scss'
import classnames from 'classnames'

export default class Art extends Component {
  static getAPosition() {
    const top = Math.floor(Math.random()*300) - 150
    const left = Math.floor(Math.random()*1500) - 750
    const back = Math.floor(Math.random()* -10)
    return {
      transform:
`translate3d(${left}px,${top}px,${back}px) `+
`rotate3d(${Math.random()},${Math.random()},${Math.random()},${Math.floor(Math.random()*180)}deg) `+
`scale(0.5)`
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      styles: Art.getAPosition()
    }
  }

  register() {
    this.setState({
      interval: setInterval(() => (
        this.updatePosition()
      ), 1500)
    })
  }

  unregister() {
    clearInterval(this.state.interval)
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

  handleClick() {
    this.props.toggleArtFocus({
      activeId: this.props.active ? null : this.props.id
    })
  }

  render() {
    let classes = classnames(
      styles.arts__art,
      styles.art,
      this.props.active && styles['art--active']
    )
    return (
      <img
        onClick={this.handleClick.bind(this)}
        className={classes}
        src={this.props.src}
        style={{
          ...this.state.styles,
          ...{
          }
        }}
      />
    )
  }
}
