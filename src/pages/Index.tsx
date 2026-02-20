import HeroSection from "@/components/HeroSection";
import ReceiptSection from "@/components/ReceiptSection";
import StorySection from "@/components/StorySection";
import CharacterSection from "@/components/CharacterSection";
import TimelineSection from "@/components/TimelineSection";
import TokenSection from "@/components/TokenSection";
import SocialSection from "@/components/SocialSection";
import DisclaimerSection from "@/components/DisclaimerSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ReceiptSection />
      <StorySection />
      <CharacterSection />
      <TimelineSection />
      <TokenSection />
      <SocialSection />
      <DisclaimerSection />
    </main>
  );
};

export default Index;
