import React from "react";
import "../Styles/footer.css";
import f_logo from "../img/Footer_logo.png";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div className="Main_Footer_class">
      <div className="Footer_Logo">
        <img src={f_logo} />
        {/* <div className="Footer_para"> */}
        <p>
          we’re committed to elevating the construction experience for our
          clients.
        </p>
        <div className="social-icons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      {/* </div> */}
      <div className="Footer_column">
        <p>Quick Link</p>
        <nav className="Footer_nav">
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
              <a href="/blog">BLOG</a>
            </li>
          </ul>
        </nav>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
