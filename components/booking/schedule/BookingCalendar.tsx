"use client";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import clsx from "clsx";

dayjs.extend(jalaliday);

type Props = {
  availableDays: string[];
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
};

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

const weekDays = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];

const toPersianNumber = (value: string | number) =>
  value.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

export default function BookingCalendar({
  availableDays,
  selectedDate,
  onSelectDate,
}: Props) {
  const today = dayjs().startOf("day");

  const [currentMonth, setCurrentMonth] = useState(() =>
    (selectedDate ? dayjs(selectedDate) : dayjs()).calendar("jalali"),
  );

  const goNextMonth = () => {
    setCurrentMonth((prev) => prev.add(1, "month"));
  };

  const goPrevMonth = () => {
    setCurrentMonth((prev) => prev.subtract(1, "month"));
  };

  const days = useMemo(() => {
    const startOfMonth = currentMonth.startOf("month");
    const daysInMonth = startOfMonth.daysInMonth();
    const firstDayIndex = (startOfMonth.day() + 1) % 7;

    const result: (string | null)[] = [];

    for (let i = 0; i < firstDayIndex; i++) {
      result.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      result.push(
        startOfMonth.date(day).calendar("gregory").format("YYYY-MM-DD"),
      );
    }

    return result;
  }, [currentMonth]);

  const monthName = persianMonths[Number(currentMonth.format("M")) - 1];
  const year = currentMonth.format("YYYY");

  return (
    <div className="rounded-3xl border bg-white p-4">
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={goPrevMonth}
          className="flex h-10 w-10 items-center justify-center rounded-xl border"
        >
          →
        </button>

        <div className="text-lg font-bold md:text-xl">
          {monthName} {toPersianNumber(year)}
        </div>

        <button
          onClick={goNextMonth}
          className="flex h-10 w-10 items-center justify-center rounded-xl border"
        >
          ←
        </button>
      </div>

      <div className="mb-3 grid grid-cols-7 gap-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-gray-500"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((date, index) => {
          if (!date) {
            return <div key={index} className="aspect-square" />;
          }

          const currentDate = dayjs(date);

          const isPast = currentDate.isBefore(today, "day");
          const isAvailable = availableDays.includes(date);
          const isDisabled = isPast || !isAvailable;
          const isSelected = selectedDate === date;
          const dayNumber = currentDate.calendar("jalali").format("D");

          return (
            <button
              key={date}
              disabled={isDisabled}
              onClick={() => onSelectDate(date)}
              className={clsx(
                "aspect-square rounded-xl border text-sm transition-all",
                {
                  "bg-[#EF617D] text-white border-[#EF617D]": isSelected,
                  "border-[#EF617D] hover:bg-pink-50":
                    !isDisabled && !isSelected,
                  "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed":
                    isDisabled,
                },
              )}
            >
              {toPersianNumber(dayNumber)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
