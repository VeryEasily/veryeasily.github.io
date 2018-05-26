import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => {
  let { siteTitle, siteGithub } = props
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
      className='header'
    >
      <h1
        className='site-info'
      >
        <Link
          to='/'
          className='site-info__title'
          style={{ textDecoration: 'none' }}
        >
          {siteTitle}
        </Link>
        <a
          className='site-info__github'
          target='_blank'
          href={'https://github.com/' + siteGithub}
        >
          @veryeasily
        </a>
      </h1>
    </div>
  )
}

export default Header
