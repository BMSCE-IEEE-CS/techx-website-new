import localFont from "next/font/local";
import Link from "next/link";
import React from "react";
import Navbar from "./navbar";
import Timer from "./Timer";

const spacex = localFont({ src: "../app/SpaceX.ttf" });

const Hero = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover flex flex-col w-full min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-tr from-mOrange via-black to-black opacity-70 z-0"></div>
      <div className="relative z-10 flex flex-col ">
        <Navbar />
        <div className="relative flex flex-col items-center bg-no-repeat bg-cover select-none cursor-default">
          <div className="flex flex-col mt-52">
            <div className="text-center mb-10">
              <h2
                className={`${spacex.className} text-2xl md:text-3xl text-white font-bold -mt-32`}
              >
                COMING SOON!
              </h2>
              <Timer />
            </div>
            <div className="mt-10">
              <p className="text-3xl text-mOrange font-bold">IEEE CS</p>
              <h1
                className={`${spacex.className} text-5xl md:text-7xl text-white`}
              >
                Tech<span>X</span>
              </h1>
            </div>
            <div className="m-10 text-center">
              <Link
                href="#"
                className="bg-mOrange px-4 text-3xl py-2 border-2 border-mOrange hover:bg-black rounded-tr-3xl rounded-bl-3xl transition-all duration-150 ease-in"
                passHref
                target="_blank"
              >
                Purchase Ticket
              </Link>
            </div>
            {/* <div className="flex flex-col md:flex-row mt-10 items-center gap-4">
                <h1>Event Sponsored By:</h1>
                <Image
                  src="/images/syplogo.png"
                  width={300}
                  height={300}
                  alt="syp logo"
                />
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
