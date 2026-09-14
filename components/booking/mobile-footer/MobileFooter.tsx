import { MobileFooterNavChild } from "./MobileFooterNavChild";

export interface NavbarItems {
  title: string;
  icon: string;
  url: string;
}

const navbarItems: NavbarItems[] = [
  {
    title: "خانه",
    url: "/",
    icon: "Home",
  },
  {
    title: "خدمات",
    url: "/booking",
    icon: "Services",
  },
  {
    title: "پروفایل",
    url: "/profile",
    icon: "Profile",
  },
];

export const MobileFooter = () => {
  return (
    <footer className="sticky bottom-0 z-40 border-t border-[#F1E5E8] bg-white lg:hidden">
      <nav
        dir="rtl"
        className="mx-auto flex max-w-md items-center justify-around px-6 py-2"
      >
        {navbarItems.map(({ title, icon, url }) => (
          <MobileFooterNavChild
            key={title}
            title={title}
            icon={icon}
            url={url}
          />
        ))}
      </nav>
    </footer>
  );
};
