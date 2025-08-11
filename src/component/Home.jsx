import React from "react";
import "../styles/home.css";
import img_main from "../img/image.jpg";

export default function Home() {
  return (
    <div className="main" style={{ width: "100%" }}>
      <section
        className="home-section"
        style={{ backgroundImage: `url(${img_main})` }}
      >
        <div className="container home_content">
          <h1>We Build What You Imagine</h1>
          <p>
            From concept to creation — delivering quality construction with
            precision and passion.
          </p>
          <button>Get a Free Quote</button>
        </div>
      </section>
    </div>
  );
}
