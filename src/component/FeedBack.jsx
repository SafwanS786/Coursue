import React from "react";
import "../Styles/Feedback.css";
import Ellipse from "../img/Ellipse.png";
import Ellipse1 from "../img/Ellipse1.png";
export default function Feedback() {
  return (
    <div className="Feed_main">
      <p id="feed_para">TESTIMONIAL</p>
      {/* <p>TESTIMONIAL</p> */}
      <h1 id="head_para">Client Feedback and Success Stories</h1>
      <div className="feedback-cards">
        <div className="card">
          <div className="in_line">
            <img src={Ellipse} alt="David Anthony" />
            <p>
              <strong>David Anthony</strong> - Client
            </p>
          </div>
          <p>
            "BuildGo delivered exceptional service. They met every deadline, and
            the quality of their work exceeded our expectations."
          </p>
          <div className="rating">★★★★★</div>
        </div>
        <div className="card">
          <div className="in_line">
            <img src={Ellipse1} alt="Clara Engineer" />
            <p>
              <strong>Clara Engineer</strong> - Engineer
            </p>
          </div>
          <p>
            "From start to finish, BuildGo delivered exceptional service. They
            communicated well, met every deadline, and the quality of their work
            exceeded our expectations."
          </p>
          <div className="rating">★★★★★</div>
        </div>
        <div className="card">
          <div className="in_line">
            <img src={Ellipse} alt="Clara Engineer" />
            <p>
              <strong>Clara Engineer</strong> - Engineer
            </p>
          </div>
          <p>
            "From start to finish, BuildGo delivered exceptional service. They
            communicated well, met every deadline, and the quality of their work
            exceeded our expectations."
          </p>
          <div className="rating">★★★★★</div>
        </div>
      </div>
    </div>
  );
}
