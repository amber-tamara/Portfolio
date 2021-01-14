import React from "react";
import "./project.css";
import lighthouse from "./lighthouse.mp4";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"


const ProjectTwo = () => {
    const data = useStaticQuery(graphql`{
      file(relativePath: {eq: "WeatherWebsite.png"}) {
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
        <div className="projects second--project">
            <div className="project--wrapper">
                <div className="content--container">
                    <h2>WEATHER APP</h2>
                    <p className="content__paragraph">Users can search for the current weather.
                    Optimized using Google Lighthouse, an SEO tool featured in Chrome.
                    Following Google's guidelines. I improved the site's overall performance,
                    scoring 100 in performance, accessibility, best practices, and SEO,
                    both on mobile and desktop. Accomplished because of pre-loading fonts,
                    executing Javascript when the page has finished parsing,
                    reducing the file size of CSS and JavaScript by using Minification,
    plus loading the background image using picture tags for an accurate sized image.</p>
                    <video src={lighthouse} width="320px" height="240" autoPlay muted loop className="lighthouse_video">
                    </video>
                    <ul className="content__tools">
                        <li>HTML</li>
                        <li>JAVASCRIPT</li>
                        <li>SCSS</li>
                        <li>OPENWEATHER API</li>
                        <li>WEBPACK</li>
                    </ul>
                </div>
                <div className="image_button_wrapper">
                    <Img className="img__md" fluid={data.file.childImageSharp.fluid} alt="weather website preview" />
                    <div className="content__buttons">
                        <a href="https://priceless-clarke-1f2a18.netlify.app/" target="_blank" rel="noopener noreferrer">PREVIEW</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectTwo