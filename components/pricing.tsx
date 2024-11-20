"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const batman = localFont({ src: "../app/batmfa__.ttf" });

const Pricing = () => {
  return (
    <div className="py-16 relative" id="pricing">
      <div className="absolute inset-0 bg-[#f6f9f9] opacity-70"></div>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h1
            className={`${batman.className} text-4xl md:text-5xl drop-shadow-blueDrop tracking-wider`}
          >
            Pricing
          </h1>
          {/* <p className="mt-4 text-xl text-gray-600 font-mono">
            Choose Your Plan That Fits You Best
          </p> */}
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col bg-gradient-to-br from-[#08233b] to-[#2288e3] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white text-center">
                IEEE Computer Society Members
              </h3>
            </div>
            <div className="flex flex-col flex-grow justify-end">
              <div className="mb-8">
                <p className="mt-4 text-gray-200 text-[1.2rem] font-bold text-left">
                  3 Day Pass
                </p>
              </div>
              <div className="mb-8 text-left">
                <span className="text-5xl font-extrabold text-white">
                  &#8377;299
                </span>
              </div>
              <ul className="mb-8 space-y-4 text-gray-200">
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
                <Link
                  href="https://forms.gle/44BsGT8gmosNiXum8"
                  target="_blank"
                  className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-black hover:bg-white hover:text-black transition-all duration-500"
                >
                  Register Now!
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-gradient-to-br from-[#08233b] to-[#2288e3] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white text-center">
                IEEE Members
              </h3>
            </div>
            <div className="flex flex-col flex-grow justify-end">
              <div className="mb-8">
                <p className="mt-4 text-gray-200 text-[1.2rem] font-bold text-left">
                  3 Day Pass
                </p>
              </div>
              <div className="mb-8 text-left">
                <span className="text-5xl font-extrabold text-white">
                  &#8377;399
                </span>
              </div>
              <ul className="mb-8 space-y-4 text-gray-200">
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
                <Link
                  href="https://forms.gle/44BsGT8gmosNiXum8"
                  target="_blank"
                  className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-black hover:bg-white hover:text-black transition-all duration-500"
                >
                  Register Now!
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-gradient-to-br from-[#08233b] to-[#2288e3] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white text-center">
                Non-IEEE Members
              </h3>
            </div>
            <div className="flex flex-col flex-grow justify-end">
              <div className="mb-8">
                <p className="mt-4 text-gray-200 text-[1.2rem] font-bold">
                  3 Day Pass
                </p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">
                  &#8377;499
                </span>
              </div>
              <ul className="mb-8 space-y-4 text-gray-200">
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
                <Link
                  href="https://forms.gle/44BsGT8gmosNiXum8"
                  target="_blank"
                  className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-black hover:bg-white hover:text-black transition-all duration-500"
                >
                  Register Now!
                </Link>
              </div>
            </div>
          </div>
        </div>{" "}
        <br /> <br />
        {/* <h3 className="text-2xl font-bold text-black text-center">
            Join the WhatsApp group below for further updates!
        </h3> <br /> */}
        {/* <a href="https://chat.whatsapp.com/C9jbQYjVpphEk3VxmfNmWF">Click here</a> */}
        <div className="mt-auto w-[90%] md:w-[56%] mx-auto">
          <Link
            href="https://chat.whatsapp.com/C9jbQYjVpphEk3VxmfNmWF"
            target="_blank"
            className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-black hover:bg-white hover:text-black hover:border-black border-2 transition-all duration-500"
          >
            Click here to join the WhatsApp group for further updates!
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;
