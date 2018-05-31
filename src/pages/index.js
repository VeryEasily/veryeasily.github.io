import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/index-page.module.scss'

const IndexPage = () => (
  <div className={styles['index-page']}>
    <h1>hey!!</h1>
    <p>this is where i plan to put stuff i do!</p>
    <Link to="/art/">page 2</Link>
  </div>
)

export default IndexPage
