import React, { useState } from "react"
import axios from "axios"
import contact from "./contact.module.css"
import Recaptcha from "react-recaptcha";
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby";

const Contact = () => {
  const data = useStaticQuery(graphql`{
    file(relativePath: {eq: "background.jpg"}) {
      id
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)

  const [click, setClick] = useState(false);
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }

  const clickHandler = function (e) {
    handleSubcribe()
  };

  function verifyCallback(response) {
    if (response) {
      setClick(true)
      console.log(click)
    }
  }

  function handleSubcribe() {
    if (click === true) {
      console.log("you have done it!")
    }
    else {
      console.log("please baby")
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/3a474f7f-1336-4a9f-8864-08bc495ae396",
      data: new FormData(form),
    })
      .then(r => {
        if (click === true) {
          handleServerResponse(true, "Thanks!", form)
          setClick(false)
          console.log("yay")
        }
      })
      .then(r => {
        if (click === false) {
          handleServerResponse(false, "No", form)
        }
      })
      .catch(r => {
        if (click === false) {
          handleServerResponse(false, "Please click reCaptcha", form)
          console.log(r)
        }
      })
  }

  function recaptchaLoaded() {
    console.log("loaded")
  }

  return (
    <BackgroundImage id="contact" fluid={data.file.childImageSharp.fluid} >
      <div
        className={contact.wrapper}>
        <div className={contact.button}>
        </div>
        <h2 className={contact.title}>Get In Touch</h2>
        <div className={contact.lineSpace}></div>
        <div className={contact.formBox}>
          <form className={contact.formLabels} onSubmit={handleOnSubmit} method="POST" data-netlify-recaptcha="true" data-netlify="true">
            <div className={contact.box1}>
              <label
                className={contact.input}
                htmlFor="name"
                required="required"
              >
                Name
              </label>
              <input
                className={contact.input}
                type="text"
                name="name"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label className={contact.input} 
              htmlFor="email">
                Email
              </label>
              <input
                className={contact.input}
                type="email"
                name="email"
                id="exampleInputName"
                required="required"
              />
            </div>
            <div className={contact.box1}>
              <label htmlFor='message'>Message</label>
              <textarea
                className={contact.input}
                name="message"
                cols="20"
                rows="5"
                required
              ></textarea>
            </div>
            <div className={contact.recaptcha}>
              <Recaptcha
                sitekey="6LfC_voZAAAAAJtOZ_OLGkru1ZHzlyjjhVIXB8_P"
                render="explicit"
                onloadCallback={recaptchaLoaded}
                verifyCallback={verifyCallback}
              />
            </div>
            <button
              type="submit"
              className={`${contact.btn} ${contact.btnPrimary}`}
              disabled={serverState.submitting}
              onClick={clickHandler}
            >
              Submit
            </button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Contact