import { MobileFooter } from "@/components/booking/mobile-footer/MobileFooter";
import Header from "@/components/booking/services/Header";
import Footer from "@/components/home-page/footer/Footer";

export default function BookingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <br />
        <br />

        <Footer />
      </div>

      <MobileFooter />
    </>
  );
}
