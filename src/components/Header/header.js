import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import header from "../Header/header.module.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "images/code.jpg" }) {
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
        className={header.masthead}
        fluid={data.headerImage.childImageSharp.fluid}
      >
        <ul className={header.navBox}>
          <li>
            <Link to="#about">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="#projects">My Work</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
        <div className={header.contentBox}>
          <h1 className={header.mainTitle}>Amber Jansen</h1>
          <p className={header.subTitle}>I bring your projects to life</p>
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
