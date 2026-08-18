"use client";
import { useBookingStore } from "@/stores/bookingStore";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import BookingCalendar from "@/components/booking/schedule/BookingCalendar";
import FreeTimeSection from "@/components/booking/schedule/FreeTimeSection";
import ShowDateTime from "@/components/booking/schedule/ShowDateTime";
import { useQuery } from "@tanstack/react-query";
import { getStaffSchedule } from "@/api/services";

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

  const { data: staff } = useQuery({
    queryKey: ["staff-schedule", employee?.id],
    queryFn: () => getStaffSchedule(employee!.id),
    enabled: Boolean(employee),
    staleTime: 0,
    refetchOnMount: "always",
  });

  const availableDays = useMemo(() => {
    if (!staff) return [];

    return [
      ...new Set(
        staff.slots
          .filter((item) => item.status === "available")
          .map((item) => item.date),
      ),
    ];
  }, [staff]);

  // const slots = useMemo(() => {
  //   if (!staff || !date) return [];

  //   return staff.slots

  //     .filter((item) => item.date === date && item.status === "available")

  //     .map((item) => item.start_time.slice(0, 5));
  // }, [staff, date]);

  // const handleContinue = () => {
  //   if (!date || !time) return;

  //   const reservationId = crypto.randomUUID();

  //   const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString();

  //   setReservation(reservationId, expiresAt);

  //   router.push("/booking/information");
  // };

  return (
    <div className="mx-auto max-w-5xl p-4">
      <div className="mb-4 rounded-xl bg-pink-50 p-4">
        <p>
          <strong>خدمت:</strong>

          {service?.title}
        </p>

        <p>
          <strong>متخصص:</strong>
          {employee?.first_name} {employee?.last_name}
        </p>
      </div>

      <div className="rounded-3xl border bg-white p-1 shadow-sm">
        <BookingCalendar
          availableDays={availableDays}
          selectedDate={date}
          onSelectDate={setDate}
        />

        <FreeTimeSection
          date={date}
          slots={
            staff?.slots.filter(
              (item) => item.date === date && item.status === "available",
            ) ?? []
          }
          setTime={setTime}
          setSlotId={setSlotId}
          time={time}
        />

        <ShowDateTime date={date} time={time} />
      </div>
    </div>
  );
}
