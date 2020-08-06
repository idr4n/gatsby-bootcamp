import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Ivan Duran</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header