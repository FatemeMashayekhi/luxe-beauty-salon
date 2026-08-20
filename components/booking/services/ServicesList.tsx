"use client";
// import { getCategoriesList } from "@/api/services";
// import { useQuery } from "@tanstack/react-query";
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
  // const { data } = useQuery({
  //   queryKey: ["categories-list"],

  //   queryFn: getCategoriesList,
  // });

  const services =
    categoryId === null
      ? categoriesData?.flatMap((category) => category.services ?? [])
      : categoriesData?.find((category) => category.id === categoryId)
          ?.services;

  const filteredServices = services?.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-y-4 lg:grid lg:grid-cols-2 lg:gap-8">
      {filteredServices?.map((item) => (
        <div
          key={item.id}
          className="shadow border border-[#E8E8E8] flex justify-between items-center rounded-xl p-2"
        >
          <Image src={item.image} alt={item.title} width={50} />
          <div className="flex flex-col gap-y-1">
            <span>{item.title}</span>
            <div className="flex gap-x-1.5 text-sm text-[#9A9A9A]">
              <span>{faNumber(item.duration)}</span>
              <span>دقیقه</span>
            </div>
            <div className="flex gap-x-1.5">
              <span>{faPrice(item.reserve_fee)}</span>
              <span>تومان</span>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleSelectService(item)}
              className="text-[#EF617D] border border-[#EF617D] rounded-xl py-1 px-2"
            >
              انتخاب
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
