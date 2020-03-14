import React from "react"

import "./Blog.css"
import BlogCard from "../../components/blogCard/BlogCard"
import Button from "../../components/button/Button"
import blogSection from "../../portfolio"

export default function Blogs() {
  return (
    <div className="main" id="blogs">
      <div className="blog-header">
        <h1 className="blog-header-text">{blogSection.title}</h1>
        <p className="subTitle blog-subtitle">{blogSection.subtitle}</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          {blogSection.blogs.map(blog => {
            return (
              <BlogCard
                blog={{
                  url: blog.url,
                  image: blog.image,
                  title: blog.title,
                  description: blog.description
                }}
                key={blog.url}
              />
            )
          })}
        </div>
      </div>
      <Button text={"Read More"} className="project-button" href="https://blog.pratikms.com" newTab={true} />
    </div>
  )
}
