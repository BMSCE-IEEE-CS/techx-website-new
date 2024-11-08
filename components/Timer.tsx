"use client";

import useCountdown from "@/components/CountdownTimer";

const Timer = () => {
  const { days, hours, minutes, seconds } = useCountdown("2024-11-29T00:00:00");
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 m-4">
      <div className="flex flex-col items-center bg-gray-900 rounded-lg p-4">
        <p className="text-4xl text-[#469be7] font-bold">{days}</p>
        <p className="text-lg text-white font-mono mt-2 font-semibold">DAYS</p>
      </div>
      <div className="flex flex-col items-center bg-gray-900 rounded-lg p-4">
        <p className="text-4xl text-[#469be7] font-bold">{hours}</p>
        <p className="text-lg text-white font-mono mt-2 font-semibold">HOURS</p>
      </div>
      <div className="flex flex-col items-center bg-gray-900 rounded-lg p-4">
        <p className="text-4xl text-[#469be7] font-bold">{minutes}</p>
        <p className="text-lg text-white font-mono mt-2 font-semibold">
          MINUTES
        </p>
      </div>
      <div className="flex flex-col items-center bg-gray-900 rounded-lg p-4">
        <p className="text-4xl text-[#469be7] font-bold">{seconds}</p>
        <p className="text-lg text-white font-mono mt-2 font-semibold">
          SECONDS
        </p>
      </div>
    </div>
  );
};

export default Timer;
