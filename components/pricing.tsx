"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const batman = localFont({ src: "../app/batmfa__.ttf" });

const Pricing = () => {
  return (
    <motion.div
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1
            className={`${batman.className} text-4xl md:text-5xl drop-shadow-orangeDrop tracking-wider`}
          >
            Pricing
          </h1>
          <p className="mt-4 text-xl text-gray-400 font-mono">
            Choose Your Plan That Fits You Best
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col bg-gradient-to-br from-[#cc6600] to-[#d88c1f] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white text-center">
                IEEE Computer Society Members
              </h3>
              <p className="mt-4 text-black text-[1.2rem] font-bold">3 Day Pass</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">
                &#8377;249
              </span>
            </div>
            <ul className="mb-8 space-y-4 text-black">
              <li className="flex items-center gap-2.5 font-medium">
                <FaCheckCircle className="text-white" />
                <span>IEEE Goodies</span>
              </li>
              <li className="flex items-center gap-2.5 font-medium">
                <FaCheckCircle className="text-white" />
                <span>Lunch</span>
              </li>
              <li className="flex items-center gap-2.5 font-medium">
                <FaCheckCircle className="text-white" />
                <span>Snacks and Refreshments</span>
              </li>
              <li className="flex items-center gap-2.5 font-medium">
                <FaCheckCircle className="text-white" />
                <span>Entry to all events and competitions</span>
              </li>
              <li className="flex items-center gap-2.5 font-medium">
                <FaCheckCircle className="text-white" />
                <span>Certificate of Participation</span>
              </li>
            </ul>
            <div className="mt-auto">
              <a
                href="#"
                className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-black hover:bg-white hover:text-black transition-all duration-500"
              >
                Get Ticket
              </a>
            </div>
          </div>

          <div className="flex flex-col bg-gradient-to-br from-[#cc6600] to-[#d88c1f] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="mb-8">
              <h3 className="text-2xl font-bold text-white text-center">
                IEEE Members
              </h3>
            </div>
            <div className="flex flex-col flex-grow justify-end">
              <div className="mb-8">
                <p className="mt-4 text-black text-[1.2rem] font-bold text-left">3 Day Pass</p>
              </div>
              <div className="mb-8 text-left">
                <span className="text-5xl font-extrabold text-white">
                  &#8377;349
                </span>
              </div>
              <ul className="mb-8 space-y-4 text-black">
                <li className="flex items-center gap-2.5 font-medium">
                  <FaCheckCircle className="text-white" />
                  <span>IEEE Goodies</span>
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <FaCheckCircle className="text-white" />
                  <span>Lunch</span>
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <FaCheckCircle className="text-white" />
                  <span>Snacks and Refreshments</span>
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <FaCheckCircle className="text-white" />
                  <span>Entry to all events and competitions</span>
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <FaCheckCircle className="text-white" />
                  <span>Certificate of Participation</span>
                </li>
              </ul>
              <div className="mt-auto">
                <a
                  href="#"
                  className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-black hover:bg-white hover:text-black transition-all duration-500"
                >
                  Get Ticket
                </a>
              </div>
            </div>
          </div>


          <div className="flex flex-col bg-gradient-to-br from-[#cc6600] to-[#d88c1f] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white text-center">
                Non-IEEE Members
              </h3>
            </div>
            <div className="flex flex-col flex-grow justify-end">
              <div className="mb-8">
                <p className="mt-4 text-black text-[1.2rem] font-bold">3 Day Pass</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">
                  &#8377;399
                </span>
              </div>
              <ul className="mb-8 space-y-4 text-black">
                <li className="flex items-center gap-2.5 font-medium">
                  <FaCheckCircle className="text-white" />
                  <span>IEEE Goodies</span>
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <FaCheckCircle className="text-white" />
                  <span>Lunch</span>
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <FaCheckCircle className="text-white" />
                  <span>Snacks and Refreshments</span>
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <FaCheckCircle className="text-white" />
                  <span>Entry to all events and competitions</span>
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <FaCheckCircle className="text-white" />
                  <span>Certificate of Participation</span>
                </li>
              </ul>
              <div className="mt-auto">
                <a
                  href="#"
                  className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-black hover:bg-white hover:text-black transition-all duration-500"
                >
                  Get Ticket
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
