"use client";
import Link from "next/link";
import CodeBox from "./CodeBox";
import { useRef, useState } from "react";
import CountDown from "./CountDown";
import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";
// import { useMutation } from "@tanstack/react-query";
// import { otpVerify } from "@/api/services";
import { convertToPersianNumbers } from "@/lib/utils";

interface Props {
  phoneNumber: string;
}

export default function Verification({ phoneNumber }: Props) {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // const mutation = useMutation({
  //   mutationFn: otpVerify,
  //   onSuccess: (data) => {
  //     // const access = data.access || "";
  //     // const refresh = data.refresh || "";

  //     // Cookies.set("refresh_token", refresh, {
  //     //   secure: true,
  //     //   sameSite: "Lax",
  //     //   httpOnly: false,
  //     //   path: "/",
  //     //   domain: "",
  //     //   expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
  //     // });
  //     // Cookies.set("access_token", access, {
  //     //   secure: true,
  //     //   sameSite: "Lax",
  //     //   httpOnly: false,
  //     //   path: "/",
  //     //   domain: "",
  //     //   expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  //     // });
  //     //       toast({
  //     //   title: "کد با موفقیت تایید شد",
  //     // });

  //   },
  //   // onError: (error: AxiosError) => {
  //   //   console.log(error);
  //   //   const messages = getErrorMessages(error);
  //   //   if (error.status === 500) {
  //   //     toast({
  //   //       variant: "destructive",
  //   //       description:
  //   //         "خطایی در ارتباط با سرور رخ داده ، به پشتیبانی اطلاع دهید.",
  //   //     });
  //   //   } else {
  //   //     toast({
  //   //       variant: "destructive",
  //   //       description:
  //   //         messages[0] || "خطایی در تایید کد رخ داده ، لطفا دوباره تلاش کنید",
  //   //     });
  //   //   }
  //   // },
  // });

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
