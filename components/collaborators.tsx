"use client";
import React from "react";
import Carousel from "./carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const batman = localFont({ src: "../app/batmfa__.ttf" });

const Collaborators = () => {
  return (
    <motion.div
      id="sponsors"
      className="relative py-8 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-mOrange opacity-80 z-0"></div>
      <div className="relative z-10 flex flex-col items-center mb-4">
        <h1
          className={`${batman.className} text-2xl md:text-5xl drop-shadow-orangeDrop tracking-wider`}
        >
          collaborators
        </h1>
        <p className="mt-4 text-xl text-gray-400 font-mono">
            Check out who makes the event possible
          </p>
      </div>
      <div className="w-full">
        <Carousel />
      </div>
    </motion.div>
  );
};

export default Collaborators;