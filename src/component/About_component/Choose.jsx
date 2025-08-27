import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react"; // icon library (lucide-react)
import "../../Styles/About_Style/Choose.css";
import chs from "../About_component/img/chs.jpg";
import ch4 from "../About_component/img/ch4.jpg";
import ch2 from "../About_component/img/ch2.jpg";
import chs2 from "../About_component/img/chs2.avif";
import chs3 from "../About_component/img/chs3.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Choose() {
  const [showSlider, setShowSlider] = useState(false);
  const [setting, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  });

  // ✅ Force slider re-render after mount to fix F5 breakpoint issue
  useEffect(() => {
    setShowSlider(true);
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 1 }));
      } else if (window.innerWidth < 768) {
        setSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 2 }));
      } else if (window.innerWidth < 1024) {
        setSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 2 }));
      } else {
        setSettings((prevSettings) => ({ ...prevSettings, slidesToShow: 4 }));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const points = [
    "Experienced & Professional Team",
    "Quality Work with Modern Tech.",
    "On-Time Project Delivery",
    "Transparent & Fair Pricing",
    "24/7 Customer Support",
  ];
  const pht = [
    {
      icon: chs,
    },
    {
      icon: ch4,
    },
    {
      icon: chs3,
    },
    {
      icon: ch2,
    },
    {
      icon: chs2,
    },
  ];

  return (
    <div className="chs_main">
      <section className="why-choose-us">
        <div className="Main_Part_Chs">
          <div className="container">
            <h2 className="section-title">Why Choose Us</h2>
            <h1 className="section-subtitle">
              We stand apart by delivering excellence in every project.
            </h1>

            <div className="points-grid">
              {points.map((item, index) => (
                <div className="point-card" key={index}>
                  <CheckCircle className="icon" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            {/* <div className="clt">
              <p>
                We stand out by delivering more than just exceptional results -
                we offer a partnership built on trust, reliability and a shared
                commitment to success. Here’s why clients continue to choose us:{" "}
              </p>
            </div> */}
          </div>
          {showSlider && (
            <Slider {...setting}>
              {pht.map((item_pht, index_pht) => (
                <div className="container down_Part" key={index_pht}>
                  <img src={item_pht.icon} alt="Choose_us" />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </section>
    </div>
  );
}
