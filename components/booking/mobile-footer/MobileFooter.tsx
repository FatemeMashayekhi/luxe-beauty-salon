import { MobileFooterNavChild } from "./MobileFooterNavChild";

export interface NavbarItems {
  title: string;
  icon: string;
  url: string;
}
const navbarItems: NavbarItems[] = [
  {
    title: "خانه",
    url: "/home",
    icon: "Home",
  },
  {
    title: "پروفایل",
    url: "/profile",
    icon: "Profile",
  },
  {
    title: "خدمات",
    url: "/booking",
    icon: "Services",
  },
];
export const MobileFooter = () => {
  return (
    <footer
      className={
        "lg:hidden px-4 py-6 sticky bottom-0 z-40 bg-white shadow-inner"
      }
    >
      <nav dir={"rtl"} className={"flex px-6 items-start justify-between"}>
        {navbarItems.map(({ title, icon, url }) => (
          <MobileFooterNavChild
            title={title}
            icon={icon}
            url={url}
            key={title}
          />
        ))}
      </nav>
    </footer>
  );
};
