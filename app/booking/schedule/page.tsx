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
    <div className="mx-auto max-w-5xl p-4">
      <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <span className="text-xs text-gray-500">خدمت</span>

            <span className="font-semibold text-gray-900">{service.title}</span>
          </div>

          <div className="flex flex-col items-end gap-y-1">
            <span className="text-xs text-gray-500">متخصص</span>

            <span className="font-semibold text-gray-900">
              {employee.first_name} {employee.last_name}
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border bg-white p-1 shadow-sm">
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
