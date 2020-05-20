import React from "react"
import { Fade } from "react-reveal"

import "./Greeting.css"
import SocialMedia from "../../components/socialMedia/SocialMedia"
import Button from "../../components/button/Button"
import { greeting } from "../../portfolio"

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Get in touch" href="mailto:contact@pratikms.com" />
                <Button text="Resume" newTab={true} href={greeting.resumeLink} />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img alt="greeting" src={require("../../images/manOnTable.svg")}></img>
          </div>
        </div>
      </div>
    </Fade>
  )
}
