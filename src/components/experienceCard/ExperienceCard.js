// import React, { useState, useEffect, createRef } from "react"
import React from "react"
import { Fade } from "react-reveal"

// import ColorThief from "colorthief"

import "./ExperienceCard.css"

export default function ExperienceCard({ cardInfo }) {

  // const [colorArrays, setColorArrays] = useState([])
  // const imgRef = createRef()

  // function getColorArrays() {
  //   const colorThief = new ColorThief()
  //   setColorArrays(colorThief.getColor(imgRef.current))
  // }

  // function rgb(values) {
  //   return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")"
  // }

  const GetDescBullets = ({ descBullets }) => {
    return descBullets ? descBullets.map((item) => <li className="experience-text-desc-points">{item}</li>) : null
  }

  function openCompanyInNewTab(url) {
    var win = window.open(url, "_blank")
    win.focus()
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div>
        <div className="experience-card" onClick={() => openCompanyInNewTab(cardInfo.companyHomepage)} onKeyDown={() => openCompanyInNewTab(cardInfo.companyHomepage)}>
          {/* <div style={{background: rgb(colorArrays) }} className="experience-banner"> */}
          <div className="experience-banner">
              <div className="experience-blurred_div"></div>
              <div className="experience-div-company">
  <h5 className="experience-text-company">{cardInfo.company}</h5>
              </div>
              
              {/* <img crossOrigin={"anonymous"} ref={imgRef} className="experience-roundedimg" src={cardInfo.companylogo} alt={cardInfo.company} onLoad={() => getColorArrays()}/> */}
              <img crossOrigin={"anonymous"} className="experience-roundedimg" src={cardInfo.companyLogo} alt={cardInfo.company} />
          </div>
          <div className="experience-text-details">
              <h5 className="experience-text-role">{cardInfo.role}</h5>
              <h5 className="experience-text-date">{cardInfo.date}</h5>
              <p className="experience-text-desc">{cardInfo.desc}</p>
              <ul>
                <GetDescBullets key={cardInfo.key} descBullets={cardInfo.descBullets} />
              </ul>
          </div>
        </div>
      </div>
    </Fade>
  )
}