"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { FaLightbulb, FaTrophy, FaWrench } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";

const batman = localFont({ src: "../app/batmfa__.ttf" });

const Why = () => {
  return (
    <div className="relative py-10 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6f9f9] to-[#469be7] opacity-70 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.div
          className="relative py-20 flex flex-col items-center justify-center"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-3/4 mt-10">
            <div className="relative border-2 border-mBlue rounded-2xl">
              <div className="absolute rounded-xl inset-0 bg-[#2288e3] opacity-50"></div>
              <div className="relative flex flex-col items-center px-6 py-4">
                <FaLightbulb size={60} className="drop-shadow-blueDrop" />
                <h1 className="text-3xl font-semibold text-center mt-8 text-white">
                  Technical Sessions
                </h1>
                <p className="text-xl mt-2 text-justify">
                  Dive into the latest tech trends with sessions led by industry
                  experts. Elevate your skills and stay ahead.
                </p>
              </div>
            </div>
            <div className="relative border-2 border-mBlue rounded-2xl">
              <div className="absolute rounded-xl inset-0 bg-[#2288e3] opacity-50"></div>
              <div className="relative flex flex-col items-center px-6 py-4">
                <FaWrench size={60} className="drop-shadow-blueDrop" />
                <h1 className="text-3xl font-semibold text-center mt-8 text-white">
                  Hands-On Workshops
                </h1>
                <p className="text-xl mt-2 text-justify">
                  Engage in interactive workshops with experts. Apply concepts
                  in real-time for hands-on experience.
                </p>
              </div>
            </div>
            <div className="relative border-2 border-mBlue rounded-2xl">
              <div className="absolute rounded-xl inset-0 bg-[#2288e3] opacity-50"></div>
              <div className="relative flex flex-col items-center px-6 py-4">
                <IoChatbubbles size={60} className="drop-shadow-blueDrop" />
                <h1 className="text-3xl font-semibold text-center mt-8 text-white">
                  Expert Insights
                </h1>
                <p className="text-xl mt-2 text-justify">
                  Gain insights from successful professionals across various
                  fields. Apply their strategies to your own journey.
                </p>
              </div>
            </div>
            <div className="relative border-2 border-mBlue rounded-2xl">
              <div className="absolute rounded-xl inset-0 bg-[#2288e3] opacity-50"></div>
              <div className="relative flex flex-col items-center px-6 py-4">
                <FaTrophy size={60} className="drop-shadow-blueDrop" />
                <h1 className="text-3xl font-semibold text-center mt-8 text-white">
                  Prizes & Networking
                </h1>
                <p className="text-xl mt-2 text-justify">
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
