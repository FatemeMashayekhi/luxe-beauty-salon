import Body from "@/components/home-page/body/Body";
import Footer from "@/components/home-page/footer/Footer";
import Header from "@/components/home-page/header/Header";

export default function HomePage() {
  return (
    <div className="2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
      <Header />
      <Body />
      <br />
      <br />
      <Footer />
    </div>
  );
}
