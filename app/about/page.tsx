import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const stats = [
  {
    value: "+۳۰۰۰",
    label: "مشتری راضی",
    icon: "solar:users-group-rounded-bold",
  },
  {
    value: "+۵",
    label: "سال تجربه",
    icon: "solar:calendar-bold",
  },
  {
    value: "+۱۵",
    label: "خدمات تخصصی",
    icon: "solar:magic-stick-3-bold",
  },
  {
    value: "۴.۹⭐",
    label: "رضایت مشتریان",
    icon: "solar:star-bold",
  },
];

const values = [
  {
    icon: "solar:heart-angle-bold",
    title: "توجه به جزئیات",
    description:
      "برای ما زیبایی در جزئیات شکل می‌گیرد. هر خدمات با دقت و توجه کامل انجام می‌شود تا نتیجه دقیقاً همان چیزی باشد که انتظار دارید.",
  },
  {
    icon: "solar:medal-ribbons-star-bold",
    title: "کیفیت حرفه‌ای",
    description:
      "از انتخاب محصولات تا اجرای خدمات، کیفیت برای ما یک اصل ثابت است و تلاش می‌کنیم بهترین تجربه را برای شما فراهم کنیم.",
  },
  {
    icon: "solar:smile-circle-bold",
    title: "رضایت شما",
    description:
      "هدف ما فقط ارائه یک خدمات زیبایی نیست؛ می‌خواهیم وقتی از سالن خارج می‌شوید، حس خوب و اعتمادبه‌نفس بیشتری داشته باشید.",
  },
];

const services = [
  {
    title: "مو",
    description: "کات، براشینگ، رنگ، احیا و خدمات تخصصی مو",
    icon: "solar:scissors-square-bold",
  },
  {
    title: "ناخن",
    description: "مانیکور، پدیکور، ژل و طراحی ناخن",
    icon: "solar:magic-stick-3-bold",
  },
  {
    title: "مراقبت پوست",
    description: "فیشیال و خدمات تخصصی مراقبت از پوست",
    icon: "solar:face-scan-square-bold",
  },
  {
    title: "مژه و ابرو",
    description: "لیفت، لمینت و خدمات تخصصی فرم‌دهی",
    icon: "solar:eye-bold",
  },
];

const team = [
  {
    name: "سارا احمدی",
    role: "مدیریت و متخصص زیبایی",
    image: "/images/about/team-1.jpg",
  },
  {
    name: "مریم رضایی",
    role: "متخصص مو",
    image: "/images/about/team-2.jpg",
  },
  {
    name: "نگار کریمی",
    role: "متخصص ناخن",
    image: "/images/about/team-3.jpg",
  },
];

export default function AboutPage() {
  return (
    <main dir="rtl" className="overflow-hidden bg-white text-neutral-900">
      {/* =========================================================
          Hero
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#fff7f8]">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#EF617D]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#EF617D]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          {/* Text */}
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
              در سالن زیبایی لوکس، زیبایی برای ما فقط یک ظاهر زیبا نیست. ما
              فضایی آرام و حرفه‌ای ساخته‌ایم تا بتوانید با خیال راحت زمانی را
              برای خودتان اختصاص دهید و با حس خوب از سالن خارج شوید.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#EF617D] px-7 font-semibold text-white shadow-lg shadow-[#EF617D]/20 transition hover:bg-[#e95673] active:scale-[0.98]"
              >
                <span>رزرو نوبت</span>

                <Icon icon="solar:arrow-left-linear" width="20" height="20" />
              </Link>

              <a
                href="#story"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-neutral-200 bg-white px-7 font-semibold text-neutral-700 transition hover:border-[#EF617D]/30 hover:text-[#EF617D]"
              >
                آشنایی بیشتر
              </a>
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

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -bottom-5 -right-5 h-28 w-28 rounded-3xl bg-[#EF617D]/10" />

              <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full border border-[#EF617D]/20" />

              <div className="relative overflow-hidden rounded-4xl shadow-2xl shadow-[#EF617D]/10">
                <Image
                  src="/images/about/hero.jpg"
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

      {/* =========================================================
          Stats
      ========================================================= */}
      <section className="border-b border-neutral-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8 lg:py-10">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center justify-center gap-3 px-3 py-4 ${
                index !== stats.length - 1 ? "border-l border-neutral-100" : ""
              }`}
            >
              <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-[#fff0f3] sm:flex">
                <Icon
                  icon={stat.icon}
                  width="22"
                  height="22"
                  className="text-[#EF617D]"
                />
              </div>

              <div className="text-center sm:text-right">
                <p className="text-xl font-extrabold text-neutral-900 sm:text-2xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          Story
      ========================================================= */}
      <section id="story" className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-20 lg:px-8">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="mt-10 overflow-hidden rounded-[1.75rem]">
                <Image
                  src="/images/about/story-1.jpg"
                  alt="فضای داخلی سالن زیبایی لوکس"
                  width={500}
                  height={650}
                  className="h-full min-h-80 w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[1.75rem]">
                <Image
                  src="/images/about/story-2.jpg"
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

          {/* Content */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#EF617D]" />
              <span className="text-sm font-semibold text-[#EF617D]">
                داستان ما
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-[1.4] sm:text-4xl">
              زیبایی از جایی شروع می‌شود که
              <span className="text-[#EF617D]">
                {" "}
                برای خودتان وقت می‌گذارید.
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-neutral-600">
              <p>
                سالن زیبایی لوکس با یک هدف ساده شکل گرفت؛ ایجاد فضایی که مشتری
                فقط برای دریافت خدمات زیبایی وارد آن نشود، بلکه برای چند ساعت
                آرامش، توجه و حس خوب را تجربه کند.
              </p>

              <p>
                ما تلاش کرده‌ایم میان تخصص، کیفیت و فضای دلنشین تعادل ایجاد
                کنیم. از انتخاب محصولات و ابزارها گرفته تا نحوه برخورد با مشتری
                و جزئیات اجرای هر خدمت، همه چیز با دقت انجام می‌شود.
              </p>

              <p>
                برای ما هر مراجعه‌کننده یک شماره در تقویم نیست؛ هر نفر تجربه‌ای
                متفاوت، سلیقه‌ای متفاوت و نیازهایی متفاوت دارد.
              </p>
            </div>

            <div className="mt-8 flex items-start gap-4 rounded-2xl bg-[#fff7f8] p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                <Icon
                  icon="solar:quote-up-bold"
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

      {/* =========================================================
          Values
      ========================================================= */}
      <section className="bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold text-[#EF617D]">
              ارزش‌های ما
            </span>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              چیزهایی که برای ما اهمیت دارند
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-500 sm:text-base">
              تمام تجربه‌ای که در سالن لوکس دریافت می‌کنید، بر پایه چند اصل ساده
              اما مهم ساخته شده است.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-neutral-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#EF617D]/20 hover:shadow-xl hover:shadow-[#EF617D]/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0f3]">
                  <Icon
                    icon={item.icon}
                    width="28"
                    height="28"
                    className="text-[#EF617D]"
                  />
                </div>

                <h3 className="mt-6 text-lg font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          Services
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#EF617D]" />

                <span className="text-sm font-semibold text-[#EF617D]">
                  خدمات ما
                </span>
              </div>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                همه چیز برای یک تجربه کامل
              </h2>
            </div>

            <Link
              href="/booking"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#EF617D]"
            >
              مشاهده و رزرو خدمات
              <Icon icon="solar:arrow-left-linear" width="18" height="18" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-neutral-200 p-6 transition duration-300 hover:border-[#EF617D]/30 hover:bg-[#fff9fa]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-50 transition group-hover:bg-white">
                    <Icon
                      icon={service.icon}
                      width="25"
                      height="25"
                      className="text-[#EF617D]"
                    />
                  </div>

                  <Icon
                    icon="solar:arrow-left-up-linear"
                    width="20"
                    height="20"
                    className="text-neutral-300 transition group-hover:text-[#EF617D]"
                  />
                </div>

                <h3 className="mt-6 font-bold">{service.title}</h3>

                <p className="mt-2 text-sm leading-7 text-neutral-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          Team
      ========================================================= */}
      <section className="bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold text-[#EF617D]">تیم ما</span>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              پشت هر تجربه خوب، یک تیم حرفه‌ای است
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-500 sm:text-base">
              تیم سالن لوکس از افرادی تشکیل شده که تخصصشان را با دقت، خلاقیت و
              توجه به خواسته‌های شما ترکیب می‌کنند.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white"
              >
                <div className="overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={600}
                    className="aspect-4/5 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="font-bold text-neutral-900">{member.name}</h3>

                  <p className="mt-1 text-sm text-neutral-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
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
              خدمت موردنظرت را انتخاب کن، متخصص موردنظر را ببین و در چند قدم
              ساده نوبت خودت را رزرو کن.
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
    </main>
  );
}
