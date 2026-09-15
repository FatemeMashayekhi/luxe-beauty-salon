import { Icon } from "@iconify/react";

export default function ProfileCard() {
  return (
    <section className="rounded-3xl border border-[#F0E5E8] bg-white p-5 shadow-[0_6px_24px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#FFF0F3] text-xl font-bold text-[#EF617D]">
            ف
          </div>

          <div>
            <h2 className="text-base font-bold text-[#292929]">فاطمه مشایخی</h2>

            <p className="mt-1 text-sm text-[#999]">۰۹۱۲۱۲۳۴۵۶۷</p>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-[#EF617D] transition-colors hover:bg-[#FFF4F6]"
        >
          <Icon icon="solar:pen-linear" width="17" />
          ویرایش
        </button>
      </div>

      <div className="mt-5 border-t border-[#F4F1F2] pt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#999]">عضو از</span>

          <span className="text-sm font-medium text-[#444]">مهر ۱۴۰۴</span>
        </div>
      </div>
    </section>
  );
}
