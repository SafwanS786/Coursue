import React, { useEffect, useState } from "react";
import aboutImg from "../img/c_image.jpg";
import "../styles/about.css";

export default function About() {
  const [project, setProject] = useState(0);

  const ProjectHandle = (e) => {
    setProject(e.target.value);
  };
  useEffect(() => {
    let start = 0;
    const end = 678;
    const duration = 2000;
    const IncrementTime = Math.floor(duration / end);
    let counter = setInterval(() => {
      start += 1;
      setProject(start);
      if (start === end) {
        clearInterval(counter);
      }
    }, IncrementTime);
    return () => clearInterval(counter); // cleanup
  }, []);
  const [Exp, setExp] = useState(0);

  const YearsHandle = (e) => {
    setExp(e.target.value);
  };
  useEffect(() => {
    let start_y = 0;
    const end_y = 10;
    const durationTime = 3000;
    const IncrementTime_y = Math.floor(durationTime / end_y);

    let counter_y = setInterval(() => {
      start_y += 1;
      setExp(start_y);
      if (start_y === end_y) {
        clearInterval(counter_y);
      }
    }, IncrementTime_y);
    return () => clearInterval(counter_y);
  }, []);

  const [client, setClient] = useState(0);
  const handleClient = (e) => {
    setClient(e.target.value);
  };

  useEffect(() => {
    let start_c = 0;
    const end_c = 98;
    const durationTime_c = 3000;
    const Increment_c = Math.floor(durationTime_c / end_c);

    let counter_c = setInterval(() => {
      start_c += 1;
      setClient(start_c);
      if (start_c === end_c) {
        clearInterval(counter_c);
      }
    }, Increment_c);
    return () => clearInterval(counter_c);
  }, []);

  return (
    <section className="container about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="dif">
            <span className="about-label">ABOUT US</span>
            <h2>We Craft Digital Experiences That Drive Results</h2>
            <p>
              We're a creative team focused on designing and building digital
              experiences that are both beautiful and functional. Our goal is to
              help brands stand out and connect with their audience.
            </p>
            <button className="about-btn">Read More</button>
          </div>
          <div className="numb">
            <div>
              <h1 onClick={ProjectHandle}>{project}+</h1>
              <p id="cp">Complete Projects</p>
            </div>
            <div>
              <h1 onClick={YearsHandle}>{Exp}+</h1>
              <p id="cp">Years of Experience</p>
            </div>
            <div>
              <h1 onClick={handleClient}>{client}%</h1>
              <p id="cp">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img
            src={aboutImg}
            alt="About Us"
            // style={{ height: "840px", width: "590px" }}
          />
        </div>
      </div>
    </section>
  );
}
