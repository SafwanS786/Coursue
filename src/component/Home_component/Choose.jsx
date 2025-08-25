import React from "react";
import "../../Styles/Home_Style/choose.css";
import { motion } from "framer-motion";
import choseImg from "../Home_component/img/chose.png";
import expImg from "../Home_component/img/Exp.png";
import timeImg from "../Home_component/img/TIme.png";
import clientImg from "../Home_component/img/client.png";
import endImg from "../Home_component/img/End.png";

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
    <div className="container main_chs">
      <motion.p
        className="label_chs"
        initial={{ y: -20, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        WHY CHOOSE US
      </motion.p>
      <motion.h1
        className="head_chs"
        initial={{ y: 40, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Delivering Quality Construction with Confidence
      </motion.h1>
      <div className="content_chs1">
        <motion.div
          className="img_chs"
          initial={{ x: -100, opacity: 0 }} // start 100px to the right
          whileInView={{ x: 0, opacity: 1 }} // move to normal position
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={choseImg} alt="Why Choose Us" />
        </motion.div>
        {/*------------------------------------------------Down Part Start--------------------------------  */}
        <div className="features_chs">
          {features.map((feature, index) => (
            <div className="text_chs" key={index}>
              <div
                className="exp"
                // whileHover={{ rotate: 10, scale: 1.1 }} //bov must che
                // transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.img
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  src={feature.icon}
                  // style={{ width: "20px", height: "20px" }}
                />
                <div className="part_exp">
                  <motion.p
                    className="head_exp"
                    initial={{ x: 100, opacity: 0 }} // start 100px to the right
                    whileInView={{ x: 0, opacity: 1 }} // move to normal position
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {feature.title}
                  </motion.p>
                </div>
                <div>
                  <motion.p
                    className="exp_para"
                    initial={{ x: -100, opacity: 0 }} // start 100px to the right
                    whileInView={{ x: 0, opacity: 1 }} // move to normal position
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
