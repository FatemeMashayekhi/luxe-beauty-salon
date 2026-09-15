import { Icon } from "@iconify/react";

interface ProfileRowProps {
  icon: string;
  title: string;
  value: string;
}

export default function ProfileRow({ icon, title, value }: ProfileRowProps) {
  return (
    <div className="flex items-center gap-3 py-4">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF3F5] text-[#EF617D]">
        <Icon icon={icon} width="18" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs text-[#999]">{title}</p>
        <p className="mt-1 truncate text-sm font-medium text-[#444]">{value}</p>
      </div>

      <Icon
        icon="solar:alt-arrow-left-linear"
        width="17"
        className="text-[#C5C5C5]"
      />
    </div>
  );
}
