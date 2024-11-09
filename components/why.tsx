"use client";

import React from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { FaLightbulb, FaTrophy, FaWrench } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";

const batman = localFont({ src: "../app/batmfa__.ttf" });

const Why = () => {
  return (
    <div className="relative py-8 md:py-10 lg:py-12 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6f9f9] to-[#469be7] opacity-70 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.div
          className="relative flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <h1
            className={`${batman.className} text-4xl md:text-5xl drop-shadow-blueDrop tracking-wider text-center`}
          >
            What to Expect
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-[85%] md:w-full max-w-7xl mt-8 md:mt-10 lg:mt-12 px-4 md:px-6 lg:px-8 mx-auto lg:mx-16 xl:mx-24">
            <div className="relative border-2 border-mBlue rounded-2xl">
              <div className="absolute rounded-xl inset-0 bg-[#2288e3] opacity-50"></div>
              <div className="relative flex flex-col items-center px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
                <FaLightbulb size={45} className="drop-shadow-blueDrop" />
                <h1 className="text-2xl md:text-2xl lg:text-2xl font-semibold text-center mt-4 md:mt-6 lg:mt-8 text-white">
                  Technical Sessions
                </h1>
                <p className="text-sm md:text-base lg:text-base mt-2 md:mt-3 lg:mt-4 text-center text-white">
                  Dive into the latest tech trends with sessions led by industry
                  experts. Elevate your skills and stay ahead.
                </p>
              </div>
            </div>
            <div className="relative border-2 border-mBlue rounded-2xl">
              <div className="absolute rounded-xl inset-0 bg-[#2288e3] opacity-50"></div>
              <div className="relative flex flex-col items-center px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
                <FaWrench size={45} className="drop-shadow-blueDrop" />
                <h1 className="text-2xl md:text-2xl lg:text-2xl font-semibold text-center mt-4 md:mt-6 lg:mt-8 text-white">
                  Hands-On Workshops
                </h1>
                <p className="text-sm md:text-base lg:text-base mt-2 md:mt-3 lg:mt-4 text-center text-white">
                  Engage in interactive workshops with experts. Apply concepts
                  in real-time for hands-on experience.
                </p>
              </div>
            </div>
            <div className="relative border-2 border-mBlue rounded-2xl">
              <div className="absolute rounded-xl inset-0 bg-[#2288e3] opacity-50"></div>
              <div className="relative flex flex-col items-center px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
                <IoChatbubbles size={45} className="drop-shadow-blueDrop" />
                <h1 className="text-2xl md:text-2xl lg:text-2xl font-semibold text-center mt-4 md:mt-6 lg:mt-8 text-white">
                  Expert Insights
                </h1>
                <p className="text-sm md:text-base lg:text-base mt-2 md:mt-3 lg:mt-4 text-center text-white">
                  Gain insights from successful professionals across various
                  fields. Apply their strategies to your own journey.
                </p>
              </div>
            </div>
            <div className="relative border-2 border-mBlue rounded-2xl">
              <div className="absolute rounded-xl inset-0 bg-[#2288e3] opacity-50"></div>
              <div className="relative flex flex-col items-center px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
                <FaTrophy size={45} className="drop-shadow-blueDrop" />
                <h1 className="text-2xl md:text-2xl lg:text-2xl font-semibold text-center mt-4 md:mt-6 lg:mt-8 text-white">
                  Prizes & Networking
                </h1>
                <p className="text-sm md:text-base lg:text-base mt-2 md:mt-3 lg:mt-4 text-center text-white">
                  Participate in challenges to win prizes. Build connections and
                  foster camaraderie with peers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Why;
