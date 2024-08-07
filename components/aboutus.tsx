import localFont from "next/font/local";
import Image from "next/image";
import React from "react";

const spacex = localFont({ src: "../app/SpaceX.ttf" });

const AboutUs = () => {
  return (
    <div className="relative w-full py-20 flex flex-col items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-mOrange  to-black opacity-80 z-0"></div>
      <div className="relative z-10 flex flex-col  items-center w-full">
        <Image
          className="w-1/2 md:w-1/3 sm:w-1/2 border-8 rounded-xl border-gray-800"
          src="/images/aboutimg.jpg"
          width={512}
          height={512}
          alt="About image"
        />
        <h1 className="text-3xl md:text-6xl font-bold mt-10 drop-shadow-orangeDrop">
          What is{" "}
          <span className={spacex.className}>
            TechX<sup className="ml-8">24</sup>
          </span>
        </h1>
        <p className="w-5/6 md:w-3/5 text-justify mt-5 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et tempus urna. Quisque posuere tellus at blandit vehicula. Aliquam
          feugiat congue nulla, et euismod dolor vehicula et. Morbi tellus
          lorem, placerat vitae lacinia id, aliquam vitae nisl. Phasellus
          posuere porttitor tempor. Curabitur at lacus eget felis malesuada
          venenatis et sit amet risus. Vestibulum sagittis tincidunt justo, sit
          amet finibus risus congue a. Curabitur quis luctus justo, et aliquet
          tortor. Nunc sit amet ligula at libero suscipit cursus non vel enim.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
