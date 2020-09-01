import React from "react"
import Foot from "./footer.module.css"

const Footer = () => (
  <footer className={Foot.footer}>
    <a
      className={Foot.github}
      href="https://github.com/amber-tamara"
      target="_blanc"
    >
      <img className={Foot.image} src={require("../Footer/Github.png")}></img>
    </a>
  </footer>
)

export default Footer
