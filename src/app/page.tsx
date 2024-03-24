import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/herosection/HeroSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="w-[90%] m-auto">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
