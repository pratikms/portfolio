import React from "react"
import { Fade } from "react-reveal"

import "./Header.css"

function Header() {

  const loc = typeof window !== `undefined` ? window.location.origin : `#`

  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <a href={`${loc}`} className="logo">
            <span className="logo-name">PRATIKMS</span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  )
}
export default Header
