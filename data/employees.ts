import { ServiceStaffModels } from "@/Models/bookingModels";

import pic1 from "@/public/images/employee/pic1.png";
import pic2 from "@/public/images/employee/pic2.png";
import pic3 from "@/public/images/employee/pic3.png";
import pic4 from "@/public/images/employee/pic4.png";
import pic5 from "@/public/images/employee/pic5.png";
import pic6 from "@/public/images/employee/pic6.png";
import pic7 from "@/public/images/employee/pic7.png";
import pic8 from "@/public/images/employee/pic8.png";
import pic9 from "@/public/images/employee/pic9.png";
import pic10 from "@/public/images/employee/pic10.png";

export const servicesData: ServiceStaffModels[] = [
  // ─────────────────────
  // فیشیال
  // ─────────────────────
  {
    id: 1,
    title: "فیشیال کلاسیک",
    duration: 60,
    reserve_fee: 150000,
    staff: [
      {
        id: 1,
        first_name: "سارا",
        last_name: "احمدی",
        image: pic1,
      },
      {
        id: 2,
        first_name: "مریم",
        last_name: "محمدی",
        image: pic2,
      },
      {
        id: 3,
        first_name: "نگار",
        last_name: "کریمی",
        image: pic3,
      },
      {
        id: 4,
        first_name: "الهام",
        last_name: "رضایی",
        image: pic4,
      },
    ],
  },
  {
    id: 2,
    title: "فیشیال تخصصی",
    duration: 90,
    reserve_fee: 250000,
    staff: [
      {
        id: 1,
        first_name: "سارا",
        last_name: "احمدی",
        image: pic1,
      },
      {
        id: 3,
        first_name: "نگار",
        last_name: "کریمی",
        image: pic3,
      },
      {
        id: 5,
        first_name: "سحر",
        last_name: "حسینی",
        image: pic5,
      },
    ],
  },
  {
    id: 3,
    title: "پاکسازی پوست",
    duration: 60,
    reserve_fee: 180000,
    staff: [
      {
        id: 1,
        first_name: "سارا",
        last_name: "احمدی",
        image: pic1,
      },
      {
        id: 2,
        first_name: "مریم",
        last_name: "محمدی",
        image: pic2,
      },
      {
        id: 4,
        first_name: "الهام",
        last_name: "رضایی",
        image: pic4,
      },
    ],
  },

  // ─────────────────────
  // مو
  // ─────────────────────
  {
    id: 4,
    title: "کوتاهی مو",
    duration: 60,
    reserve_fee: 100000,
    staff: [
      {
        id: 5,
        first_name: "سحر",
        last_name: "حسینی",
        image: pic5,
      },
      {
        id: 6,
        first_name: "نسترن",
        last_name: "مرادی",
        image: pic6,
      },
      {
        id: 7,
        first_name: "مهسا",
        last_name: "کریمی",
        image: pic7,
      },
      {
        id: 8,
        first_name: "آیدا",
        last_name: "اکبری",
        image: pic8,
      },
    ],
  },
  {
    id: 5,
    title: "براشینگ",
    duration: 45,
    reserve_fee: 80000,
    staff: [
      {
        id: 6,
        first_name: "نسترن",
        last_name: "مرادی",
        image: pic6,
      },
      {
        id: 7,
        first_name: "مهسا",
        last_name: "کریمی",
        image: pic7,
      },
      {
        id: 9,
        first_name: "زهرا",
        last_name: "موسوی",
        image: pic9,
      },
    ],
  },
  {
    id: 6,
    title: "رنگ مو",
    duration: 120,
    reserve_fee: 200000,
    staff: [
      {
        id: 5,
        first_name: "سحر",
        last_name: "حسینی",
        image: pic5,
      },
      {
        id: 6,
        first_name: "نسترن",
        last_name: "مرادی",
        image: pic6,
      },
      {
        id: 10,
        first_name: "ریحانه",
        last_name: "صادقی",
        image: pic10,
      },
    ],
  },

  // ─────────────────────
  // ناخن
  // ─────────────────────
  {
    id: 7,
    title: "مانیکور",
    duration: 45,
    reserve_fee: 70000,
    staff: [
      {
        id: 7,
        first_name: "مهسا",
        last_name: "کریمی",
        image: pic7,
      },
      {
        id: 8,
        first_name: "آیدا",
        last_name: "اکبری",
        image: pic8,
      },
      {
        id: 9,
        first_name: "زهرا",
        last_name: "موسوی",
        image: pic9,
      },
    ],
  },
  {
    id: 8,
    title: "پدیکور",
    duration: 60,
    reserve_fee: 90000,
    staff: [
      {
        id: 7,
        first_name: "مهسا",
        last_name: "کریمی",
        image: pic7,
      },
      {
        id: 8,
        first_name: "آیدا",
        last_name: "اکبری",
        image: pic8,
      },
      {
        id: 9,
        first_name: "زهرا",
        last_name: "موسوی",
        image: pic9,
      },
      {
        id: 2,
        first_name: "مریم",
        last_name: "محمدی",
        image: pic2,
      },
    ],
  },
  {
    id: 9,
    title: "ژل پولیش",
    duration: 75,
    reserve_fee: 120000,
    staff: [
      {
        id: 7,
        first_name: "مهسا",
        last_name: "کریمی",
        image: pic7,
      },
      {
        id: 8,
        first_name: "آیدا",
        last_name: "اکبری",
        image: pic8,
      },
      {
        id: 9,
        first_name: "زهرا",
        last_name: "موسوی",
        image: pic9,
      },
    ],
  },

  // ─────────────────────
  // ابرو
  // ─────────────────────
  {
    id: 10,
    title: "اصلاح ابرو",
    duration: 30,
    reserve_fee: 50000,
    staff: [
      {
        id: 8,
        first_name: "آیدا",
        last_name: "اکبری",
        image: pic8,
      },
      {
        id: 9,
        first_name: "زهرا",
        last_name: "موسوی",
        image: pic9,
      },
      {
        id: 10,
        first_name: "ریحانه",
        last_name: "صادقی",
        image: pic10,
      },
      {
        id: 2,
        first_name: "مریم",
        last_name: "محمدی",
        image: pic2,
      },
    ],
  },
  {
    id: 11,
    title: "لیفت ابرو",
    duration: 60,
    reserve_fee: 130000,
    staff: [
      {
        id: 8,
        first_name: "آیدا",
        last_name: "اکبری",
        image: pic8,
      },
      {
        id: 10,
        first_name: "ریحانه",
        last_name: "صادقی",
        image: pic10,
      },
      {
        id: 1,
        first_name: "سارا",
        last_name: "احمدی",
        image: pic1,
      },
    ],
  },

  // ─────────────────────
  // مژه
  // ─────────────────────
  {
    id: 12,
    title: "لیفت مژه",
    duration: 60,
    reserve_fee: 150000,
    staff: [
      {
        id: 10,
        first_name: "ریحانه",
        last_name: "صادقی",
        image: pic10,
      },
      {
        id: 1,
        first_name: "سارا",
        last_name: "احمدی",
        image: pic1,
      },
      {
        id: 3,
        first_name: "نگار",
        last_name: "کریمی",
        image: pic3,
      },
    ],
  },
  {
    id: 13,
    title: "اکستنشن مژه",
    duration: 120,
    reserve_fee: 250000,
    staff: [
      {
        id: 10,
        first_name: "ریحانه",
        last_name: "صادقی",
        image: pic10,
      },
      {
        id: 3,
        first_name: "نگار",
        last_name: "کریمی",
        image: pic3,
      },
    ],
  },
];
