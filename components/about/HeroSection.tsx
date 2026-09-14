import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import pic1 from "@/public/images/about/hero.png";
import HeroBtn from "./HeroBtn";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fff7f8]">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#EF617D]/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#EF617D]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="order-2 lg:order-1">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#EF617D]/20 bg-white px-4 py-2 text-sm font-medium text-[#EF617D] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#EF617D]" />
            <span>زیبایی، آرامش، اعتمادبه‌نفس</span>
          </div>

          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.35] tracking-tight sm:text-5xl lg:text-6xl">
            جایی برای اینکه
            <span className="text-[#EF617D]"> بهترین نسخه خودتان </span>
            باشید.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg">
            در سالن زیبایی لوکس، زیبایی برای ما فقط یک ظاهر زیبا نیست. ما فضایی
            آرام و حرفه‌ای ساخته‌ایم تا بتوانید با خیال راحت زمانی را برای
            خودتان اختصاص دهید و با حس خوب از سالن خارج شوید.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#EF617D] px-7 font-semibold text-white shadow-lg shadow-[#EF617D]/20 transition hover:bg-[#e95673] active:scale-[0.98]"
            >
              <span>رزرو نوبت</span>

              <Icon icon="solar:arrow-left-linear" width="20" height="20" />
            </Link>

            <HeroBtn />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <Icon
                icon="solar:verified-check-bold"
                width="18"
                height="18"
                className="text-[#EF617D]"
              />
              متخصصین حرفه‌ای
            </div>

            <div className="flex items-center gap-2">
              <Icon
                icon="solar:shield-check-bold"
                width="18"
                height="18"
                className="text-[#EF617D]"
              />
              محصولات باکیفیت
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -bottom-5 -right-5 h-28 w-28 rounded-3xl bg-[#EF617D]/10" />

            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full border border-[#EF617D]/20" />

            <div className="relative overflow-hidden rounded-4xl shadow-2xl shadow-[#EF617D]/10">
              <Image
                src={pic1}
                alt="سالن زیبایی لوکس"
                width={700}
                height={800}
                className="aspect-4/5 w-full object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-xl backdrop-blur">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0f3]">
                <Icon
                  icon="solar:star-bold"
                  width="22"
                  height="22"
                  className="text-[#EF617D]"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-neutral-900">
                  رضایت مشتریان
                </p>

                <p className="mt-0.5 text-xs text-neutral-500">
                  تجربه‌ای که به خاطر می‌ماند
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
