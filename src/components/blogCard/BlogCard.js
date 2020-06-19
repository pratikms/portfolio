import React from "react"
import { Fade } from "react-reveal"

import "./BlogCard.css"

export default function BlogCard({ blog }) {

  function openBlogNewTab(url) {
    var win = window.open(url, "_blank")
    win.focus()
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div>
        <div className="container">
          <a href className="square" onClick={() => openBlogNewTab(blog.url)} onKeyDown={() => openBlogNewTab(blog.url)}>
            <img src={blog.image} alt="blog" className="blog-card-image mask" />
            <div className="blog-card-title">{blog.title}</div>
            <p className="blog-card-subtitle">{blog.description}</p>
          </a>
        </div>
      </div>
    </Fade>
  )
}
