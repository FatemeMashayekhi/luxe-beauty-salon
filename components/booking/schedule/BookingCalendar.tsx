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
  const today = dayjs().calendar("jalali").startOf("day");
  const maxDate = dayjs().calendar("jalali").add(75, "day");

  const [currentMonth, setCurrentMonth] = useState(() =>
    selectedDate
      ? dayjs(selectedDate).calendar("jalali")
      : dayjs().calendar("jalali"),
  );

  const canGoPrevMonth = currentMonth
    .startOf("month")
    .isAfter(today.startOf("month"));

  const canGoNextMonth = currentMonth.endOf("month").isBefore(maxDate);

  const goNextMonth = () => {
    if (!canGoNextMonth) return;

    setCurrentMonth((prev) => prev.add(1, "month"));
  };

  const goPrevMonth = () => {
    if (!canGoPrevMonth) return;

    setCurrentMonth((prev) => prev.subtract(1, "month"));
  };

  const days = useMemo(() => {
    const startOfMonth = currentMonth.calendar("jalali").startOf("month");

    const daysInMonth = startOfMonth.daysInMonth();

    const firstDayIndex = startOfMonth.day();

    const result: (string | null)[] = [];

    for (let i = 0; i < firstDayIndex; i++) {
      result.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      result.push(
        currentMonth.calendar("jalali").date(day).format("YYYY-MM-DD"),
      );
    }

    return result;
  }, [currentMonth]);

  const jalaliMonth = currentMonth.calendar("jalali");
  const monthName = persianMonths[Number(jalaliMonth.format("M")) - 1];
  const year = jalaliMonth.format("YYYY");

  return (
    <div className="rounded-3xl border bg-white p-4">
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={goPrevMonth}
          disabled={!canGoPrevMonth}
          className={clsx(
            "flex h-10 w-10 items-center justify-center rounded-xl border",
            {
              "opacity-30 cursor-not-allowed": !canGoPrevMonth,
            },
          )}
        >
          →
        </button>

        <div className="text-lg font-bold md:text-xl">
          {monthName} {toPersianNumber(year)}
        </div>

        <button
          onClick={goNextMonth}
          disabled={!canGoNextMonth}
          className={clsx(
            "flex h-10 w-10 items-center justify-center rounded-xl border",
            {
              "opacity-30 cursor-not-allowed": !canGoNextMonth,
            },
          )}
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

          const currentDate = dayjs(date, {
            jalali: true,
          });

          const isPast = currentDate.calendar("jalali").isBefore(today, "day");

          const isTooFar = currentDate
            .calendar("jalali")
            .isAfter(maxDate, "day");

          const isAvailable = availableDays.includes(date);

          const isDisabled = isPast || isTooFar || !isAvailable;

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
