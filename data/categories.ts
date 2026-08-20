import { CategoriesListModels } from "@/Models/bookingModels";

export const categoriesData: CategoriesListModels[] = [
  {
    id: 1,
    title: "فیشیال",
    svg: null,
    services: [
      {
        id: 1,
        title: "فیشیال کلاسیک",
        duration: 60,
        reserve_fee: 150000,
      },
      {
        id: 2,
        title: "فیشیال تخصصی",
        duration: 90,
        reserve_fee: 250000,
      },
      {
        id: 3,
        title: "پاکسازی پوست",
        duration: 60,
        reserve_fee: 180000,
      },
    ],
  },
  {
    id: 2,
    title: "مو",
    svg: null,
    services: [
      {
        id: 4,
        title: "کوتاهی مو",
        duration: 60,
        reserve_fee: 100000,
      },
      {
        id: 5,
        title: "براشینگ",
        duration: 45,
        reserve_fee: 80000,
      },
      {
        id: 6,
        title: "رنگ مو",
        duration: 120,
        reserve_fee: 200000,
      },
    ],
  },
  {
    id: 3,
    title: "ناخن",
    svg: null,
    services: [
      {
        id: 7,
        title: "مانیکور",
        duration: 45,
        reserve_fee: 70000,
      },
      {
        id: 8,
        title: "پدیکور",
        duration: 60,
        reserve_fee: 90000,
      },
      {
        id: 9,
        title: "ژل پولیش",
        duration: 75,
        reserve_fee: 120000,
      },
    ],
  },
  {
    id: 4,
    title: "ابرو",
    svg: null,
    services: [
      {
        id: 10,
        title: "اصلاح ابرو",
        duration: 30,
        reserve_fee: 50000,
      },
      {
        id: 11,
        title: "لیفت ابرو",
        duration: 60,
        reserve_fee: 130000,
      },
    ],
  },
  {
    id: 5,
    title: "مژه",
    svg: null,
    services: [
      {
        id: 12,
        title: "لیفت مژه",
        duration: 60,
        reserve_fee: 150000,
      },
      {
        id: 13,
        title: "اکستنشن مژه",
        duration: 120,
        reserve_fee: 250000,
      },
    ],
  },
];
