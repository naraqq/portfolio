import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Main from "./components/Main";
import Top from "./components/Top";
import About from "./components/About";
import ContactMe from "./components/Contact";
import axios from "axios";
function App() {
  let ref = useRef(0);
  useEffect(() => {
    ref.current = ref.current + 1;
    changeBackground();
    window.addEventListener("scroll", changeBackground);

    axios
      .get(`http://localhost:3003/`)
      .then((res) => res.json)
      .then((res) => console.log(res));
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    window.addEventListener("scroll", scrollToEl);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [shownav, setShownav] = useState(true);
  const changeBackground = () => {
    if (window.scrollY >= 33) {
      setShownav(true);
    } else {
      setShownav(false);
    }
  };

  const scrollToEl = () => {};

  return (
    <div
      className={
        shownav && ref.current > 1
          ? "main"
          : "re-work" && ref.current <= 1
          ? "on-render"
          : "re-work"
      }
      id="totalarea"
    >
      <div className="brand">
        <div className="brand-container">
          <span>Front-End</span>
        </div>
      </div>
      <Top />
      <About />
      <div className="spacer-x"></div>

      <Main />
      <div className="spacer"></div>
      {/* <div className="spacer-x"></div> */}
      <ContactMe />
    </div>
  );
}

export default App;
