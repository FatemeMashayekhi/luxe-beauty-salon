import PaymentButton from "@/components/booking/payment/PaymentButton";
import PaymentMethod from "@/components/booking/payment/PaymentMethod";
import Price from "@/components/booking/payment/Price";

export default function PaymentPage() {
  return (
    <div className="p-4 flex flex-col gap-y-12">
      <Price />
      <PaymentMethod />
      <PaymentButton />
    </div>
  );
}
