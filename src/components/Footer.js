import React from 'react'
import CrazyLink from './CrazyLink'
import { TITLE } from '../etc/constants'

export default (props) => (
  <footer className="footer">
    <CrazyLink className="footer__crazy-link">{TITLE}</CrazyLink>
  </footer>
)
