import React from "react"

import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer-div">
      <p className="footer-text">Made with <span role="img" aria-label="love">❤️</span> by Pratik Shivaraikar</p>
      <p className="footer-text">© {new Date().getFullYear()}</p>
    </div>
  )
}
