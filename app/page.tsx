import Hero from "@/components/hero";
import AboutUs from "@/components/aboutus";
import Why from "@/components/why";
import Events from "@/components/events";
import Schedule from "@/components/schedule";
import Sponsors from "@/components/sponsors";
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="flex flex-col bg-black">
      <Hero />
      <AboutUs />
      <Why />
      {/* <Events /> */}
      <Schedule />
      <Sponsors />
      <Footer/>
    </div>
  );
}
