import { Icon } from "@iconify/react";

export default function PaymentMethod() {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-neutral-900">روش پرداخت</h2>

          <p className="mt-1 text-sm text-neutral-500">
            یکی از روش‌های پرداخت موجود را انتخاب کنید.
          </p>
        </div>
      </div>
      <button
        type="button"
        className="group flex w-full items-center justify-between rounded-2xl border-2 border-[#EF617D] bg-pink-50/60 p-4 text-right transition-all duration-200 hover:bg-pink-50"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#EF617D]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EF617D]" />
          </span>
          <div>
            <p className="font-semibold text-neutral-900">
              درگاه پرداخت آنلاین
            </p>

            <p className="mt-1 text-sm text-neutral-500">
              کلیه کارت‌های عضو شتاب
            </p>
          </div>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
          <Icon
            icon="quill:creditcard"
            width="24"
            height="24"
            className="text-[#EF617D]"
          />
        </div>
      </button>
    </section>
  );
}
