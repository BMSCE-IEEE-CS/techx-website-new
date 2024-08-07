'use client'

import Navbar from "@/components/navbar";
import localFont from "next/font/local";
import Link from "next/link";
import useCountdown from "@/components/CountdownTimer";

const spacex = localFont({ src: "../app/SpaceX.ttf" });

export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown("2024-09-13T00:00:00");

  return (
    <div className="bg-hero bg-no-repeat bg-cover flex flex-col w-full min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-tr from-mOrange via-black to-black opacity-70 z-0"></div>
      <div className="relative z-10 flex flex-col ">
        <Navbar />
        <div className="relative flex flex-col items-center bg-no-repeat bg-cover select-none cursor-default">
          <div className="flex flex-col mt-52">
            <div className="text-center mb-10">
              <h2 className="text-3xl text-white font-bold -mt-[130px]">COMING SOON!</h2> <br />
              <div className="flex space-x-4 mt-4">
                <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4" style={{ fontSize: "90px", width:"100px" }}>
                  <span className="text-4xl text-mOrange"  style={{fontWeight:"600"}}>{days}</span>
                  <span className="text-lg text-white"  style={{fontWeight:"600"}}>Days</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4" style={{ fontSize: "90px" , width:"100px" }}>
                  <span className="text-4xl text-mOrange" style={{fontWeight:"600"}}>{hours}</span>
                  <span className="text-lg text-white"  style={{fontWeight:"600"}}>Hours</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4" style={{ fontSize: "90px" , width:"100px" }}>
                  <span className="text-4xl text-mOrange"  style={{fontWeight:"600"}}>{minutes}</span>
                  <span className="text-lg text-white" style={{fontWeight:"600"}}>Minutes</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4" style={{ fontSize: "90px" , width:"100px" }}>
                  <span className="text-4xl text-mOrange"  style={{fontWeight:"600"}}>{seconds}</span>
                  <span className="text-lg text-white"  style={{fontWeight:"600"}}>Seconds</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-3xl text-mOrange font-bold">IEEE CS</p>
              <h1 className={`${spacex.className} text-7xl text-white`}>
                Tech<span>X</span>
              </h1>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="#"
                className="bg-mOrange px-4 text-3xl py-2 border-2 border-mOrange hover:bg-black rounded-tr-3xl rounded-bl-3xl transition-all duration-150 ease-in"
                passHref
                target="_blank"
              >
                Purchase Ticket
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
