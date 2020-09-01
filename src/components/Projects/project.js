import React from "react"
import projects from "./project.module.css"

const Projects = () => {
  return (
    <div className={projects.projectContainer}>
      <h1 className={projects.header}>WHAT I'VE DONE</h1>
      <p className={projects.more}>(more coming soon)</p>
      <div className={projects.container}>
        <div className={projects.projectCard}>
          <div className={projects.projectImg}>
            <img className={projects.img} src={require("./art.png")}></img>
          </div>
          <div className={projects.projectDetails}>
            <h3 className={projects.projectTitle}>Annette's Art</h3>
            <p className={projects.projectsDescription}>
              orem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
               </p>
            <ul className={projects.tagList}>
              <li className={projects.tag}>Gatsby</li>
              <li className={projects.tag}>React</li>
              <li className={projects.tag}>CSS</li>
            </ul>
            <div className={projects.btnGroup}>
              <a className={`${projects.btn} ${projects.btnPrimary}`}>View Demo</a>
              <a className={`${projects.btn} ${projects.btnSecondary}`}>View Code</a>
            </div>
          </div>
        </div>
        <div className={projects.projectCard}>
          <div className={`${projects.projectCover} ${projects.projectCover2}`}>
            <div className={projects.projectImg}>
              <img className={projects.img} src={require("./weather.png")}></img>
            </div>
          </div>
          <div className={`${projects.projectDetails} ${projects.projectDetails2}`}>
            <h3 className={projects.projectTitle}>Weather App</h3>
            <p className={projects.projectsDescription}>
              orem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
               </p>
            <ul className={projects.tagList}>
              <li className={projects.tag}>Javascript</li>
              <li className={projects.tag}>html</li>
              <li className={projects.tag}>CSS</li>
            </ul>
            <div className={projects.btnGroup}>
              <a className={`${projects.btn} ${projects.btnPrimary}`}>View Demo</a>
              <a className={`${projects.btn} ${projects.btnSecondary}`}>View Code</a>
            </div>
          </div>
        </div>
        <div className={projects.projectCard}>
          <div className={projects.projectImg}>
            <img className={projects.img} src={require("./gifspot.png")}></img>
          </div>
          <div className={projects.projectDetails}>
            <h3 className={projects.projectTitle}>Gifspot</h3>
            <p className={projects.projectsDescription}>
              orem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
               </p>
            <ul className={projects.tagList}>
              <li className={projects.tag}>Javascript</li>
              <li className={projects.tag}>html</li>
              <li className={projects.tag}>CSS</li>
            </ul>
            <div className={projects.btnGroup}>
              <a className={`${projects.btn} ${projects.btnPrimary}`}>View Demo</a>
              <a className={`${projects.btn} ${projects.btnSecondary}`}>View Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
