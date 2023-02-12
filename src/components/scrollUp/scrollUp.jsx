import React, { useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import "./scrollUp.css";

function ScrollUp() {
  const [scroll, setScroll] = useState(0);

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    setScroll(scrolled);
  });

  const style = {
    transform: `${scroll >= 100 ? "translate(0)" : ""}`,
  };
  return (
    <div className="scroll__container" style={style}>
      <BiArrowToTop />
    </div>
  );
}

export default ScrollUp;
