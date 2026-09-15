import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/provider/Providers";

export const metadata: Metadata = {
  title: "سالن زیبایی لوکس",
  description:
    "سالن زیبایی لوکس، ارائه‌دهنده خدمات تخصصی زیبایی و مراقبت از مو، پوست، ناخن، ابرو و مژه. خدمات خود را انتخاب کنید و به‌صورت آنلاین وقت رزرو کنید.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
