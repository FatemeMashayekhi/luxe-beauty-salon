"use client";
import { Icon } from "@iconify/react";
import { useBookingStore } from "@/stores/bookingStore";
import { useBookingGuard } from "@/hooks/useBookingGuard";
import { useQuery } from "@tanstack/react-query";
import { getAppointmentInfo } from "@/api/services";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookingInformation() {
  const router = useRouter();
  useBookingGuard();
  const appointment_id = useBookingStore((state) => state.appointmentId);

  useEffect(() => {
    if (!appointment_id) {
      router.replace("/booking");
    }
  }, [appointment_id, router]);

  const { data } = useQuery({
    queryKey: ["appointment-information", appointment_id],
    queryFn: () => getAppointmentInfo(appointment_id ?? 1),
    enabled: Boolean(appointment_id),
    staleTime: 0,
    refetchOnMount: "always",
  });

  return (
    <div className="border border-[#E8E8E8] rounded-xl p-2 flex flex-col gap-y-3">
      <div className="flex justify-between items-center border-b border-[#E8E8E8] p-2">
        <Icon
          icon="material-symbols:edit-outline"
          width="24"
          height="24"
          style={{ color: "#EF617D" }}
        />
        <span>{data?.service}</span>
      </div>

      <div className="flex justify-between items-center border-b border-[#E8E8E8] p-2">
        <Icon
          icon="mdi:user-outline"
          width="24"
          height="24"
          style={{ color: "#EF617D" }}
        />
        <div className="flex gap-x-1.5">
          <span>{data?.first_name}</span>
          <span>{data?.last_name}</span>
        </div>
      </div>

      <div className="flex justify-between items-center border-b border-[#E8E8E8] p-2">
        <Icon
          icon="mdi:calendar-outline"
          width="24"
          height="24"
          style={{ color: "#EF617D" }}
        />
        <span>{data?.slot.date}</span>
      </div>

      <div className="flex justify-between items-center border-b border-[#E8E8E8] p-2">
        <Icon
          icon="ion:time-outline"
          width="24"
          height="24"
          style={{ color: "#EF617D" }}
        />
        <span>{data?.slot.start_time}</span>
      </div>

      <div className="flex justify-between items-center border-b border-[#E8E8E8] p-2">
        <Icon
          icon="ion:time-outline"
          width="24"
          height="24"
          style={{ color: "#EF617D" }}
        />
        <span>{data?.duration}</span>
      </div>

      <div className="flex justify-between items-center p-2">
        <Icon
          icon="solar:dollar-outline"
          width="24"
          height="24"
          style={{ color: "#EF617D" }}
        />
        <span>{data?.reserve_fee} تومان</span>
      </div>
    </div>
  );
}
