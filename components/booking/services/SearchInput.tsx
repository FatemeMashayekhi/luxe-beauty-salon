"use client";
import { Icon } from "@iconify/react";

interface Props {
  search: string;

  setSearch: (value: string) => void;
}

export default function SearchInput({
  search,

  setSearch,
}: Props) {
  return (
    <label
      htmlFor="services-search"
      className="border border-[#E8E8E8] bg-pink-50 rounded-xl py-2 px-8 relative lg:w-[40%]"
    >
      <Icon
        icon="tdesign:search"
        width="24"
        height="24"
        style={{ color: "#9A9A9A" }}
        className="absolute right-0 top-2 mr-2"
      />

      <input
        name="services-search"
        id="services-search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="جستجوی خدمات ..."
        className="relative outline-none bg-transparent"
      />
    </label>
  );
}
