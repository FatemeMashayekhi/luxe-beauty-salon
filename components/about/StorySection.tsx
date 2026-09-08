import { Icon } from "@iconify/react";
import Image from "next/image";

export default function StorySection() {
  return (
    <section id="story" className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="mt-10 overflow-hidden rounded-[1.75rem]">
              <Image
                src="/images/about/pic2.jpg"
                alt="فضای داخلی سالن زیبایی لوکس"
                width={500}
                height={650}
                className="h-full min-h-80 w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-[1.75rem]">
              <Image
                src="/images/about/pic1.png"
                alt="خدمات سالن زیبایی لوکس"
                width={500}
                height={650}
                className="h-full min-h-80 w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-5 right-1/2 flex translate-x-1/2 items-center gap-3 rounded-2xl border border-neutral-100 bg-white px-5 py-4 shadow-xl">
            <div className="text-center">
              <p className="text-2xl font-extrabold text-[#EF617D]">لوکس</p>

              <p className="mt-1 text-xs text-neutral-500">با عشق برای شما</p>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#EF617D]" />
            <span className="text-sm font-semibold text-[#EF617D]">
              داستان ما
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.4] sm:text-4xl">
            زیبایی از جایی شروع می‌شود که
            <span className="text-[#EF617D]"> برای خودتان وقت می‌گذارید.</span>
          </h2>

          <div className="mt-6 space-y-4 text-base leading-8 text-neutral-600">
            <p>
              سالن زیبایی لوکس با یک هدف ساده شکل گرفت؛ ایجاد فضایی که مشتری فقط
              برای دریافت خدمات زیبایی وارد آن نشود، بلکه برای چند ساعت آرامش،
              توجه و حس خوب را تجربه کند.
            </p>

            <p>
              ما تلاش کرده‌ایم میان تخصص، کیفیت و فضای دلنشین تعادل ایجاد کنیم.
              از انتخاب محصولات و ابزارها گرفته تا نحوه برخورد با مشتری و جزئیات
              اجرای هر خدمت، همه چیز با دقت انجام می‌شود.
            </p>

            <p>
              برای ما هر مراجعه‌کننده یک شماره در تقویم نیست؛ هر نفر تجربه‌ای
              متفاوت، سلیقه‌ای متفاوت و نیازهایی متفاوت دارد.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4 rounded-2xl bg-[#fff7f8] p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
              <Icon
                icon="hugeicons:quote-up"
                width="22"
                height="22"
                className="text-[#EF617D]"
              />
            </div>

            <p className="text-sm font-medium leading-7 text-neutral-700">
              «زیبایی وقتی ماندگار می‌شود که با حس خوب همراه باشد.»
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
