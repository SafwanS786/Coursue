import React from "react";
import aboutImg from "../img/c_image.jpg";
import "../styles/about.css";

export default function About() {
  return (
    <section className="container about-section">
      <div className="about-container">
        <div className="about-content">
          <span className="about-label">ABOUT US</span>
          <h2>We Craft Digital Experiences That Drive Results</h2>
          <p>
            We're a creative team focused on designing and building digital
            experiences that are both beautiful and functional. Our goal is to
            help brands stand out and connect with their audience.
          </p>
          <button className="about-btn">Read More</button>
          <div className="numb">
            <div>
              <h1>678+</h1>
              <p id="cp">Complete Projects</p>
            </div>
            <div>
              <h1>10+</h1>
              <p id="cp">Years of Experience</p>
            </div>
            <div>
              <h1>98%</h1>
              <p id="cp">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img
            src={aboutImg}
            alt="About Us"
            style={{ height: "840px", width: "590px" }}
          />
        </div>
      </div>
    </section>
  );
}
