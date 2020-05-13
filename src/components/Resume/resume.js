import React from "react"
import "./resume.css"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const Resume = () => {
  const data = useStaticQuery(graphql`
    query {
      resumeImage: file(relativePath: { eq: "components/Resume/laptop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      className="parallax"
      fluid={data.resumeImage.childImageSharp.fluid}
    >
      <div className="overlay"></div>
      <h1 className="title">CHECK OUT MY RESUME!</h1>
      <div className="wrapper-button">
        <a
          className="button"
          href="mailto:ambertjansen@gmail.com"
          target="_blank"
        >
          click
        </a>
      </div>
    </BackgroundImage>
  )
}

export default Resume
