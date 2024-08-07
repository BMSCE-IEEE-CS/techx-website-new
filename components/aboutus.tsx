import localFont from "next/font/local";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const spacex = localFont({ src: "../app/SpaceX.ttf" });

const AboutUs = () => {
  return (
    <div className="card text-white w-50" style={{ width: "70rem", margin: "80px auto", background: "linear-gradient(to bottom, #cc6600, #d88c1f)" }}>
      <div className="card-body">
        <h1 className="text-3xl md:text-6xl font-bold mt-10 drop-shadow-orangeDrop text-center">
          What is{" "}
          <span className={spacex.className}>
            TechX<sup className="ml-7">24</sup>
          </span>
        </h1>
        <p className="text-center mt-6" style={{fontWeight:"600"}}>
          <strong>TechX</strong> is a comprehensive event organized by the IEEE Computer Society's Student and Young Professionals community. Jointly hosted by BMSCE IEEE Computer Society and Christ University IEEE Computer Society, it offers a platform for students to explore emerging technologies, enhance soft skills, develop leadership abilities, and engage with industry professionals. Aligned with the "Tech, Train, Lead, Engage, Unique" motto, TechX aims to cultivate well-rounded tech leaders of tomorrow by providing a holistic learning experience.
        </p>
        <div className="card-actions flex-col mt-6">
          <p className="flex items-center ml-7 mb-4">
            <span className="mr-3">
              <FontAwesomeIcon icon={faCalendar} style={{ width: "20px" }} />
            </span>
            13th, 14th and 15th September, 2024
          </p>
          <p className="flex items-center ml-7">
            <span className="mr-3">
              <FontAwesomeIcon icon={faLocationDot} style={{ width: "20px" }} />
            </span>
            Bengaluru, India
          </p>
        </div>
      </div>
    
    </div>
  );
};

export default AboutUs;
