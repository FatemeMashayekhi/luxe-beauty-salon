import { Icon } from "@iconify/react";

const upcomingAppointments = [
  {
    id: 1,
    service: "کوتاهی مو",
    employee: "سارا احمدی",
    date: "۱۰ مهر ۱۴۰۵",
    time: "۱۴:۰۰",
  },
];

export default function NextAppointment() {
  return (
    <section className="lg:col-span-2">
      <div className="mb-3">
        <h2 className="text-lg font-bold text-[#292929]">رزرو بعدی</h2>

        <p className="mt-1 text-sm text-[#999]">نزدیک‌ترین زمان رزرو شما</p>
      </div>

      {upcomingAppointments.length > 0 ? (
        <div className="rounded-3xl border border-[#F0E5E8] bg-white p-5 shadow-[0_6px_24px_rgba(0,0,0,0.03)]">
          {upcomingAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF0F3] text-[#EF617D]">
                  <Icon icon="solar:scissors-linear" width="23" />
                </div>

                <div>
                  <h3 className="font-semibold text-[#292929]">
                    {appointment.service}
                  </h3>

                  <p className="mt-1 text-sm text-[#999]">
                    متخصص: {appointment.employee}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#FCF8F9] px-4 py-3 sm:min-w-[230px]">
                <div>
                  <p className="text-xs text-[#999]">تاریخ</p>

                  <p className="mt-1 text-sm font-semibold text-[#444]">
                    {appointment.date}
                  </p>
                </div>

                <div className="h-8 w-px bg-[#EDE5E7]" />

                <div>
                  <p className="text-xs text-[#999]">ساعت</p>

                  <p className="mt-1 text-sm font-semibold text-[#444]">
                    {appointment.time}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-[#F0E5E8] px-4 py-2.5 text-sm font-medium text-[#555] transition hover:border-[#EF617D]/30 hover:text-[#EF617D]"
              >
                مشاهده جزئیات
                <Icon icon="solar:arrow-left-linear" width="17" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-[#E8E1E3] bg-white p-8 text-center">
          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-[#FFF0F3] text-[#EF617D]">
            <Icon icon="solar:calendar-add-linear" width="23" />
          </div>

          <p className="mt-3 text-sm font-semibold text-[#444]">
            هنوز رزویی ندارید
          </p>

          <p className="mt-1 text-xs text-[#999]">
            اولین زمان مناسب خود را رزرو کنید.
          </p>

          <button
            type="button"
            className="mt-4 rounded-xl bg-[#EF617D] px-5 py-2.5 text-sm font-semibold text-white"
          >
            رزرو خدمت
          </button>
        </div>
      )}
    </section>
  );
}
