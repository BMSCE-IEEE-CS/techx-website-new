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
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-2 md:px-10">
      <style jsx global>{`
        .slick-slider {
          margin-bottom: 0;
        }
        .slick-dots {
          bottom: -25px;
        }
        @media (max-width: 768px) {
          .slick-slide {
            margin-bottom: 0;
          }
          .slick-dots {
            bottom: -15px;
          }
        }
      `}</style>
      <Slider {...settings} className="w-full">
        {images.map((imagePath, index) => (
          <div key={index} className="px-2">
            <div className="flex items-center justify-center h-32 md:h-40">
              <Image
                src={imagePath}
                alt="image"
                width={100}
                height={100}
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;