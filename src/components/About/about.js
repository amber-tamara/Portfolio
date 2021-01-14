import React from "react"
import about from "./about.module.css";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";


const About = () => {
  const data = useStaticQuery(graphql`
  {
              file(relativePath: {eq: "AmberJ.png"}) {
                  childImageSharp {
                      fluid(maxWidth: 2000) {
                          ...GatsbyImageSharpFluid_withWebp
                      }
              }
            }
          }
    `)


  return (
    <div id="about" className={about.background}>
      <div
        className={about.sectionWrapper}>
        <div className={about.contentBox}>
          <div className={about.aboutWrapper}>
            <h2>Hey, I'm Amber</h2>
            <div className={about.line}></div>
            <p className={about.bio}>I'm a self-taught web developer with a passion for front end development and design. I aspire toward a career that will allow me to channel my creativity by crafting beautiful software and engaging experiences. I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code.
          </p>
            <p>
              When I'm not in front of a computer screen, I'm probably doing yoga, dancing, petting dogs, or learning a new song on my keyboard.
          </p>
          </div>
          <div className={about.pictureWrapper}>
            <Img className={about.picture} fluid={data.file.childImageSharp.fluid} alt="Women called Amber"></Img>
            {/* <img className={about.picture} alt="Women called Amber" src={require('../../images/AmberJ.png')} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
