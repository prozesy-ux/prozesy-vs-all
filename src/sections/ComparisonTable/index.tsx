import { SectionHeader } from "@/components/SectionHeader";
import { TableHeader } from "@/sections/ComparisonTable/components/TableHeader";
import { TableRow } from "@/sections/ComparisonTable/components/TableRow";

export const ComparisonTable = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent py-[60px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-10 flex flex-col gap-y-10">
              <SectionHeader
                badge="Why Choose Us"
                title={
                  <>
                    <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Design Monks’s
                    </span>{" "}
                    Alternative?
                    <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                    <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Think
                    </span>{" "}
                    One More Time!
                  </>
                }
                variant="items-center text-center"
              />
              <div className="box-border caret-transparent gap-x-2.5 flex flex-col min-h-[auto] min-w-[auto] gap-y-2.5 overflow-auto md:gap-x-10 md:gap-y-10 md:overflow-visible">
                <TableHeader />
                <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-y-8 mx-5 md:gap-y-14 md:mx-0">
                  <TableRow
                    rowVariant="bg-neutral-950 bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] py-[30px] rounded-[32px]"
                    iconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-9.svg"
                    iconVariant="bg-white/20"
                    titleContainerVariant="text-zinc-50"
                    title="Design Monks"
                    descriptionContainerVariant="text-neutral-300"
                    description="Expert-driven & committed to higher quality. Get effective result & full support without hiring in-house employees"
                    column1Type="check-container"
                    column1IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-10.svg"
                    column2Type="check-container"
                    column2IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-10.svg"
                    column3Type="check-container"
                    column3IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-10.svg"
                    column4Type="check-container"
                    column4IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-10.svg"
                    column5Type="check-container"
                    column5IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-10.svg"
                  />
                  <TableRow
                    rowVariant="border-b-neutral-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 pb-6 border-b-2"
                    iconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-11.svg"
                    iconVariant="bg-blue-600/20"
                    titleContainerVariant="text-neutral-950"
                    title="In House Team"
                    descriptionContainerVariant="hidden md:block"
                    description="A full-time designer may ensure brand consistency, but there’s a risk of limited expertise even though you pay regularly"
                    column1Type="img"
                    column1IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-12.svg"
                    column2Type="img"
                    column2IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-12.svg"
                    column3Type="img"
                    column3IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-12.svg"
                    column4Type="check-container"
                    column4IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-10.svg"
                    column5Type="img"
                    column5IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-12.svg"
                  />
                  <TableRow
                    rowVariant="items-center border-b-neutral-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 pb-6 border-b-2"
                    iconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-13.svg"
                    iconVariant="bg-blue-600/20"
                    titleContainerVariant="text-neutral-950"
                    title="Creative Agencies"
                    descriptionContainerVariant="hidden md:block"
                    description="Agencies offer structured processes but mostly with high costs, long timelines, and less flexibility for your projects"
                    column1Type="image"
                    column1IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-12.svg"
                    column2Type="image"
                    column2IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-12.svg"
                    column3Type="check-container"
                    column3IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-10.svg"
                    column4Type="check-container"
                    column4IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-10.svg"
                    column5Type="image"
                    column5IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-12.svg"
                  />
                  <TableRow
                    rowVariant="border-b-neutral-100 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 pb-6 border-b-2"
                    iconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-14.svg"
                    iconVariant="bg-blue-600/20"
                    titleContainerVariant="text-neutral-950"
                    title="Freelancers"
                    descriptionContainerVariant="hidden md:block"
                    description="Freelancers may provide affordable design services but they mostly lack consistency, reliability, and collaboration"
                    column1Type="image"
                    column1IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-12.svg"
                    column2Type="check-container"
                    column2IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-10.svg"
                    column3Type="image"
                    column3IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-12.svg"
                    column4Type="image"
                    column4IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-12.svg"
                    column5Type="check-container"
                    column5IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-10.svg"
                  />
                  <TableRow
                    rowVariant="pb-6"
                    iconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-15.svg"
                    iconVariant="bg-blue-600/30"
                    titleContainerVariant="text-neutral-950"
                    title="Self-Service Tools"
                    descriptionContainerVariant="hidden md:block"
                    description="DIY tools like website builders are budget-friendly, but you can’t expect strategic thinking & originality"
                    column1Type="default"
                    column1IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-12.svg"
                    column2Type="default"
                    column2IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-12.svg"
                    column3Type="check-container"
                    column3IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-10.svg"
                    column4Type="check-container"
                    column4IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-10.svg"
                    column5Type="default"
                    column5IconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-12.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
