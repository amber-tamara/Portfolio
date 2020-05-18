import React from "react"
import resume from "./resume.module.css"
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
      className={resume.parallax}
      fluid={data.resumeImage.childImageSharp.fluid}
    >
      <div className={resume.overlay}></div>
      <div className={resume.container}>
        <h1 className={resume.title}>CHECK OUT MY RESUME!</h1>
        <div className={resume.wrapperButton}>
          <a
            className={resume.button}
            href="mailto:ambertjansen@gmail.com"
            target="_blank"
          >
            GRAB A COPY
          </a>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Resume
