import { Icon } from "@iconify/react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-[#EF617D] px-6 py-12 text-center text-white sm:px-10 md:py-16">
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10" />

        <div className="relative">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <Icon icon="solar:calendar-add-bold" width="28" height="28" />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            وقتشه برای خودت وقت بذاری
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
            خدمت موردنظرت را انتخاب کن، متخصص موردنظر را ببین و در چند قدم ساده
            نوبت خودت را رزرو کن.
          </p>

          <Link
            href="/booking"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 font-bold text-[#EF617D] shadow-xl transition hover:bg-neutral-50 active:scale-[0.98]"
          >
            <span>رزرو نوبت</span>

            <Icon icon="solar:arrow-left-linear" width="20" height="20" />
          </Link>
        </div>
      </div>
    </section>
  );
}
