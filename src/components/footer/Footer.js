import React from "react"
import { Fade } from "react-reveal"

import "./Footer.css"

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="footer-text">Made with <span role="img" aria-label="love">❤️</span> by Pratik Shivaraikar</p>
        {/* <p className="footer-text">© {new Date().getFullYear()}</p> */}
      </div>
    </Fade>
  )
}
