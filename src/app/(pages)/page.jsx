"use client";
import Carousel from "./components/home/Carousel";

const Home = () => {
  return (
    <>
    <header className="header--home w-full h-96 relative">

      {/* Example of how to use the carousel */}
      <Carousel>
        <div className="carousel__slide bg-slate-900 z-10">
          dummy slide
        </div>
        <div className="carousel__slide bg-orange-900">
          dummy slide
        </div>
        <div className="carousel__slide bg-red-900">
          dummy slide
        </div>
        <div className="carousel__slide bg-blue-900">
          dummy slide
        </div>
      </Carousel>
    </header>
    <main className="main--home">
      
    </main>
    </>
  );
};

export default Home;
