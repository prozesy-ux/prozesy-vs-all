import { SectionHeader } from "@/components/SectionHeader";
import { AccordionItem } from "@/sections/BuiltForYou/components/AccordionItem";

export const BuiltForYou = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
              <SectionHeader
                badge="Built For You"
                title={
                  <>
                    <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Design Monks
                    </em>
                    Is Made For
                  </>
                }
                description="Your Design Monks team integrates seamlessly with yours to boost output, faster."
                variant=""
              />
              <div className="items-start box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-items-stretch min-h-[auto] min-w-[auto] gap-y-8 md:grid-cols-[1fr_1fr]">
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c79dd3b39d019fc506c6eb_smiling-customer-service-representative (1).avif"
                  alt=""
                  className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] object-cover -order-last align-middle w-full rounded-2xl md:order-none md:rounded-[32px]"
                />
                <div className="items-start box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-6 md:gap-y-6">
                  <AccordionItem
                    title="Creative Directors"
                    description="Redistribute your design team’s spinning plates, without compromising brand and creative potential. Add capacity with round-the-clock design support with on-brand and on-time results."
                    iconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-16.svg"
                  />
                  <AccordionItem
                    title="Performance Marketers"
                    description="Redistribute your design team’s spinning plates, without compromising brand and creative potential. Add capacity with round-the-clock design support with on-brand and on-time results."
                    iconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-16.svg"
                  />
                  <AccordionItem
                    title="DesignOps Managers"
                    description="Redistribute your design team’s spinning plates, without compromising brand and creative potential. Add capacity with round-the-clock design support with on-brand and on-time results."
                    iconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-16.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
