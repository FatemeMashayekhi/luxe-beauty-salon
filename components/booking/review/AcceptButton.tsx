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
    <div className="flex flex-col gap-y-4">
      <label className="flex items-center gap-x-1.5 cursor-pointer">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />

        <p>من قوانین و شرایط را مطالعه کرده و میپذیرم.</p>
      </label>

      <button
        type="button"
        onClick={handleContinue}
        disabled={!accepted}
        className={`
          mt-auto rounded-xl py-3 w-full lg:text-lg transition
          ${
            accepted
              ? "bg-[#EF617D] text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }
        `}
      >
        ادامه و پرداخت
      </button>
    </div>
  );
}
