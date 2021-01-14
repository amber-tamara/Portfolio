import React from "react";
import "./project.css";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
import ProjectTwo from "./projectTwo"
import ProjectThree from "./projectThree"

const Projects = () => {
  const data = useStaticQuery(graphql`{
    file(relativePath: {eq: "ArtWebsite.png"}) {
      id
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)

  return (
    <div
      id="work"
      className="projects--background">
      <div className="projects--box">
        <h2 className="heading">My Work</h2>
        <div className="projects first--project">
          <div className="project--wrapper">
            <div className="content--container">
              <h2>ANNETTE'S ART</h2>
              <p className="content__paragraph">I built this website for my Mum,
              to create an online presence to display her artwork. With her site
              being heavily image-based. I used gatsby for the tools it has to manage
              images, one of the tools being "gatsby-image" which produces responsive
              images, by creating multiple image resolutions and letting the browser
              pick the appropriate size depending on the device requesting the web page.
              Lazy loading images speed up initial page load and save bandwidth.
              I've used the blur up and tracedSVG effect to show a preview of the
              image while it loads, this gives the image a smooth transition before
              the image has been loaded and prevents image jumps.</p>
              <ul className="content__tools">
                <li>GATSBY</li>
                <li>REACT</li>
                <li>SCSS</li>
              </ul>
            </div>
            <div className="image_button_wrapper">
              <Img className="img__md" fluid={data.file.childImageSharp.fluid} alt="art website preview"></Img>
              <div className="content__buttons">
                <a href="https://competent-lamarr-421e1b.netlify.app/" target="_blank" rel="noopener noreferrer">PREVIEW</a>
              </div>
            </div>
          </div>
        </div>
        <ProjectTwo />
        <ProjectThree />
      </div>
    </div >
  )
}

export default Projects
