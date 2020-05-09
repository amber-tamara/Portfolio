import React from "react"
import cont from "./project.module.css"

const Projects = () => {
  return (
    <div className={cont.container}>
      <div className={cont.wrapper}>
        <div className={cont.box}>
          <img className={cont.img} src={require("./cozycastle.png")}></img>
          <span className={cont.title}>Comfy House: Buy furniture</span>
          <p className={cont.info}>
            A vanilla Javascript based project which allows you to pick
            furniture and adds to cart
          </p>
          <strong className={cont.info}>Technology:</strong>{" "}
          <span className={cont.info}>Javascript</span>
        </div>
        <div className={cont.box}>B</div>
        <div className={cont.box}>C</div>
      </div>
    </div>
  )
}

export default Projects
