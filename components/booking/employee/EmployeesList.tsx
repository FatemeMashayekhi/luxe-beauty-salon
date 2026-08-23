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
    <div className="p-4 flex flex-col gap-y-8 lg:w-[70%]">
      <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4">
        <div className="flex flex-col gap-y-1">
          <span className="text-xs text-gray-500">خدمت انتخاب‌شده</span>

          <span className="font-semibold text-gray-900">{service.title}</span>

          <div className="flex items-center gap-x-2 text-xs text-gray-500">
            <span>{service.duration} دقیقه</span>
            <span>•</span>
            <span>{service.price.toLocaleString("fa-IR")} تومان</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => router.push("/booking")}
          className="text-sm font-medium text-[#EF617D]"
        >
          تغییر
        </button>
      </div>
      <EmployeesCard
        handleSelectEmployee={handleSelectEmployee}
        serviceId={service.id}
      />
    </div>
  );
}
