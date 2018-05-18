import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>I've been working in tech for a while now!!</h1>
    <p>You can find my resume <a href={resume}>here</a></p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
