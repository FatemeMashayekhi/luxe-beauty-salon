"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

type CategoryId = "all" | "booking" | "services" | "payment" | "general";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
  category: Exclude<CategoryId, "all">;
};

const categories: {
  id: CategoryId;
  label: string;
  icon: string;
}[] = [
  {
    id: "all",
    label: "همه سوالات",
    icon: "solar:question-circle-linear",
  },
  {
    id: "booking",
    label: "رزرو نوبت",
    icon: "solar:calendar-linear",
  },
  {
    id: "services",
    label: "خدمات",
    icon: "solar:scissors-linear",
  },
  {
    id: "payment",
    label: "پرداخت",
    icon: "solar:card-linear",
  },
  {
    id: "general",
    label: "سوالات عمومی",
    icon: "solar:info-circle-linear",
  },
];

const faqItems: FAQItem[] = [
  {
    id: 1,
    category: "booking",
    question: "چطور می‌توانم از سالن زیبایی لوکس وقت بگیرم؟",
    answer:
      "برای رزرو وقت کافی است وارد صفحه «رزرو وقت» شوید، خدمت موردنظر خود را انتخاب کنید، سپس متخصص، تاریخ و ساعت مناسب را انتخاب کرده و مراحل رزرو را تکمیل کنید.",
  },
  {
    id: 2,
    category: "booking",
    question: "آیا برای رزرو نوبت نیاز به ورود به حساب کاربری دارم؟",
    answer:
      "بله. برای ثبت و مدیریت امن نوبت‌ها، پیش از تکمیل رزرو لازم است شماره موبایل خود را وارد کرده و با کد تأیید وارد شوید.",
  },
  {
    id: 3,
    category: "booking",
    question: "آیا می‌توانم متخصص موردنظر خودم را انتخاب کنم؟",
    answer:
      "بله. بعد از انتخاب خدمت، متخصصانی که آن خدمت را ارائه می‌دهند نمایش داده می‌شوند و می‌توانید متخصص موردنظر خود را انتخاب کنید.",
  },
  {
    id: 4,
    category: "booking",
    question: "آیا امکان تغییر زمان نوبت وجود دارد؟",
    answer:
      "در صورت وجود ظرفیت خالی، امکان جابه‌جایی نوبت وجود دارد. برای تغییر زمان نوبت بهتر است در اولین فرصت با سالن تماس بگیرید.",
  },
  {
    id: 5,
    category: "booking",
    question: "چه مدت قبل از نوبت باید در سالن حضور داشته باشم؟",
    answer:
      "پیشنهاد می‌کنیم حدود ۱۰ دقیقه پیش از زمان نوبت در سالن حضور داشته باشید تا با آرامش مراحل پذیرش انجام شود.",
  },
  {
    id: 6,
    category: "services",
    question: "چه خدماتی در سالن زیبایی لوکس ارائه می‌شود؟",
    answer:
      "در سالن زیبایی لوکس خدمات متنوعی در زمینه مو، ناخن، ابرو، مژه، فیشیال و سایر خدمات تخصصی زیبایی ارائه می‌شود.",
  },
  {
    id: 7,
    category: "services",
    question: "مدت زمان انجام هر خدمت چقدر است؟",
    answer:
      "مدت زمان هر خدمت با توجه به نوع خدمت متفاوت است و زمان تقریبی آن در هنگام انتخاب خدمت نمایش داده می‌شود.",
  },
  {
    id: 8,
    category: "services",
    question: "آیا می‌توانم چند خدمت را در یک مراجعه رزرو کنم؟",
    answer:
      "بسته به برنامه کاری متخصصان و ظرفیت سالن، امکان انجام چند خدمت در یک مراجعه وجود دارد. برای هماهنگی بهتر می‌توانید پیش از مراجعه با سالن تماس بگیرید.",
  },
  {
    id: 9,
    category: "services",
    question: "آیا قیمت خدمات قبل از رزرو نمایش داده می‌شود؟",
    answer:
      "بله. قیمت هر خدمت هنگام انتخاب آن به شما نمایش داده می‌شود تا پیش از ثبت نهایی رزرو از هزینه اطلاع داشته باشید.",
  },
  {
    id: 10,
    category: "payment",
    question: "آیا برای رزرو باید بیعانه پرداخت کنم؟",
    answer:
      "بسته به نوع خدمت ممکن است برای قطعی شدن نوبت نیاز به پرداخت بیعانه داشته باشید. مبلغ موردنیاز پیش از پرداخت به شما نمایش داده می‌شود.",
  },
  {
    id: 11,
    category: "payment",
    question: "آیا پرداخت اینترنتی امن است؟",
    answer:
      "بله. پرداخت از طریق درگاه بانکی انجام می‌شود و اطلاعات کارت بانکی شما در اختیار سالن قرار نخواهد گرفت.",
  },
  {
    id: 12,
    category: "payment",
    question: "اگر پرداخت ناموفق باشد چه اتفاقی می‌افتد؟",
    answer:
      "در صورتی که پرداخت با موفقیت انجام نشود، رزرو به صورت قطعی ثبت نمی‌شود. در صورت کسر وجه از حساب، مبلغ طبق فرآیند بانکی به حساب شما بازگردانده خواهد شد.",
  },
  {
    id: 13,
    category: "general",
    question: "چطور می‌توانم با سالن تماس بگیرم؟",
    answer:
      "برای ارتباط با سالن می‌توانید از صفحه «تماس با ما» استفاده کنید یا با شماره تماس درج‌شده در سایت با مجموعه تماس بگیرید.",
  },
  {
    id: 14,
    category: "general",
    question: "آیا امکان لغو نوبت وجود دارد؟",
    answer:
      "شرایط لغو نوبت بسته به زمان باقی‌مانده تا موعد مراجعه متفاوت است. برای بررسی شرایط دقیق، با سالن تماس بگیرید.",
  },
  {
    id: 15,
    category: "general",
    question: "چطور از خدمات و تخفیف‌های جدید مطلع شوم؟",
    answer:
      "برای اطلاع از خدمات جدید و پیشنهادهای ویژه سالن زیبایی لوکس، وب‌سایت و شبکه‌های اجتماعی مجموعه را دنبال کنید.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const [openId, setOpenId] = useState<number | null>(1);

  const filteredFAQs =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleFAQ = (id: number) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <main dir="rtl" className="min-h-screen bg-[#FFF8F5] text-[#1E1E1E]">
      <section className="relative overflow-hidden border-b border-[#F6D7CC]">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F6D7CC]/60 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#F68FA4]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#F6D7CC] bg-white px-4 py-2 text-sm font-medium text-[#E85372] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <Icon
                icon="solar:question-circle-linear"
                width={18}
                height={18}
              />
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
              پاسخ سوالات متداول درباره رزرو نوبت، خدمات، پرداخت و مراجعه به
              سالن زیبایی لوکس را اینجا پیدا کنید.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-5">
              <span className="text-xs font-bold tracking-[0.15em] text-[#EF617D]">
                دسته‌بندی سوالات
              </span>

              <h2 className="mt-2 text-xl font-bold text-[#1E1E1E]">
                چه چیزی می‌خواهید بدانید؟
              </h2>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
              {categories.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOpenId(null);
                    }}
                    className={[
                      "flex shrink-0 items-center gap-3 rounded-xl px-4 py-3.5 text-right text-sm font-medium transition-all duration-200 lg:w-full",
                      isActive
                        ? "bg-[#EF617D] text-white shadow-[0_8px_24px_rgba(239,97,125,0.20)]"
                        : "border border-[#F6D7CC] bg-white text-[#666666] hover:border-[#F68FA4] hover:bg-[#FFF8F5] hover:text-[#1E1E1E]",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "flex h-8 w-8 items-center justify-center rounded-lg",
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-[#FFF8F5] text-[#EF617D]",
                      ].join(" ")}
                    >
                      <Icon icon={category.icon} width={19} height={19} />
                    </span>
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>
          </aside>
          <div>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <span className="text-xs font-medium text-[#9A9A9A]">
                  {filteredFAQs.length} سوال
                </span>
                <h2 className="mt-1 text-2xl font-bold text-[#1E1E1E] sm:text-3xl">
                  پاسخ سوالات شما
                </h2>
              </div>
              <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-[#FCEAE4] text-[#EF617D] sm:flex">
                <Icon
                  icon="solar:chat-round-line-linear"
                  width={22}
                  height={22}
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.025)]">
              {filteredFAQs.map((faq, index) => {
                const isOpen = openId === faq.id;
                const isLast = index === filteredFAQs.length - 1;
                return (
                  <div
                    key={faq.id}
                    className={!isLast ? "border-b border-[#E8E8E8]" : ""}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(faq.id)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center justify-between gap-5 px-5 py-5 text-right transition-colors duration-200 hover:bg-[#FFF8F5] sm:px-7 sm:py-6"
                    >
                      <div className="flex min-w-0 items-center gap-4">
                        <span
                          className={[
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-200",
                            isOpen
                              ? "bg-[#EF617D] text-white"
                              : "bg-[#FCEAE4] text-[#EF617D]",
                          ].join(" ")}
                        >
                          {String(faq.id).padStart(2, "0")}
                        </span>
                        <span
                          className={[
                            "text-sm font-semibold leading-7 transition-colors sm:text-base",
                            isOpen
                              ? "text-[#E85372]"
                              : "text-[#1E1E1E] group-hover:text-[#E85372]",
                          ].join(" ")}
                        >
                          {faq.question}
                        </span>
                      </div>
                      <span
                        className={[
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                          isOpen
                            ? "rotate-180 border-[#EF617D] bg-[#EF617D] text-white"
                            : "border-[#F6D7CC] bg-white text-[#EF617D]",
                        ].join(" ")}
                      >
                        <Icon
                          icon={
                            isOpen ? "solar:minus-linear" : "solar:add-linear"
                          }
                          width={18}
                          height={18}
                        />
                      </span>
                    </button>
                    <div
                      className={[
                        "grid transition-all duration-300",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-[#FFF1EC] bg-[#FFF8F5] px-5 py-5 pr-18 sm:px-7 sm:py-6 sm:pr-23">
                          <p className="text-sm leading-8 text-[#666666]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
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
    </main>
  );
}
