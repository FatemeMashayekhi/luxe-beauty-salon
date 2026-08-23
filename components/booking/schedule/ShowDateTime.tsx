"use client";
import { faNumber } from "@/lib/utils";
import { useBookingStore } from "@/stores/bookingStore";
import { createAppointment } from "@/api/services";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type ShowDateTimeProps = {
  date: string | null;
  time: string | null;
};

export default function ShowDateTime({ date, time }: ShowDateTimeProps) {
  const router = useRouter();
  const service = useBookingStore((state) => state.service);
  const slotId = useBookingStore((state) => state.slotId);
  const setAppointmentId = useBookingStore((state) => state.setAppointmentId);

  const mutation = useMutation({
    mutationFn: createAppointment,

    onSuccess: (data) => {
      setAppointmentId(data.id);

      router.push("/booking/information");
    },

    onError: (error) => {
      console.log("Appointment Error:", error);
    },
  });

  const handleContinue = () => {
    if (!service || !slotId) {
      return;
    }

    mutation.mutate({
      service_id: service.id,

      slot_id: slotId,
    });
  };

  return (
    <>
      {date && time && (
        <div className="mt-8 rounded-2xl bg-primary/10 p-5">
          <div className="space-y-2">
            <p>
              <span className="font-semibold">تاریخ:</span>

              <span dir="rtl" className="mr-2">
                {faNumber(date)}
              </span>
            </p>

            <p>
              <span className="font-semibold">ساعت:</span>

              <span className="mr-2">{faNumber(time)}</span>
            </p>
          </div>

          <button
            onClick={handleContinue}
            disabled={mutation.isPending}
            className="
              mt-5
              h-12
              w-full
              rounded-xl
              bg-[#EF617D]
              text-white
              disabled:opacity-50
            "
          >
            {mutation.isPending ? "در حال رزرو..." : "ادامه"}
          </button>
        </div>
      )}
    </>
  );
}
