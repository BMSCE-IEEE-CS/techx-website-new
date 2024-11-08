"use client";

import localFont from "next/font/local";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="w-full mx-auto relative flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 bg-[#f6f9f9] opacity-70"></div>
      <motion.div
        className="rounded-2xl relative px-6 py-4 text-white flex flex-col bg-gradient-to-br w-11/12 md:w-9/12 mx-auto from-[#08233b] to-[#2288e3]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-semibold text-center">
          What is TechX Bangalore?
        </h1>
        <p className="text-justify mt-6">
          <strong>TechX</strong> is a comprehensive event organized by the IEEE
          Computer Society Student and Young Professionals community. Jointly
          hosted by{" "}
          <span style={{ fontWeight: "900" }}>BMSCE IEEE Computer Society</span>{" "}
          and{" "}
          <span style={{ fontWeight: "900" }}>
            Christ University IEEE Computer Society
          </span>
          , it offers a platform for students to explore emerging technologies,
          enhance soft skills, develop leadership abilities, and engage with
          industry professionals. Aligned with the &quot;Tech, Train, Lead,
          Engage, Unique&quot; motto, TechX aims to cultivate well-rounded tech
          leaders of tomorrow by providing a holistic learning experience.
        </p>
        <div className="flex flex-col mt-10">
          <p className="flex items-center mb-4">
            <span className="mr-3">
              <FaCalendarAlt size={25} />
            </span>
            29th - 30th November, 2024 and 1st December, 2024 
          </p>
          <p className="flex items-center">
            <span className="mr-3">
              <FaLocationDot size={25} />
            </span>
            Bengaluru, India
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
