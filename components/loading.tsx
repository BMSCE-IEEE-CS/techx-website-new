import Image from "next/image";
import React from "react";

const LoadSpinner = () => {
  return (
    <div className="relative w-32 h-32">
      <div className="absolute inset-0 rounded-full border-t-4 border-mBlue animate-spin"></div>
      <div className="absolute inset-2 flex items-center justify-center">
        <Image
          src="/images/cslogoloader.png"
          width={100}
          height={100}
          alt="loadericon"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default LoadSpinner;
