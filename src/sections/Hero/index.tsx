import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { LogoCarousel } from "@/sections/Hero/components/LogoCarousel";

export const Hero = () => {
  return (
    <section className="relative bg-neutral-950/90 box-border caret-transparent overflow-hidden rounded-b-[32px]">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent pb-[60px] px-5 md:pb-[100px] md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-[60px] flex flex-col gap-y-[60px] md:gap-x-[100px] md:gap-y-[100px]">
              <HeroContent />
              <LogoCarousel />
            </div>
          </div>
        </div>
        <video
          loop=""
          muted=""
          preload="auto"
          playsinline="true"
          className="absolute box-border caret-transparent block h-full object-cover object-[50%_0%] pointer-events-none w-full z-[-1] inset-[0%]"
        >
          <source
            src="https://github.com/designmonks/webvideos/raw/main/Abstract_objects_(dark_theme).mp4"
            type="video/mp4"
            className="relative text-black text-base box-border caret-transparent block h-full leading-[normal] pointer-events-auto w-full font-times_new_roman"
          />
        </video>
        <div className="absolute bg-[linear-gradient(rgba(0,0,0,0),rgba(2,2,2,0.98)_23%,rgba(10,10,10,0.9))] box-border caret-transparent h-[250px] z-[-1] bottom-[0%] inset-x-[0%] md:h-[350px]"></div>
      </div>
      <img
        src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67fbb9e09e1ee391a7f159d2_Group 2147223906.avif"
        alt=""
        className="absolute box-border caret-transparent block max-w-44 pointer-events-none align-middle z-0 right-[0%] top-[0%] md:max-w-full"
      />
      <img
        src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/681e0d5850bfc947562666d6_Group 2147225317 (1).avif"
        alt=""
        className="absolute box-border caret-transparent hidden max-w-full pointer-events-none align-middle z-[4] left-[0%] top-32 md:block"
      />
      <div className="absolute bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3))] box-border caret-transparent h-56 pointer-events-none z-[2] bottom-[0%] inset-x-[0%] md:h-80"></div>
    </section>
  );
};
