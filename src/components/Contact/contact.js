import React from "react"
import contact from "./contact.module.css"

const Contact = () => {
  return (
    <div className={contact.body}>
      <div className={contact.button}>
        <img className={contact.email} src={require("./email.svg")}></img>
      </div>
      <h2 className={contact.title}>GET IN TOUCH!</h2>
      <p>
        Whether you have an idea for a project or just want to chat,
        <br /> feel free to shoot me an email!
      </p>
      <div className={contact.button}>
        <a
          className={contact.emailButton}
          href="mailto:ambertjansen@gmail.com"
          target="_blank"
        >
          {" "}
          Say Hello
        </a>
      </div>
    </div>
  )
}

export default Contact
