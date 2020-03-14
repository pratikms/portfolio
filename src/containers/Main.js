import React, { Component } from "react"

import Header from "../components/header/Header"
import Greeting from "./greeting/Greeting"
import Skills from "./skills/Skills"
// import Projects from "./projects/Projects";
// import Blogs from "./blogs/Blogs";
// import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer"
import "./Main.css"

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        {/* <Projects />
        <Blogs />
        <Contact /> */}
        {/* <h1>Hello, world!</h1> */}
        <Footer />
      </div>
    );
  }
}
