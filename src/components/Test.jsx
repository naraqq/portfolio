import React from "react";

import { useParallax } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";

const Test = () => {
  return (
    <>
      <div className="my-thing">
        <div className="bgGreen">
          <h1>Section 1</h1>
        </div>
        <div className="bgOrange">
          <h1>Section 2</h1>
        </div>
        <div className="bgBlue">
          <h1>Section 3</h1>
        </div>
        <div className="bgGrey">
          <h1>Section 4</h1>
        </div>{" "}
      </div>
    </>
  );
};

export default Test;
