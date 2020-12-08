import React from "react"
import "./project.css"

const Projects = () => {
  return (
    <div className="projects--background">
      <div className="projects--box">
        <div className="header--box">
          <h2 className="heading">My Work</h2>
          <div className="header__underline"></div>
        </div>
        <div className="projects first--project">
          <div className="project--wrapper">
            <div className="project--images artsite--images">
              <img className="artimg__md" src={require("./images/ArtWebsite/tabbby.png")}></img>
              <img className="artimg__sm" src={require("./images/ArtWebsite/mobileArtSite.png")}></img>
            </div>
            <div className="content--container">
              <h2>ANNETTE'S ART</h2>
              <p className="content__paragraph">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className="content__buttons">
                <a>DEMO</a>
                <a>CODE</a>
              </div>
              <ul className="content__tools">
                <li>GATSBY</li>
                <li>REACT</li>
                <li>SCSS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="projects second--project">
          <div className="project--wrapper">
            <div className="project--images weathersite--images">
              <img className="img__md" src={require("./images/WeatherSite/tabi.png")}></img>
              <img className="img__sm" src={require("./images/WeatherSite/mob.png")}></img>
            </div>
            <div className="content--container">
              <h2>WEATHER APP</h2>
              <p className="content__paragraph">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className="content__buttons">
                <a>DEMO</a>
                <a>CODE</a>
              </div>
              <ul className="content__tools">
                <li>HTML</li>
                <li>JAVASCRIPT</li>
                <li>SCSS</li>
                <li>OPENWEATHER API</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects third--project">
          <div className="project--wrapper">
            <div className="project--images giphysite--images">
              <img className="img__md" src={require("./images/GiphyWebsite/gif.png")}></img>
              <img className="img__sm" src={require("./images/GiphyWebsite/cute.png")}></img>
            </div>
            <div className="content--container">
              <h2>GIFSPOT</h2>
              <p className="content__paragraph">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className="content__buttons">
                <a>DEMO</a>
                <a>CODE</a>
              </div>
              <ul className="content__tools">
                <li>HTML</li>
                <li>JAVASCRIPT</li>
                <li>SCSS</li>
                <li>GIPHY API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
