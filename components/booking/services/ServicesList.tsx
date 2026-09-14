"use client";
import Image from "next/image";
import { ServicesListModels } from "@/Models/bookingModels";
import { faNumber, faPrice } from "@/lib/utils";
import { categoriesData } from "@/data/categories";

interface Props {
  categoryId: number | null;
  handleSelectService: (service: ServicesListModels) => void;
  search: string;
}

export default function ServicesList({
  categoryId,
  search,
  handleSelectService,
}: Props) {
  const services =
    categoryId === null
      ? categoriesData?.flatMap((category) => category.services ?? [])
      : categoriesData?.find((category) => category.id === categoryId)
          ?.services;

  const filteredServices = services?.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
      {filteredServices?.map((item) => (
        <div
          key={item.id}
          className="group flex items-center gap-4 rounded-2xl border border-[#F0E4E7] bg-white p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#EF617D]/30 hover:shadow-[0_8px_24px_rgba(239,97,125,0.08)]"
        >
          <div className="relative size-[76px] shrink-0 overflow-hidden rounded-2xl bg-[#FFF5F7]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="76px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-[15px] font-semibold text-[#292929]">
              {item.title}
            </h3>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-[#969696]">
              <span>{faNumber(item.duration)}</span>
              <span>دقیقه</span>
            </div>
            <div className="mt-1.5 flex items-baseline gap-1">
              <span className="text-[15px] font-bold text-[#EF617D]">
                {faPrice(item.reserve_fee)}
              </span>
              <span className="text-xs text-[#999]">تومان</span>
            </div>
          </div>

          <button
            onClick={() => handleSelectService(item)}
            className="shrink-0 rounded-xl border border-[#EF617D] px-3.5 py-2 text-sm font-medium text-[#EF617D] transition-all duration-200 hover:bg-[#EF617D] hover:text-white active:scale-95"
          >
            انتخاب
          </button>
        </div>
      ))}
    </div>
  );
}
