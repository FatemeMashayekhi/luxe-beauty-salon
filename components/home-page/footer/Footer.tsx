import { Icon } from "@iconify/react";
import logo from "@/public/images/eNAMAD/ENAMADpng.parspng.com_.png";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-[#1E1E1E] p-4 flex flex-col gap-y-4 w-full lg:gap-y-8">
      <div className="text-white text-center">
        <h1 className="text-xl font-semibold lg:text-2xl lg:pt-4">
          سالن زیبایی لوکس
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-white lg:text-lg">اطلاعات تماس</h2>
          <div className="flex gap-x-4">
            <Icon
              icon="uil:phone"
              width="24"
              height="24"
              style={{ color: "#E85372" }}
            />
            <span className="text-[#F6D7CC]">0912-3456-789</span>
          </div>
          <div className="flex gap-x-4">
            <Icon
              icon="iconoir:instagram"
              width="24"
              height="24"
              style={{ color: "#E85372" }}
            />
            <span className="text-[#F6D7CC]">luxe-salon@</span>
          </div>
          <div className="flex gap-x-4">
            <Icon
              icon="boxicons:location"
              width="24"
              height="24"
              style={{ color: "#E85372" }}
            />
            <span className="text-[#F6D7CC]">
              تهران، خیابان ولیعصر، پلاک 123
            </span>
          </div>
        </div>
        {/* ////////////// */}
        <div className="flex-col gap-y-2 hidden lg:flex">
          <h2 className="text-white lg:text-lg">خدمات</h2>
          <div className="flex gap-x-4">
            <ul className="text-[#F6D7CC] flex flex-col gap-y-2">
              <li>ناخن</li>
              <li>مو</li>
              <li>مژه</li>
              <li>ابرو</li>
              <li>فیشیال</li>
              <li>میکاپ</li>
            </ul>
          </div>
        </div>
        {/* ////////////// */}
        <div className="flex-col gap-y-2 hidden lg:flex">
          <h2 className="text-white lg:text-lg">دسترسی سریع</h2>
          <div className="flex gap-x-4">
            <ul className="text-[#F6D7CC] flex flex-col gap-y-2">
              <li>
                <Link href={"/"}>خانه</Link>
              </li>
              <li>
                <Link href={"/"}>فروشگاه</Link>
              </li>
              <li>
                <Link href={"/"}>سوالات متداول</Link>
              </li>
              <li>
                <Link href={"/"}>درباره ما</Link>
              </li>
              <li>
                <Link href={"/login"}>رزرو وقت</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* ////////////// */}
        <div className="hidden lg:flex lg:justify-center lg:items-center">
          <div className="bg-white rounded-2xl flex items-center justify-center lg:w-[50%] lg:py-2">
            <Image src={logo} alt="logo" width={140} />
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="bg-white rounded-2xl flex items-center justify-center lg:w-[50%] lg:py-2">
          <Image src={logo} alt="logo" width={140} />
        </div>
      </div>
      <p className="text-[#7F7572] px-4 text-center border-t py-1 lg:pt-4">
        © {new Date().getFullYear()} تمام حقوق مادی و معنوی این وب‌سایت برای
        سالن زیبایی لوکس محفوظ است.
      </p>
    </div>
  );
}
