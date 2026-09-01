import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import logo from "@/public/images/logo/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 lg:px-6 lg:py-6 2xl:w-[70%]">
      <div className="flex gap-x-3 items-center">
        <div className="lg:hidden">
          <HamburgerMenu />
        </div>
        <Link
          href={"/login"}
          className="bg-[#EF617D] text-white rounded-xl py-2 px-4 lg:text-lg"
        >
          رزرو وقت
        </Link>
      </div>
      <menu className="hidden lg:flex lg:gap-x-8 lg:text-lg">
        <li className="hover:text-[#E85372]">
          <Link href={"/"}>خانه</Link>
        </li>
        <li className="hover:text-[#E85372]">
          <Link href={"/about"}>درباره ما</Link>
        </li>
        <li className="hover:text-[#E85372]">
          <Link href={"/questions"}>سوالات متداول</Link>
        </li>
      </menu>
      <Image src={logo} alt="logo" width={140} />
    </header>
  );
}
