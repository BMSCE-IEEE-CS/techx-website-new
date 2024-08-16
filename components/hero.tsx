import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Navbar from "./navbar";
import Timer from "./Timer";

const spacex = localFont({ src: "../app/SpaceX.ttf" });

const Hero = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover flex flex-col w-full min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-mOrange via-black to-black opacity-70"></div>
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />
        <div className="flex flex-col items-center flex-grow">
          <div className="flex flex-col mt-52 max-w-full px-4">
            <div className="text-center mb-10">
              <h2
                className={`${spacex.className} text-2xl md:text-3xl text-white font-bold -mt-32`}
              >
                COMING SOON!
              </h2>
              <Timer />
            </div>
            <div className="mt-10 text-center">
              <h1
                className={`${spacex.className} text-5xl md:text-7xl text-white`}
              >
                Tech<span className="text-mOrange">X</span>
              </h1>
              <p className="text-3xl text-mOrange font-bold">Bangalore</p>
            </div>
            <div className="m-10 text-center">
              <Link
                href="#"
                className="bg-mOrange px-4 text-2xl md:text-3xl py-2 border-2 border-mOrange hover:bg-black rounded-tr-3xl rounded-bl-3xl transition-all duration-150 ease-in"
                passHref
                target="_blank"
              >
                Purchase Ticket
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;