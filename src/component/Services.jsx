import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/serivces.css";
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
  {
    icon: frame1Img,
    title: "Architectural Design",
    description:
      "Innovative designs that balance aesthetics and functionality.",
  },
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
  {
    icon: frameImg,
    title: "General Construction",
    description:
      "We handle full-scale building projects with precision and safety.",
  },
  {
    icon: frame1Img,
    title: "Architectural Design",
    description:
      "Innovative designs that balance aesthetics and functionality.",
  },
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
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container services_main">
      <motion.p
        className="our_s"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        OUR SERVICES
      </motion.p>
      <motion.h1
        className="services_title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        What We Offer
      </motion.h1>
      <Slider {...settings}>
        {servicesData.map((service, index) => (
          <motion.div
            className="service_card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.1,
              y: -1,
              boxShadow: "0 8px 2px rgba(0,0,0,0.2)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="item_card">
              <motion.div
                className="logo"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img src={service.icon} alt={service.title} />
              </motion.div>
              <div className="service_content">
                <motion.h3
                  className="gen"
                  whileHover={{ color: "#d16751" }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <p className="service_p">{service.description}</p>
                <motion.a
                  className="explore"
                  href="#"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  Explore More <span className="arrow">→</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}
