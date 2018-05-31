import React from 'react'
import Link from 'gatsby-link'
import ArtworksContainer, { IMG_LIST } from '../components/ArtworksContainer'
import styles from '../styles/art.module.scss'

const ArtPage = () => {
  return (
    <div className={styles.artPage}>
      <div className={styles.artPage__mainArea}>
        <h1 className={styles.second_title}>artwork here:</h1>
      </div>
      <ArtworksContainer className={styles.artPage__positioning} />
    </div>
  )
}

export default ArtPage
