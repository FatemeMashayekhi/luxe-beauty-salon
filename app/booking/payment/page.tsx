import PaymentButton from "@/components/booking/payment/PaymentButton";
import PaymentMethod from "@/components/booking/payment/PaymentMethod";
import Price from "@/components/booking/payment/Price";

export default function PaymentPage() {
  return (
    <main className="px-4 py-6">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <div className="text-center">
          <h1 className="text-xl font-bold text-neutral-900 sm:text-2xl">
            پرداخت رزرو
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            اطلاعات پرداخت خود را بررسی و سپس پرداخت را انجام دهید.
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-6">
            <Price />
            <PaymentMethod />
            <div className="h-px bg-neutral-100" />
            <PaymentButton />
          </div>
        </div>
      </div>
    </main>
  );
}
