"use client";
import { useBookingStore } from "@/stores/bookingStore";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import BookingCalendar from "@/components/booking/schedule/BookingCalendar";
import FreeTimeSection from "@/components/booking/schedule/FreeTimeSection";
import ShowDateTime from "@/components/booking/schedule/ShowDateTime";
import { staffTimesData } from "@/data/time";

export default function SchedulePage() {
  const router = useRouter();
  const service = useBookingStore((state) => state.service);
  const employee = useBookingStore((state) => state.employee);
  const date = useBookingStore((state) => state.date);
  const time = useBookingStore((state) => state.time);
  const setDate = useBookingStore((state) => state.setDate);
  const setTime = useBookingStore((state) => state.setTime);
  const setSlotId = useBookingStore((state) => state.setSlotId);

  useEffect(() => {
    if (!service) {
      router.replace("/booking");
      return;
    }

    if (!employee) {
      router.replace("/booking/employee");
    }
  }, [service, employee, router]);

  const selectedEmployee = useMemo(() => {
    if (!employee) return null;

    return staffTimesData.find((staff) => staff.id === employee.id) ?? null;
  }, [employee]);

  const availableDays = useMemo(() => {
    if (!selectedEmployee) return [];

    return [
      ...new Set(
        selectedEmployee.slots
          .filter((slot) => slot.status === "available")
          .map((slot) => slot.date),
      ),
    ];
  }, [selectedEmployee]);

  const availableSlots = useMemo(() => {
    if (!selectedEmployee || !date) return [];

    return selectedEmployee.slots.filter(
      (slot) => slot.date === date && slot.status === "available",
    );
  }, [selectedEmployee, date]);

  if (!service || !employee) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-5 lg:py-8">
      <div className="mb-5">
        <h1 className="mt-1 text-xl font-bold text-[#292929] lg:text-2xl">
          انتخاب تاریخ و ساعت
        </h1>
        <p className="mt-1 text-sm text-[#999]">
          زمان مناسب برای دریافت خدمت خود را انتخاب کنید.
        </p>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#F1E5E8] bg-white p-4">
          <p className="mb-1 text-xs text-[#999]">خدمت انتخاب‌شده</p>
          <p className="font-semibold text-[#292929]">{service.title}</p>
        </div>

        <div className="rounded-2xl border border-[#F1E5E8] bg-white p-4">
          <p className="mb-1 text-xs text-[#999]">متخصص</p>
          <p className="font-semibold text-[#292929]">
            {employee.first_name} {employee.last_name}
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-[#F0E6E8] bg-white p-2 shadow-sm sm:p-3">
        <BookingCalendar
          availableDays={availableDays}
          selectedDate={date}
          onSelectDate={setDate}
        />
        <FreeTimeSection
          date={date}
          slots={availableSlots}
          setTime={setTime}
          setSlotId={setSlotId}
          time={time}
        />
        <ShowDateTime date={date} time={time} />
      </div>
    </div>
  );
}
