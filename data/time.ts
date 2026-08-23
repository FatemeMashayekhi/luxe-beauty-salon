import { StaffTimesModels } from "@/Models/bookingModels";
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

export const staffTimesData: StaffTimesModels[] = [
  {
    id: 1,
    first_name: "سارا",
    last_name: "احمدی",
    image: pic1,
    slots: [
      {
        id: 1,
        date: "1405-06-03",
        start_time: "09:00",
        end_time: "10:00",
        status: "available",
      },
      {
        id: 2,
        date: "1405-06-03",
        start_time: "10:00",
        end_time: "11:00",
        status: "available",
      },
      {
        id: 3,
        date: "1405-06-03",
        start_time: "11:00",
        end_time: "12:00",
        status: "booked",
      },
      {
        id: 4,
        date: "1405-06-03",
        start_time: "14:00",
        end_time: "15:00",
        status: "available",
      },
      {
        id: 5,
        date: "1405-06-04",
        start_time: "09:00",
        end_time: "10:00",
        status: "available",
      },
      {
        id: 6,
        date: "1405-06-04",
        start_time: "10:00",
        end_time: "11:00",
        status: "booked",
      },
      {
        id: 7,
        date: "1405-06-04",
        start_time: "11:00",
        end_time: "12:00",
        status: "available",
      },
      {
        id: 8,
        date: "1405-06-05",
        start_time: "13:00",
        end_time: "14:00",
        status: "available",
      },
    ],
  },

  {
    id: 2,
    first_name: "مریم",
    last_name: "محمدی",
    image: pic2,
    slots: [
      {
        id: 9,
        date: "1405-06-03",
        start_time: "09:00",
        end_time: "10:00",
        status: "booked",
      },
      {
        id: 10,
        date: "1405-06-03",
        start_time: "10:00",
        end_time: "11:00",
        status: "available",
      },
      {
        id: 11,
        date: "1405-06-03",
        start_time: "12:00",
        end_time: "13:00",
        status: "available",
      },
      {
        id: 12,
        date: "1405-06-04",
        start_time: "09:00",
        end_time: "10:00",
        status: "available",
      },
      {
        id: 13,
        date: "1405-06-04",
        start_time: "10:00",
        end_time: "11:00",
        status: "available",
      },
      {
        id: 14,
        date: "1405-06-04",
        start_time: "14:00",
        end_time: "15:00",
        status: "booked",
      },
      {
        id: 15,
        date: "1405-06-05",
        start_time: "11:00",
        end_time: "12:00",
        status: "available",
      },
    ],
  },

  {
    id: 3,
    first_name: "نگار",
    last_name: "کریمی",
    image: pic3,
    slots: [
      {
        id: 16,
        date: "1405-06-03",
        start_time: "10:00",
        end_time: "11:00",
        status: "available",
      },
      {
        id: 17,
        date: "1405-06-03",
        start_time: "11:00",
        end_time: "12:00",
        status: "available",
      },
      {
        id: 18,
        date: "1405-06-03",
        start_time: "13:00",
        end_time: "14:00",
        status: "booked",
      },
      {
        id: 19,
        date: "1405-06-04",
        start_time: "09:00",
        end_time: "10:00",
        status: "available",
      },
      {
        id: 20,
        date: "1405-06-04",
        start_time: "10:00",
        end_time: "11:00",
        status: "available",
      },
      {
        id: 21,
        date: "1405-06-05",
        start_time: "14:00",
        end_time: "15:00",
        status: "available",
      },
    ],
  },

  {
    id: 4,
    first_name: "الهام",
    last_name: "رضایی",
    image: pic4,
    slots: [
      {
        id: 22,
        date: "1405-06-03",
        start_time: "09:00",
        end_time: "10:00",
        status: "available",
      },
      {
        id: 23,
        date: "1405-06-03",
        start_time: "10:00",
        end_time: "11:00",
        status: "booked",
      },
      {
        id: 24,
        date: "1405-06-04",
        start_time: "11:00",
        end_time: "12:00",
        status: "available",
      },
      {
        id: 25,
        date: "1405-06-04",
        start_time: "12:00",
        end_time: "13:00",
        status: "available",
      },
      {
        id: 26,
        date: "1405-06-05",
        start_time: "09:00",
        end_time: "10:00",
        status: "available",
      },
    ],
  },

  {
    id: 5,
    first_name: "سحر",
    last_name: "حسینی",
    image: pic5,
    slots: [
      {
        id: 27,
        date: "1405-06-03",
        start_time: "09:00",
        end_time: "10:00",
        status: "available",
      },
      {
        id: 28,
        date: "1405-06-03",
        start_time: "10:00",
        end_time: "11:00",
        status: "available",
      },
      {
        id: 29,
        date: "1405-06-03",
        start_time: "11:00",
        end_time: "12:00",
        status: "booked",
      },
      {
        id: 30,
        date: "1405-06-04",
        start_time: "13:00",
        end_time: "14:00",
        status: "available",
      },
      {
        id: 31,
        date: "1405-06-05",
        start_time: "10:00",
        end_time: "11:00",
        status: "available",
      },
    ],
  },

  {
    id: 6,
    first_name: "نسترن",
    last_name: "مرادی",
    image: pic6,
    slots: [
      {
        id: 32,
        date: "1405-06-03",
        start_time: "10:00",
        end_time: "11:00",
        status: "available",
      },
      {
        id: 33,
        date: "1405-06-03",
        start_time: "11:00",
        end_time: "12:00",
        status: "booked",
      },
      {
        id: 34,
        date: "1405-06-04",
        start_time: "09:00",
        end_time: "10:00",
        status: "available",
      },
      {
        id: 35,
        date: "1405-06-04",
        start_time: "10:00",
        end_time: "11:00",
        status: "available",
      },
      {
        id: 36,
        date: "1405-06-05",
        start_time: "14:00",
        end_time: "15:00",
        status: "booked",
      },
    ],
  },

  {
    id: 7,
    first_name: "مهسا",
    last_name: "کریمی",
    image: pic7,
    slots: [
      {
        id: 37,
        date: "1405-06-03",
        start_time: "09:00",
        end_time: "10:00",
        status: "available",
      },
      {
        id: 38,
        date: "1405-06-03",
        start_time: "10:00",
        end_time: "11:00",
        status: "booked",
      },
      {
        id: 39,
        date: "1405-06-03",
        start_time: "13:00",
        end_time: "14:00",
        status: "available",
      },
      {
        id: 40,
        date: "1405-06-04",
        start_time: "11:00",
        end_time: "12:00",
        status: "available",
      },
      {
        id: 41,
        date: "1405-06-05",
        start_time: "09:00",
        end_time: "10:00",
        status: "available",
      },
    ],
  },

  {
    id: 8,
    first_name: "آیدا",
    last_name: "اکبری",
    image: pic8,
    slots: [
      {
        id: 42,
        date: "1405-06-03",
        start_time: "10:00",
        end_time: "11:00",
        status: "available",
      },
      {
        id: 43,
        date: "1405-06-03",
        start_time: "11:00",
        end_time: "12:00",
        status: "available",
      },
      {
        id: 44,
        date: "1405-06-04",
        start_time: "09:00",
        end_time: "10:00",
        status: "booked",
      },
      {
        id: 45,
        date: "1405-06-04",
        start_time: "10:00",
        end_time: "11:00",
        status: "available",
      },
      {
        id: 46,
        date: "1405-06-05",
        start_time: "12:00",
        end_time: "13:00",
        status: "available",
      },
    ],
  },

  {
    id: 9,
    first_name: "زهرا",
    last_name: "موسوی",
    image: pic9,
    slots: [
      {
        id: 47,
        date: "1405-06-03",
        start_time: "09:00",
        end_time: "10:00",
        status: "available",
      },
      {
        id: 48,
        date: "1405-06-03",
        start_time: "12:00",
        end_time: "13:00",
        status: "booked",
      },
      {
        id: 49,
        date: "1405-06-04",
        start_time: "10:00",
        end_time: "11:00",
        status: "available",
      },
      {
        id: 50,
        date: "1405-06-04",
        start_time: "11:00",
        end_time: "12:00",
        status: "available",
      },
      {
        id: 51,
        date: "1405-06-05",
        start_time: "09:00",
        end_time: "10:00",
        status: "available",
      },
    ],
  },

  {
    id: 10,
    first_name: "ریحانه",
    last_name: "صادقی",
    image: pic10,
    slots: [
      {
        id: 52,
        date: "1405-06-03",
        start_time: "11:00",
        end_time: "12:00",
        status: "available",
      },
      {
        id: 53,
        date: "1405-06-03",
        start_time: "12:00",
        end_time: "13:00",
        status: "available",
      },
      {
        id: 54,
        date: "1405-06-04",
        start_time: "09:00",
        end_time: "10:00",
        status: "booked",
      },
      {
        id: 55,
        date: "1405-06-04",
        start_time: "13:00",
        end_time: "14:00",
        status: "available",
      },
      {
        id: 56,
        date: "1405-06-05",
        start_time: "10:00",
        end_time: "11:00",
        status: "available",
      },
    ],
  },
];
