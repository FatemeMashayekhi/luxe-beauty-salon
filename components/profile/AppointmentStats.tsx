import { Icon } from "@iconify/react";

const appointmentStats = {
  upcoming: 2,
  completed: 8,
};

export default function AppointmentStats() {
  return (
    <section className="grid grid-cols-2 gap-3">
      <div className="rounded-3xl border border-[#F0E5E8] bg-white p-5 shadow-[0_6px_24px_rgba(0,0,0,0.03)]">
        <div className="flex size-10 items-center justify-center rounded-xl bg-[#FFF0F3] text-[#EF617D]">
          <Icon icon="solar:calendar-mark-linear" width="21" />
        </div>

        <p className="mt-4 text-2xl font-bold text-[#292929]">
          {appointmentStats.upcoming}
        </p>

        <p className="mt-1 text-sm text-[#999]">رزرو پیش‌رو</p>
      </div>

      <div className="rounded-3xl border border-[#F0E5E8] bg-white p-5 shadow-[0_6px_24px_rgba(0,0,0,0.03)]">
        <div className="flex size-10 items-center justify-center rounded-xl bg-[#F7F7F7] text-[#666]">
          <Icon icon="solar:check-circle-linear" width="21" />
        </div>

        <p className="mt-4 text-2xl font-bold text-[#292929]">
          {appointmentStats.completed}
        </p>

        <p className="mt-1 text-sm text-[#999]">رزرو انجام‌شده</p>
      </div>
    </section>
  );
}
