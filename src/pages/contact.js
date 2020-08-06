import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Me</h1>
      <p>
        The best way to reach me is via{" "}
        <a href="https://twitter.com/ivanddm" target="_blank">
          @ivanddm
        </a>{" "}
        on Twitter.
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
