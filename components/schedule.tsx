"use client";

import { schedule } from "@/utils/data";
import localFont from "next/font/local";
import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";
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
    <motion.div
      id="schedule"
      className="w-full mx-auto flex flex-col space-y-4 py-20 items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <h1
        className={`${batman.className} text-4xl md:text-5xl drop-shadow-orangeDrop`}
      >
        SCHEDULE
      </h1>
      <p className="text-lg text-center w-3/4 md:text-xl mt-4 font-mono text-gray-400">
        Stay on Top with Our Event Schedule
      </p>

      <div className="mt-10 flex flex-col items-center">
        <button
          onClick={() => setDay(0)}
          className={`${
            spacex.className
          } border-2 border-mOrange px-3 py-1 m-1 text-base sm:px-4 sm:py-2 sm:text-lg ${
            day === 0 ? "bg-mOrange text-black" : ""
          }`}
        >
          Pre-Events
        </button>

        <div className="flex flex-wrap justify-center mt-4">
          <button
            onClick={() => setDay(1)}
            className={`${
              spacex.className
            } border-2 border-mOrange px-3 py-1 m-1 text-base sm:px-4 sm:py-2 sm:text-lg rounded-l-full ${
              day === 1 ? "bg-mOrange text-black" : ""
            }`}
          >
            Day 1
          </button>
          <button
            onClick={() => setDay(2)}
            className={`${
              spacex.className
            } border-2 border-mOrange px-3 py-1 m-1 text-base sm:px-4 sm:py-2 sm:text-lg ${
              day === 2 ? "bg-mOrange text-black" : ""
            }`}
          >
            Day 2
          </button>
          <button
            onClick={() => setDay(3)}
            className={`${
              spacex.className
            } border-2 border-mOrange px-3 py-1 m-1 text-base sm:px-4 sm:py-2 sm:text-lg rounded-r-full ${
              day === 3 ? "bg-mOrange text-black" : ""
            }`}
          >
            Day 3
          </button>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 mt-8">
        <h1 className="text-xl md:text-2xl text-center">
          <span className="text-mOrange mr-2 font-bold">Venue:</span>
          {day === 0
            ? "Christ (Deemed to be University), Kengeri Campus"
            : "B. M. S. College Of Engineering"}
        </h1>

        <h1 className="text-xl md:text-2xl text-center mt-4 mb-8">
          <span className="text-mOrange mr-2 font-bold">Date:</span>
          {day === 0
            ? "August 9th, 2024 and August 18th, 2024"
            : day === 1
            ? "August 20th, 2024"
            : day === 2
            ? "August 21st, 2024"
            : "August 22nd, 2024"}
        </h1>

        <div className="space-y-6 border-l-2 mx-auto border-dashed">
          {schedule[getScheduleDay(day)].map((s, id) => (
            <div key={id} className="relative w-full">
              <div className="absolute z-10 -ml-3.5 h-7 w-7 bg-black border-2 border-mOrange rounded-full p-0.5" />
              <div className="ml-6 space-y-2">
                <h4 className="font-bold text-mOrange text-2xl">{s.name}</h4>
                <p className="mt-2 max-w-screen-sm text-base text-justify text-gray-300">
                  {s.description}
                </p>
                {s.rp && (
                  <div className="flex items-center gap-2">
                    <MdPerson size={20} />
                    <p className="mt-1 block text-sm font-semibold text-white">
                      {s.rp}
                    </p>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <FaRegClock size={20} />
                  <p className="mt-1 block text-sm font-semibold text-white">
                    {s.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Schedule;