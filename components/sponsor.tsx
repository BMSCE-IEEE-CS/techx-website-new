"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Sponsor = () => {
  return (
    <motion.div
      className="relative py-10 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row items-center gap-4">
        <h1 className="text-2xl">Event Sponsored By:</h1>
        <Image
          src="/images/syplogo.png"
          width={300}
          height={300}
          alt="syp logo"
        />
      </div>
    </motion.div>
  );
};

export default Sponsor;
