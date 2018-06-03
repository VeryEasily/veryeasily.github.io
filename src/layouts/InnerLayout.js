import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import styles from '../styles/layout.module.scss'

const InnerLayout = ({ children, data }) => {
  debugger
  return (
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
      <div className={styles.main}>
        <div className={styles.main__area}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default InnerLayout
