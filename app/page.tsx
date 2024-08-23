"use client";

import Hero from "@/components/hero";
import AboutUs from "@/components/aboutus";
import Why from "@/components/why";
import Events from "@/components/events";
import Schedule from "@/components/schedule";
import Collaborators from "@/components/collaborators";
import Footer from "../components/footer";
import Pricing from "../components/pricing";
import LearnMore from "../components/learnmore";
import Navbar from "@/components/navbar";
import ParticlesBg from "@/components/particles";
import { Suspense, useEffect, useState } from "react";
import LoadSpinner from "@/components/loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="relative flex flex-col justify-center items-center min-h-screen">
        <div className="absolute inset-0 bg-[#f6f9f9] opacity-70"></div>
        <div className="relative z-10">
          <LoadSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-[#F0FFFF] relative">
      <ParticlesBg />
      <div className="relative z-10">
        <Suspense fallback={LoadSpinner()}>
          <Navbar />
          <Hero />
          <AboutUs />
          <LearnMore />
          <Why />
          {/* <Events /> */}
          <Schedule />
          <Pricing />
          <Collaborators />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
