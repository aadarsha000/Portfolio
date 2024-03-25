import AboutMe from "@/components/about/About";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function About() {
  return (
    <div className="w-[90%] m-auto">
      <Navbar />
      <AboutMe />
      <Footer />
    </div>
  );
}
