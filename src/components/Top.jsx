import React, { useEffect, useState } from "react";

function Top() {
  const [show, setShow] = useState(false);
  const [showX, setShowX] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", showElement);
  });
  const showElement = () => {
    if (window.scrollY >= 33) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  console.log(showX);
  return (
    <div className="snap-one">
      <div className="brand">
        <div className="brand-container">
          <span>Front-End</span>
        </div>
      </div>
      <div className={showX ? "top-container-dis" : "top-container"}>
        <h1 className={show ? "top-container-h1" : "top-container-h1-dis"}>
          <span>Hello, I'm Nara</span>, <br></br>a Software Developer currently
          living in
          <br></br>
          Ulaanbaator, Mongolia.
        </h1>
      </div>
    </div>
  );
}

export default Top;
