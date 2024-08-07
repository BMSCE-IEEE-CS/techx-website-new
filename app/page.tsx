import Hero from "@/components/hero";
import AboutUs from "@/components/aboutus";
import Why from "@/components/why";

export default function Home() {
  return (
    <div className="flex flex-col bg-black">
      <Hero />
      <AboutUs />
      <Why />
    </div>
  );
}
