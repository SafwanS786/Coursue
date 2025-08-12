import React from "react";
import "../Styles/News.css";
import transform from "../img/Transformative.png";
import model from "../img/Modern.png";
import Top from "../img/Top.png";
export default function LatestNews() {
  return (
    <div className="latest-news">
      <p id="news">LATEST NEWS</p>
      <h1 id="news_para">Stay Updated With Our Blog</h1>
      <div className="news_img">
        <div className="Transformative_Approaches">
          <img src={transform} alt="Transformative" />
          <div className="content_news">
            <p>Transformative Approaches in</p>
            <hr id="h"/>
          </div>
        </div>
        <div className="Modern">
          <img src={model} />
        </div>
        <div className="top">
          <img src={Top} />
        </div>
      </div>
    </div>
  );
}
