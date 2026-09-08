import { CategoryId } from "@/data/faqItems";
import { Icon } from "@iconify/react";
import { Dispatch, SetStateAction } from "react";

type Category = {
  id: CategoryId;
  label: string;
  icon: string;
};

type QuestionCategoriesProps = {
  activeCategory: CategoryId;
  setActiveCategory: Dispatch<SetStateAction<CategoryId>>;
  setOpenId: Dispatch<SetStateAction<number | null>>;
  categories: Category[];
};

export default function QuestionCategories({
  activeCategory,
  setActiveCategory,
  setOpenId,
  categories,
}: QuestionCategoriesProps) {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="mb-5">
        <span className="text-xs font-bold tracking-[0.15em] text-[#EF617D]">
          دسته‌بندی سوالات
        </span>

        <h2 className="mt-2 text-xl font-bold text-[#1E1E1E]">
          چه چیزی می‌خواهید بدانید؟
        </h2>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => {
                setActiveCategory(category.id);
                setOpenId(null);
              }}
              className={[
                "flex shrink-0 items-center gap-3 rounded-xl px-4 py-3.5 text-right text-sm font-medium transition-all duration-200 lg:w-full",
                isActive
                  ? "bg-[#EF617D] text-white shadow-[0_8px_24px_rgba(239,97,125,0.20)]"
                  : "border border-[#F6D7CC] bg-white text-[#666666] hover:border-[#F68FA4] hover:bg-[#FFF8F5] hover:text-[#1E1E1E]",
              ].join(" ")}
            >
              <span
                className={[
                  "flex h-8 w-8 items-center justify-center rounded-lg",
                  isActive
                    ? "bg-white/15 text-white"
                    : "bg-[#FFF8F5] text-[#EF617D]",
                ].join(" ")}
              >
                <Icon icon={category.icon} width={19} height={19} />
              </span>
              <span>{category.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
