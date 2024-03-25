import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Contact() {
  return (
    <div className="w-[90%] m-auto">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
}
