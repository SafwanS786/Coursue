import React from "react";
import "../Styles/choose.css";
import choseImg from "../img/chose.png";
import expImg from "../img/Exp.png";
import timeImg from "../img/TIme.png";
import clientImg from "../img/client.png";
import endImg from "../img/End.png";

const features = [
  {
    icon: expImg,
    title: "Experienced Professionals",
    description:
      "Our team brings decades of experience across commercial and residential projects.",
  },
  {
    icon: timeImg,
    title: "On-Time Delivery",
    description:
      "We follow strict project timelines without compromising quality.",
  },
  {
    icon: clientImg,
    title: "Client-Focused Approach",
    description:
      "We prioritize our client's needs at every stage of the project.",
  },
  {
    icon: endImg,
    title: "End-to-End Services",
    description:
      "From planning to completion, we handle every aspect of your project.",
  },
];

export default function Choose() {
  return (
    <div className="main_chs">
      <p className="label_chs">WHY CHOOSE US</p>
      <h1 className="head_chs">
        Delivering Quality Construction with Confidence
      </h1>
      <div className="content_chs1">
        <div className="img_chs">
          <img src={choseImg} alt="Why Choose Us" />
        </div>
        <div className="features_chs">
          {features.map((feature, index) => (
            <div className="text_chs" key={index}>
              <div className="exp">
                <img src={feature.icon} alt={feature.title} />
                <div>
                  <p className="head_exp">{feature.title}</p>
                  <p className="exp_para">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
