import React from "react"

const Contact = () => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input placeholder="Your Name..." type="text" name="name" />
      <button type="submit">Send</button>
    </form>
  )
}

export default Contact
