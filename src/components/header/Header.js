import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <header className="header">
        <a href={`${window.location.href}`} className="logo">
          <span className="logo-name">PRATIKMS</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">About</a>
          </li>
          <li>
            <a href="#opensource">Work</a>
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
  );
}
export default Header;
