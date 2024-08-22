import Hero from "@/components/hero";
import AboutUs from "@/components/aboutus";
import Why from "@/components/why";
import Events from "@/components/events";
import ParticleBackground from "@/components/particlebg";
import Schedule from "@/components/schedule";
import Collaborators from "@/components/collaborators";
import Footer from "../components/footer";
import Pricing from "../components/pricing";
import LearnMore from "../components/learnmore";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#F0FFFF]">
      <Navbar />
      <ParticleBackground/>
      <Hero />
      <AboutUs />
      <LearnMore />
      <Why />
      {/* <Events /> */}
      <Schedule />
      <Pricing />
      <Collaborators />
      <Footer />
    </div>
  );
}
