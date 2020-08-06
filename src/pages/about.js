import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Me</h1>
      <p>I'm a full-stack web developer.</p>
      <p>
        Want to work with me? <Link to="/contact">Reach out.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
