"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { JSX } from "react";
import { NavbarItems } from "./MobileFooter";
import { Icon } from "@iconify/react";

export const MobileFooterNavChild = ({ title, icon, url }: NavbarItems) => {
  const pathname = usePathname();

  const isActive = url === "/" ? pathname === "/" : pathname.startsWith(url);

  const icons: Record<string, JSX.Element> = {
    Home: (
      <Icon
        icon="material-symbols:home-outline-rounded"
        width="21"
        height="21"
      />
    ),
    Profile: <Icon icon="tdesign:user" width="21" height="21" />,
    Services: <Icon icon="solar:calendar-linear" width="21" height="21" />,
  };

  return (
    <Link
      href={url}
      className={clsx(
        "flex min-w-[76px] flex-col items-center justify-center rounded-xl px-4 py-1.5 transition-all duration-200",
        isActive
          ? "bg-[#FFF1F4] text-[#EF617D]"
          : "text-[#777] hover:bg-[#FAFAFA]",
      )}
    >
      <div
        className={clsx(
          "transition-transform duration-200",
          isActive && "scale-105",
        )}
      >
        {icons[icon]}
      </div>

      <p
        className={clsx(
          "mt-1 text-[11px] transition-colors",
          isActive ? "font-semibold text-[#EF617D]" : "font-medium text-[#777]",
        )}
      >
        {title}
      </p>
    </Link>
  );
};
