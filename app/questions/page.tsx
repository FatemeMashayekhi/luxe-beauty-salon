import Header from "@/components/home-page/header/Header";
import HeroSection from "@/components/questions/HeroSection";
import QuestionBox from "@/components/questions/QuestionBox";
import CTASection from "@/components/questions/CTASection";
import Footer from "@/components/home-page/footer/Footer";

export default function FAQPage() {
  return (
    <main dir="rtl" className="min-h-screen">
      <div className="2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
        <Header />
      </div>
      <div className=" bg-[#FFF8F5] text-[#1E1E1E]">
        <HeroSection />
        <QuestionBox />
        <CTASection />
      </div>
      <Footer />
    </main>
  );
}
