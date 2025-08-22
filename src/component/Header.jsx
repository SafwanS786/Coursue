import React, { useState } from "react";
import { motion } from "framer-motion";
import Header_logo from "../img/c_logo.jpg";
import "../styles/header.css";

export default function Header() {
  const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <header
      className="container main_header"
      // initial={{ y: 40, opacity: 0 }}
      // // animate={{ y: 0, opacity: 1 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header_flex">
        <div
          className="Header_logo_class"
          // initial={{ opacity: 0, scale: 0.8 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{ delay: 0.3, duration: 0.5 }}
        >
          <img src={Header_logo} alt="Company Logo" />
        </div>
        {/* <motion.div
          className="nav_bar"
          initial={{ y: 40, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        > */}
        <motion.button
          className="toggle_menu"
          initial={{ y: 40, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onClick={() => {
            return setMenuOpen(!MenuOpen);
          }}
          aria-expanded={MenuOpen}
          aria-controls="nav-menu"
          aria-label={MenuOpen ? "Close menu" : "Open menu"}
        >
          {MenuOpen ? "×" : "☰"}
        </motion.button>
        <nav className={`nav ${MenuOpen ? "active" : ""}`}>
          <motion.div
            className="nav_bar"
            initial={{ y: 40, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
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
          </motion.div>
        </nav>
      </div>
    </header>
  );
}
