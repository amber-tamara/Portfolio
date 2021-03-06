/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../Footer/footer"
import Header from "../Header/header"
import "./layout.css"
import Projects from "../Projects/project"
import Contact from "../Contact/contact"
import About from "../About/about"
import Resume from "../Resume/resume";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isOpen, setIsOpen] = useState(false)
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen)
    console.log('poo')
  }

  return (
    <>
      <Header navbar={navbar} isOpen={isOpen} toggle={toggle} siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          backgroundColor: `#75b42c`,
        }}
      >
        <main>{children}</main>
      </div>
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
