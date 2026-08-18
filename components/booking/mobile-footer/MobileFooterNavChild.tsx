"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { JSX } from "react";
import { NavbarItems } from "./MobileFooter";
import { Icon } from "@iconify/react";

export const MobileFooterNavChild = ({ title, icon, url }: NavbarItems) => {
  const pathname = usePathname();
  const iconColor = pathname.includes(url) ? "#EF617D" : "#1E1E1E";

  const icons: { [key: string]: JSX.Element } = {
    Home: (
      <Icon
        icon="material-symbols:home-outline"
        width="24"
        height="24"
        color={iconColor}
      />
    ),
    Profile: (
      <Icon icon="tdesign:user" width="24" height="24" color={iconColor} />
    ),
    Services: (
      <Icon
        icon="ic:outline-security"
        width="24"
        height="24"
        color={iconColor}
      />
    ),
  };

  return (
    <Link href={url} key={title}>
      <div className={"flex flex-col gap-y-2 justify-center items-center"}>
        {icons[icon]}
        <p
          className={clsx(
            pathname.includes(url) ? "text-[#EF617D]" : "text-[#1E1E1E]",
            "font-semibold text-xs",
          )}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};
