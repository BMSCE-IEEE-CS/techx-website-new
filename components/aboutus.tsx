"use client";

import localFont from "next/font/local";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const spacex = localFont({ src: "../app/SpaceX.ttf" });

const AboutUs = () => {
  return (
    <motion.div
      id="about"
      className="card text-white my-20 bg-gradient-to-b w-[90%] md:w-[90%] mx-auto from-[#cc5500] to-[#e68a00]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="card-body">
        <h1 className="text-4xl md:text-6xl font-semibold text-center">
          What is <span className={spacex.className}>TechX</span>{" "}
          <span className="text-2xl md:text-4xl">Bangalore</span>
        </h1>
        <p className="text-justify mt-6 font-normal">
          <strong>TechX</strong> is a comprehensive event organized by the IEEE
          Computer Society Student and Young Professionals community. Jointly
          hosted by{" "}
          <span style={{ fontWeight: "800" }}>BMSCE IEEE Computer Society</span>{" "}
          and{" "}
          <span style={{ fontWeight: "800" }}>
            Christ University IEEE Computer Society
          </span>
          , it offers a platform for students to explore emerging technologies,
          enhance soft skills, develop leadership abilities, and engage with
          industry professionals. Aligned with the &quot;Tech, Train, Lead,
          Engage, Unique&quot; motto, TechX aims to cultivate well-rounded tech
          leaders of tomorrow by providing a holistic learning experience.
        </p>
        <div className="card-actions flex flex-col mt-6">
          <p className="flex items-center mb-4">
            <span className="mr-3">
              <FaCalendarAlt size={25} />
            </span>
            20th, 21st, and 22nd September, 2024
          </p>
          <p className="flex items-center">
            <span className="mr-3">
              <FaLocationDot size={25} />
            </span>
            Bengaluru, India
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
