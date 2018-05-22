import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import '../scss/index.scss'

const Layout = ({ children, data }) => {
  console.log(data)
  return (
    <div className="main-background">
      <div className="main-background__top">
        <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
        link={[
          { href: "https://fonts.googleapis.com/css?family=Mr+De+Haviland|Permanent+Marker", rel: "stylesheet" }
        ]}
        />
        {/* <Header
          siteTitle={data.site.siteMetadata.title}
          siteGithub={data.site.siteMetadata.github} /> */}
        <div
          className="article-body"
          style={{
            margin: '0 auto',
              maxWidth: 960,
              padding: 0,
          }}>
          {children()}
        </div>
      </div>
      {/* <footer className="main-background__bottom footer">
          <span className="footer__content">
          YOOOOOOOOOO
          </span>
        </footer> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title,
        github
      }
    }
  }
`
