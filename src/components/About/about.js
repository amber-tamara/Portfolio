import React from "react"
import Style from "./about.module.css"
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
    <div id="about" className={Style.aboutMe}>
      <h4>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h4>
      <div className={Style.imgCropper}>
        <img
          className={Style.picture}
          src={require("../../images/me.jpeg")}
        ></img>
      </div>
      <div className={Style.paragraph}>
        <p>{data.allMarkdownRemark.edges[0].node.excerpt}</p>
      </div>
      <div className={Style.TLDR}>
        TL;DR? SELF PROCLAMATIONS
        <div className={Style.boxSvg}>
          <IconOne className={Style.svg} />
          <IconTwo className={Style.svg} />
          <IconThree className={Style.svg} />
        </div>
      </div>
    </div>
  )
}

export default About
