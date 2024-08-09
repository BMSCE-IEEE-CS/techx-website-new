import Hero from "@/components/hero";
import AboutUs from "@/components/aboutus";
import Why from "@/components/why";
import Events from "@/components/events";
import Schedule from "@/components/schedule";

export default function Home() {
  return (
    <div className="flex flex-col bg-black">
      <Hero />
      <AboutUs />
      <Why />
      <Events />
      <Schedule />
    </div>
  );
}
