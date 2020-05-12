import React from "react"
import contact from "./contact.module.css"

const Contact = () => {
  return (
    <div className="body">
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
        <input name="name" placeholder="Your Full Name" type="text" />
        <input name="email" placeholder="Email address" type="email" />
        <textarea name="message" placeholder="Message" rows="5" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Contact
