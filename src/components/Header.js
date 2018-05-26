import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => {
  let { siteTitle, siteGithub } = props
  return (
    <div
      className='header-container'
      style={{
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
        className='header'
      >
        <h1
          className='site-info' style={{ margin: 0 }}
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
    </div>
  )
}

export default Header
