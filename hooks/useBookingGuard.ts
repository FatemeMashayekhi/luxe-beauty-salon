"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useBookingStore } from "@/stores/bookingStore";

export const useBookingGuard = () => {
  const router = useRouter();

  const isBookingValid = useBookingStore((state) => state.isBookingValid);

  const resetBooking = useBookingStore((state) => state.resetBooking);

  useEffect(() => {
    if (!isBookingValid()) {
      resetBooking();
      router.replace("/booking");
    }
  }, [isBookingValid, resetBooking, router]);
};
