"use client";
import { faPrice } from "@/lib/utils";
import { useBookingStore } from "@/stores/bookingStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Price() {
  const router = useRouter();
  const { service, appointmentId } = useBookingStore();

  useEffect(() => {
    if (!appointmentId) {
      router.replace("/booking");
    }
  }, [appointmentId, router]);
  return (
    <div className="border border-[#F68FA4] bg-pink-50 rounded-xl p-4 flex flex-col justify-center items-center gap-y-4">
      <span>مبلغ قابل پرداخت</span>
      <div className="flex items-center gap-x-1.5">
        <span className="font-semibold text-3xl">
          {faPrice(service?.price ? service?.price : "")}
        </span>
        <span>تومان</span>
      </div>
    </div>
  );
}
