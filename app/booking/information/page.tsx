import InformationForm from "@/components/booking/information/InformationForm";

export default function InformationPage() {
  return (
    <main dir="rtl" className="min-h-[calc(100vh-80px)]">
      <div className="mx-auto flex w-full max-w-6xl items-center px-4 py-8 sm:px-6 lg:min-h-[calc(100vh-80px)] lg:px-8 lg:py-12">
        <div className="grid w-full grid-cols-1 overflow-hidden rounded-[28px] border border-[#F6D7CC] bg-white shadow-[0_20px_60px_rgba(239,97,125,0.08)] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative hidden overflow-hidden bg-[#1E1E1E] p-10 lg:flex lg:flex-col lg:justify-between">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#EF617D]/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-[#F68FA4]/10 blur-3xl" />
            <div className="relative">
              <span className="text-sm font-medium text-[#F68FA4]">
                سالن زیبایی لوکس
              </span>
              <h1 className="mt-4 text-3xl font-black leading-normal text-white xl:text-4xl">
                تقریباً آماده‌ای
                <br />
                برای رزرو وقت
              </h1>
              <p className="mt-5 max-w-sm text-sm leading-8 text-[#9A9A9A]">
                فقط چند اطلاعات کوتاه از شما نیاز داریم تا بتوانیم نوبتتان را به
                نام خودتان ثبت کنیم.
              </p>
            </div>
            <div className="relative mt-12">
              <div className="space-y-5">
                <Step
                  number="۱"
                  title="انتخاب خدمت"
                  description="خدمت زیبایی موردنظر خود را انتخاب کنید"
                  completed
                />

                <Step
                  number="۲"
                  title="انتخاب متخصص و زمان"
                  description="متخصص و زمان مناسب خود را انتخاب کنید"
                  completed
                />

                <Step
                  number="۳"
                  title="اطلاعات شما"
                  description="اطلاعات تماس خود را وارد کنید"
                  active
                />

                <Step
                  number="۴"
                  title="تأیید و پرداخت"
                  description="رزرو را بررسی و نهایی کنید"
                />
              </div>
            </div>
            <div className="relative mt-12 flex items-center gap-3 border-t border-white/10 pt-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EF617D]/10 text-[#F68FA4]">
                <span className="text-sm">L</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-white">
                  تجربه‌ای متفاوت از زیبایی
                </p>
                <p className="mt-1 text-[11px] text-[#9A9A9A]">
                  با سالن زیبایی لوکس
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:p-8 lg:p-10 xl:p-12">
            {/* <div className="mb-8 lg:hidden">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#EF617D]">
                    مرحله ۳ از ۴
                  </span>

                  <div className="mt-2 h-1.5 w-28 overflow-hidden rounded-full bg-[#FCEAE4]">
                    <div className="h-full w-3/4 rounded-full bg-[#EF617D]" />
                  </div>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF8F5] text-[#EF617D]">
                  <span className="text-sm font-bold">L</span>
                </div>
              </div>
            </div> */}

            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#EF617D]">
                اطلاعات مشتری
              </span>
              <h2 className="mt-2 text-2xl font-black text-[#1E1E1E] sm:text-3xl">
                اطلاعات خود را وارد کنید
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#666666]">
                برای تکمیل رزرو، شماره موبایل و نام خود را وارد کنید. اطلاعات
                شما فقط برای ثبت و مدیریت نوبت استفاده خواهد شد.
              </p>
            </div>
            <InformationForm />
          </div>
        </div>
      </div>
    </main>
  );
}

function Step({
  number,
  title,
  description,
  active = false,
  completed = false,
}: {
  number: string;
  title: string;
  description: string;
  active?: boolean;
  completed?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div
        className={[
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-all",
          active
            ? "border-[#EF617D] bg-[#EF617D] text-white shadow-[0_8px_20px_rgba(239,97,125,0.22)]"
            : completed
              ? "border-[#F68FA4] bg-[#FCEAE4] text-[#EF617D]"
              : "border-white/10 bg-white/5 text-[#9A9A9A]",
        ].join(" ")}
      >
        {completed ? "✓" : number}
      </div>

      <div className="pt-0.5">
        <p
          className={[
            "text-sm font-bold",
            active
              ? "text-white"
              : completed
                ? "text-[#F68FA4]"
                : "text-[#9A9A9A]",
          ].join(" ")}
        >
          {title}
        </p>

        <p className="mt-1 text-xs leading-6 text-[#666666]">{description}</p>
      </div>
    </div>
  );
}
