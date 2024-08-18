"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import React from "react";

const Carousel = () => {
  const images = [
    "/resized/ieee-logo.png",
    "/resized/ieee-csbc.png",
    "/resized/ieee-cs-logo.png",
    "/resized/bmsce-ieee-cs.png",
    "/resized/Bangalore-Section-Logo.png",
    "/resized/syplogo.png",
    "/resized/ieee-cs-cu.png",
  ];

  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    centerMode: true,
    arrows: false,
    dots: true,
    autoplaySpeed: 2000,
    vertical: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto px-2 md:px-10 my-10">
      <Slider {...settings} className="w-full">
        {images.map((imagePath, index) => (
          <div key={index} className="px-2">
            <div className="flex items-center">
              <Image src={imagePath} alt="image" width={256} height={256} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
