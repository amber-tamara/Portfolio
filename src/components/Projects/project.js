import React from "react"
import "./project.css"
import lighthouse from "./lighthouse.mp4"

const Projects = () => {
  return (
    <div id="work" className="projects--background">
      <div className="projects--box">
        <h2 className="heading">My Work</h2>
        <div className="projects first--project">
          <div className="project--wrapper">
            <div className="content--container">
              <h2>ANNETTE'S ART</h2>
              <p className="content__paragraph">I built this website for my Mum,
              to create an online presnce to display her artwork. With her site
              being heavily image based. I used gatsby for the tools its has to
              manage images, one of the tools being "gatsby-image" which produces
              respnsive images, by creating mutiple image resolutions and letting
              the browser pick the appropriate size depending on the device requesting
              the web page. Lazy loading images speed up initial page load and save
              bandwidth. I've used the blur up and tracedSVG effect to show a preview
              of the image while it loads, this gives the image a smooth transition
              before the image has been loaded and prevents image jumps.</p>
              <ul className="content__tools">
                <li>GATSBY</li>
                <li>REACT</li>
                <li>SCSS</li>
              </ul>
            </div>
            <div className="image_button_wrapper">
              <img className="img__md" src={require("./images/ArtWebsite/tabbby.png")} alt="art website preview"></img>
              <div className="content__buttons">
                <a href="https://competent-lamarr-421e1b.netlify.app/" target="_blank">PREVIEW</a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects second--project">
          <div className="project--wrapper">
            <div className="content--container">
              <h2>WEATHER APP</h2>
              <p className="content__paragraph">User can search the current weather. Optimized using Google Lighthouse,
              an SEO tool featured in Chrome. Following googles guidelines. I improved the sites overall performance,
              scoring 100 in performance, accessibility, best practices and SEO, both on mobile and desktop. I achieved
              this by pre loading fonts, executing Javascript when the page has finished parsing and reducing the file
              size of CSS and JavaScript using  Minification and loading the background image using picture tags to
               correctly size the images.</p>
              <video width="320px" height="240" autoPlay="autoplay" muted="" loop="loop" preload="auto" playsInline className="lighthouse_video">
                <source type="video/mp4" src={lighthouse}></source>
              </video>
              <ul className="content__tools">
                <li>HTML</li>
                <li>JAVASCRIPT</li>
                <li>SCSS</li>
                <li>OPENWEATHER API</li>
                <li>WEBPACK</li>
              </ul>
            </div>
            <div className="image_button_wrapper">
              <img className="img__md" src={require("./images/WeatherSite/tabi.png")} alt="weather website preview"></img>
              <div className="content__buttons">
                <a href="https://priceless-clarke-1f2a18.netlify.app/" target="_blank">PREVIEW</a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects third--project">
          <div className="project--wrapper">
            <div className="content--container">
              <h2>GIFSPOT</h2>
              <p className="content__paragraph">The user can search Gif's, enlarge them in a lightbox
              and share them with their friends, through social media. I used Javascript to integrate
              data from Giphy's API, when a word or phrase is typed in by the user and submitted, a query
              is sent via the api call, which returns the images and is displayed using a columned layout.
              When the user scroll's to the bottom of the page, a scroll event is trigured, which then load's gif's,
              creating an infinite scroll, to avoid a page refresh.</p>
              <ul className="content__tools">
                <li>HTML</li>
                <li>JAVASCRIPT</li>
                <li>SCSS</li>
                <li>GIPHY API</li>
                <li>WEBPACK</li>
              </ul>
            </div>
            <div className="image_button_wrapper">
              <img className="img__md" src={require("./images/blue.png")} alt="giph website preview"></img>
              <div className="content__buttons">
                <a href="https://amber-tamara.github.io/GIF.SPOT/" target="_blank">PREVIEW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Projects
