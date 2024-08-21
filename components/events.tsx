import localFont from "next/font/local";
import React from "react";
import EventCard from "./card/eventcard";
import { eventsData } from "@/utils/data";

const batman = localFont({ src: "../app/batmfa__.ttf" });

const Events = () => {
  return (
    <div
      id="events"
      className="relative py-20 flex flex-col items-center justify-center min-h-screen"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-mBlue to-black opacity-80 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1
          className={`${batman.className} text-4xl md:text-5xl drop-shadow-blueDrop tracking-wider`}
        >
          EVENTS
        </h1>
        <p className="text-lg text-center md:text-xl mx-4 mt-4 font-mono">
          Explore the Exciting Lineup of Events Ahead
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 m-10 mt-20">
          {eventsData.data.map((event, id) => (
            <EventCard
              name={event.name}
              image={event.image}
              day={event.day}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
