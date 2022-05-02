import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="about-x">
      <div className="brand-second">
        <div data-aos="fade-right" className="about-brand-x">
          <span>little about myself</span>
        </div>
      </div>
      <div className="content-x">
        <div className="about-left">
          <p>I use a creative approach to problem solve.</p>
          <p>I am a dependable person who is great at time management.</p>
          <p>
            In the role, I identified a need for a new system and, with
            management backing, it has since been implemented.
          </p>
        </div>
        <div className="about-right">
          <img className="my-img" src="IMG_1544.jpg" alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default About;
