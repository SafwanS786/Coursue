import React from "react";
import "../Styles/getIn.css";
import { motion } from "framer-motion";
export default function GetInTouch() {
  return (
    <div className="container Get_main_class">
      {/* <h1>Hello Get</h1> */}
      <motion.p
        id="get_para"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        GET IN TOUCH
      </motion.p>
      <motion.h1
        id="get_heading"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Ready to Build With Us?
      </motion.h1>
      <motion.p
        className="get_subtext"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Have a project in mind? Let's make it happen. Our team is here to bring
        your vision to life.
      </motion.p>
      {/* <motion.button
        className="get_button"
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
        transition={{ duration: 0.3 }}
      >
        Contact Us 
      </motion.button> */}
    </div>
  );
}
