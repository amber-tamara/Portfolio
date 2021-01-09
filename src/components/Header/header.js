import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import header from "../Header/header.module.css"
import NavBar from "./NavBar"
import SidebarElement from './Sidebar/index'
import Burger from './burger/burger'

const Header = ({ toggle, navbar, isOpen }) => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "code.jpg" }) {
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
        id="home"
        className={header.masthead}
        fluid={data.headerImage.childImageSharp.fluid}
      >
        <Burger isOpen={isOpen} toggle={toggle} />
        <NavBar navbar={navbar} toggle={toggle} />
        <SidebarElement navbar={navbar} isOpen={isOpen} toggle={toggle} />
        <div className={`${header.box} ${header.reveal}`}>
          <h1 className={header.heading}><span>Amber Jansen</span></h1>
          <div class={header.line}></div>
          <h2 className={header.subTitle}><span>Web Developer & UX Enthusiast</span></h2>
          {/* <a href="#work">MY WORK</a> */}
        </div>
      </BackgroundImage>
    </header >
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
