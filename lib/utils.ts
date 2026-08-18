import dayjs from "dayjs";
import jalaliday from "jalaliday";

export const convertToPersianNumbers = (str: string): string => {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

  return str.replace(/[۰-۹٠-٩]/g, (d: string) => {
    const persianIndex = persianNumbers.indexOf(d);
    if (persianIndex !== -1) return persianIndex.toString();

    const arabicIndex = arabicNumbers.indexOf(d);
    if (arabicIndex !== -1) return arabicIndex.toString();

    return d;
  });
};

export const faNumber = (enNumber: string | number): string => {
  const farsiDigits: string[] = [
    "۰",
    "۱",
    "۲",
    "۳",
    "۴",
    "۵",
    "۶",
    "۷",
    "۸",
    "۹",
  ];

  const str = String(enNumber);
  return str.replace(/\d/g, (digit) => farsiDigits[parseInt(digit, 10)]);
};

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

const toPersianNumber = (value: string | number) =>
  value.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

export const formatPersianDate = (date: string) => {
  const jalali = dayjs(date).calendar("jalali");

  const day = toPersianNumber(jalali.format("D"));

  const month = persianMonths[Number(jalali.format("M")) - 1];

  const year = toPersianNumber(jalali.format("YYYY"));

  return `${day} ${month} ${year}`;
};

export const faPrice = (enNumber: string | number): string => {
  const farsiDigits: string[] = [
    "۰",
    "۱",
    "۲",
    "۳",
    "۴",
    "۵",
    "۶",
    "۷",
    "۸",
    "۹",
  ];

  const roundedNumber = Number(enNumber).toFixed(2);
  const numberWithCommas = Number(roundedNumber).toLocaleString();
  const str = String(numberWithCommas);
  return str.replace(/\d/g, (digit) => farsiDigits[parseInt(digit, 10)]);
};
