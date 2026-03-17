import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Services } from "@/components/Services";
import Projects from "@/components/Projects";
import { Technologies } from "@/components/Technologies";
import WhoWeAre from "@/components/WhoWeAre";
import { Footer } from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <Services />
    <Projects />
    <Technologies />
    <WhoWeAre />
    <Footer />
  </>
);

export default Index;
