export default function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-5 w-1 rounded-full bg-[#E85372]" />
      <h3 className="text-base font-semibold lg:text-lg">{children}</h3>
    </div>
  );
}
