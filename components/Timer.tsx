"use client";

import useCountdown from "@/components/CountdownTimer";

const Timer = () => {
  const { days, hours, minutes, seconds } = useCountdown("2024-09-20T00:00:00");
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 m-4">
      <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4">
        <p className="text-4xl text-mOrange font-bold">{days}</p>
        <p className="text-lg text-white font-mono">DAYS</p>
      </div>
      <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4">
        <p className="text-4xl text-mOrange font-bold">{hours}</p>
        <p className="text-lg text-white font-mono">HOURS</p>
      </div>
      <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4">
        <p className="text-4xl text-mOrange font-bold">{minutes}</p>
        <p className="text-lg text-white font-mono">MINUTES</p>
      </div>
      <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4">
        <p className="text-4xl text-mOrange font-bold">{seconds}</p>
        <p className="text-lg text-white font-mono">SECONDS</p>
      </div>
    </div>
  );
};

export default Timer;
