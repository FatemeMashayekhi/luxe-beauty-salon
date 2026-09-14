"use client";
import { Icon } from "@iconify/react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchInput({ search, setSearch }: Props) {
  return (
    <div className="w-full lg:w-[380px]">
      <label
        htmlFor="services-search"
        className="group relative flex h-12 w-full items-center rounded-2xl border border-[#EDEDED] bg-white transition-all duration-200 focus-within:border-[#EF617D]/50 focus-within:ring-4 focus-within:ring-[#EF617D]/10"
      >
        <Icon
          icon="tdesign:search"
          width="20"
          height="20"
          className="pointer-events-none absolute right-4 text-[#A5A5A5] transition-colors duration-200 group-focus-within:text-[#EF617D]"
        />

        <input
          name="services-search"
          id="services-search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="جستجوی خدمات..."
          className="h-full w-full bg-transparent px-11 pl-4 text-sm text-[#292929] outline-none placeholder:text-[#A5A5A5]"
        />
      </label>
    </div>
  );
}
