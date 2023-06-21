"use client";

import React, { useEffect, useState, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = ({ className = "default-carousel", children, slides }) => {
  const [indicators, setIndicators] = useState([]);
  const currSlide = useRef(0);
  console.log(slides);

  useEffect(() => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${index * 100}%)`;
    });
    setIndicators(Array(slides.length).fill("indicators"));
  }, [slides]);

  function slide(e) {
    const type = e.target.id;
    // Set the currentSlide based on the type of button clicked (indicator or slide buttons)
    switch (type) {
      case "next":
        if (currSlide.current === (slides.length - 1) * -1) {
          currSlide.current = 0;
        } else {
          currSlide.current--;
        }
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
        document.querySelectorAll(".indicator").forEach((ind) => {
          ind.classList.remove("active");
        });
        currSlide.current = Number(type);
        e.target.classList.add("active");
        break;
    }

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${
        (currSlide.current + index) * 100
      }%)`;
    });
  }

  return (
    <div className="carousel-wrapper w-full h-full md:w-100 md:h-auto absolute aspect-slide bottom-0 left-1/2 -translate-x-1/2">
      <div
        className={`${className} carousel relative w-full h-full overflow-hidden`}
      >
        {children}

        <button
          onClick={slide}
          id="prev"
          className="w-14 bg-slate-700 absolute left-0 top-1/2 -translate-y-1/2 z-20"
        >
          <AiOutlineArrowLeft />
        </button>

        <button
          id="next"
          onClick={slide}
          className=" w-14 absolute bg-slate-700 right-0 top-1/2 -translate-y-1/2 z-20"
        >
          <AiOutlineArrowRight />
        </button>
      </div>

      {/* Spit out indicators based on the number of children slides */}
      <div className="carousel__indicators flex gap-4 absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
        {indicators.map((target, index) => (
          <div
            onClick={slide}
            key={target}
            id={index * -1}
            className={`carousel__indicator w-3 rounded-full aspect-square cursor-pointer bg-black ${
              index === 0 ? "active" : ""
            }`}
          >
            <span className="sr-only">indicator-to-{target}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
