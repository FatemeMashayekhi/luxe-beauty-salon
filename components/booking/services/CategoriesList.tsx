import { categoriesData } from "@/data/categories";

interface Props {
  selectedCategory: number | null;
  setSelectedCategory: (id: number | null) => void;
}

export default function CategoriesList({
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return (
    <div className="w-full overflow-x-auto pb-1 scrollbar-none">
      <div className="flex min-w-max items-center gap-2 lg:grid lg:min-w-0 lg:grid-cols-6 lg:gap-3">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
            selectedCategory === null
              ? "bg-[#EF617D] text-white shadow-[0_5px_14px_rgba(239,97,125,0.18)]"
              : "border border-[#F0E4E7] bg-white text-[#666] hover:border-[#EF617D]/40 hover:text-[#EF617D]"
          }`}
        >
          همه خدمات
        </button>

        {categoriesData?.map((category) => {
          const isSelected = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                isSelected
                  ? "bg-[#EF617D] text-white shadow-[0_5px_14px_rgba(239,97,125,0.18)]"
                  : "border border-[#F0E4E7] bg-white text-[#666] hover:border-[#EF617D]/40 hover:text-[#EF617D]"
              }`}
            >
              {category.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
