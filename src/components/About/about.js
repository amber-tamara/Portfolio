import React from "react"
import about from "./about.module.css";


const About = () => {


  return (
    <div
      data-sal="fade"
      data-sal-delay="100"
      data-sal-easing="ease"
      id="about" className={about.background}>
      <div
        className={about.sectionWrapper}>
        <div className={about.contentBox}>
          <div className={about.aboutWrapper}>
            <h2>Hey, I'm Amber</h2>
            <div className={about.line}></div>
            <p className={about.bio}>I'm a self-taught web developer with a passion for front end development and design. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences. I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code.
          </p>
            <p>
              When I'm not in front of a computer screen, I'm probably doing yoga, dancing, petting dogs, or learning a new song on my keyboard.
          </p>
          </div>
          <img className={about.picture} src={require('../../images/meam.png')} />
        </div>
      </div>
    </div>
  )
}

export default About
