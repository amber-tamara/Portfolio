import React from "react";
import "./project.css";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

const ProjectThree = () => {
    const data = useStaticQuery(graphql`{
      file(relativePath: {eq: "Gifspot.png"}) {
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

        <div className="projects third--project">
            <div className="project--wrapper">
                <div className="content--container">
                    <h2>GIFSPOT</h2>
                    <p className="content__paragraph">The user can search Gif's, enlarge them in a lightbox,
                    and share them with friends through social media. I used Javascript to integrate data
                    from Giphy's API. When a user starts typing a word or phrase and then clicks submit,
                    a query is sent via the API call, that accesses the webserver to retrieve the requested data,
                    which returns the images and is displayed using a columned layout. When the user has scrolled to
            the bottom of the page, a scroll event is triggered, loading more Gif's, which avoids a page refresh.</p>
                    <ul className="content__tools">
                        <li>HTML</li>
                        <li>JAVASCRIPT</li>
                        <li>SCSS</li>
                        <li>GIPHY API</li>
                        <li>WEBPACK</li>
                    </ul>
                </div>
                <div className="image_button_wrapper">
                    <Img className="img__md" fluid={data.file.childImageSharp.fluid} alt="giph website preview"></Img>
                    <div className="content__buttons">
                        <a href="https://amber-tamara.github.io/GIF.SPOT/" target="_blank" rel="noopener noreferrer">PREVIEW</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectThree