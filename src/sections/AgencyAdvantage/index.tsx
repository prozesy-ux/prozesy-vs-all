import { SectionHeader } from "@/components/SectionHeader";
import { FeatureCard } from "@/sections/AgencyAdvantage/components/FeatureCard";

export const AgencyAdvantage = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
              <SectionHeader
                badge="Agency Advantage"
                title={
                  <>
                    What Sets Design Monks
                    <br />
                    <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Apart from Other Agencies?
                    </em>
                  </>
                }
                variant="items-center text-center"
              />
              <div className="relative box-border caret-transparent gap-x-6 flex flex-col min-h-[auto] min-w-[auto] gap-y-6">
                <FeatureCard
                  imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c7befd119e14b64d011f8e_designing-accordion-panels-with-iconbased-toggles-generative-ai (1).avif"
                  imageAlt=""
                  number="01"
                  title="Agile & Flexible Approach"
                  description="Agencies have a team of professionals, ensuring that work continues even if one person is unavailable. They can handle large or urgent projects by distributing tasks among team members."
                />
                <FeatureCard
                  imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c7bf207ee80cba986c5793_diverse-group-young-people-working-project-together-office-setting (1).avif"
                  imageAlt=""
                  number="02"
                  title="Creative Excellence"
                  description="Agencies typically have specialists in different areas (UI/UX, branding, development, marketing, etc.), providing a more comprehensive solution. Freelancers may excel in one area but lack expertise in others, requiring additional hires."
                />
                <FeatureCard
                  imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c7bf5e4c0ae0a617321a5a_image (3).avif"
                  imageAlt=""
                  number="03"
                  title="Personalized Collaboration"
                  description="Agencies follow standardized workflows, quality checks, and client approval processes, ensuring consistent results. Freelancers may have varying work styles, and quality can sometimes be inconsistent."
                />
                <FeatureCard
                  imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c7bfa166c9f57c06ec1cba_tech-professionals-innovating-digital-workspaces (1).avif"
                  imageAlt=""
                  number="04"
                  title="Quality Without Overhead"
                  description="Agencies use project management tools, dedicated account managers, and regular updates to keep clients informed. A single freelancer may struggle to balance multiple clients, leading to delays in communication."
                />
                <FeatureCard
                  imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c7bfda21cb11c90e8bf4df_smiling-customer-service-representative (2).avif"
                  imageAlt=""
                  number="05"
                  title="Efficiency & Speed"
                  description="Companies prefer ongoing support, updates, and maintenance, which agencies are better equipped to handle. A freelancer might not always be available for long-term commitments."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
