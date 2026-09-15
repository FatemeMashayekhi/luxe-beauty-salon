"use client";
import { faNumber } from "@/lib/utils";
import { useBookingStore } from "@/stores/bookingStore";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import { Icon } from "@iconify/react";
import { formatJalaliDate } from "./schedule.utils";

dayjs.extend(jalaliday);

type ShowDateTimeProps = {
  date: string | null;
  time: string | null;
};

export default function ShowDateTime({ date, time }: ShowDateTimeProps) {
  const router = useRouter();
  const service = useBookingStore((state) => state.service);
  const slotId = useBookingStore((state) => state.slotId);
  const setAppointmentId = useBookingStore((state) => state.setAppointmentId);

  const handleContinue = () => {
    if (!service || !slotId) {
      return;
    }
    const temporaryAppointmentId = Math.floor(Math.random() * 1000000);
    setAppointmentId(temporaryAppointmentId);
    router.push("/booking/information");
  };

  if (!date || !time) {
    return null;
  }

  return (
    <div className="border-t border-[#F0F0F0] bg-[#FFF8FA] p-4 sm:p-5">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex size-9 items-center justify-center rounded-xl bg-[#FCE7EC] text-[#EF617D]">
          <Icon icon="solar:calendar-linear" width="20" />
        </div>

        <div>
          <p className="text-xs text-[#999]">زمان انتخاب‌شده</p>
          <p className="text-sm font-semibold text-[#292929]">
            آماده ادامه رزرو
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-white px-3 py-3">
          <p className="mb-1 text-xs text-[#999]">تاریخ</p>
          <p dir="rtl" className="text-sm font-semibold text-[#292929]">
            {formatJalaliDate(date)}
          </p>
        </div>

        <div className="rounded-xl bg-white px-3 py-3">
          <p className="mb-1 text-xs text-[#999]">ساعت</p>
          <p className="text-sm font-semibold text-[#292929]">
            {faNumber(time)}
          </p>
        </div>
      </div>

      <button
        onClick={handleContinue}
        className="mt-4 h-12 w-full rounded-xl bg-[#EF617D] text-sm font-semibold text-white transition-all hover:bg-[#E65370] active:scale-[0.99]"
      >
        ادامه و ثبت اطلاعات
      </button>
    </div>
  );
}
