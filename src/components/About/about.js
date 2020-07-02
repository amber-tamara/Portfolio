import React from "react"
import about from "./about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import IconOne from "../../assets/keyboard.svg"
import IconTwo from "../../assets/ui.svg"
import IconThree from "../../assets/dancer.svg"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            excerpt(pruneLength: 1000)
          }
        }
      }
    }
  `)
  return (
    <div id="about" className={about.aboutMe}>
      <h3>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h3>
      <div className={about.imgCropper}>
        <img
          className={about.picture}
          src={require("../../images/me.jpeg")}
        ></img>
      </div>
      <div className={about.paragraph}>
        <p className={about.text}>
          {data.allMarkdownRemark.edges[0].node.excerpt}
        </p>
      </div>
      <div className={about.TLDR}>
        TL;DR? SELF PROCLAMATIONS
        <div className={about.boxSvg}>
          <IconOne className={about.svg} />
          <IconTwo className={about.svg} />
          <IconThree className={about.svg} />
        </div>
      </div>
    </div>
  )
}

export default About
