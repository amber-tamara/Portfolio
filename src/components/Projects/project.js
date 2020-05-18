import React from "react"
import projects from "./project.module.css"

const Projects = () => {
  return (
    <div>
      {" "}
      <h1 className={projects.header}>WHAT I'VE DONE</h1>
      <p className={projects.more}>(more coming soon)</p>
      <div className={projects.container}>
        <div className={projects.box}>
          <img className={projects.img} src={require("./cozycastle.png")}></img>
        </div>
        <div className={projects.box}>
          <img className={projects.img} src={require("./brain.png")}></img>
        </div>
        <div className={projects.box}>
          <img className={projects.img} src={require("./weather.png")}></img>
        </div>
      </div>
    </div>
  )
}

export default Projects
