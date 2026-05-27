'use client'
import Hero from "../../components/HeroSection";
import SolutionSection from "../../components/SolutionSection";
import SocialProof from "../../components/SocialProof";
import HowItWorks from "../../components/HowItWorks";
import Pricing from "../../components/Pricing";
import FAQ from "../../components/FAQ";
import FinalCTA from "../../components/FinalCTA";
import Feature from "../../components/Features";
import ProjectsDelivered from "../../components/ProjectsDelivered";

export default function Home() {
  return (
    <div>
      <Hero />
      <SolutionSection />
      <Feature />
      <ProjectsDelivered />
      <SocialProof />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
