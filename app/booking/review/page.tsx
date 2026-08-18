import AcceptButton from "@/components/booking/review/AcceptButton";
import BookingInformation from "@/components/booking/review/BookingInformation";
import TermsConditions from "@/components/booking/review/TermsConditions";

export default function ReviewPage() {
  return (
    <div className="p-4 flex flex-col gap-y-6">
      <BookingInformation />
      <TermsConditions />
      <AcceptButton />
    </div>
  );
}
