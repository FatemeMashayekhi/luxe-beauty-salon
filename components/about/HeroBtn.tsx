"use client";
import { motion } from "framer-motion";

export default function HeroBtn() {
  return (
    <motion.a
      href="#story"
      onClick={(e) => {
        e.preventDefault();

        document.getElementById("story")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
      className="inline-flex h-12 items-center justify-center rounded-xl border border-neutral-200 bg-white px-7 font-semibold text-neutral-700 hover:border-[#EF617D]/30 hover:text-[#EF617D]"
    >
      آشنایی بیشتر
    </motion.a>
  );
}
