import React from "react";
import "../Styles/Home_Style/footer.css";
import f_logo from "../component/Home_component/img/Footer_logo.png";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Acc from "../component/Home_component/Footer_Acc";
export default function Footer() {
  return (
    <div className="Main_Footer_class">
      <div className="Footer_Logo">
        <img src={f_logo} />
        {/* <div className="Footer_para"> */}
        <p id="foot_para">
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
      <Acc title="Quick Link">
        <nav className="Footer_nav">
          <ul>
            <li>
              <a href="/home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/about_us">About Us</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </nav>
      </Acc>

      <Acc title="Quick Services">
        <ul>
          <li>General Construction</li>
          <li>Architectural Design</li>
          <li>Site Supervision</li>
          <li>Renovation Services</li>
          <li>Commercial Projects</li>
          <li>Residential Buildings</li>
        </ul>
      </Acc>

      <Acc title="Contact Us">
        <ul className="footer-contact">
          <li>
            <FaMapMarkerAlt /> <p>123 Health Ave, Wellness City, ST 00000</p>
          </li>
          <li>
            <FaPhoneAlt /> <p>(800) 123-4567</p>
          </li>
          <li>
            <FaEnvelope />
            <p> info@generalhospital.com</p>
          </li>
        </ul>
      </Acc>
    </div>
  );
}
