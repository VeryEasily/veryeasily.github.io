import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className='home-page'>
    <div className='up'>
      <div className='home-page__link-holder'>
        <Link className='home-page__link' to="/art/">ART</Link>
      </div>
      <div className='home-page__link-holder'>
        <Link className='home-page__link' to="/code/">CODE</Link>
      </div>
      <div className='home-page__link-holder'>
        <Link className='home-page__link' to="/music/">MUSIC</Link>
      </div>
      <div className='home-page__link-holder'>
        <Link className='home-page__link' to="/etc/">ETC</Link>
      </div>
    </div>
    <div className='mid'>
      <h1 className='home-page__name'>Luke Underwood</h1>
    </div>
  </div>
)

export default IndexPage
