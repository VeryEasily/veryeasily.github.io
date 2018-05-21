import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle, siteGithub }) => (
  <div
    className='site-header'
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 className='header-container' style={{ margin: 0 }}>
        <Link
          to='/'
          className='header-container__title'
          style={{
            textDecoration: 'none',
          }}
        >{siteTitle}</Link> (<a
          className='header-container__github'
          target='_blank'
          href={'https://github.com/' + siteGithub}
          >
          @veryeasily
        </a>)
      </h1>
    </div>
  </div>
)

export default Header
