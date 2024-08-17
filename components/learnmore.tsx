'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

const LearnMore = () => {
  return (
    <motion.div
      className="flex justify-center items-center w-full h-full my-8 mt-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Link
        href="#"
        className="bg-mOrange px-4 text-2xl md:text-3xl py-2 border-2 border-mOrange hover:bg-black rounded-tr-3xl rounded-bl-3xl transition-all duration-150 ease-in"
        passHref
        target="_blank"
      >
        About the Organizers
      </Link>
    </motion.div>
  );
};

export default LearnMore;
