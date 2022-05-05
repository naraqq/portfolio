import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function ContactMe() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

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
            <form
              method="POST"
              enctype="multipart/form-data"
              name="EmailForm"
              action="https://formsubmit.co/gankhuyagnarmandakh2@gmail.com"
              onSubmit={handleSubmit}
            >
              <div className="input-t" data-aos="fade-up">
                <div className="input-container">
                  <input
                    placeholder="Your Name"
                    type="text"
                    minLength={3}
                    name="name"
                    required
                  />
                </div>
                <div className="input-container">
                  <input
                    placeholder="Email address"
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <textarea
                  className="textarea"
                  name="textarea"
                  placeholder="Got a question or proposal, or just want
                  to say hello? Go ahead."
                  id=""
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div data-aos="fade-up">
                <button type="submit" className="submit-button">
                  Send
                </button>
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
