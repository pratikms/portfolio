import React from "react"

import "./About.css"
import SoftwareSkills from "../../components/softwareSkills/SoftwareSkills"
import { skillsSection } from "../../portfolio"

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <div className="skills-image-div">
          <img alt="Working" src={require("../../images/developerActivity.svg")}></img>
        </div>
        <div className="skills-text-div">
          <h1 className="skills-heading">{skillsSection.title} </h1>
          <p className="subTitle skills-text-subtitle">{skillsSection.subTitle}</p>
          <p className="subTitle skills-text-subtitle">{skillsSection.skillsPreamble}</p>
          <SoftwareSkills />
        </div>
      </div>
    </div>
  )
}
