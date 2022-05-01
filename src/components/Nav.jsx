import React, { useEffect, useState } from "react";

function Nav() {
  const [show, setShow] = useState(false);
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

  return (
    <div className="top-container">
      <h1 className={show ? "top-container-h1" : "top-container-h1-dis"}>
        <span>Hello, I'm Nara</span>, <br></br>a Software Developer currently
        living in
        <br></br>
        Ulaanbaator, Mongolia.
      </h1>
    </div>
  );
}

export default Nav;
