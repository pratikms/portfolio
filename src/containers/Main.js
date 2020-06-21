import React, { Component } from "react"

import Header from "../components/header/Header"
import Greeting from "./greeting/Greeting"
import About from "./about/About"
import Experience from "./experience/Experience"
import Work from "./work/Work"
import Blogs from "./blogs/Blogs"
import Contact from "./contact/Contact"
import Footer from "../components/footer/Footer"
import "./Main.css"

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <About />
        <Experience />
        <Work />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    )
  }
}
