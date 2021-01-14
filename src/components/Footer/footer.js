import React from "react"
import Foot from "./footer.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

const Footer = () => {
  const data = useStaticQuery(graphql`
  {
              file(relativePath: {eq: "Github.png"}) {
                  childImageSharp {
                      fluid(maxWidth: 2000) {
                          ...GatsbyImageSharpFluid
                      }
              }
            }
          }
    `)
return (
  <footer className={Foot.footer}>
    <div className={Foot.wrapper}>
      <a
        className={Foot.github}
        href="https://github.com/amber-tamara"
        target="_blanc"
      >
        <Img className={Foot.image} fluid={data.file.childImageSharp.fluid} alt="Github Icon"></Img>
      </a>
      <p className={Foot.sentence}>Designed and Developed by Amber Jansen</p>
    </div>
  </footer>
)
}

export default Footer
