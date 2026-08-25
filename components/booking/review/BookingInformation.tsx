"use client";
import { Icon } from "@iconify/react";
import { useBookingStore } from "@/stores/bookingStore";
import { useBookingGuard } from "@/hooks/useBookingGuard";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { faPrice, formatPersianDate } from "@/lib/utils";

export default function BookingInformation() {
  const router = useRouter();

  useBookingGuard();

  const { service, employee, date, time, appointmentId } = useBookingStore();

  useEffect(() => {
    if (!appointmentId) {
      router.replace("/booking");
    }
  }, [appointmentId, router]);

  return (
    <div className="w-full rounded-2xl border border-[#E8E8E8] bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4">
        <h2 className="text-base font-bold text-neutral-900">اطلاعات رزرو</h2>

        <p className="mt-1 text-sm text-neutral-500">جزئیات نوبت انتخابی شما</p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-x-3 border-b border-[#E8E8E8] py-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pink-50">
            <Icon
              icon="material-symbols:edit-outline"
              width="20"
              height="20"
              style={{ color: "#EF617D" }}
            />
          </div>

          <span className="text-sm text-neutral-500">خدمت</span>

          <span className="mr-auto text-sm font-medium text-neutral-900">
            {service?.title}
          </span>
        </div>
        <div className="flex items-center gap-x-3 border-b border-[#E8E8E8] py-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pink-50">
            <Icon
              icon="mdi:user-outline"
              width="20"
              height="20"
              style={{ color: "#EF617D" }}
            />
          </div>
          <span className="text-sm text-neutral-500">کارمند</span>
          <div className="mr-auto flex gap-x-1.5 text-sm font-medium text-neutral-900">
            <span>{employee?.first_name}</span>
            <span>{employee?.last_name}</span>
          </div>
        </div>
        <div className="flex items-center gap-x-3 border-b border-[#E8E8E8] py-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pink-50">
            <Icon
              icon="mdi:calendar-outline"
              width="20"
              height="20"
              style={{ color: "#EF617D" }}
            />
          </div>
          <span className="text-sm text-neutral-500">تاریخ</span>
          <span className="mr-auto text-sm font-medium text-neutral-900">
            {formatPersianDate(date)}
          </span>
        </div>
        <div className="flex items-center gap-x-3 border-b border-[#E8E8E8] py-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pink-50">
            <Icon
              icon="ion:time-outline"
              width="20"
              height="20"
              style={{ color: "#EF617D" }}
            />
          </div>
          <span className="text-sm text-neutral-500">ساعت</span>
          <span className="mr-auto text-sm font-medium text-neutral-900">
            {time}
          </span>
        </div>
        <div className="flex items-center gap-x-3 py-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pink-50">
            <Icon
              icon="mdi:clock-time-eight-outline"
              width="20"
              height="20"
              style={{ color: "#EF617D" }}
            />
          </div>
          <span className="text-sm text-neutral-500">مدت</span>
          <span className="mr-auto text-sm font-medium text-neutral-900">
            {service?.duration} دقیقه
          </span>
        </div>
      </div>
      <div className="mt-2 flex items-end justify-between border-t border-[#E8E8E8] pt-5">
        <div>
          <p className="text-sm text-neutral-500">مبلغ بیعانه</p>
          <p className="mt-1 text-xs text-neutral-400">مبلغ قابل پرداخت</p>
        </div>
        <div className="flex items-baseline gap-x-1">
          <span className="text-lg font-bold text-[#EF617D]">
            {faPrice(service ? service?.price : "")}
          </span>
          <span className="text-sm font-medium text-neutral-600">تومان</span>
        </div>
      </div>
    </div>
  );
}
