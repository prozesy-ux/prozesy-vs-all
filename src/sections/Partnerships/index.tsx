import { SectionHeader } from "@/components/SectionHeader";
import { StatsGrid } from "@/sections/Partnerships/components/StatsGrid";

export const Partnerships = () => {
  return (
    <section className="bg-indigo-50 box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
              <SectionHeader
                badge="Visionary Partnerships"
                title={
                  <>
                    <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Pioneering
                    </em>
                    {" impactful change with visionary "}
                    <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      partners
                    </em>
                    {" since 2021."}
                  </>
                }
                variant="items-center text-center"
              />
              <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] z-0">
                <StatsGrid />
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c799f85160c01eac21e467_lightning.avif"
                  alt=""
                  className="absolute box-border caret-transparent block max-w-full pointer-events-none align-middle w-[60px] z-[-1] -right-8 -bottom-10 md:right-[-70px] md:w-auto md:-bottom-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
