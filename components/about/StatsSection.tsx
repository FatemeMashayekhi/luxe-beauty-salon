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

export default function StatsSection() {
  return (
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
  );
}
