import React from "react";
import "../Styles/OurProject.css";
import ser from "../img/ser_b.png";
import villa from "../img/residential-modern-villa.png";
import work from "../img/work.png";
export default function OurProject() {
  const Projects = [
    {
      icon: ser,
      alt: "Services",
      para: "Commercial",
      Proj_head: "Service Building →",
    },
    {
      icon: villa,
      alt: "Villa",
      para: "Residential",
      Proj_head: "Modern Villa Renovation →",
    },
    {
      icon: work,
      alt: "Work",
      para: "Construction",
      Proj_head: "Worksite Project →",
    },
  ];
  return (
    <div className="container main_our">
      <div className="our_project">
        <div className="content_p">
          <p id="para_our">Our Projects</p>
          <h1 id="head_our">Projects We've Delivered</h1>
        </div>
        <div className="imge">
          {Projects.map((project, index) => {
            return (
              <div className="image-card" key={index}>
                <img src={project.icon} alt={project.alt} />
                <div className="overlay">
                  <p>{project.para}</p>
                  <h3>{project.Proj_head}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
