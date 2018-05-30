import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import '../styles/index.scss'
import styles from '../styles/layout.module.scss'

const Layout = ({ children, data }) => (
  <div className={styles.site}>
    <Helmet
      title={data.site.siteMetadata.title}
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans'
        }
      ]}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className={styles.site__header}>
      <Header siteTitle={data.site.siteMetadata.title} />
    </div>
    <div className={styles.site__content}>
      {children()}
    </div>
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
