"use client";

import { schedule } from "@/utils/data";
import localFont from "next/font/local";
import React, { useState } from "react";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";

const spacex = localFont({ src: "../app/SpaceX.ttf" });

const Schedule = () => {
  const [day, setDay] = useState(1);
  return (
    <div className="w-3/4 mx-auto flex flex-col py-20 items-center justify-center">
      <h1
        className={`${spacex.className} text-4xl md:text-5xl drop-shadow-orangeDrop `}
      >
        SCHEDULE
      </h1>
      <p className="text-lg text-center md:text-xl mt-4 font-mono">
        Stay on Top with Our Event Schedule
      </p>
      <div className="mt-10">
        <button
          onClick={() => setDay(1)}
          className={`${
            spacex.className
          } border-2 border-mOrange px-4 py-2 m-1 mr-5 text-lg rounded-l-full ${
            day === 1 ? "bg-mOrange text-black" : ""
          }`}
        >
          Day 1
        </button>
        <button
          onClick={() => setDay(2)}
          className={`${
            spacex.className
          } border-2 border-mOrange px-4 py-2 m-1 mr-5 ml-5 text-lg  ${
            day === 2 ? "bg-mOrange text-black" : ""
          }`}
        >
          Day 2
        </button>
        <button
          onClick={() => setDay(3)}
          className={`${
            spacex.className
          } border-2 border-mOrange px-4 py-2 m-1 text-lg ml-5 rounded-r-full ${
            day === 3 ? "bg-mOrange text-black" : ""
          }`}
        >
          Day 3
        </button>
      </div>
      <div className="mt-10">
        {day === 1 && (
          <div className="space-y-6 border-l-2 border-dashed">
            {schedule.day1.map((s, id) => (
              <div key={id} className="relative w-full">
                <div className="absolute  z-10 -ml-3.5 h-7 w-7 bg-black border-2 border-mOrange rounded-full p-0.5" />
                <div className="ml-6 space-y-2">
                  <h4 className="font-bold text-mOrange text-2xl">{s.name}</h4>
                  <p className="mt-2 max-w-screen-sm text-base text-gray-400">
                    {s.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <MdPerson size={20} />
                    <p className="mt-1 block text-sm font-semibold text-yellow-300">
                      {s.rp}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegClock size={20} />
                    <p className="mt-1 block text-sm font-semibold text-yellow-300">
                      {s.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLocationDot size={20} />
                    <p className="mt-1 block text-sm font-semibold text-yellow-300">
                      {s.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}  {day === 2 && (
          <div className="space-y-6 border-l-2 border-dashed">
            {schedule.day2.map((s, id) => (
              <div key={id} className="relative w-full">
                <div className="absolute  z-10 -ml-3.5 h-7 w-7 bg-black border-2 border-mOrange rounded-full p-0.5" />
                <div className="ml-6 space-y-2">
                  <h4 className="font-bold text-mOrange text-2xl">{s.name}</h4>
                  <p className="mt-2 max-w-screen-sm text-base text-gray-400">
                    {s.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <MdPerson size={20} />
                    <p className="mt-1 block text-sm font-semibold text-yellow-300">
                      {s.rp}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegClock size={20} />
                    <p className="mt-1 block text-sm font-semibold text-yellow-300">
                      {s.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLocationDot size={20} />
                    <p className="mt-1 block text-sm font-semibold text-yellow-300">
                      {s.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
          {day === 3 && (
          <div className="space-y-6 border-l-2 border-dashed">
            {schedule.day3.map((s, id) => (
              <div key={id} className="relative w-full">
                <div className="absolute  z-10 -ml-3.5 h-7 w-7 bg-black border-2 border-mOrange rounded-full p-0.5" />
                <div className="ml-6 space-y-2">
                  <h4 className="font-bold text-mOrange text-2xl">{s.name}</h4>
                  <p className="mt-2 max-w-screen-sm text-base text-gray-400">
                    {s.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <MdPerson size={20} />
                    <p className="mt-1 block text-sm font-semibold text-yellow-300">
                      {s.rp}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegClock size={20} />
                    <p className="mt-1 block text-sm font-semibold text-yellow-300">
                      {s.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLocationDot size={20} />
                    <p className="mt-1 block text-sm font-semibold text-yellow-300">
                      {s.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
