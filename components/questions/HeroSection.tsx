import { Icon } from "@iconify/react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#F6D7CC]">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F6D7CC]/60 blur-3xl" />
      <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#F68FA4]/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#F6D7CC] bg-white px-4 py-2 text-sm font-medium text-[#E85372] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <Icon icon="solar:question-circle-linear" width={18} height={18} />
            <span>راهنمای سالن زیبایی لوکس</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-[#1E1E1E] sm:text-5xl lg:text-6xl">
            سوالات متداول
          </h1>
          <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
            <span className="h-1 w-12 rounded-full bg-[#EF617D]" />
            <span className="h-1 w-3 rounded-full bg-[#F68FA4]" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#666666] sm:text-base lg:text-lg">
            پاسخ سوالات متداول درباره رزرو نوبت، خدمات، پرداخت و مراجعه به سالن
            زیبایی لوکس را اینجا پیدا کنید.
          </p>
        </div>
      </div>
    </section>
  );
}
