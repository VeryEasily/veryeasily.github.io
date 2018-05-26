import React, { Component } from 'react'
import Link from 'gatsby-link'
import CrazyLink from '../components/CrazyLink'
import { EMOJI_SPEED, TITLE } from '../etc/constants'
import { swapLetter } from '../etc/helpers'

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modifiedTitle: TITLE
    }
  }

  updateTitle = () => {
    this.setState({
      modifiedTitle: swapLetter(this.state.modifiedTitle, TITLE)
    })
  }

  componentDidMount() {
    this.setState({ timer: setInterval(this.updateTitle, EMOJI_SPEED) })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  render() {
    let title = Array.from(this.state.modifiedTitle).map((i, j) => (
      (<span key={j} className="crazy-link__letter">{i}</span>)
    ))

    return (
      <div className='indexpage'>
      {/* <div className='header__item lju-wrapper'>
          <h1 className='crazy-link crazy-link--title header__title'>{title}</h1>
        </div> */}
      </div>
    )
  }
}

export default IndexPage
