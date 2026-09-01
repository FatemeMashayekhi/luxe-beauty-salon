"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function HamburgerMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <div>
          <Icon
            icon="solar:hamburger-menu-linear"
            width="24"
            height="24"
            style={{ color: "#000000" }}
            className={`transition-transform duration-200 lg:hidden ${
              open ? "rotate-90" : "rotate-0"
            }`}
          />
          <div className="hidden lg:flex lg:gap-x-1 lg:items-center cursor-pointer">
            <Icon
              icon="iconamoon:arrow-down-2"
              width="24"
              height="24"
              style={{ color: "#586070" }}
              className={`transition-transform duration-200 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal forceMount>
        <AnimatePresence>
          {open && (
            <DropdownMenu.Content sideOffset={8} align="end" asChild>
              <motion.div
                key="dropdown"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="lg:text-base p-4 bg-white text-paimonak-text border border-neutral-300/35 rounded-2xl text-sm origin-top-right flex flex-col gap-y-2 text-center"
              >
                <DropdownMenu.Item
                  onClick={() => router.push("/")}
                  className="rounded-2xl cursor-pointer outline-none"
                >
                  خانه
                </DropdownMenu.Item>

                <DropdownMenu.Separator className="h-px bg-neutral-200 my-1" />

                <DropdownMenu.Item
                  onClick={() => {
                    document
                      .getElementById("intro")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setOpen(false);
                  }}
                  className="rounded-2xl cursor-pointer outline-none"
                >
                  درباره ما
                </DropdownMenu.Item>

                <DropdownMenu.Separator className="h-px bg-neutral-200 my-1" />

                <DropdownMenu.Item
                  onClick={() => {
                    document
                      .getElementById("intro")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setOpen(false);
                  }}
                  className="rounded-2xl cursor-pointer outline-none"
                >
                  سوالات متداول
                </DropdownMenu.Item>

                <DropdownMenu.Separator className="h-px bg-neutral-200 my-1" />

                <DropdownMenu.Item
                  onClick={() => {
                    document
                      .getElementById("products")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setOpen(false);
                  }}
                  className="rounded-2xl cursor-pointer outline-none"
                >
                  گالری
                </DropdownMenu.Item>
              </motion.div>
            </DropdownMenu.Content>
          )}
        </AnimatePresence>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
