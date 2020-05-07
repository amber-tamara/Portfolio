import React from "react"

const Contact = () => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <label>
        Name: <input placeholder="Your Name..." type="text" name="name" />
      </label>
      <button type="submit">Send</button>
    </form>
  )
}

export default Contact
