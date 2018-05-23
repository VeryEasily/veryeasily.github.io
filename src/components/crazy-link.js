import React, { Component } from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'
import { swapLetter } from '../etc/helpers'

export default class CrazyLink extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: props.children,
      propText: props.children
    }
  }

  updateText = () => {
    this.setState({
      text: swapLetter(this.state.text, this.state.propText)
    })
  }

  componentDidMount() {
    this.setState({ timer: setInterval(this.updateText, 10) })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.children === prevState.propText) { return prevState; }

    return {
      ...prevState,
      text: nextProps.children,
      propText: nextProps.children
    }
  }

  render() {
    let linkClasses = classNames({
      'home-page__link': true,
      'crazy-link': true
    }, this.props.className)

    let text = Array.from(this.state.text).map((i, j) => (
      (<span key={j} className="crazy-link__letter">{i}</span>)
    ))

    return (
      <Link className={linkClasses} to={this.props.to}>
        {text}
      </Link>
    )
  }
}
