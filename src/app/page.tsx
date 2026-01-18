import Hero from "@/components/Hero";
import UntoldSection from "@/components/UntoldSection";
import HiddenLayer from "@/components/HiddenLayer";
import MeaningGrid from "@/components/MeaningGrid";
import Manifesto from "@/components/Manifesto";
import Closing from "@/components/Closing";

import SonicSection from "@/components/SonicSection";
import ContextSection from "@/components/ContextSection";
import VesselSection from "@/components/VesselSection";
import ImpactQuote from "@/components/ImpactQuote";
import GiftingSection from "@/components/GiftingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Hero />
      <ContextSection />
      <VesselSection />
      <UntoldSection />
      <ImpactQuote />
      <SonicSection />
      <MeaningGrid />
      <GiftingSection />
      <HiddenLayer />
      <Closing />
    </main>
  );
}
