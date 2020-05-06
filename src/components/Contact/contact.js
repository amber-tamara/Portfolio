import React from "react"

const Contact = () => {
  return (
    <form name="contact" netlify>
      <p>
        <label>
          Name: <input placeholder="Your Name..." type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Email: <input placeholder="Your Email..." type="email" name="email" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}

export default Contact
