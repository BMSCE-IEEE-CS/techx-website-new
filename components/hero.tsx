"use client";

import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Timer from "./Timer";
import Logo from "../public/images/Tech X Bangalore Colour White Orange.png";

const nexa = localFont({ src: "../app/Nexa-Heavy.ttf" });

const Hero = () => {
  const fullText = "COMING SOON!";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText((prev) => fullText.slice(0, currentIndex + 1));
        currentIndex += 1;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setIsTypingComplete(true), 500);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="bg-hero bg-no-repeat bg-cover flex flex-col w-full min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-mOrange via-black to-black opacity-70"></div>
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />
        <div className="flex flex-col items-center flex-grow">
          <div className="flex flex-col mt-52 max-w-full px-4">
            <div className="text-center mb-10">
              <h2
                className={`${nexa.className} text-2xl md:text-3xl text-white font-bold -mt-32 tracking-wider relative`}
              >
                {displayedText}
                {!isTypingComplete && (
                  <span className="text-mOrange inline-block ml-1 animate-blink text-3xl md:text-4xl font-bold">
                    |
                  </span>
                )}
              </h2>
              <Timer />
            </div>
            <div className="mt-5 text-center flex justify-center">
              <div className="relative w-[400px] h-[150px] md:w-[550px] md:h-[150px]">
                <Image src={Logo} alt="TechX Logo" />
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
