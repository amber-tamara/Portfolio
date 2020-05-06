import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import header from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className={header.headerBox}>
      <h1 className={header.title}>
        <Link to="/" className={header.link}>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div>
      <ul className={header.list}>
        <li>Home</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
