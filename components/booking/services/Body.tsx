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
      <CategoriesList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ServicesList
        handleSelectService={handleSelectService}
        categoryId={selectedCategory}
        search={search}
      />
    </div>
  );
}
