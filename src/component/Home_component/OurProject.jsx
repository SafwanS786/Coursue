import React from "react";
import "../../Styles/Home_Style/OurProject.css";
import { motion } from "framer-motion";
import ser from "../Home_component/img/ser_b.png";
import villa from "../Home_component/img/residential-modern-villa.png";
import work from "../Home_component/img/work.png";
export default function OurProject() {
  const Projects = [
    {
      icon: ser,
      alt: "Services",
      para: "Commercial",
      Proj_head: "Service Building ",
      Arrow: "→",
    },
    {
      icon: villa,
      alt: "Villa",
      para: "Residential",
      Proj_head: "Modern Villa Renovation ",
      Arrow: "→",
    },
    {
      icon: work,
      alt: "Work",
      para: "Construction",
      Proj_head: "Worksite Project ",
      Arrow: "→",
    },
  ];
  return (
    <div className="container main_our">
      <div className="our_project">
        <div className="content_p">
          <motion.p
            id="para_our"
            initial={{ opacity: 0, y: -20 }} // start 100px to the right
            whileInView={{ y: 0, opacity: 1 }} // move to normal position
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Projects
          </motion.p>
          <motion.h1
            id="head_our"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Projects We've Delivered
          </motion.h1>
        </div>
        <div className="imge">
          {Projects.map((project, index) => {
            return (
              <div className="image-card" key={index}>
                <img src={project.icon} alt={project.alt} />
                <div className="overlay">
                  <p>{project.para}</p>
                  <h3>
                    {project.Proj_head}{" "}
                    <span className="arr">{project.Arrow}</span>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
