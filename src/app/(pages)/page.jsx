"use client";
import { useRef } from "react";
import Carousel from "./components/home/Carousel";

const Home = () => {
  const slides = useRef([]);

  // Function to add the slide Nodes to a ref
  const addSlide = (el) => {
    slides.current.includes(el) || slides.current.push(el)

  return (
    <>
    <header className="header--home w-full h-96 relative">

      {/* Example of how to use the carousel */}
      <Carousel slides={slides.current}>
        <div ref={addSlide} className="carousel__slide bg-slate-900 z-10">
          dummy slide
        </div>
        <div ref={addSlide} className="carousel__slide bg-orange-900">
          dummy slide
        </div>
        <div ref={addSlide} className="carousel__slide bg-red-900">
          dummy slide
        </div>
        <div  ref={addSlide} className="carousel__slide bg-blue-900">
          dummy slide
        </div>
      </Carousel>
    </header>
    {/* All the discrete styling for the home page will go here */}
    <main className="main--home">
      
    </main>
    </>
  );
};

export default Home;
