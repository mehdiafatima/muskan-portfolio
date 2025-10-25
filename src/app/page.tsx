import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <ChatBot/>
 
    </main>
  );
}
