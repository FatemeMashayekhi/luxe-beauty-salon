"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AcceptButton() {
  const [accepted, setAccepted] = useState(false);

  const router = useRouter();

  const handleContinue = () => {
    if (!accepted) return;

    router.push("/booking/payment");
  };

  return (
    <div className="flex w-full flex-col gap-y-4">
      <label
        className="
          flex cursor-pointer items-start gap-x-3
          rounded-xl border border-[#E8E8E8]
          bg-white p-4
          transition
          hover:border-[#EF617D]/40
        "
      >
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-[#EF617D]"
        />

        <p className="text-sm leading-6 text-neutral-700">
          من قوانین و شرایط را مطالعه کرده و می‌پذیرم.
        </p>
      </label>
      <button
        type="button"
        onClick={handleContinue}
        disabled={!accepted}
        className={`
          min-h-12
          w-full
          rounded-xl
          px-4
          text-base
          font-semibold
          transition-all
          duration-200
          ${
            accepted
              ? "bg-[#EF617D] text-white shadow-sm hover:bg-[#E65370] hover:shadow-md active:scale-[0.99]"
              : "cursor-not-allowed bg-neutral-200 text-neutral-400"
          }
        `}
      >
        ادامه و پرداخت
      </button>
    </div>
  );
}
