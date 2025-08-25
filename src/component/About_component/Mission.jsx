import React from "react";
import "../../Styles/About_Style/Mission.css";
import Mis_img from "../About_component/img/Mission.png";
export default function Mission() {
  return (
    <div className="container Mission">
      <div className="Mission_text">
        <p id="promise">OUR PROMISE</p>
        <h1 className="bld_M main_content">
          Crafting Structures with <br />
          Purpose, Passion & Precision
        </h1>
      </div>
      <div className=" Mission_Down_part">
        <div className="ph">
          <img src={Mis_img} alt="Mission Image" />
        </div>
        <div className="right-section">
          <div className="thr_label">
            <p id="msn">Our Mission</p>
            <p id="msn">Our Vision</p>
            <p id="msn">Our Approach</p>
          </div>
          <div className="Trust">
            <h1>Building Excellence, Delivering Trust</h1>
            <p>
              To deliver high-quality, sustainable, and innovative construction
              solutions that exceed client expectations, while ensuring safety,
              precision, and timely project delivery.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
