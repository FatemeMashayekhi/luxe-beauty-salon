import Image from "next/image";
import phoneIcon from "@/public/images/login/user-interface.png";
import loginBanner from "@/public/images/login/login-banner.jpg";
import LoginForm from "@/components/login/LoginForm";

export default function LoginPage() {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="flex flex-col items-center p-8 gap-y-8 text-center min-h-dvh lg:min-h-auto">
          <div>
            <Image
              src={phoneIcon}
              alt="Phone Icon"
              loading="eager"
              width={150}
            />
          </div>
          <p className="text-2xl font-semibold">
            برای ادامه، شماره موبایل خود را وارد کنید.
          </p>
          <p className="text-[#9A9A9A] text-sm font-semibold">
            کد تایید برای این شماره ارسال خواهد شد
          </p>
          <LoginForm />
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
