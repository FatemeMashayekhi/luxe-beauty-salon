"use client";
import { useBookingGuard } from "@/hooks/useBookingGuard";
import { Icon } from "@iconify/react";

export default function PaymentButton() {
  useBookingGuard();
  return (
    <button
      type="button"
      className="bg-[#EF617D] text-white rounded-xl py-3 w-full flex items-center gap-x-1.5 justify-center lg:text-lg"
    >
      <Icon
        icon="material-symbols:lock-outline"
        width="24"
        height="24"
        style={{ color: "#ffffff" }}
      />
      پرداخت امن
    </button>
  );
}
