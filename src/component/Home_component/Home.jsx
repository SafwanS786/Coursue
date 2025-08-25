import React from "react";
import "../../Styles/Home_Style/home.css";
import { motion } from "framer-motion";
import img_main from "./img/image.jpg";

export default function Home() {
  return (
    // <div className="main" style={{ width: "100%" }}>
    <section
      className="home-section"
      style={{ backgroundImage: `url(${img_main})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="home_content">
          <div className="hover_App">
            <h1>We Build What You Imagine</h1>
            <p>
              From concept to creation — delivering quality construction with
              precision and passion.
            </p>
          </div>

          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#b45643",
            }}
            whileTap={{ scale: 0.9 }}
          >
            Get a Free Quote
          </motion.button>
        </div>
      </motion.div>
    </section>
    // </div>
  );
}
