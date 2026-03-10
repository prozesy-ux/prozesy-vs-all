import { SectionHeader } from "@/components/SectionHeader";
import { FAQItem } from "@/sections/FAQ/components/FAQItem";

export const FAQ = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 md:gap-x-14 md:gap-y-14">
              <SectionHeader
                badge="Frequently Asked Questions"
                title={
                  <>
                    Your Questions
                    <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                    <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Answered!
                    </span>
                  </>
                }
                variant="items-center text-center"
              />
              <div className="box-border caret-transparent flex flex-col max-w-[1038px] min-h-[auto] min-w-[auto] w-full">
                <FAQItem
                  question="Why choose Design Monks over a traditional agency?"
                  answer="Choose Design Monks over a traditional agency because our LLC is faster, more flexible, and cost-effective compared to most agencies. You still get expert design work without the long timelines or high costs."
                  iconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-16.svg"
                  iconAlt="Icon"
                  additionalText="Yes, Design Monks is a start-up-friendly agency. We understand the unique challenges start-ups face and offer affordable and flexible design solutions that fit your budget and needs. Our team is committed to helping your start-up build a strong brand and user-friendly digital presence from the ground up."
                />
                <FAQItem
                  question="Are Design Monks services cheaper than hiring an agency?"
                  answer="Yes, you can save up to 30% compared to traditional agencies. We deliver high-quality design without the extra overhead."
                  iconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-16.svg"
                  iconAlt="Icon"
                  additionalText="Yes, Design Monks is a start-up-friendly agency. We understand the unique challenges start-ups face and offer affordable and flexible design solutions that fit your budget and needs. Our team is committed to helping your start-up build a strong brand and user-friendly digital presence from the ground up."
                />
                <FAQItem
                  question="Can Design Monks provide the same expertise as a design agency?"
                  answer="Yes, our team includes specialists in UI/UX, branding, marketing, and more. You get the full range of skills that an agency offers, with some extra support."
                />
                <FAQItem
                  question="How fast is Design Monks compared to an agency?"
                  answer="We deliver projects about 70% faster than most agencies. This means your ideas reach the market quicker without compromising quality."
                />
                <FAQItem
                  question="Does Design Monks offer personalized collaboration like an agency?"
                  answer="Yes, we work closely with your team and provide regular updates. Our approach ensures your feedback is integrated at every step."
                  iconUrl="https://c.animaapp.com/mmk4996iJ63Zx6/assets/icon-16.svg"
                  iconAlt="Icon"
                  additionalText="Yes, Design Monks is a start-up-friendly agency. We understand the unique challenges start-ups face and offer affordable and flexible design solutions that fit your budget and needs. Our team is committed to helping your start-up build a strong brand and user-friendly digital presence from the ground up."
                />
                <FAQItem
                  question="Do I get ongoing support with Design Monks like with an agency?"
                  answer="Yes, we provide continuous updates, maintenance, and long-term collaboration. You won’t have to worry about support gaps like with some agencies."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
