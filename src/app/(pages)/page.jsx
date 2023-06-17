"use client";

import Carousel from "./components/home/Carousel";

const Home = () => {
  return (
    <>
    <header className="header--home w-full h-96 relative">
      <Carousel>
        <div className="carousel__slide bg-slate-900">
          slide
        </div>
        <div className="carousel__slide bg-orange-900">
          slide
        </div>
        <div className="carousel__slide bg-red-900">
          slide
        </div>
        <div className="carousel__slide bg-blue-900">
          slide
        </div>
      </Carousel>
    </header>
    <main className="main--home">
      
    </main>
    </>
  );
};

export default Home;
