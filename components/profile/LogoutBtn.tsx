"use client";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function LogoutBtn() {
  const router = useRouter();
  return (
    <div className="lg:col-span-2">
      <button
        onClick={() => router.push("/")}
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-100 bg-white py-3.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
      >
        <Icon icon="solar:logout-2-linear" width="19" />
        خروج از حساب
      </button>
    </div>
  );
}
