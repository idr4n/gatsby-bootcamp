import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About Me</h1>
        <p>I'm a full-stack web developer.</p>
        <p>
          Want to work with me? <Link to="/contact">Reach out.</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
