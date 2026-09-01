"use client";
import { useBookingGuard } from "@/hooks/useBookingGuard";
import { Icon } from "@iconify/react";

export default function PaymentButton() {
  useBookingGuard();

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#EF617D] py-3.5 font-semibold text-white shadow-sm shadow-pink-200 transition-all duration-200 hover:bg-[#e95472] hover:shadow-md active:scale-[0.99] sm:text-lg"
      >
        <Icon icon="material-symbols:lock-outline" width="22" height="22" />

        <span>پرداخت امن</span>
      </button>

      <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-500">
        <Icon
          icon="material-symbols:verified-user-outline"
          width="16"
          height="16"
        />
        <span>پرداخت شما با امنیت کامل انجام می‌شود</span>
      </div>
    </div>
  );
}
