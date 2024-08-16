"use client";

import Image from "next/image";
import Slider, { Settings } from "react-slick";

const Carousel = () => {
  const images = [
    "/resized/ieee-logo.png",
    "/resized/ieee-csbc.png",
    "/resized/ieee-cs-logo.png",
    "/resized/bmsce-ieee-cs.png",
    "/resized/Bangalore-Section-Logo.png",
    "/resized/syplogo.png",
    "/images/ieee-cs-cu.png",
  ];

  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2.5,
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
    <div className="w-full md:w-5/6 mx-auto px-2 my-10 md:px-10">
      <Slider {...settings} className="w-full mx-auto my-auto">
        {images.map((imagePath, index) => (
          <div key={index}>
            <Image
              className="m-10 my-auto"
              src={imagePath}
              alt="image"
              width={256}
              height={500}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
