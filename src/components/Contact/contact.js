import React from "react"
import contact from "./contact.module.css"

const Contact = () => {
  return (
    <div className={contact.wrapper}>
      <div className={contact.button}>
        <img className={contact.email} src={require("./email.svg")}></img>
      </div>
      <h2 className={contact.title}>GET IN TOUCH!</h2>
      <p className={contact.paragraph}>
        Whether you have an idea for a project or just want to chat, feel free
        to shoot me an email!
      </p>{" "}
      <div className={contact.formBox}>
        <form>
          <div className={contact.box1}>
            <h2>Contact Form</h2>
            <label>Name*</label>
            <input
              className={contact.input}
              type="text"
              name="firstname"
              type="hidden"
              name="bot-field"
            ></input>
          </div>
          <div className={contact.box1}>
            <label>Email*</label>
            <input
              className={contact.input}
              type="email"
              name="firstname"
              type="hidden"
              name="form-name"
              value="contact"
            ></input>
          </div>
          <div className={contact.box1}>
            <label>Message*</label>
            <textarea
              className={contact.input}
              name="message"
              cols="29"
              rows="5"
              required
            ></textarea>
          </div>
          <button className={contact.buttonn}>Send</button>
        </form>
        <div className={contact.detailsBox}>
          <ul className={contact.details}>
            <h2>Contact Details</h2>
            <li>ambertjansen@gmail.com</li>
            <li>0788859598</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
