"use client";

import { schedule } from "@/utils/data";
import localFont from "next/font/local";
import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { motion } from "framer-motion";

const spacex = localFont({ src: "../app/SpaceX.ttf" });
const batman = localFont({ src: "../app/batmfa__.ttf" });

type ScheduleDay = "day0" | "day1" | "day2" | "day3";

const Schedule = () => {
  const [day, setDay] = useState<number>(0);

  const getScheduleDay = (day: number): ScheduleDay => {
    return `day${day}` as ScheduleDay;
  };

  return (
    <div
      id="schedule"
      className="w-full mx-auto flex flex-col space-y-4 py-20 items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#469be7] via-[#f6f9f9] to-[#f6f9f9] opacity-70"></div>
      <motion.div
        className="relative flex flex-col items-center w-full max-w-4xl px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <h1
          className={`${batman.className} text-4xl md:text-5xl drop-shadow-blueDrop`}
        >
          SCHEDULE
        </h1>
        <p className="text-lg text-center w-full md:text-xl mt-4 font-mono text-gray-600">
          Stay on Top with Our Event Schedule
        </p>

        <div className="mt-10 flex flex-col items-center w-full">
          <button
            onClick={() => setDay(0)}
            className={`${
              spacex.className
            } border-2 border-mBlue px-3 py-1 m-1 font-bold text-sm sm:px-4 sm:py-2 sm:text-lg ${
              day === 0 ? "bg-mBlue text-white" : ""
            }`}
          >
            Pre-Events
          </button>

          <div className="flex flex-wrap justify-center mt-4">
            <button
              onClick={() => setDay(1)}
              className={`${
                spacex.className
              } border-2 border-mBlue px-3 py-1 m-1 font-bold text-sm sm:px-4 sm:py-2 sm:text-lg rounded-l-full ${
                day === 1 ? "bg-mBlue text-white" : ""
              }`}
            >
              Day 1
            </button>
            <button
              onClick={() => setDay(2)}
              className={`${
                spacex.className
              } border-2 border-mBlue px-3 py-1 m-1 font-bold text-sm sm:px-4 sm:py-2 sm:text-lg ${
                day === 2 ? "bg-mBlue text-white" : ""
              }`}
            >
              Day 2
            </button>
            <button
              onClick={() => setDay(3)}
              className={`${
                spacex.className
              } border-2 border-mBlue px-3 font-bold py-1 m-1 text-sm sm:px-4 sm:py-2 sm:text-lg rounded-r-full ${
                day === 3 ? "bg-mBlue text-white" : ""
              }`}
            >
              Day 3
            </button>
          </div>
        </div>

        <div className="w-full mt-8">
          <h1 className="text-xl text-center">
            <span className="text-mBlue mr-2 font-bold">Venue:</span>
            {day === 0 || day === 1
              ? "Christ (Deemed to be University), Kengeri Campus"
              : "B.M.S. College Of Engineering"}
          </h1>

          <h1 className="text-xl text-center mt-4 mb-8">
            <span className="text-mBlue mr-2 font-bold">Date:</span>
            {day === 0
              ? "November 22nd, 2024"
              : day === 1
              ? "November 29th, 2024"
              : day === 2
              ? "November 30th, 2024"
              : "December 1st, 2024"}
          </h1>

          <div className="space-y-6 border-l-2 border-dashed border-gray-600 pl-6">
            {schedule[getScheduleDay(day)].map((s, id) => (
              <div key={id} className="relative w-full">
                <div className="absolute z-10 -left-10 top-[0.5px] h-7 w-7 bg-white border-2 border-mBlue rounded-full p-0.5" />
                <div className="space-y-2">
                  <h4 className="font-bold text-mBlue text-2xl">{s.name}</h4>
                  <p className="mt-2 text-base text-justify text-black">
                    {s.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <FaRegClock size={20} />
                    <p className="mt-1 block text-sm font-semibold text-black">
                      {s.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Schedule;
