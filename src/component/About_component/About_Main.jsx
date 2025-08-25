import React from "react";
import "../../Styles/About_Style/About_first_part.css";
import About_Img from "../About_component/img/About_Img.png";

export default function About_Main() {
  return (
    <div>
      <div
        className="Main_About_us"
        style={{ backgroundImage: `url(${About_Img})` }}
      >
        <div className="ovr">
          <h1 className="title main_content">About Us</h1>

          <p className="breadcrumb">Home/About us</p>
        </div>
      </div>
    </div>
  );
}
