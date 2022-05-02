import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="about ">
      <div data-aos="flip-left" className="brand-second">
        <div className="about-brand">
          <span>little about myself</span>
        </div>
      </div>
    </div>
  );
}

export default About;
