import React from "react"
import about from "./about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import IconOne from "../../assets/keyboard.svg"
import IconTwo from "../../assets/ui.svg"
// import IconThree from "../../assets/dancer.svg"
import IconThree from "./dancer.js"

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
    <div>
      <h3 className={about.aboutHeading}>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h3>
      <div id="about" className={about.aboutMe}>
        <div>
          <div className={about.paragraph}>
            <p className={about.text}>
              {data.allMarkdownRemark.edges[0].node.frontmatter.firstPart}
            </p>
            <p className={about.text}>
              {data.allMarkdownRemark.edges[0].node.frontmatter.secondPart}
            </p>
          </div>
          <div className={about.TLDR}>
            TL;DR? SELF PROCLAMATIONS
        <div className={about.boxSvg}>
              <div>
                <IconOne className={about.svg} />
                <p>Web Design</p>
              </div>
              <div>
                <IconTwo className={about.svg} />
                <p>UI Deseign</p>
              </div>
              <div>
                <IconThree className={`${about.svg} ${about.danceSvg}`} />
                <p>Dance</p>
              </div>
            </div>
          </div>
        </div>
        <div className={about.imgCropper}>
          <img
            className={about.picture}
            src={require("../../images/me.jpeg")}
          ></img>
        </div>
      </div>
    </div>
  )
}

export default About
