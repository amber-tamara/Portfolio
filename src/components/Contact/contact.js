import React from "react"
import contact from "./contact.module.css"

const Contact = () => {
  return (
    <div className={contact.body}>
      <div className={contact.container}>
        <h2 className={contact.title}>Contact me</h2>
        <div className={contact.wrapper}>
          <ul className={contact.details}>
            <li>0777111556</li>
            <li>ambee@gmail.com</li>
          </ul>
          <form
            className={contact.contact}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <p>
              <label>FULL NAME*</label>
              <input name="name" placeholder="Your Full Name" type="text" />
            </p>
            <p>
              <label>EMAIL ADRESS*</label>
              <input name="email" placeholder="Email address" type="email" />
            </p>
            <p className={contact.full}>
              <label>MESSAGE*</label>
              <textarea name="message" placeholder="Message" rows="5" />
            </p>
            <p className={contact.full}>
              <button>Send</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
