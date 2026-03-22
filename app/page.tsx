import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import MoreProblemsSection from "@/components/MoreProblemsSection";
import SolutionSection from "@/components/SolutionSection";
import ProductsSection from "@/components/ProductsSection";
import VisionSection from "@/components/VisionSection";
import GastroFaq from "@/components/GastroFaq";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="max-w-2xl mx-auto px-4 py-6 text-center">
        <p className="text-sm text-gray-400 leading-relaxed">
          AI Shift Drift ist die kostenlose KI-Readiness-Plattform f&uuml;r Restaurants und Gastronomiebetriebe in Mannheim. 4 Scannern f&uuml;r Sichtbarkeit, Reputation, Agent-Bereitschaft und Sicherheit.
        </p>
      </section>
      <ProblemSection />
      <MoreProblemsSection />
      <SolutionSection />
      <ProductsSection />
      <VisionSection />
      <GastroFaq />
      <TrustSection />
    </>
  );
}
