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
    <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 sm:p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-neutral-500">مبلغ قابل پرداخت</p>

          <p className="mt-1 text-base font-semibold text-neutral-900">
            {service?.title || service?.title || "سرویس انتخاب‌شده"}
          </p>
        </div>

        <div className="text-left">
          <div className="flex items-baseline justify-end gap-1">
            <span className="text-2xl font-extrabold tracking-tight text-[#EF617D] sm:text-3xl">
              {faPrice(service?.price ? service.price : "")}
            </span>

            <span className="text-sm font-medium text-neutral-600">تومان</span>
          </div>
        </div>
      </div>
    </section>
  );
}
