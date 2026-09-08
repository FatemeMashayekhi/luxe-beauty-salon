import Header from "@/components/home-page/header/Header";
import HeroSection from "@/components/about/HeroSection";
import StatsSection from "@/components/about/StatsSection";
import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import CTASection from "@/components/about/CTASection";
import Footer from "@/components/home-page/footer/Footer";

export default function AboutPage() {
  return (
    <main dir="rtl" className="overflow-hidden text-neutral-900">
      <Header />
      <HeroSection />
      <StatsSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  );
}
