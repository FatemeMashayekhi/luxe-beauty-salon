"use client";
import { useRouter } from "next/navigation";
import { useBookingStore } from "@/stores/bookingStore";
import SearchInput from "./SearchInput";
import ServicesList from "./ServicesList";
import { ServicesListModels } from "@/Models/bookingModels";
import CategoriesList from "./CategoriesList";
import { useState } from "react";

export default function Body() {
  const router = useRouter();
  const setService = useBookingStore((state) => state.setService);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const handleSelectService = (service: ServicesListModels) => {
    setService({
      id: service.id,
      title: service.title,
      duration: service.duration,
      price: service.reserve_fee,
    });

    router.push("/booking/employee");
  };

  return (
    <div className="p-4 flex flex-col gap-y-8 lg:w-[70%]">
      <SearchInput search={search} setSearch={setSearch} />

      <div className="flex flex-col gap-y-3">
        <h2 className="text-base font-semibold text-[#292929]">
          دسته‌بندی خدمات
        </h2>

        <p className="text-sm text-[#999]">
          دسته‌بندی مورد نظر خود را انتخاب کنید
        </p>
        <CategoriesList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <ServicesList
        handleSelectService={handleSelectService}
        categoryId={selectedCategory}
        search={search}
      />
    </div>
  );
}
