import React from "react"
import contact from "./contact.module.css"

const Contact = () => {
  return (
    <div>
      <h2 className={contact.title}>GET IN TOUCH!</h2>
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
        <label>FULL NAME*</label>
        <input name="name" placeholder="Your Full Name" type="text" />
        <label>EMAIL ADRESS*</label>
        <input name="email" placeholder="Email address" type="email" />
        <label>MESSAGE*</label>
        <textarea name="message" placeholder="Message" rows="5" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Contact
