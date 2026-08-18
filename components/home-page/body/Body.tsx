import banner from "@/public/images/banner/banner.png";
import Image from "next/image";
import Services from "./Services";
import Samples from "./Samples";
import Link from "next/link";
export default function Body() {
  return (
    <div className="flex flex-col gap-y-8 lg:gap-y-16 2xl:w-[70%]">
      <div className="2xl:flex 2xl:justify-center 2xl:items-center">
        <Image src={banner} loading="eager" alt="banner" />
      </div>
      <div className="flex flex-col text-center gap-y-4 lg:gap-y-6">
        <h3 className="font-semibold text-lg lg:text-3xl">خدمات ما</h3>
        <div className="overflow-hidden px-3 xl:flex xl:justify-center xl:items-center">
          <Services />
        </div>
      </div>
      <div className="flex flex-col text-center gap-y-4 lg:gap-y-6">
        <h3 className="font-semibold text-lg lg:text-3xl">نمونه کار های ما</h3>
        <div className="overflow-hidden px-3">
          <Samples />
        </div>
      </div>
      <div className="p-4 flex justify-center items-center">
        <div className="text-white bg-linear-to-r from-[#E85372] via-[#F68FA4] to-[#F6D7CC] rounded-2xl p-4 lg:py-6 text-center flex flex-col gap-y-3 items-center lg:gap-y-6 lg:w-[70%]">
          <h4 className="text-2xl lg:text-4xl">
            همین حالا وقت خود را رزرو کنید
          </h4>
          <h5 className="text-md lg:text-2xl">
            تجربه ای متفاوت از زیبایی و آرامش
          </h5>
          {/* <button className="bg-white/30 text-white rounded-xl py-2 px-4 w-[50%] lg:text-xl lg:py-3">
            رزرو آنلاین وقت
          </button> */}
          <Link
            href={"/login"}
            className="bg-white/30 text-white rounded-xl py-2 px-4 w-[50%] lg:text-xl lg:py-3"
          >
            رزرو آنلاین وقت
          </Link>
        </div>
      </div>
    </div>
  );
}
