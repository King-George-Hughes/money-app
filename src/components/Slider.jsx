import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { sliders } from "../Data/Data";

const Slider = () => {
  // const sliderClassName = "card text-center";
  const [slide, setSlide] = useState(sliders);
  const [index, setIndex] = useState(0);
  console.log(slide);

  const prevSlide = (e) => {
    e.preventDefault();
    setIndex(index - 1);
  };
  const nextSlide = (e) => {
    e.preventDefault();
    setIndex(index + 1);
  };

  useEffect(() => {
    const lastIndex = slide.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, slide]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      <div className="section-center">
        {slide.map((person, personIndex) => {
          const { id, img, name, country, message } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === slide.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={img} alt={name} className="person-img" />
              <h2 className="fs-1 fw-bold">{name}</h2>
              <h3 className="fs-2 my-3">{country}</h3>
              <img
                src="../img/stars.svg"
                alt=""
                className="slider--rating mb-4"
              />
              <p className="fs-2">{message}</p>
              {/* <FaQuoteRight className="icon" /> */}
            </article>
          );
        })}

        <button className="slider-btn btn--left" onClick={prevSlide}>
          <FontAwesomeIcon icon={faArrowLeft} className="text-black" />
        </button>
        <button className="slider-btn btn--right" onClick={nextSlide}>
          <FontAwesomeIcon icon={faArrowRight} className="text-black" />
        </button>
      </div>
    </>
  );
};

export default Slider;
