import { Icon } from "@iconify/react";

interface ProfileActionProps {
  icon: string;
  title: string;
}

export default function ProfileAction({ icon, title }: ProfileActionProps) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 border-b border-[#F3F0F0] px-4 py-4 text-right last:border-b-0 hover:bg-[#FFF9FA]"
    >
      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#FAF7F8] text-[#666]">
        <Icon icon={icon} width="18" />
      </div>

      <span className="flex-1 text-sm font-medium text-[#444]">{title}</span>

      <Icon
        icon="solar:alt-arrow-left-linear"
        width="17"
        className="text-[#C5C5C5]"
      />
    </button>
  );
}
