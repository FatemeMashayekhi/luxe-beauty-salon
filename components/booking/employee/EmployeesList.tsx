"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useBookingStore } from "@/stores/bookingStore";
import EmployeesCard from "./EmployeesCard";
import { StaffListModels } from "@/Models/bookingModels";

export default function EmployeesList() {
  const router = useRouter();

  const service = useBookingStore((state) => state.service);

  useEffect(() => {
    if (!service) {
      router.replace("/booking");
    }
  }, [service, router]);

  const setEmployee = useBookingStore((state) => state.setEmployee);

  const handleSelectEmployee = (employee: StaffListModels) => {
    setEmployee({
      id: employee.id,
      first_name: employee.first_name,
      last_name: employee.last_name,
      image: employee.image,
    });

    router.push("/booking/schedule");
  };

  if (!service) {
    return null;
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-5 px-4 py-5 lg:py-8">
      <div className="flex items-center justify-between rounded-2xl border border-[#F0E6E8] bg-white px-4 py-3.5 shadow-[0_4px_18px_rgba(0,0,0,0.03)]">
        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-xs text-[#999]">خدمت انتخاب‌شده</span>
            <span className="size-1 rounded-full bg-[#EF617D]" />
          </div>

          <h2 className="truncate text-[15px] font-semibold text-[#292929]">
            {service.title}
          </h2>

          <div className="mt-1.5 flex items-center gap-2 text-xs text-[#999]">
            <span>{service.duration} دقیقه</span>
            <span className="text-[#D5D5D5]">•</span>
            <span>{service.price.toLocaleString("fa-IR")} تومان</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => router.push("/booking")}
          className="shrink-0 rounded-xl px-3 py-2 text-sm font-medium text-[#EF617D] transition-colors hover:bg-[#FFF3F6]"
        >
          تغییر
        </button>
      </div>

      <div>
        <div className="mb-4">
          <h1 className="text-lg font-bold text-[#292929]">انتخاب متخصص</h1>

          <p className="mt-1 text-sm text-[#999]">
            متخصص مورد نظر خود را برای این خدمت انتخاب کنید.
          </p>
        </div>

        <EmployeesCard
          handleSelectEmployee={handleSelectEmployee}
          serviceId={service.id}
        />
      </div>
    </div>
  );
}
