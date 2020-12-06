import React from "react"
import about from "./about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import IconOne from "../../assets/web-development.svg"
import IconTwo from "../../assets/UI-design.svg"
// import IconThree from "../../assets/dancer.svg"
import IconThree from "../../assets/yoga.svg"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              firstPart
              secondPart
            }
          }
        }
      }
    }
  `)
  return (
    <div className={about.background}>
      <div className={about.sectionWrapper}>
        <div className={about.contentBox}>
          <div className={about.aboutWrapper}>
            <h2>Hey, I'm Amber</h2>
            <div className={about.line}></div>
            <p className={about.bio}>I'm a self-taught web developer with a passion for front end development and design. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.
          </p>
            <p>
              When I'm not in front of a computer screen, I'm probably doing yoga, dancing, petting dogs, or learning a new song on my keyboard.
          </p>
          </div>
          <img className={about.picture} src={require('../../images/meam.png')} />
        </div>
      </div>
    </div>
  )
}

export default About
