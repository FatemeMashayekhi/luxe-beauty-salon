"use client";
import Image from "next/image";
import logo from "@/public/images/logo/logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface CurrentPath {
  [key: string]: string;
}

export default function Header() {
  const pathName = usePathname();

  const currentPath: CurrentPath = {
    "/booking": "انتخاب خدمت",
    "/booking/employee": "انتخاب متخصص",
    "/booking/information": "تکمیل اطلاعات",
    "/booking/payment": "پرداخت نهایی",
    "/booking/review": "بررسی اطلاعات رزرو",
    "/booking/schedule": "انتخاب زمان",
    "/profile": "پروفایل کاربری",
  };
  const pageTitle = currentPath[pathName] ? currentPath[pathName] : "";

  return (
    <header className="flex justify-between items-center p-4 border-b border-[#E8E8E8] lg:p-6">
      <span className="font-semibold">{pageTitle}</span>
      <menu className="hidden lg:flex lg:gap-x-8 lg:text-lg">
        <li>
          <Link href={"/"}>خانه</Link>
        </li>
        <li>
          <Link href={"/profile"}>پروفایل</Link>
        </li>
        <li>
          <Link href={"/booking"}>خدمات</Link>
        </li>
        {/* <li>فروشگاه</li> */}
      </menu>
      <Image src={logo} alt="logo" width={140} />
    </header>
  );
}
