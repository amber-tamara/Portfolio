import React from "react"
import projects from "./project.module.css"

const Projects = () => {
  return (
    <div className={projects.background}>
      <div className={projects.container}>
        <div className={projects.mainTitleContainer}>
          <h2>My Work</h2>
          <div className={projects.line}></div>
        </div>
        <div className={projects.project}>
          <div className={projects.screenShots}>
            <img className={projects.imgMd} src={require("./images/ArtWebsite/tabletArtSite.png")}></img>
            <img className={projects.imgSm} src={require("./images/ArtWebsite/mobileArtSite.png")}></img>
          </div>
          <div className={projects.contentContainer}>
            <div className={projects.titleContainer}>
              <h2>ANNETTE'S ART</h2>
            </div>
            <p className={projects.paragraph}>Built with Gatsby which uses ReactJS components.
            Performance isn’t optional, it's built in, with
            improved loading time by code splitting. Intelligent
          image loading</p>
            <div className={projects.descriptionButtons}>
              <a>DEMO</a>
              <a>CODE</a>
            </div>
            <ul className={projects.usedItems}>
              <li>GATSBY</li>
              <li>REACT</li>
              <li>SCSS</li>
            </ul>
          </div>
        </div>
        <div className={projects.lineSpace}></div>
        <div className={projects.project}>
          <div className={projects.screenShotsWeather}>
            <img className={projects.imgMd} src={require("./images/WeatherSite/tabletWeatherSite.png")}></img>
            <img className={projects.imgSm} src={require("./images/WeatherSite/mobileWeatherSite.png")}></img>
          </div>
          <div className={projects.contentContainer}>
            <div className={projects.titleContainer}>
              <h2>WEATHER APP</h2>
            </div>
            <p className={projects.paragraph}>Built with Gatsby which uses ReactJS components.
            Performance isn’t optional, it's built in, with
            improved loading time by code splitting. Intelligent
          image loading</p>
            <div className={projects.descriptionButtons}>
              <a>DEMO</a>
              <a>CODE</a>
            </div>
            <ul className={projects.usedItems}>
              <li>HTML</li>
              <li>JAVASCRIPT</li>
              <li>SCSS</li>
              <li>OPENWEATHER API</li>
            </ul>
          </div>
        </div>
        <div className={projects.lineSpace}></div>
        <div className={projects.thirdProject}>
          <div className={projects.screenShots}>
            <img className={projects.imgMd} src={require("./images/GiphyWebsite/tabletGiphySite.png")}></img>
            <img className={projects.imgSm} src={require("./images/GiphyWebsite/mobileGiphySite.png")}></img>
          </div>
          <div className={projects.contentContainer}>
            <div className={projects.titleContainer}>
              <h2>GIFSPOT</h2>
            </div>
            <p className={projects.paragraph}>Built with Gatsby which uses ReactJS components.
            Performance isn’t optional, it's built in, with
            improved loading time by code splitting. Intelligent
          image loading</p>
            <div className={projects.descriptionButtons}>
              <a>DEMO</a>
              <a>CODE</a>
            </div>
            <ul className={projects.usedItems}>
              <li>HTML</li>
              <li>JAVASCRIPT</li>
              <li>SCSS</li>
              <li>GIPHY API</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
