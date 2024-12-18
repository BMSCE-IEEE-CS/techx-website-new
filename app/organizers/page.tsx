"use client";

import LoadSpinner from "@/components/loading";
import ParticlesBg from "@/components/particles";
import { organizers } from "@/utils/data";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const batman = localFont({ src: "../../app/batmfa__.ttf" });

const OraganizerPage = () => {
  return (
    <Suspense fallback={LoadSpinner()}>
      <div className="w-full relative">
        <ParticlesBg />
        <div className="absolute inset-0 bg-[#f6f9f9] opacity-70 z-0"></div>
        <div className="flex flex-col items-start mx-6 relative z-10">
          <Link
            className="flex items-center gap-2 m-4 text-xl font-bold text-white bg-mBlue px-4 py-2 rounded-xl"
            href="/"
          >
            <FaArrowLeftLong />
            <p>Back</p>
          </Link>
          <h1
            className={`${batman.className} text-4xl md:text-6xl drop-shadow-blueDrop text-center w-full mt-4`}
          >
            Organizers
          </h1>
          {/* BMSCE Section */}
          <div className="flex flex-col w-full mt-10">
            <h1 className="text-2xl md:text-4xl font-bold text-mBlue text-center mb-4">
              BMSCE IEEE Computer Society
            </h1>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
              <Image
                className="w-full md:w-1/2 m-auto mb-4 md:mb-auto"
                src="/images/bmsceieeecsblack.png"
                width={200}
                height={200}
                alt="bmsce cs"
              />
              <h2 className="my-auto text-justify text-xl w-3/4 mx-auto md:mr-auto">
                The BMSCE IEEE Computer Society is a premier source of
                information and collaboration in computer science and
                engineering, connecting members worldwide. It provides access to
                international conferences, peer-reviewed publications, a digital
                library, and continuous learning opportunities. The society
                fosters collaboration among engineers, scientists, and industry
                professionals through workshops, hackathons, and codeathons,
                driving innovation and advancing technology.
              </h2>
            </div>
            <hr className="my-8 border-t-0 h-[3px] w-full md:w-3/4 mx-auto bg-gray-400" />
            <div className="divide-x-2 divide-y-2"></div>
            <div className="">
              <h1 className="text-3xl md:text-4xl font-bold text-center">
                Executive Committee
              </h1>
              <br /> <br />
              <h2 className="text-4xl font-bold text-center">
                Chapter Advisor
              </h2>
              <div className="flex flex-col my-12">
                {organizers.bmsce.chapter_advisor.map((name, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-xl font-semibold text-center">{name}</p>
                  </div>
                ))}
              </div>
              <h2 className="text-4xl font-bold text-center">CORE</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {organizers.bmsce.core.map((person, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-xl font-semibold">{person.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{person.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <br /> <br />
            <div className="mt-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                Student Activity Committee Coordinators
              </h2>
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
          <br />{" "}
          <hr className="my-8 border-t-0 h-[1px] w-full md:w-full mx-auto bg-gray-400" />
          <div className="flex flex-col w-full mt-10">
            <h1 className="text-2xl md:text-4xl font-bold text-mBlue text-center mb-4">
              Christ University IEEE Computer Society
            </h1>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
              <Image
                className="w-full md:w-1/2 m-auto order-first md:order-none mb-4 md:mb-auto"
                src="/images/ieee-cs-cu-black.png"
                width={200}
                height={200}
                alt="christ university"
              />
              <h2 className="my-auto text-justify text-xl w-3/4 mx-auto md:mr-auto">
                The IEEE Computer Society Christ University - Bangalore Student
                Branch Chapter is a student chapter of the IEEE Computer
                Society, dedicated to advancing education and research in
                computer science and engineering. Its mission includes offering
                professional development, fostering networking among students,
                faculty, and industry professionals, and supporting the growth
                of future leaders with valuable resources and opportunities.
              </h2>
            </div>
            <hr className="my-8 border-t-0 h-[3px] w-full md:w-3/4 mx-auto bg-gray-400" />
            <div className="">
              <h1 className="text-3xl md:text-4xl font-bold text-center">
                Executive Committee
              </h1>
              <br /> <br />
              <h2 className="text-4xl font-bold text-center">
                Chapter Advisor
              </h2>
              <div className="flex flex-col my-12">
                {organizers.christuni.chapter_advisor.map((name, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-xl font-semibold text-center">{name}</p>
                  </div>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-center">
                CORE
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {organizers.christuni.core.map((person, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-xl font-semibold">{person.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{person.role}</p>
                  </div>
                ))}
              </div>
              <br /> <br />
              <div className="mt-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                  Student Activity Committee Coordinators
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 mt-4">
                  {organizers.christuni.sac.map((name, idx) => (
                    <div key={idx}>
                      <p className="text-xl font-semibold my-4 text-center">
                        {name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link
            className="text-center w-max mx-auto m-4 text-xl font-bold text-white bg-mBlue px-6 py-4 mt-10 rounded-xl"
            href="/"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </Suspense>
  );
};

export default OraganizerPage;
