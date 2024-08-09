import React from "react";
import Carousel from "./carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import localFont from "next/font/local";

const spacex = localFont({ src: "../app/SpaceX.ttf" });

const Sponsorts = () => {
  return (
    <div
      id="events"
      className="relative py-20 flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-mOrange opacity-80 z-0"></div>
      <div className="relative z-10 flex flex-col items-center">
        <h1
          className={`${spacex.className} text-4xl md:text-5xl drop-shadow-orangeDrop`}
        >
          SPONSORS
        </h1>
      </div>
      <div className="mt-10"></div>
      <Carousel />
    </div>
  );
};

export default Sponsorts;
