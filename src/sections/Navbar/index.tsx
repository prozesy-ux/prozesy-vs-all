import { NavbarItem } from "@/sections/Navbar/components/NavbarItem";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { CTAButton } from "@/sections/Navbar/components/CTAButton";
import { MobileMenu } from "@/sections/Navbar/components/MobileMenu";

export const Navbar = () => {
  return (
    <div className="fixed box-border caret-transparent max-w-none z-[99999] mx-auto pb-6 bottom-[0%] inset-x-[0%] md:max-w-[713px]">
      <nav className="relative box-border caret-transparent grid grid-cols-[1fr_1fr_92px_1fr_1fr] z-[2] pt-4 pb-[22px] px-0 rounded-2xl md:grid-cols-[1fr_1fr_auto_1fr_1fr] md:p-2">
        <img
          src="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-1.svg"
          alt="Icon"
          className="absolute box-border caret-transparent block h-[92px] pointer-events-none translate-x-[-50.0%] w-screen left-2/4 top-[0%] md:hidden md:transform-none md:w-[375px]"
        />
        <NavbarItem
          href="https://www.designmonks.co/projects"
          iconSrc="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-2.svg"
          label="Projects"
        />
        <NavbarItem
          href="https://www.designmonks.co/services"
          iconSrc="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-3.svg"
          label="Services"
          linkVariant="md:hidden md:min-h-0 md:min-w-0"
          textVariant="md:inline md:min-h-0 md:min-w-0"
        />
        <DesktopMenu />
        <CTAButton />
        <NavbarItem
          href="https://www.designmonks.co/pricing"
          iconSrc="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-7.svg"
          label="Pricing"
        />
        <MobileMenu />
        <div className="absolute bg-neutral-950 shadow-[rgba(48,255,151,0.4)_0px_3px_4px_0px_inset] box-border caret-transparent pointer-events-none z-[-1] rounded-2xl inset-[0%]"></div>
      </nav>
    </div>
  );
};
