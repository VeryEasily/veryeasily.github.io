import React from 'react'
import Link from 'gatsby-link'
import resume from './resume.pdf'

const SecondPage = () => (
  <div>
    <p>Resume is <a href={resume}>here</a></p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
