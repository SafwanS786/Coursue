import React from "react";
import About_Main from "../component/About_component/About_Main";
import About_Future from "../component/About_component/About_Future";
import Mission from "../component/About_component/Mission";
import Choose from "../component/About_component/Choose";
import Status from "../component/About_component/Status";
import Asked_Que from "../component/About_component/Asked_Que";
import Team from "../component/About_component/Team";
import Partners from "../component/About_component/Partners";

export default function AboutPage() {
  return (
    <div>
      <About_Main />
      <About_Future />
      <Mission />
      <Choose />
      <Asked_Que />
      <Status />
      <Team />
      <Partners />
    </div>
  );
}
