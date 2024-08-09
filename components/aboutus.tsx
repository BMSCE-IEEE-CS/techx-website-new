import localFont from "next/font/local";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const spacex = localFont({ src: "../app/SpaceX.ttf" });

const AboutUs = () => {
  return (
    <div
      id="about"
      className="card text-white my-20 bg-gradient-to-b w-4/5 md:w-3/4 mx-auto from-[#cc6600] to-[#d88c1f]"
    >
      <div className="card-body">
        <h1 className="text-3xl md:text-6xl font-bold mt-10 drop-shadow-orangeDrop text-center">
          What is{" "}
          <span className={spacex.className}>
            TechX<sup className="ml-2 md:ml-7">24</sup>
          </span>
        </h1>
        <p className="text-justify mt-6 font-semibold">
          <strong>TechX</strong> is a comprehensive event organized by the IEEE
          Computer Society&apos;s Student and Young Professionals community.
          Jointly hosted by BMSCE IEEE Computer Society and Christ University
          IEEE Computer Society, it offers a platform for students to explore
          emerging technologies, enhance soft skills, develop leadership
          abilities, and engage with industry professionals. Aligned with the
          &quot;Tech, Train, Lead, Engage, Unique&quot; motto, TechX aims to
          cultivate well-rounded tech leaders of tomorrow by providing a
          holistic learning experience.
        </p>
        <div className="card-actions flex flex-col mt-6">
          <p className="flex items-center mb-4">
            <span className="mr-3">
              <FaCalendarAlt size={25} />
            </span>
            13th, 14th and 15th September, 2024
          </p>
          <p className="flex items-center">
            <span className="mr-3">
              <FaLocationDot size={25} />
            </span>
            Bengaluru, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
