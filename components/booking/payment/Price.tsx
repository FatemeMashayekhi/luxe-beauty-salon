"use client";
import { getAppointmentInfo } from "@/api/services";
import { faPrice } from "@/lib/utils";
import { useBookingStore } from "@/stores/bookingStore";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Price() {
  const router = useRouter();
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
    <div className="border border-[#F68FA4] bg-pink-50 rounded-xl p-4 flex flex-col justify-center items-center gap-y-4">
      <span>مبلغ قابل پرداخت</span>
      <div className="flex items-center gap-x-1.5">
        <span className="font-semibold text-3xl">
          {data?.reserve_fee && faPrice(data.reserve_fee)}
        </span>
        <span>تومان</span>
      </div>
    </div>
  );
}
