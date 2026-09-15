"use client";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import clsx from "clsx";
import { Icon } from "@iconify/react";
import { PERSIAN_MONTHS, WEEK_DAYS } from "./schedule.constants";
import { toPersianNumber } from "./schedule.utils";

dayjs.extend(jalaliday);

type Props = {
  availableDays: string[];
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
};

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

  const monthName = PERSIAN_MONTHS[Number(currentMonth.format("M")) - 1];
  const year = currentMonth.format("YYYY");

  return (
    <div className="rounded-[22px] bg-white p-3 sm:p-5">
      <div className="mb-6 flex items-center justify-between">
        <button
          type="button"
          onClick={goPrevMonth}
          className="flex size-10 items-center justify-center rounded-xl border border-[#F0E6E8] text-[#666] transition-colors hover:border-[#EF617D] hover:text-[#EF617D]"
          aria-label="ماه قبل"
        >
          <Icon icon="solar:alt-arrow-right-linear" width="20" />
        </button>

        <div className="text-center">
          <p className="text-lg font-bold text-[#292929]">
            {monthName} {toPersianNumber(year)}
          </p>
          <p className="mt-0.5 text-xs text-[#A3A3A3]">
            روزهای قابل رزرو را انتخاب کنید
          </p>
        </div>

        <button
          type="button"
          onClick={goNextMonth}
          className="flex size-10 items-center justify-center rounded-xl border border-[#F0E6E8] text-[#666] transition-colors hover:border-[#EF617D] hover:text-[#EF617D]"
          aria-label="ماه بعد"
        >
          <Icon icon="solar:alt-arrow-left-linear" width="20" />
        </button>
      </div>

      <div className="mb-3 grid grid-cols-7 gap-1.5 sm:gap-2">
        {WEEK_DAYS.map((day) => (
          <div
            key={day}
            className="py-1 text-center text-[11px] font-medium text-[#A0A0A0] sm:text-xs"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
        {days.map((date, index) => {
          if (!date) {
            return <div key={index} className="aspect-square" />;
          }

          const currentDate = dayjs(date);
          const isPast = currentDate.isBefore(today, "day");
          const isAvailable = availableDays.includes(date);
          const isDisabled = isPast || !isAvailable;
          const isSelected = selectedDate === date;
          const isToday = currentDate.isSame(today, "day");
          const dayNumber = currentDate.calendar("jalali").format("D");

          return (
            <button
              key={date}
              type="button"
              disabled={isDisabled}
              onClick={() => onSelectDate(date)}
              className={clsx(
                "relative aspect-square rounded-xl border text-sm font-medium transition-all",
                {
                  "border-[#EF617D] bg-[#EF617D] text-white shadow-[0_5px_14px_rgba(239,97,125,0.18)]":
                    isSelected,

                  "border-[#EF617D] bg-white text-[#343434] hover:border-[#EF617D] hover:bg-[#FFF5F7]":
                    !isDisabled && !isSelected,

                  "cursor-not-allowed border-[#F1F1F1] bg-[#F7F7F7] text-[#C7C7C7]":
                    isDisabled,
                },
              )}
            >
              {toPersianNumber(dayNumber)}

              {isToday && !isSelected && !isDisabled && (
                <span className="absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-[#EF617D]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
