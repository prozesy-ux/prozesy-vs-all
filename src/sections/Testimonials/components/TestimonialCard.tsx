export type TestimonialCardProps = {
  variant: string;
  testimonials?: Array<{
    quote: string;
    authorImage: string;
    authorName: string;
    authorTitle: string;
  }>;
  backgroundImage?: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  if (props.variant === "hero") {
    const testimonial = props.testimonials?.[0];
    return (
      <div role="list" className="box-border caret-transparent">
        <div
          role="listitem"
          className="relative items-start box-border caret-transparent flex-col justify-start"
        >
          <img
            src={props.backgroundImage}
            alt=""
            className="aspect-square box-border caret-transparent inline-block max-w-full object-cover align-middle w-full rounded-2xl"
          />
          <div className="absolute items-start box-border caret-transparent gap-x-6 flex flex-col justify-start gap-y-6 z-[2] p-8 left-[0%] top-[0%]">
            <p className="text-zinc-50 text-2xl box-border caret-transparent flow-root tracking-[0.36px] leading-[28.8px] min-h-[auto] min-w-[auto] overflow-hidden md:text-[40px] md:leading-[48px]">
              {testimonial?.quote}
            </p>
            <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] gap-y-2">
              <img
                src={testimonial?.authorImage}
                alt=""
                className="aspect-square box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] object-cover align-middle w-[52px] rounded-[100%]"
              />
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <p className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.36px] leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                  {testimonial?.authorName}
                </p>
                <p className="text-neutral-300 text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] md:text-base md:leading-6">
                  {testimonial?.authorTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      role="list"
      className="box-border caret-transparent gap-x-8 flex flex-col h-full justify-between gap-y-8 md:gap-x-14 md:gap-y-14"
    >
      {props.testimonials?.map((testimonial, index) => (
        <div
          key={index}
          role="listitem"
          className="items-start box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4"
        >
          <p className="text-neutral-950 text-base box-border caret-transparent flow-root tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] overflow-hidden md:text-lg md:leading-[27px]">
            {testimonial.quote}
          </p>
          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] gap-y-2">
            <img
              src={testimonial.authorImage}
              alt=""
              className="aspect-square box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] object-cover align-middle w-10 rounded-[100%]"
            />
            <div className="items-end box-border caret-transparent gap-x-2 flex flex-wrap justify-start min-h-[auto] min-w-[auto] gap-y-2">
              <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
                {testimonial.authorName}
              </p>
              <p className="text-neutral-600 text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] min-h-[auto] min-w-[auto] md:text-base md:leading-6">
                {testimonial.authorTitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
