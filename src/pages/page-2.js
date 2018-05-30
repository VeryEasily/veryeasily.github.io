import React from 'react'
import Link from 'gatsby-link'
import Artworks, { IMG_LIST } from '../components/artworks'
import styles from '../styles/art.module.scss'

const SecondPage = () => {
  return (
    <div>
      <h1 className={styles.second_title}>artwork here:</h1>
      <Artworks />
    </div>
  )
}

export default SecondPage
