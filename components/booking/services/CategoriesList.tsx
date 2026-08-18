import { getCategoriesList } from "@/api/services";
import { useQuery } from "@tanstack/react-query";

interface Props {
  selectedCategory: number | null;

  setSelectedCategory: (id: number | null) => void;
}

export default function CategoriesList({
  selectedCategory,
  setSelectedCategory,
}: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories-list"],
    queryFn: getCategoriesList,
  });

  if (isLoading) {
    return <p>در حال بارگذاری...</p>;
  }

  if (isError) {
    return <p>خطا در دریافت خدمات</p>;
  }
  return (
    <div className="flex justify-between items-center gap-x-3 lg:gap-x-4">
      <button
        onClick={() => setSelectedCategory(null)}
        className={`border border-[#E8E8E8] rounded-xl p-2 ${selectedCategory === null ? "bg-[#EF617D] text-white" : "bg-pink-50"}`}
      >
        همه
      </button>
      {data?.map((category) => (
        <button
          key={category.id}
          className={`border border-[#E8E8E8] rounded-xl p-2 lg:w-full ${
            selectedCategory === category.id
              ? "bg-[#EF617D] text-white"
              : "bg-pink-50"
          }`}
          onClick={() => setSelectedCategory(category.id)}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
}
