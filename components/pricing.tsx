"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const spacex = localFont({ src: "../app/SpaceX.ttf" });

const Pricing = () => {
  return (
    <motion.div
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`${spacex.className} text-4xl md:text-5xl drop-shadow-orangeDrop`}
          >
            Pricing Plans
          </h2>
          <p className="mt-4 text-xl text-gray-400 font-mono">
            Choose Your Plan That Fits You Best
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gradient-to-br  from-[#cc6600] to-[#d88c1f] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white">
                IEEE CS Members
              </h3>
              <p className="mt-4 text-black">2 Day Pass</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">₹100</span>
            </div>
            <ul className="mb-8 space-y-4 text-black">
              <li className="flex items-center gap-1">
                <FaCheckCircle className="text-white" />
                <span>lorem</span>
              </li>
              <li className="flex items-center gap-1">
                <FaCheckCircle className="text-white" />
                <span>lorem</span>
              </li>
              <li className="flex items-center gap-1">
                <FaCheckCircle className="text-white" />
                <span>lorem</span>
              </li>
            </ul>
            <a
              href="#"
              className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-black hover:bg-white hover:text-black transition-all duration-500"
            >
              Get Ticket
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#cc6600] to-[#d88c1f] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white">
                IEEE Members
              </h3>
              <p className="mt-4 text-black">2 Day Pass</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">₹110</span>
            </div>
            <ul className="mb-8 space-y-4 text-black">
              <li className="flex items-center gap-1">
                <FaCheckCircle className="text-white" />
                <span>lorem</span>
              </li>
              <li className="flex items-center gap-1">
                <FaCheckCircle className="text-white" />
                <span>lorem</span>
              </li>
              <li className="flex items-center gap-1">
                <FaCheckCircle className="text-white" />
                <span>lorem</span>
              </li>
            </ul>
            <a
              href="#"
              className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-black hover:bg-white hover:text-black transition-all duration-500"
            >
              Get Ticket
            </a>
          </div>

          <div className="bg-gradient-to-br  from-[#cc6600] to-[#d88c1f] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white">
                Non-IEEE Members
              </h3>
              <p className="mt-4 text-black">3 Day Pass</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">₹130</span>
            </div>
            <ul className="mb-8 space-y-4 text-black">
              <li className="flex items-center gap-1">
                <FaCheckCircle className="text-white" />
                <span>lorem</span>
              </li>
              <li className="flex items-center gap-1">
                <FaCheckCircle className="text-white" />
                <span>lorem</span>
              </li>
              <li className="flex items-center gap-1">
                <FaCheckCircle className="text-white" />
                <span>lorem</span>
              </li>
            </ul>
            <a
              href="#"
              className="block w-full py-3 px-6 text-center rounded-md font-medium bg-black text-white hover:bg-white hover:text-black transition-all duration-500"
            >
              Get Ticket
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
