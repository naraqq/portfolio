import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function ContactMe() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="contact">
      <div className="brand-second">
        <div data-aos="fade-right" className="about-brand">
          <span style={{ color: "white" }}>Hire me</span>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
