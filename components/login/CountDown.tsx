"use client";
import { convertToPersianNumbers } from "@/lib/utils";
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  initialSeconds: number;
  phoneNumber: string;
}

export default function CountDown({
  initialSeconds,
  phoneNumber,
}: CountdownTimerProps) {
  const [countdown, setCountdown] = useState(initialSeconds);

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const formatCountdown = (seconds: number) => {
    const mins = Math.floor(seconds / 60);

    const secs = seconds % 60;

    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // const mutation = useMutation({
  //   mutationFn: otpLogin,
  // });

  const handleResendClick = () => {
    const convertedValues = {
      phone_number: convertToPersianNumbers(phoneNumber),
    };

    // mutation.mutate(convertedValues);
    console.log(convertedValues);

    setCountdown(initialSeconds);
  };

  const canResend = countdown === 0;

  return (
    <div className="flex gap-x-1 text-sm">
      <button
        type="button"
        onClick={handleResendClick}
        disabled={!canResend}
        className={`
          transition-colors duration-200
          ${
            canResend
              ? "text-[#E85272] cursor-pointer"
              : "text-[#666666] cursor-not-allowed"
          }
        `}
      >
        دریافت مجدد کد تایید
      </button>

      {!canResend && (
        <span className="text-[#666666]">({formatCountdown(countdown)})</span>
      )}
    </div>
  );
}
