"use client";
import { faNumber } from "@/lib/utils";
import { useBookingStore } from "@/stores/bookingStore";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

const persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const formatJalaliDate = (date: string) => {
  const jalali = dayjs(date).calendar("jalali");
  const day = jalali.format("D");
  const month = persianMonths[Number(jalali.format("M")) - 1];
  const year = jalali.format("YYYY");

  return `${faNumber(day)} ${month} ${faNumber(year)}`;
};

type ShowDateTimeProps = {
  date: string | null;
  time: string | null;
};

export default function ShowDateTime({ date, time }: ShowDateTimeProps) {
  const router = useRouter();
  const service = useBookingStore((state) => state.service);
  const slotId = useBookingStore((state) => state.slotId);
  const setAppointmentId = useBookingStore((state) => state.setAppointmentId);

  const handleContinue = () => {
    if (!service || !slotId) {
      return;
    }
    const temporaryAppointmentId = Math.floor(Math.random() * 1000000);
    setAppointmentId(temporaryAppointmentId);
    router.push("/booking/information");
  };

  return (
    <>
      {date && time && (
        <div className="rounded-2xl bg-primary/10 p-5">
          <div className="space-y-2">
            <p>
              <span className="font-semibold">تاریخ:</span>

              <span dir="rtl" className="mr-2">
                {formatJalaliDate(date)}
              </span>
            </p>

            <p>
              <span className="font-semibold">ساعت:</span>

              <span className="mr-2">{faNumber(time)}</span>
            </p>
          </div>

          <button
            onClick={handleContinue}
            className="mt-5 h-12 w-full rounded-xl bg-[#EF617D] text-white disabled:opacity-50"
          >
            ادامه
          </button>
        </div>
      )}
    </>
  );
}
