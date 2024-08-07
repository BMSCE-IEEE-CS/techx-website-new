import React from "react";
import Image from "next/image";

const Why = () => {
  return (
    <div className="relative w-full py-20 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
      <div className="relative z-10 flex flex-col md:flex-row gap-20 items-center justify-center w-5/6">
        <Image
          className="w-1/2 md:w-1/3 sm:w-1/2 border-8 rounded-xl border-gray-800"
          src="/images/aboutimg.jpg"
          width={512}
          height={512}
          alt="About image"
        />
        <div className="w-5/6 md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-bold drop-shadow-orangeDrop">
            Outcomes
          </h1>
          <ul className="text-justify mt-5 text-xl list-image-[url(/images/arrow.png)] list-outside">
            <li>
              Captivating technical sessions. Hands-on workshops with experts.
            </li>
            <li>
              Insights from successful Professionals in different domains.
            </li>
            <li>Win prizes, foster camaraderie.</li>
            <li>Interactive Personality Workshop.</li>
            <li>Mind-bending entertainment with Mentalist.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Why;
