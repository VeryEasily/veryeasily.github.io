import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className='home-page'>
    <div><Link className='home-page__link' to="/art/">ART</Link></div>
    <div><Link className='home-page__link' to="/code/">CODE</Link></div>
    <div><Link className='home-page__link' to="/writing/">WRITING</Link></div>
  </div>
)

export default IndexPage
