import { StaffListModels } from "@/Models/bookingModels";
import Image from "next/image";
import { servicesData } from "@/data/employees";

interface Props {
  handleSelectEmployee: (employee: StaffListModels) => void;
  serviceId: number;
}

export default function EmployeesCard({
  handleSelectEmployee,
  serviceId,
}: Props) {
  const selectedService = servicesData.find(
    (service) => service.id === serviceId,
  );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
      {selectedService?.staff.map((item) => (
        <div
          key={item.id}
          className="group flex items-center gap-4 rounded-2xl border border-[#F0E4E7] bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#EF617D]/30 hover:shadow-[0_8px_24px_rgba(239,97,125,0.08)]"
        >
          <div className="relative size-[72px] shrink-0 overflow-hidden rounded-full border-2 border-[#FCE7EB] bg-[#FFF6F8]">
            <Image
              src={item.image}
              alt={`${item.first_name} ${item.last_name}`}
              fill
              sizes="72px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="mb-1 text-xs font-medium text-[#A5A5A5]">
              متخصص خدمات شما
            </p>
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
              <span className="text-[15px] font-semibold text-[#282828]">
                {item.first_name}
              </span>
              <span className="text-[15px] font-semibold text-[#282828]">
                {item.last_name}
              </span>
            </div>
          </div>

          <button
            onClick={() => handleSelectEmployee(item)}
            className="shrink-0 rounded-xl bg-[#EF617D] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#E65370] active:scale-95"
          >
            انتخاب
          </button>
        </div>
      ))}
    </div>
  );
}
