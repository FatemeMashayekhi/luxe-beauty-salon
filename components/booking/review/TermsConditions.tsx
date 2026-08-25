import { Icon } from "@iconify/react";

export default function TermsConditions() {
  return (
    <div className="w-full rounded-2xl border border-pink-100 bg-pink-50/60 p-5">
      <div className="mb-4">
        <h2 className="text-base font-bold text-neutral-900">قوانین و شرایط</h2>
        <p className="mt-1 text-sm leading-6 text-neutral-500">
          قبل از ادامه، لطفاً موارد زیر را مطالعه کنید.
        </p>
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="flex items-start gap-x-2.5">
          <Icon
            icon="ri:check-line"
            width="20"
            height="20"
            className="mt-0.5 shrink-0"
            style={{ color: "#EF617D" }}
          />

          <p className="text-sm leading-6 text-neutral-700">
            تا 24 ساعت قبل از زمان رزرو امکان لغو وجود دارد.
          </p>
        </div>
        <div className="flex items-start gap-x-2.5">
          <Icon
            icon="ri:check-line"
            width="20"
            height="20"
            className="mt-0.5 shrink-0"
            style={{ color: "#EF617D" }}
          />
          <p className="text-sm leading-6 text-neutral-700">
            تأخیر بیش از 40 دقیقه باعث لغو رزرو می‌شود.
          </p>
        </div>
        <div className="flex items-start gap-x-2.5">
          <Icon
            icon="ri:check-line"
            width="20"
            height="20"
            className="mt-0.5 shrink-0"
            style={{ color: "#EF617D" }}
          />
          <p className="text-sm leading-6 text-neutral-700">
            لطفاً در زمان مقرر در سالن حضور داشته باشید.
          </p>
        </div>
      </div>
    </div>
  );
}
