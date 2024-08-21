"use client";

import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Timer from "./Timer";
import Logo from "../public/images/techxlogoblack.png";
import { motion } from "framer-motion";

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
    <div className="flex flex-col px-10 w-full items-center bg-gradient-to-b from-[#7bb8ee] to-[#F0FFFF]">
      <div className="flex flex-col items-center flex-grow">
        <div className="flex flex-col mt-52 max-w-full px-4">
          <div className="text-center mb-10">
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
          <div className="mt-5 text-center flex justify-center">
            <div className="relative w-[400px] h-[150px] md:w-[550px] md:h-[150px]">
              <Image src={Logo} alt="TechX Logo" />
            </div>
          </div>
          <motion.div
            className="relative py-10 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <h1 className="text-2xl">Event Sponsored By:</h1>
              <Image
                src="/images/syplogo512_black2.png"
                width={300}
                height={300}
                alt="syp logo"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
