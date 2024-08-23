"use client";
import React from "react";
import Carousel from "./carousel";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const batman = localFont({ src: "../app/batmfa__.ttf" });

const Collaborators = () => {
  return (
    <div
      id="sponsors"
      className="relative py-8 flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b to-[#469be7] from-[#f6f9f9] opacity-80 z-0"></div>
      <motion.div
        className="relative w-full z-10 flex flex-col items-center mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div>
          <h1
            className={`${batman.className} text-2xl text-center md:text-5xl drop-shadow-blueDrop tracking-wider`}
          >
            collaborators
          </h1>
          <p
            className="mt-4 text-xl text-gray-600 text-center font-mono"
            style={{ fontWeight: "500" }}
          >
            Check out who makes the event possible
          </p>
        </div>
        <Carousel />
      </motion.div>
    </div>
  );
};

export default Collaborators;
