"use client";

import React, { useEffect, useState, useRef } from "react";

const Carousel = ({ className = "default-carousel", children }) => {
  const [slides, setSlides] = useState([]);
  const currSlide = useRef(0);
  const indicators = Array(slides.length);
  indicators.fill("indicator");

  useEffect(() => {
    const _slides = document.querySelectorAll(".carousel__slide");
    _slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${index * 100}%)`;
    });
    setSlides(_slides);
  }, []);

  function slide(e) {
    const type = e.target.id;

    switch (type) {
      case "next":
        if (currSlide.current === (slides.length - 1) * -1) {
          currSlide.current = 0;
        } else {
          currSlide.current--;
        }
        console.log(currSlide.current);
        break;

      case "prev":
        if (currSlide.current === 0) {
          currSlide.current = (slides.length - 1) * -1;
        } else {
          currSlide.current++;
        }
        console.log(currSlide.current);
        break;
      default:
        currSlide.current = Number(type);
        break;
    }

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${
        (currSlide.current + index) * 100
      }%)`;
    });
  }

  return (
    <div className="carousel-wrapper absolute aspect-slide">
      <div
        className={`${className} carousel relative w-full h-full overflow-hidden`}
      >
        {children}
        <button
          id="next"
          onClick={slide}
          className="w-24 absolute bg-slate-700"
        >
          next
        </button>

        <button
          onClick={slide}
          id="prev"
          className="w-24 bg-slate-700 absolute right-0"
        >
          prev
        </button>
      </div>
      <div className="carousel__indicators flex gap-4 absolute bottom-3 left-1/2 -translate-x-1/2">
        {indicators.map((target, index) => (
          <span
            onClick={slide}
            key={target}
            id={index * -1}
            className="carousel__indicator w-3 rounded-full aspect-square cursor-pointer bg-black"
          >
            <span className="sr-only">indicator-to-{target}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
