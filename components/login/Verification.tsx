"use client";
import Link from "next/link";
import CodeBox from "./CodeBox";
import { useRef, useState } from "react";
import CountDown from "./CountDown";
import { useRouter } from "next/navigation";
import { convertToPersianNumbers } from "@/lib/utils";

interface Props {
  phoneNumber: string;
}

export default function Verification({ phoneNumber }: Props) {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleSubmit = () => {
    const code = otp.join("");
    router.push("/booking");
    // if (!phoneNumber) {
    //   toast({
    //     title: "خطا",
    //     description: "شماره تلفن یافت نشد",
    //     variant: "destructive",
    //   });
    //   return;
    // }
    // if (code.length !== 6) {
    //   toast({
    //     title: "خطا",
    //     description: "لطفا کد ۶ رقمی را کامل وارد کنید",
    //     variant: "destructive",
    //   });
    //   return;
    // }
    const verificationData = {
      phone_number: convertToPersianNumbers(phoneNumber),
      code: code,
    };
    console.log(verificationData);
  };

  return (
    <div className="flex-1 w-full flex flex-col justify-between gap-y-6">
      <div className="flex flex-col gap-y-10 justify-center items-center">
        <div className="flex flex-col gap-y-6">
          <CodeBox otp={otp} setOtp={setOtp} inputRefs={inputRefs} />

          <div className="flex justify-between items-center">
            <CountDown
              initialSeconds={20}
              phoneNumber={phoneNumber ? phoneNumber : ""}
            />
            <Link href={"/login"} className="text-sm text-[#666666]">
              اصلاح شماره موبایل
            </Link>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        disabled={otp.join("").length !== 6}
        className="mt-auto bg-[#EF617D] text-white rounded-xl py-3 w-full lg:text-lg"
      >
        ورود
      </button>
    </div>
  );
}
