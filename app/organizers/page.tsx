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
        <Link className="flex items-center gap-2 w-full m-4" href="/">
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
              className="w-1/2 m-auto"
              src="/images/bmsce-ieee-cs.png"
              width={200}
              height={200}
              alt="bmsce cs"
            />
            <h1 className="my-auto">
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
          <div className="grid grid-cols-5 my-10">
            {organizers.bmsce.map((organizer) => (
              <div key={organizer}>
                <h1 className="m-4 text-xl text-center">{organizer}</h1>
              </div>
            ))}
          </div>
        </div>

        {/* Christ University Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-10">
          <h1 className="my-auto">
            The IEEE Computer Society Christ University - Bangalore Student
            Branch Chapter is a student chapter of the IEEE Computer Society,
            dedicated to advancing education and research in computer science
            and engineering. Its mission includes offering professional
            development, fostering networking among students, faculty, and
            industry professionals, and supporting the growth of future leaders
            with valuable resources and opportunities.
          </h1>
          <Image
            className="w-1/2 m-auto"
            src="/images/ieee-cs-cu.png"
            width={200}
            height={200}
            alt="christ university"
          />
        </div>

        <Link className="flex items-center gap-2 w-full m-10" href="/">
          <FaArrowLeftLong />
          <p>Go home</p>
        </Link>
      </div>
    </div>
  );
};

export default OraganizerPage;
