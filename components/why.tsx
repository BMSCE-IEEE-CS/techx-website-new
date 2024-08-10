'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const spacex = localFont({ src: "../app/SpaceX.ttf" });

const Why = () => {
  return (
    <motion.div
      className="relative py-20 flex flex-col items-center justify-center"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-mOrange opacity-80 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1
          className={`${spacex.className} text-4xl md:text-5xl drop-shadow-orangeDrop`}
        >
          OUTCOMES
        </h1>
        <div className="flex flex-col md:flex-row gap-10 items-center mt-10 max-w-screen-xl mx-10">
          <Image
            className="w-3/4"
            src="/images/aboutimg.jpg"
            width={200}
            height={200}
            alt="about image"
          />
          <ul className="mt-5 text-xl list-image-[url(/images/arrow.png)] list-outside">
            <li>
              Captivating technical sessions. Hands-on workshops with experts.
            </li>
            <li>
              Insights from successful Professionals in different domains.
            </li>
            <li>Win prizes, foster camaraderie.</li>
            <li>Interactive Personality Workshop.</li>
            <li>Mind-bending entertainment with Mentalist.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Why;
