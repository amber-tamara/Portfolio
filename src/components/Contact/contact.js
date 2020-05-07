import React from "react"

const Contact = () => {
  return (
    <div>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="Your Name" type="text" />
        <input name="email" placeholder="name@name.com" type="email" />
        <textarea name="message" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Contact
