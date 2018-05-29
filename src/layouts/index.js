import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import CrazyLink from '../components/CrazyLink'

import Header from '../components/Header'
import Footer from '../components/Footer'
import MainLinkContainer from '../components/MainLinkContainer'
import '../scss/index.scss'

const Layout = ({ children, data }) => {
  return (
    <div className="site-container__site site">
      <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { href: "https://fonts.googleapis.com/css?family=Noto+Sans|Permanent+Marker", rel: "stylesheet" }
      ]}
      />
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteGithub={data.site.siteMetadata.github}>
      </Header>
      <MainLinkContainer />
      <main className="main" >
        {children()}
      </main>
      <Footer />
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
