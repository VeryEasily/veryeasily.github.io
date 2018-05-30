import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/header.module.scss'
import classnames from 'classnames'

const Header = ({ siteTitle }) => {
  let headers = [];
  for(let i = 1; i <= 5; i++) {
    headers.push(makeHeader(i, siteTitle))
  }

  return (
    <div>
      {headers}
    </div>
  )
}

const makeHeader = (pos, siteTitle) => {
  const headerClasses = classnames(styles.header, styles[`header_${pos}`])
  return (
    <div className={headerClasses} key={headerClasses}>
      <div className={styles.header__title_wrapper}>
        <h2>
          <Link to="/">
            {siteTitle}
          </Link>
        </h2>
      </div>
    </div>
  )
}

export default Header
