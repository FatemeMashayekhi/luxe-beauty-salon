import { Icon } from "@iconify/react";

export default function TermsConditions() {
  return (
    <div className="border border-[#E8E8E8] rounded-xl bg-pink-50 p-4 text-center flex flex-col gap-y-2">
      <span className="font-semibold">قوانین و شرایط</span>
      <div className="flex flex-col gap-y-1.5">
        <div className="flex items-center gap-x-1 text-sm">
          <Icon
            icon="ri:check-line"
            width="24"
            height="24"
            style={{ color: "#000000" }}
          />
          <p>تا 24 ساعت قبل از زمان رزرو امکان لغو وجود دارد.</p>
        </div>
        <div className="flex items-center gap-x-1 text-sm">
          <Icon
            icon="ri:check-line"
            width="24"
            height="24"
            style={{ color: "#000000" }}
          />
          <p>تاخیر بیش از 40 دقیقه باعث لغو رزرو میشود.</p>
        </div>
        <div className="flex items-center gap-x-1 text-sm">
          <Icon
            icon="ri:check-line"
            width="24"
            height="24"
            style={{ color: "#000000" }}
          />
          <p>لطفا در زمان مقرر در سالن حضور داشته باشید.</p>
        </div>
      </div>
    </div>
  );
}
