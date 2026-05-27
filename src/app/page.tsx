import Navbar from "../../components/Navbar";
import Hero from "../../components/HeroSection";
import SolutionSection from "../../components/SolutionSection";
import Feature from "../../components/Features";
import ProjectsDelivered from "../../components/ProjectsDelivered";
import SocialProof from "../../components/SocialProof";
import HowItWorks from "../../components/HowItWorks";
import Pricing from "../../components/Pricing";
import FAQ from "../../components/FAQ";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SolutionSection />
        <Feature />
        <ProjectsDelivered />
        <SocialProof />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
