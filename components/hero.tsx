"use client";

import localFont from "next/font/local";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Logo from "../public/images/techxnewlogo.png";
import { motion } from "framer-motion";

const nexa = localFont({ src: "../app/Nexa-Heavy.ttf" });

const Hero = () => {
  const fullText = "And it's a Wrap!";
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
    <div className="flex flex-col w-full items-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2e6bb4] to-[#f6f9f9] opacity-70 z-0"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center w-full flex-grow relative"
      >
        <div className="flex flex-col mt-52 w-full px-4">
          <div className="text-center mb-10 w-full md:w-max mx-auto">
            <h2
              className={`${nexa.className} text-2xl md:text-3xl text-slate-900 font-bold -mt-32 tracking-wider relative`}
            >
              {displayedText}
              {!isTypingComplete && (
                <span className="text-mBlue inline-block ml-1 animate-blink text-3xl md:text-4xl font-bold">
                  |
                </span>
              )}
            </h2>
            <Timer />
          </div>
          <Image
            className="w-full md:w-3/4 mx-auto lg:w-1/3"
            src={Logo}
            alt="TechX Logo"
          />
          <div className="relative py-10 flex flex-col items-center justify-center">
            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-4 ">
              <h1 className="text-2xl">An Initiative By:</h1>
              <Image
                src="/images/syplogo512_black2.png"
                width={300}
                height={300}
                alt="syp logo"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
