import React, { useEffect, useState, useRef } from "react";
import Aos from "aos";
import emailjs from "@emailjs/browser";
import "aos/dist/aos.css";

function ContactMe() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9wukfyc",
        "template_4h8amtb",
        form.current,
        "xQ54u8iGFN3QtNfiX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
  });
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  console.log(toSend);

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
            <form ref={form} onSubmit={handleSubmit}>
              <div className="input-t" data-aos="fade-up">
                <div className="input-container">
                  <input
                    name="to_name"
                    value={toSend.to_name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    type="text"
                    minLength={3}
                  />
                </div>
                <div className="input-container">
                  <input
                    placeholder="Email address"
                    type="email"
                    name="from_name"
                    value={toSend.from_name}
                    onChange={handleChange}
                  />
                </div>
                <textarea
                  name="message"
                  value={toSend.message}
                  onChange={handleChange}
                  className="textarea"
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
