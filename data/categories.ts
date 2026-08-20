import { CategoriesListModels } from "@/Models/bookingModels";
import eyebrow from "@/public/images/services/eyebrow.png";
import hair from "@/public/images/services/hair.png";
import eyelash from "@/public/images/services/eyelash.png";
import nail from "@/public/images/services/nail-polish.png";
import facial from "@/public/images/services/facial-mask.png";

export const categoriesData: CategoriesListModels[] = [
  {
    id: 1,
    title: "فیشیال",
    image: facial,
    services: [
      {
        id: 1,
        title: "فیشیال کلاسیک",
        duration: 60,
        reserve_fee: 150000,
        image: facial,
      },
      {
        id: 2,
        title: "فیشیال تخصصی",
        duration: 90,
        reserve_fee: 250000,
        image: facial,
      },
      {
        id: 3,
        title: "پاکسازی پوست",
        duration: 60,
        reserve_fee: 180000,
        image: facial,
      },
    ],
  },
  {
    id: 2,
    title: "مو",
    image: hair,
    services: [
      {
        id: 4,
        title: "کوتاهی مو",
        duration: 60,
        reserve_fee: 100000,
        image: hair,
      },
      {
        id: 5,
        title: "براشینگ",
        duration: 45,
        reserve_fee: 80000,
        image: hair,
      },
      {
        id: 6,
        title: "رنگ مو",
        duration: 120,
        reserve_fee: 200000,
        image: hair,
      },
    ],
  },
  {
    id: 3,
    title: "ناخن",
    image: nail,
    services: [
      {
        id: 7,
        title: "مانیکور",
        duration: 45,
        reserve_fee: 70000,
        image: nail,
      },
      {
        id: 8,
        title: "پدیکور",
        duration: 60,
        reserve_fee: 90000,
        image: nail,
      },
      {
        id: 9,
        title: "ژل پولیش",
        duration: 75,
        reserve_fee: 120000,
        image: nail,
      },
    ],
  },
  {
    id: 4,
    title: "ابرو",
    image: eyebrow,
    services: [
      {
        id: 10,
        title: "اصلاح ابرو",
        duration: 30,
        reserve_fee: 50000,
        image: eyebrow,
      },
      {
        id: 11,
        title: "لیفت ابرو",
        duration: 60,
        reserve_fee: 130000,
        image: eyebrow,
      },
    ],
  },
  {
    id: 5,
    title: "مژه",
    image: eyelash,
    services: [
      {
        id: 12,
        title: "لیفت مژه",
        duration: 60,
        reserve_fee: 150000,
        image: eyelash,
      },
      {
        id: 13,
        title: "اکستنشن مژه",
        duration: 120,
        reserve_fee: 250000,
        image: eyelash,
      },
    ],
  },
];
