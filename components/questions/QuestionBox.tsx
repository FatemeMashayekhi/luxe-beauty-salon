"use client";
import { categories, CategoryId, faqItems } from "@/data/faqItems";
import { Icon } from "@iconify/react";
import { useState } from "react";
import QuestionCategories from "./QuestionCategories";

export default function QuestionBox() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [openId, setOpenId] = useState<number | null>(1);
  const filteredFAQs =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleFAQ = (id: number) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-14">
        <QuestionCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setOpenId={setOpenId}
          categories={categories}
        />

        <div>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <span className="text-xs font-medium text-[#9A9A9A]">
                {filteredFAQs.length} سوال
              </span>
              <h2 className="mt-1 text-2xl font-bold text-[#1E1E1E] sm:text-3xl">
                پاسخ سوالات شما
              </h2>
            </div>
            <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-[#FCEAE4] text-[#EF617D] sm:flex">
              <Icon
                icon="solar:chat-round-line-linear"
                width={22}
                height={22}
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.025)]">
            {filteredFAQs.map((faq, index) => {
              const isOpen = openId === faq.id;
              const isLast = index === filteredFAQs.length - 1;
              return (
                <div
                  key={faq.id}
                  className={!isLast ? "border-b border-[#E8E8E8]" : ""}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-5 px-5 py-5 text-right transition-colors duration-200 hover:bg-[#FFF8F5] sm:px-7 sm:py-6"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <span
                        className={[
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-200",
                          isOpen
                            ? "bg-[#EF617D] text-white"
                            : "bg-[#FCEAE4] text-[#EF617D]",
                        ].join(" ")}
                      >
                        {String(faq.id).padStart(2, "0")}
                      </span>
                      <span
                        className={[
                          "text-sm font-semibold leading-7 transition-colors sm:text-base",
                          isOpen
                            ? "text-[#E85372]"
                            : "text-[#1E1E1E] group-hover:text-[#E85372]",
                        ].join(" ")}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={[
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                        isOpen
                          ? "rotate-180 border-[#EF617D] bg-[#EF617D] text-white"
                          : "border-[#F6D7CC] bg-white text-[#EF617D]",
                      ].join(" ")}
                    >
                      <Icon
                        icon={
                          isOpen ? "solar:minus-linear" : "solar:add-linear"
                        }
                        width={18}
                        height={18}
                      />
                    </span>
                  </button>
                  <div
                    className={[
                      "grid transition-all duration-300",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-[#FFF1EC] bg-[#FFF8F5] px-5 py-5 pr-18 sm:px-7 sm:py-6 sm:pr-23">
                        <p className="text-sm leading-8 text-[#666666]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
