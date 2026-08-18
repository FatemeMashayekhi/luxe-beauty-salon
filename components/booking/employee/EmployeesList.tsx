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

  return (
    <div className="p-4 flex flex-col gap-y-8 lg:w-[70%]">
      <div className="rounded-xl bg-pink-50 p-3">
        <span className="text-sm text-gray-500">خدمت انتخاب شده:</span>

        <div className="font-semibold">{service?.title}</div>
      </div>
      <EmployeesCard
        handleSelectEmployee={handleSelectEmployee}
        serviceId={service?.id ?? 1}
      />
    </div>
  );
}
