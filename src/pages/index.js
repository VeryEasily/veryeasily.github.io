import React, { Component } from 'react'
import Link from 'gatsby-link'
import CrazyLink from '../components/crazy-link'
import { TITLE } from '../etc/constants'
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
    this.setState({ timer: setInterval(this.updateTitle, 10) })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  render() {
    let title = Array.from(this.state.modifiedTitle).map((i, j) => (
      (<span key={j} className="crazy-link__letter">{i}</span>)
    ))

    return (
      <div className='home-page'>
        <div className='home-page__item nav-wrapper'>
          <div className='home-page__link-holder'>
            <CrazyLink className='home-page__link art' to="/art/">ART</CrazyLink>
          </div>
          <div className='home-page__link-holder'>
            <CrazyLink className='home-page__link code' to="/code/">CODE</CrazyLink>
          </div>
          <div className='home-page__link-holder'>
            <CrazyLink className='home-page__link music' to="/music/">MUSIC</CrazyLink>
          </div>
          <div className='home-page__link-holder'>
            <CrazyLink className='home-page__link etc' to="/etc/">ETC</CrazyLink>
          </div>
        </div>
        <div className='home-page__item lju-wrapper'>
          <h1 className='crazy-link crazy-link--title home-page__name'>{title}</h1>
        </div>
      </div>
    )
  }
}

export default IndexPage
