"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const LearnMore = () => {
  return (
    <motion.div
      className="flex justify-center relative items-center w-full h-full py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-[#f6f9f9] opacity-70"></div>
      <Link
        href="/organizers"
        className="bg-mBlue relative text-white hover:text-black px-4 text-xl md:text-2xl py-2 border-4 border-mBlue hover:bg-transparent rounded-tr-3xl rounded-bl-3xl transition-all duration-150 ease-in"
      >
        About the Organizers
      </Link>
    </motion.div>
  );
};

export default LearnMore;
