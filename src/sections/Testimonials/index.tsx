import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCard } from "@/sections/Testimonials/components/TestimonialCard";

export const Testimonials = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
              <SectionHeader
                badge="Client Stories"
                title={
                  <>
                    Success{" "}
                    <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Stories
                    </em>
                    <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                    That{" "}
                    <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Inspire Us
                    </em>
                  </>
                }
                variant=""
              />
              <div className="items-stretch box-border caret-transparent gap-x-8 flex flex-col justify-between min-h-[auto] min-w-[auto] gap-y-8 md:flex-row">
                <div className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] md:max-w-[600px]">
                  <TestimonialCard
                    variant="hero"
                    backgroundImage="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/691a9f71179cab83581c0b52_Frame 1618873832.avif"
                    testimonials={[
                      {
                        quote:
                          "Had an amazing experience with Design Monks. Their talented team understood my vision and turned it into stunning visuals,with their impressive attention to detail skills. I highly recommend their high-quality design services.",
                        authorImage:
                          "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bec308477c331aaafb599_67b790a2e3964135b80d7baa_Klub.avif",
                        authorName: "Neil Saidi",
                        authorTitle: "Founder @ LeKlub",
                      },
                    ]}
                  />
                </div>
                <div className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] md:max-w-[500px]">
                  <TestimonialCard
                    variant=""
                    testimonials={[
                      {
                        quote:
                          "I’ve worked with Design Monks on three websites, and they’ve been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth. They quickly act on feedback and deliver exactly what I need. For me, they’re a 10/10 partner for all things design and development.",
                        authorImage:
                          "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db86d30e6ba269e3a20e68_Client_Austin.avif",
                        authorName: "Austin",
                        authorTitle: "CEO @ Clarity LLC",
                      },
                      {
                        quote:
                          "Working with Design Monks on our ESDIAC app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered clean, consistent, high-quality work. We’re proud of the results and happy to continue our long-term partnership with them.",
                        authorImage:
                          "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db83d0788461a30fddc0f8_Client_Sofia Gouveia.avif",
                        authorName: "Sofia Gouveia",
                        authorTitle: "Design Director @ Esdiac",
                      },
                      {
                        quote:
                          "Working with Design Monks transformed our workflow. Their adherence to guidelines increased efficiency and contributed to business growth. We can now focus more on strategic initiatives and client engagement, thanks to saved hours",
                        authorImage:
                          "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/686646bacaef729d3510e818_Client_Plenty Pay.avif",
                        authorName: "Kunle Adetayo",
                        authorTitle: "CEO & Founder @ Plentypay",
                      },
                    ]}
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
