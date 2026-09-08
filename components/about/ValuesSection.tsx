import { Icon } from "@iconify/react";

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

export default function ValuesSection() {
  return (
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
  );
}
