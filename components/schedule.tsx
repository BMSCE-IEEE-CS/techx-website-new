"use client";

import { schedule } from "@/utils/data";
import localFont from "next/font/local";
import React, { useState, useEffect, useRef } from "react";
import { FaRegClock } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const spacex = localFont({ src: "../app/SpaceX.ttf" });
const batman = localFont({ src: "../app/batmfa__.ttf" });

type ScheduleDay = "day0" | "day1" | "day2" | "day3";

const Schedule = () => {
  const [day, setDay] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const getScheduleDay = (day: number): ScheduleDay => {
    return `day${day}` as ScheduleDay;
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.minHeight = `${containerRef.current.scrollHeight}px`;
    }
  }, [day]);

  const renderDayContent = (currentDay: number) => (
    <div>
      <h1 className="text-xl text-center">
        <span className="text-mBlue mr-2 font-bold">Venue:</span>
        {currentDay === 0
          ? "Christ (Deemed to be University), Kengeri Campus"
          : "B. M. S. College Of Engineering"}
      </h1>

      <h1 className="text-xl text-center mt-4 mb-8">
        <span className="text-mBlue mr-2 font-bold">Date:</span>
        {currentDay === 0
          ? "September 9th, 2024 and September 18th, 2024"
          : currentDay === 1
          ? "September 20th, 2024"
          : currentDay === 2
          ? "September 21st, 2024"
          : "September 22nd, 2024"}
      </h1>

      <div className="space-y-6 border-l-2 mx-auto border-dashed border-gray-600">
        {schedule[getScheduleDay(currentDay)].map((s, id) => (
          <div key={id} className="relative w-full">
            <div className="absolute z-10 -ml-3.5 h-7 w-7 bg-white border-2 border-mBlue rounded-full p-0.5" />
            <div className="ml-6 space-y-2">
              <h4 className="font-bold text-mBlue text-2xl">{s.name}</h4>
              <p className="mt-2 max-w-screen-sm text-base text-justify text-black">
                {s.description}
              </p>
              <div className="flex items-center gap-2">
                <FaRegClock size={20} />
                <p className="mt-1 block text-sm font-semibold text-black">{s.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      id="schedule"
      className="w-full mx-auto flex flex-col space-y-4 py-20 items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#469be7] via-[#f6f9f9] to-[#f6f9f9] opacity-70"></div>
      <motion.div
        className="relative flex flex-col items-center w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <h1 className={`${batman.className} text-4xl md:text-5xl drop-shadow-blueDrop`}>
          SCHEDULE
        </h1>
        <p className="text-lg text-center w-3/4 md:text-xl mt-4 font-mono text-gray-600">
          Stay on Top with Our Event Schedule
        </p>

        <div className="mt-10 flex flex-col items-center">
          <button
            onClick={() => setDay(0)}
            className={`${spacex.className} border-2 border-mBlue px-3 py-1 m-1 font-bold text-base sm:px-4 sm:py-2 sm:text-lg ${
              day === 0 ? "bg-mBlue text-white" : ""
            }`}
          >
            Pre-Events
          </button>

          <div className="flex flex-wrap justify-center mt-4">
            {[1, 2, 3].map((dayNum) => (
              <button
                key={dayNum}
                onClick={() => setDay(dayNum)}
                className={`${spacex.className} border-2 border-mBlue px-3 py-1 m-1 font-bold text-base sm:px-4 sm:py-2 sm:text-lg ${
                  dayNum === 1 ? "rounded-l-full" : dayNum === 3 ? "rounded-r-full" : ""
                } ${day === dayNum ? "bg-mBlue text-white" : ""}`}
              >
                Day {dayNum}
              </button>
            ))}
          </div>
        </div>

        <div 
          ref={containerRef}
          className="w-full max-w-4xl mx-auto px-4 mt-8 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderDayContent(day)}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Schedule;