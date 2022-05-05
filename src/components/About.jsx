import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="snap-two">
      <div className="content-x">
        <div data-aos="fade-up" className="about-left">
          <div className="brand-second-z-text">
            <div className="brand-second-z">
              <div data-aos="fade-right" className="about-brand-x">
                <span>L ittle about myself</span>
              </div>
            </div>
            <p>&bull; I use a creative approach to problem solve.</p>
            <p>
              &bull;I am a dependable person who is great at time management.
            </p>
            <p>
              &bull; In the role, I identified a need for a new system and, with
              management backing, it has since been implemented.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="about-right">
          <img className="my-img" src="IMG_1544.jpg" alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default About;
