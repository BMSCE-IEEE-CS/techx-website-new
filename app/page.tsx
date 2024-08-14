import Hero from "@/components/hero";
import AboutUs from "@/components/aboutus";
import Why from "@/components/why";
import Image from "next/image";
import Events from "@/components/events";
import Schedule from "@/components/schedule";
import Collaborators from "@/components/collaborators";
import Footer from "../components/footer";
import Pricing from "../components/pricing";
import Sponsor from "@/components/sponsor";

export default function Home() {
  return (
    <div className="flex flex-col bg-black">
      <Hero />
      <AboutUs />
      <Sponsor />
      <Why />
      {/* <Events /> */}
      <Schedule />
      <Pricing />
      <Collaborators />
      <Footer />
    </div>
  );
}
