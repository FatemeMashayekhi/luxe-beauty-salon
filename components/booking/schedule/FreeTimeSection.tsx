import { SlotsEntity } from "@/Models/bookingModels";
import clsx from "clsx";

type FreeTimeSectionProps = {
  date: string | null;
  slots: SlotsEntity[];
  time: string | null;
  setTime: (time: string) => void;
  setSlotId: (id: number) => void;
};

export default function FreeTimeSection({
  date,
  slots,
  time,
  setTime,
  setSlotId,
}: FreeTimeSectionProps) {
  if (!date) {
    return (
      <div className="mx-3 my-5 rounded-2xl border border-dashed border-[#E9E9E9] bg-[#FAFAFA] p-5 text-center">
        <p className="text-sm font-medium text-[#666]">
          ابتدا یک تاریخ را انتخاب کنید
        </p>

        <p className="mt-1 text-xs text-[#999]">
          سپس ساعت‌های موجود برای آن روز نمایش داده می‌شوند.
        </p>
      </div>
    );
  }

  return (
    <div className="border-t border-[#F3F3F3] px-3 py-5 sm:px-5">
      <div className="mb-4">
        <h2 className="text-base font-bold text-[#292929]">
          ساعت‌های قابل رزرو
        </h2>

        <p className="mt-1 text-xs text-[#999]">
          یکی از زمان‌های زیر را انتخاب کنید
        </p>
      </div>

      {slots.length > 0 ? (
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {slots.map((slot) => {
            const slotTime = slot.start_time.slice(0, 5);
            const isSelected = time === slotTime;

            return (
              <button
                key={slot.id}
                type="button"
                onClick={() => {
                  setTime(slotTime);
                  setSlotId(slot.id);
                }}
                className={clsx(
                  "h-12 rounded-xl border text-sm font-medium transition-all",
                  {
                    "border-[#EF617D] bg-[#EF617D] text-white shadow-[0_5px_14px_rgba(239,97,125,0.16)]":
                      isSelected,

                    "border-[#E9E9E9] bg-white text-[#444] hover:border-[#EF617D] hover:bg-[#FFF6F8]":
                      !isSelected,
                  },
                )}
              >
                {slotTime}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="rounded-xl bg-[#FAFAFA] p-4 text-center">
          <p className="text-sm text-[#999]">
            برای این روز زمان خالی وجود ندارد.
          </p>
        </div>
      )}
    </div>
  );
}
