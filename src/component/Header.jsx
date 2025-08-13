import React, { useState } from "react";
import Header_logo from "../img/c_logo.jpg";
import "../styles/header.css";

export default function Header() {
  const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <header className="main_header">
      <div className="container header_flex">
        <div className="Header_logo_class">
          <img src={Header_logo} alt="Company Logo" />
        </div>
        <button
          className="toggle_menu"
          onClick={() => {
            return setMenuOpen(!MenuOpen);
          }}
          aria-expanded={MenuOpen}
          aria-controls="nav-menu"
          aria-label={MenuOpen ? "Close menu" : "Open menu"}
        >
          {MenuOpen ? "×" : "☰"}
        </button>
        <nav className={`nav ${MenuOpen ? "active" : ""}`}>
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
