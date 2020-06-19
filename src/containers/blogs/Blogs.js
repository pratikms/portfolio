import React, { useState, useEffect } from "react"
// import React, { useState, useEffect, lazy, Suspense } from "react"
import ApolloClient, { gql } from "apollo-boost"
import { Fade } from "react-reveal"

import "./Blog.css"
import BlogCard from "../../components/blogCard/BlogCard"
import Button from "../../components/button/Button"
// import Loading from "../loading/Loading"
import { blogSection } from "../../portfolio"

export default function Blogs() {

  // const BlogCard = lazy(() => import("../../components/blogCard/BlogCard"))
  // const FailedLoading = () => null
  // const RenderLoader = () => <Loading />
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    getBlogs()
  }, [])

  function getBlogs() {

    const client = new ApolloClient({
      uri: "https://api.hashnode.com",
      request: operation => {
        operation.setContext({
          headers: {
            authorization: process.env.GATSBY_HASHNODE_ACCESS_TOKEN
          }
        })
      }
    })

    client
      .query({
        query: gql`
          {
            user(username: "pratikms") {
              publication {
                title
                posts {
                  title
                  brief
                  coverImage
                  slug
                  cuid
                  dateAdded
                }
              }
            }
          }
        `
      })
      .then(result => {
        setBlogs(result.data.user.publication.posts.slice(0, 6))
      })
      // .catch(function (error) {
      //   setBlogs("Error")
      // })
  }

  // if (!(typeof blogs === 'string' || blogs instanceof String)) {
  return (
    // <Suspense fallback={RenderLoader()}>
    <Fade bottom cascade duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p className="subTitle blog-subtitle">{blogSection.subtitle}</p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogs.map(blog => {
              return (
                <BlogCard
                  blog={{
                    url: `${blogSection.url}/${blog.slug}-${blog.cuid}`,
                    image: blog.coverImage,
                    title: blog.title,
                    description: blog.brief
                  }}
                  key={blog.cuid}
                />
              )
            })}
          </div>
        </div>
        <Button text={"Read More"} className="project-button" href={blogSection.url} newTab={true} />
      </div>
    </Fade>
    // </Suspense>
  )
  // } else {
  //   return(<FailedLoading />)
  // }
}
