import React from "react";
import "../../Styles/About_Style/Partners.css";
import House from "./img/Houselux.png";
import fur from "./img/fur.png";
import int from "./img/int.png";
import interior from "./img/intrior.png";
import sim from "./img/sim.png";

export default function Partners() {
  const photos = [
    {
      icon: House,
    },
    {
      icon: fur,
    },
    {
      icon: int,
    },
    {
      icon: interior,
    },
    {
      icon: sim,
    },
  ];
  return (
    <div className="container P_Main">
      <p>OUR PARTNERS</p>
      <h1>Trusted Collaborations That Strengthen Every Build</h1>
      <div className="par_img">
        {photos.map((item, index) => (
          <div className="sld" key={index}>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
