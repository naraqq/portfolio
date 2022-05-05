import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function ContactMe() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div title="x" data-aos="fade-up" className="contact">
      <div className="brand-second">
        <div className="about-brand">
          <div data-aos="fade-right">
            <span style={{ color: "white" }}>Contact me</span>
          </div>

          <div className="hire-content">
            <div data-aos="fade-up">
              <p>Send me a message !</p>
            </div>
            <form action="">
              <div className="input-t" data-aos="fade-up">
                <div className="input-container">
                  <input placeholder="Your Name" type="text" />
                </div>
                <div className="input-container">
                  <input placeholder="Email address" type="email" />
                </div>
                <textarea
                  className="textarea"
                  placeholder="Got a question or proposal, or just want
                  to say hello? Go ahead."
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </form>
            <div data-aos="fade-up" className="find-me">
              <h5>You can find me @ +976-97007910</h5>
              <h5>GankhuyagNarmandakh2@gmail.com</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
