import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components//Layout/layout"
// import Image from "../components/image"
import SEO from "../components/Seo/seo"
import Style from "../styles/index.module.css"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className={Style.aboutMe}>
        {console.log(Style)}

        <img className={Style.img} src={require("../images/me.jpeg")}></img>
        <div className={Style.paragraph}>
          <h4>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h4>
          <p>{data.allMarkdownRemark.edges[0].node.excerpt}</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
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
`
