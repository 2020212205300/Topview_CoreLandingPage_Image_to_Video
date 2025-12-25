import { Box } from "@chakra-ui/react";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AIFeatures from "@/components/AIFeatures";
import PlatformOptimization from "@/components/AgentDifferences";
import AgentCapabilities from "@/components/AgentCapabilities";
import GeneratorSection from "@/components/GeneratorSection";
import MethodsSection from "@/components/MethodsSection";
import ImageVideoFeatures from "@/components/ImageVideoFeatures";
import AdSteps from "@/components/AdSteps";
import StepsSection from "@/components/StepsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <Box minH="100vh" bg="black">
      <PromoBanner />
      <Header />
      <Box as="main">
        <HeroSection />
        <AIFeatures />
        <GeneratorSection />
        <MethodsSection />
        <ImageVideoFeatures />
        <AdSteps />
        <PlatformOptimization />
        <AgentCapabilities />
        <StepsSection />
        <FAQSection />
        <CTASection />
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;
