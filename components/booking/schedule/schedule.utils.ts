import dayjs from "dayjs";
import { PERSIAN_MONTHS } from "./schedule.constants";

export const toPersianNumber = (value: string | number) => {
  return value
    .toString()
    .replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
};

export const formatJalaliDate = (date: string) => {
  const jalali = dayjs(date).calendar("jalali");

  const day = jalali.format("D");
  const month = PERSIAN_MONTHS[Number(jalali.format("M")) - 1];
  const year = jalali.format("YYYY");

  return `${toPersianNumber(day)} ${month} ${toPersianNumber(year)}`;
};
