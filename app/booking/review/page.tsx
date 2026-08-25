import AcceptButton from "@/components/booking/review/AcceptButton";
import BookingInformation from "@/components/booking/review/BookingInformation";
import TermsConditions from "@/components/booking/review/TermsConditions";

export default function ReviewPage() {
  return (
    <div
      dir="rtl"
      className="min-h-full bg-[#FCFCFC] px-4 py-6 sm:px-6 lg:px-8 lg:py-10"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-y-8">
        <div className="text-right">
          <h1 className="text-xl font-bold text-neutral-900 sm:text-2xl">
            بررسی و تأیید رزرو
          </h1>

          <p className="mt-2 text-sm leading-6 text-neutral-500">
            اطلاعات رزرو خود را بررسی کرده و در صورت تأیید ادامه دهید.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
          <BookingInformation />
          <div className="flex flex-col gap-y-4 lg:sticky lg:top-6">
            <TermsConditions />
            <AcceptButton />
          </div>
        </div>
      </div>
    </div>
  );
}
