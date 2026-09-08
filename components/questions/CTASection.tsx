import { Icon } from "@iconify/react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="px-5 pb-14 sm:px-8 sm:pb-20 lg:px-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#1E1E1E] px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
        <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-[#EF617D]/15 blur-2xl" />
        <div className="absolute -bottom-24 right-0 h-52 w-52 rounded-full bg-[#F68FA4]/10 blur-3xl" />
        <div className="relative flex flex-col items-center justify-between gap-7 md:flex-row md:text-right">
          <div className="max-w-xl text-center md:text-right">
            <span className="text-sm font-semibold text-[#F68FA4]">
              هنوز سوالی دارید؟
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              وقتت رو برای زیبایی رزرو کن
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#9A9A9A] sm:text-base">
              اگر پاسخ سوال خود را پیدا نکردید، با ما تماس بگیرید یا همین حالا
              نوبت خود را در سالن زیبایی لوکس رزرو کنید.
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#EF617D] px-7 text-sm font-bold text-white transition-all hover:bg-[#E85372] hover:shadow-[0_8px_24px_rgba(239,97,125,0.25)] active:scale-[0.98]"
            >
              <span>رزرو وقت</span>
              <Icon icon="solar:arrow-left-linear" width={18} height={18} />
            </Link>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              <Icon icon="solar:phone-linear" width={18} height={18} />
              <span>تماس با ما</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
