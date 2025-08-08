import React from "react";
import logo from "../img/c_logo.jpg";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="main_header">
      <div className="container header_flex">
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="/home" className="active">
                HOME
              </a>
            </li>
            <li>
              <a href="/about_us">ABOUT US</a>
            </li>
            <li>
              <a href="/projects">PROJECTS</a>
            </li>
            <li>
              <a href="/portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="/blog">BLOG</a>
            </li>
            <li>
              <a href="/contact_us">CONTACT US</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
