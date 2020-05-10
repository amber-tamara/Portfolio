import React from "react"
import Style from "./about.module.css"
import { useStaticQuery, graphql } from "gatsby"

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
            excerpt
          }
        }
      }
    }
  `)
  return (
    <div className={Style.aboutMe}>
      <h4>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h4>
      <div className={Style.imgCropper}>
        <img className={Style.img} src={require("../../images/me.jpeg")}></img>
      </div>
      <p>{data.allMarkdownRemark.edges[0].node.excerpt}</p>
      <div className={Style.paragraph}></div>
    </div>
  )
}

export default About