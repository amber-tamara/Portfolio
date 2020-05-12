import React from "react"
import "./project.css"

const Projects = () => {
  return (
    <div>
      {" "}
      <h1>WHAT I'VE DONE</h1>
      <div className="container">
        <div className="box">
          <img className="img" src={require("./cozycastle.png")}></img>
        </div>
        <div className="box">
          <img className="img" src={require("./brain.png")}></img>
        </div>
        <div className="box">
          <img className="img" src={require("./weather.png")}></img>
        </div>
      </div>
    </div>
  )
}

export default Projects
