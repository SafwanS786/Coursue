import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import frameImg from "../img/Frame.png";
import frame1Img from "../img/Frame1.png";
import frame2Img from "../img/Frame (2).png";
import frame3Img from "../img/Frame (3).png";

const servicesData = [
  {
    icon: frameImg,
    title: "General Construction",
    description:
      "We handle full-scale building projects with precision and safety.",
  },
  // {
  //   icon: frame1Img,
  //   title: "Architectural Design",
  //   description:
  //     "Innovative designs that balance aesthetics and functionality.",
  // },
  {
    icon: frame2Img,
    title: "Commercial Projects",
    description: "Professional execution of large-scale commercial builds.",
  },
  {
    icon: frame3Img,
    title: "Renovation Services",
    description: "Transforming spaces while maintaining structural integrity.",
  },
];

export default function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="services_main">
      <p className="our_s">OUR SERVICES</p>
      <h1 className="services_title">What We Offer</h1>
      <Slider {...settings}>
        {servicesData.map((service, index) => (
          <div className="service_card" key={index}>
            <div className="item_card">
              <div className="logo">
                <img src={service.icon} alt={service.title} />
              </div>
              <div className="service_content">
                <h3 className="gen">{service.title}</h3>
                <p className="service_p">{service.description}</p>
                <a className="explore" href="#">
                  Explore More <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
