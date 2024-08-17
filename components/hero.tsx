import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Navbar from "./navbar";
import Timer from "./Timer";
import Logo from "../public/images/Tech X Bangalore Colour White Orange.png"
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
            <div className="mt-10 text-center flex justify-center">
              <div className="relative w-[300px] h-[100px] md:w-[500px] md:h-[150px]">
                <Image
                  src={Logo}
                  alt="TechX Logo"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
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
