import { Icon } from "@iconify/react";
import Link from "next/link";

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

export default function ServicesSection() {
  return (
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
  );
}
