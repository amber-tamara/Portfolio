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
        <input name="name" placeholder="Your Name..." type="text" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Contact
