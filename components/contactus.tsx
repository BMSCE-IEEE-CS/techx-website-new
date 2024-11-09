"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone } from "react-icons/md";
import localFont from "next/font/local";

const batman = localFont({ src: "../app/batmfa__.ttf" });

const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className="relative py-20 flex flex-col items-center justify-center"
    >
    <div className="absolute inset-0 bg-gradient-to-t from-[#469be7] to-[#a0d0f7] opacity-70"></div>
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
            Contact Us
          </h1>
          <p
            className="mt-4 text-xl text-gray-600 text-center font-mono"
            style={{ fontWeight: "500" }}
          >
            Get in Touch with Us!
          </p>
        </div>
      </motion.div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-4xl space-y-6 md:space-y-0 md:space-x-6 mt-8 px-4">
        <motion.div
          className="flex items-center border border-gray-300 rounded-lg p-4 w-full max-w-xs h-full bg-white shadow-md flex-grow flex-shrink"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <MdEmail size={30} className="text-mBlue mr-4" />
          <div>
            <p className="text-base md:text-lg font-semibold">Email</p>
            <p className="text-sm md:text-base text-gray-600">support@techxbangalore.in</p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center border border-gray-300 rounded-lg p-4 w-full max-w-xs h-full bg-white shadow-md flex-grow flex-shrink"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <MdPhone size={30} className="text-mBlue mr-4" />
          <div>
            <p className="text-base md:text-lg font-semibold whitespace-nowrap">Dheemanth G Athreya</p>
            <p className="text-sm md:text-base text-gray-600">+91 7483975599</p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center border border-gray-300 rounded-lg p-4 w-full max-w-xs h-full bg-white shadow-md flex-grow flex-shrink"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <MdPhone size={30} className="text-mBlue mr-4" />
          <div>
            <p className="text-base md:text-lg font-semibold">Augadh Verma</p>
            <p className="text-sm md:text-base text-gray-600 whitespace-nowrap">+91 9013474808 &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
