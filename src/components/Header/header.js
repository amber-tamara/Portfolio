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
            <a href="#about">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#work">WORK</a>
          </li>
          <li>
            <a href="#contact">CONTACT ME</a>
          </li>
        </ul>
        <div className={header.contentBox}>
          <h1 className={header.mainTitle}>Amber Jansen</h1>
          <p className={header.subTitle}>I bring your projects to life</p>
          <a>MY WORK</a>
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
