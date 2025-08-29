import React, { useState, useEffect } from "react";
// import up from "../Home_component/img/uparrow.svg";
import arrow from "../Home_component/img/downarrow.svg";

export default function Footer_Acc({ title, children }) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // update when resizing
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // if desktop, keep it always open
  if (!isMobile) {
    return (
      <div className="Footer_column">
        <h4>{title}</h4>
        <div className="accordion-content">{children}</div>
      </div>
    );
  }
  return (
    <div className="Footer_column">
      {/*testing hatu <img
        style={{ color: "#FFF", backgroundColor: "aliceblue" }}
        src={arrow}
        alt="test"
        width="30"
      /> */}

      <button className="accordion-toggle" onClick={() => setOpen(!open)}>
        {title}
        <img
          style={{
            color: "#FFF",
            backgroundColor: "aliceblue",

            borderRadius: "30px",
          }}
          src={arrow}
          alt="toggle"
          className={`accordion-icon ${open ? "rotate" : ""}`}
        />
      </button>
      {open && <div className="accordion-content">{children}</div>}
    </div>
  );
}
// ⌄⬇️
{
  /* <span>{open ? "-" : "+"}</span> aa right che */
}
{
  /* <img {open ?src={down}:src={up}} /> */
}
{
  /* <img
          src={open ? down : up} // 👈 correct usage
          alt={open ? "Collapse" : "Expand"}
          className="accordion-icon" */
}
{
  /* /> */
}
