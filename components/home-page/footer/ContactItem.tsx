import { Icon } from "@iconify/react";
import React from "react";

export default function ContactItem({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E85372]/10 text-[#E85372] transition group-hover:bg-[#E85372] group-hover:text-white">
        <Icon icon={icon} width={20} height={20} />
      </span>
      <div className="pt-2 text-sm text-[#F6D7CC]">{children}</div>
    </div>
  );
}
