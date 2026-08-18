"use client";
import securityLogo from "@/public/images/login/security-protection-shield-padlock-svgrepo-com.svg";
import loginBanner from "@/public/images/login/login-banner.jpg";
import Image from "next/image";
import Verification from "@/components/login/Verification";
import { useSyncExternalStore } from "react";

/////AI SOLUTION//////////////////////////////////////////
const subscribe = () => () => {};
const getSnapshot = () => {
  return localStorage.getItem("phoneNumber");
};
const getServerSnapshot = () => null;
function usePhoneNumber() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
///////////////////////////////////////////////

export default function VerificationCodePage() {
  const phoneNumber = usePhoneNumber();
  if (!phoneNumber) {
    return null;
  }

  return (
    <div className="lg:grid lg:grid-cols-2">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="flex flex-col items-center p-8 gap-y-8 text-center min-h-dvh lg:min-h-auto">
          <div>
            <Image
              src={securityLogo}
              alt="securityLogo"
              loading="eager"
              width={150}
            />
          </div>

          <p className="text-2xl font-semibold">
            کد تایید ارسال شده را وارد کنید.
          </p>

          <div className="flex gap-x-1 text-[#9A9A9A] text-sm font-semibold">
            <p>کد تایید به شماره</p>
            <p>{phoneNumber}</p>
            <p>ارسال شد</p>
          </div>

          <Verification phoneNumber={phoneNumber} />
        </div>
      </div>

      <div className="hidden lg:block lg:relative lg:h-dvh">
        <Image
          src={loginBanner}
          alt="loginBanner"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
