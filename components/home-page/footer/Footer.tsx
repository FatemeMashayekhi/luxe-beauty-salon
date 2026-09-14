import { Icon } from "@iconify/react";
import logo from "@/public/images/eNAMAD/ENAMADpng.parspng.com_.png";
import Image from "next/image";
import Link from "next/link";
import FooterHeading from "./FooterHeading";
import ContactItem from "./ContactItem";

const services = ["ناخن", "مو", "مژه", "ابرو", "فیشیال", "میکاپ"];

const quickLinks = [
  { label: "خانه", href: "/" },
  { label: "فروشگاه", href: "/" },
  { label: "سؤالات متداول", href: "/" },
  { label: "درباره ما", href: "/" },
];

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative w-full overflow-hidden border-t-4 border-[#E85372] bg-[#1E1E1E] text-white"
    >
      <div className="pointer-events-none absolute -right-32 top-20 hidden h-72 w-72 rounded-full bg-[#E85372]/5 blur-3xl lg:block" />
      <div className="pointer-events-none absolute -left-32 bottom-0 hidden h-72 w-72 rounded-full bg-[#F6D7CC]/5 blur-3xl lg:block" />

      <div className="relative mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-7 text-center lg:mb-10 lg:flex lg:items-center lg:text-right">
          <div>
            <h2 className="text-xl font-bold lg:text-3xl">سالن زیبایی لوکس</h2>

            <p className="mt-2 hidden max-w-lg text-sm leading-7 text-[#BDAEAA] lg:block">
              تجربه‌ای متفاوت از زیبایی و آرامش با خدمات تخصصی و حرفه‌ای
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.9fr] lg:gap-12 lg:border-y lg:border-white/10 lg:py-10">
          <section>
            <FooterHeading>اطلاعات تماس</FooterHeading>
            <div className="mt-5 flex flex-col gap-4">
              <ContactItem icon="uil:phone">
                <a
                  href="tel:+989123456789"
                  dir="ltr"
                  className="transition hover:text-white"
                >
                  0912-3456-789
                </a>
              </ContactItem>
              <ContactItem icon="iconoir:instagram">
                <a
                  href="https://instagram.com/luxe-salon"
                  target="_blank"
                  rel="noreferrer"
                  dir="ltr"
                  className="transition hover:text-white"
                >
                  @luxe-salon
                </a>
              </ContactItem>
              <ContactItem icon="boxicons:location">
                <span className="leading-7">
                  تهران، خیابان ولیعصر، پلاک ۱۲۳
                </span>
              </ContactItem>
            </div>
          </section>

          <section className="hidden lg:block">
            <FooterHeading>خدمات ما</FooterHeading>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="group flex cursor-default items-center gap-2 text-sm text-[#BDAEAA] transition hover:translate-x-[-3px] hover:text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E85372] transition group-hover:scale-150" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="hidden lg:block">
            <FooterHeading>دسترسی سریع</FooterHeading>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-[#BDAEAA] transition hover:translate-x-[-3px] hover:text-white"
                  >
                    <Icon
                      icon="solar:alt-arrow-left-linear"
                      width={15}
                      className="text-[#E85372] opacity-0 transition group-hover:opacity-100"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="hidden lg:block">
            <FooterHeading>اعتماد شما</FooterHeading>
            <div className="mt-5">
              <div className="inline-flex flex-col items-center rounded-2xl border border-white/10 bg-white p-4 shadow-xl transition hover:-translate-y-1">
                <Image
                  src={logo}
                  alt="نماد اعتماد الکترونیکی"
                  width={130}
                  className="h-auto object-contain"
                />
              </div>
              <p className="mt-3 text-xs leading-6 text-[#8F8280]">
                خرید و رزرو امن با نماد اعتماد الکترونیکی
              </p>
            </div>
          </section>
        </div>

        <div className="mt-7 flex justify-center lg:hidden">
          <div className="flex w-full items-center justify-center rounded-2xl bg-white p-3">
            <Image
              src={logo}
              alt="نماد اعتماد الکترونیکی"
              width={140}
              className="h-auto object-contain"
            />
          </div>
        </div>

        <div className="mt-7 border-t border-white/10 pt-5 text-center lg:mt-0 lg:border-0 lg:pt-7">
          <p className="text-xs leading-6 text-[#7F7572] lg:text-sm">
            © {new Date().getFullYear()} تمام حقوق مادی و معنوی این وب‌سایت برای
            سالن زیبایی لوکس محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
