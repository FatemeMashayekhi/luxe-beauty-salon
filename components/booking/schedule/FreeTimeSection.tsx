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
  return (
    <>
      {date && (
        <div className="mt-8 p-3">
          <h2 className="mb-4 text-lg font-semibold">ساعت‌های خالی</h2>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
            {slots.map((slot) => {
              const slotTime = slot.start_time.slice(0, 5);

              return (
                <button
                  key={slot.id}
                  onClick={() => {
                    setTime(slotTime);

                    setSlotId(slot.id);
                  }}
                  className={clsx("h-12 rounded-xl border transition-all", {
                    "bg-[#EF617D] text-white border-primary": time === slotTime,

                    "bg-white hover:border-primary": time !== slotTime,
                  })}
                >
                  {slotTime}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
