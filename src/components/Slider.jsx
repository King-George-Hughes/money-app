import React from "react";

const Slider = () => {
  return (
    <>
      <div className="card text-center">
        <img src="../img/pic-1.png" alt="" className="slider--img" />
        <h4 className="fw-bold fs-2">Hydee Pichai</h4>
        <h2 className="small fs-3 my-3 fw-normal">The Philippines</h2>
        <img src="../img/stars.svg" alt="" className="slider--rating" />
        <p className="text-muted fs-2 mt-4">
          Sendwave is so fast and convenient to use when I want to send money to
          the Philippines. I use them because they have no fees and their rates
          are amazing.
        </p>
        <button className="slider-btn btn--left">{"<"}</button>
        <button className="slider-btn btn--right">{">"}</button>
      </div>
    </>
  );
};

export default Slider;
