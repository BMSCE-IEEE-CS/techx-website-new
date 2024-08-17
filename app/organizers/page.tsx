import { organizers } from "@/utils/data";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const batman = localFont({ src: "../../app/batmfa__.ttf" });

const OraganizerPage = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center mx-10">
        <Link
          className="flex items-center gap-2 w-full m-4 text-xl font-bold"
          href="/"
        >
          <FaArrowLeftLong />
          <p>Back</p>
        </Link>
        <h1
          className={`${batman.className} text-4xl md:text-6xl drop-shadow-orangeDrop`}
        >
          Organizers
        </h1>

        {/* BMSCE Section */}
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-10">
            <Image
              className="w-full md:w-1/2 m-auto mb-4 md:mb-auto"
              src="/images/bmsce-ieee-cs.png"
              width={200}
              height={200}
              alt="bmsce cs"
            />
            <h1 className="my-auto text-justify text-xl">
              The BMSCE IEEE Computer Society is a premier source of information
              and collaboration in computer science and engineering, connecting
              members worldwide. It provides access to international
              conferences, peer-reviewed publications, a digital library, and
              continuous learning opportunities. The society fosters
              collaboration among engineers, scientists, and industry
              professionals through workshops, hackathons, and codeathons,
              driving innovation and advancing technology.
            </h1>
          </div>
          {/* core */}
          <div className="mt-10">
            <h1 className="text-4xl font-bold text-center">CORE</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 mt-4">
              {organizers.bmsce.core.map((name, idx) => (
                <div key={idx}>
                  <p className="text-xl font-semibold my-4 text-center">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* sac */}
          <div className="mt-4">
            <h1 className="text-4xl font-bold text-center">SAC</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 mt-4">
              {organizers.bmsce.sac.map((name, idx) => (
                <div key={idx}>
                  <p className="text-xl font-semibold my-4 text-center">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Christ University Section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-10">
            <h1 className="my-auto text-justify text-xl">
              The IEEE Computer Society Christ University - Bangalore Student
              Branch Chapter is a student chapter of the IEEE Computer Society,
              dedicated to advancing education and research in computer science
              and engineering. Its mission includes offering professional
              development, fostering networking among students, faculty, and
              industry professionals, and supporting the growth of future
              leaders with valuable resources and opportunities.
            </h1>
            <Image
              className="w-full md:w-1/2 m-auto order-first md:order-none mb-4 md:mb-auto"
              src="/images/ieee-cs-cu.png"
              width={200}
              height={200}
              alt="christ university"
            />
          </div>
          {/* core */}
          <div className="mt-10">
            <h1 className="text-4xl font-bold text-center">CORE</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 mt-4">
              {organizers.bmsce.core.map((name, idx) => (
                <div key={idx}>
                  <p className="text-xl font-semibold my-4 text-center">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* sac */}
          <div className="mt-4">
            <h1 className="text-4xl font-bold text-center">SAC</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 mt-4">
              {organizers.bmsce.sac.map((name, idx) => (
                <div key={idx}>
                  <p className="text-xl font-semibold my-4 text-center">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link
          className="flex items-center gap-2 w-full m-10 text-xl font-bold"
          href="/"
        >
          <FaArrowLeftLong />
          <p>Go home</p>
        </Link>
      </div>
    </div>
  );
};

export default OraganizerPage;
