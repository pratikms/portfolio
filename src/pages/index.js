import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo/Seo"
import Main from "../containers/Main"
import '../styles/index.css'
import '../styles/font-awesome/css/all.css'


const IndexPage = () => (
  <>
    <SEO 
      title="Pratik Shivaraikar"
      desc="I'm a Software Engineer who loves solving real world problems. I love what I do, and am constantly honing my craft. Check out to know more!" 
    />
    <Main />
  </>
)

export default IndexPage
