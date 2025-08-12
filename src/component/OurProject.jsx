import React from "react";
import "../Styles/OurProject.css";
import ser from "../img/ser_b.png";
import villa from "../img/residential-modern-villa.png";
import work from "../img/work.png";
export default function OurProject() {
  return (
    <div className="main_our">
      <div className="our_project">
        <div className="content_p">
          <p id="para_our">Our Projects</p>
          <h1 id="head_our">Projects We've Delivered</h1>
        </div>
        <div className="imge">
          <img src={ser} />
          <img src={villa} />
          <img src={work} />
        </div>
      </div>
    </div>
  );
}
