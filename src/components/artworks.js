import React, { Component } from 'react'
import styles from '../styles/art.module.scss'
import Art from './art'
import classnames from 'classnames'

const IMG_LIST = [
  'https://c1.staticflickr.com/6/5338/9288760247_6153e06904_c.jpg',
  // 'https://c1.staticflickr.com/4/3741/9288774947_77bc0a0142_h.jpg',
  'https://c1.staticflickr.com/6/5500/9288758335_d9258bf52b_h.jpg',
  'https://c1.staticflickr.com/8/7404/9288761047_22fa63c71b_h.jpg',
  'https://c1.staticflickr.com/8/7383/9291545346_1ca204e760_h.jpg'
]

export default class Artworks extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    setTimeout(() => {
      console.debug('setTimeout: ', this)
      this.setState({
        artworksHeight: this.artworksRef.clientHeight,
        artworksWidth: this.artworksRef.clientWidth
      })
    }, 0)
  }

  render() {
    const height = this.state.artworksHeight
    const width = this.state.artworksWidth
    const arts = this.artworksRef ? IMG_LIST.map((url, i) => {
      return (
        <Art
          key={url}
          src={url}
          maxHeight={this.state.artworksHeight}
          maxWidth={this.state.artworksWidth}
        />
      )
    }) : []

    return (
      <div
        ref={elt => this.artworksRef = elt}
        className={classnames(
          styles.arts,
          this.props.className
        )}
      >
        {arts}
      </div>
    )
  }
}
