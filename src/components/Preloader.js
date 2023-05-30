import React from "react";
import Lottie from "react-lottie";
import codingAnimation from "./../../src/Assets/preloader.json";

function Preloader({ load }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: codingAnimation,
  };

  return (
    <div id={load ? "preloader" : "preloader-none"} className="preloader-container">
      {load ? (
        <div className="animation-container">
          <Lottie options={defaultOptions} />
        </div>
      ) : null}
    </div>
  );
}

export default Preloader;