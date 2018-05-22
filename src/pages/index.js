import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className='home-page'>
    <div className='home-page__item nav-wrapper'>
      <div className='home-page__link-holder'>
        <Link className='home-page__link art' to="/art/">ART</Link>
      </div>
      <div className='home-page__link-holder'>
        <Link className='home-page__link code' to="/code/">CODE</Link>
      </div>
      <div className='home-page__link-holder'>
        <Link className='home-page__link music' to="/music/">MUSIC</Link>
      </div>
      <div className='home-page__link-holder'>
        <Link className='home-page__link etc' to="/etc/">ETC</Link>
      </div>
    </div>
    <div className='home-page__item lju-wrapper'>
      <h1 className='home-page__name'>Luke Underwood</h1>
    </div>
  </div>
)

export default IndexPage
