import { Icon } from "@iconify/react";

export default function PaymentMethod() {
  return (
    <div className="text-center flex flex-col gap-y-3">
      <span className="text-lg">روش پرداخت</span>
      <div className="border border-[#F68FA4] bg-pink-50 rounded-xl p-4 flex justify-between items-center">
        <span className="inline-flex items-center justify-center border-2 border-[#EF617D] rounded-full p-1">
          <span className="w-3 h-3 rounded-full bg-[#EF617D]" />
        </span>
        <div className="flex gap-x-4 items-center">
          <div className="text-left">
            <p>درگاه پرداخت آنلاین</p>
            <span className="text-[#666666]">کلیه کارت های عضو شتاب</span>
          </div>
          <Icon
            icon="quill:creditcard"
            width="24"
            height="24"
            style={{ color: "#4CAF50" }}
          />
        </div>
      </div>
    </div>
  );
}
