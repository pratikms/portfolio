import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog }) {

  function openBlogNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <div className="container">
        <div className="square" onClick={() => openBlogNewTab(blog.url)}>
          <img src={blog.image} alt="blog" className="blog-card-image mask" />
          <div className="blog-card-title">{blog.title}</div>
          <p className="blog-card-subtitle">{blog.description}</p>

          <div>
            {/* <a href={blog.url} target="_" class="button">
              Read More
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
