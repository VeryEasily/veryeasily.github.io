import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.scss'

const Layout = ({ children, data }) => (
  <div className="main-background">
    <div className="main-background__top">
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className="article-body"
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '.6rem .78rem',
        }}
      >
        {children()}
      </div>
    </div>
    <footer className="main-background__bottom footer">
      <span className="footer__content">
        YOOOOOOOOOO
      </span>
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
