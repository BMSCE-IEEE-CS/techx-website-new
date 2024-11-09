import localFont from "next/font/local";
import Image from "next/image";
import React from "react";

const spacex = localFont({ src: "../../app/SpaceX.ttf" });

interface EventCardProp {
  name: string;
  image: string;
  day: string;
}

const EventCard = ({ name, image, day }: EventCardProp) => {
  return (
    <div className="flex flex-col rounded-xl border-4 items-center border-yellow-400 bg-mBlue/20 hover:bg-mBlue/60 transition-all duration-500 ease-in-out">
      <h1
        className={`${spacex.className} mb-2 border-b-4 w-full text-xl border-yellow-400 p-2 text-center font-bold`}
      >
        {day}
      </h1>
      <div className="flex flex-col m-4 items-center">
        <Image
          className="rounded-xl"
          src={image as string}
          width={350}
          height={350}
          alt={name}
        />
        <h1 className="text-2xl font-bold mt-2">{name}</h1>
      </div>
    </div>
  );
};

export default EventCard;
