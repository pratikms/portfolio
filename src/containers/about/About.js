import React from "react"
import { Fade } from "react-reveal"

import "./About.css"
import SoftwareSkills from "../../components/softwareSkills/SoftwareSkills"
import { skillsSection } from "../../portfolio"

export default function About() {
  return (
    <div className="main" id="about">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <img alt="Working" src={require("../../images/developerActivity.svg")}></img>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className="skills-heading">{skillsSection.title} </h1>
            <p className="subTitle skills-text-subtitle">{skillsSection.subTitle}</p>
            <p className="subTitle skills-text-subtitle">{skillsSection.skillsPreamble}</p>
            <SoftwareSkills />
          </div>
        </Fade>
      </div>
    </div>
  )
}
