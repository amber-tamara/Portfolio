import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "../Header/background-image.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "images/milk-way.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header>
      <BackgroundImage
        className="masthead"
        fluid={data.headerImage.childImageSharp.fluid}
      >
        <ul className="nav-box">
          <li>
            <Link to="#about">ABOUT</Link>
          </li>
          <li>
            {" "}
            <Link to="#projects">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="#contact">CONTACT</Link>
          </li>
        </ul>
        <div className="main-overlay">
          <div className="content-box">
            <h1 className="main-title">HI, I'M AMBER</h1>
            <p className="sub-title">Web Developer</p>
          </div>
        </div>
      </BackgroundImage>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
