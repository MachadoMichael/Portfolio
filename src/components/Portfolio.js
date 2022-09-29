import React, { useState } from "react";
import Slider from "./Slider";
import Project from "./Project";
import BtnSlider from "./BtnSlider";

export default function Portfolio() {
  const [slide, setSlide] = useState(1);

  function changeSlide(swipeDirection) {
    if (swipeDirection === "next") setSlide(slide + 1);
    if (swipeDirection === "prev") setSlide(slide - 1);
  }

  function selectSlide(slide) {
    setSlide(slide);
  }

  return (
    <div>
      <div className="portfolio">
        <Project slide={slide}></Project>
        <Slider changeSlide={changeSlide}></Slider>
      </div>
      <BtnSlider slide={slide} selectSlide={selectSlide}></BtnSlider>
    </div>
  );
}
