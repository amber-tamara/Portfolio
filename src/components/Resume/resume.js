import React from "react"
import resume from "./resume.module.css"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import pdf from "./docs/My_CV.pdf"

const Resume = () => {
  const data = useStaticQuery(graphql`
    query {
      resumeImage: file(relativePath: { eq: "laptopBlur.jpg" }) {
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
        <h1 className={resume.title}>Check Out My CV</h1>
        <div className={resume.wrapperButton}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={pdf}
            className={resume.button}
            download="Amber_Jansen's CV">DOWNLOAD
          </a>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Resume
