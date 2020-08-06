import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>I'm a full-stack web developer.</p>
      <p>
        Want to work with me? <Link to="/contact">Reach out.</Link>
      </p>
    </div>
  )
}

export default AboutPage
