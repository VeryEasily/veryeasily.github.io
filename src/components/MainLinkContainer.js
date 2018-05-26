import React from 'react'
import CrazyLink from './CrazyLink'

export default function MainLinkContainer(props) {
  return (
    <nav className='nav'>
      <div className='nav__link-holder'>
        <CrazyLink className='nav__link art' to="/art/">ART</CrazyLink>
      </div>
      <div className='nav__link-holder'>
        <CrazyLink activeClassName="code" className='nav__link code' to="/code/">CODE</CrazyLink>
      </div>
      <div className='nav__link-holder'>
        <CrazyLink className='nav__link music' to="/music/">MUSIC</CrazyLink>
      </div>
      <div className='nav__link-holder'>
        <CrazyLink className='nav__link etc' to="/etc/">ETC</CrazyLink>
      </div>
    </nav>
  )
}
