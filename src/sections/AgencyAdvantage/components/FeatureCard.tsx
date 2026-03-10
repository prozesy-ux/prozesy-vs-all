export type FeatureCardProps = {
  imageUrl: string;
  imageAlt: string;
  number: string;
  title: string;
  description: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className="static items-center bg-white shadow-[rgba(15,23,42,0.08)_0px_4px_16px_-2px] box-border caret-transparent gap-x-0 flex flex-col auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] justify-start min-h-[auto] min-w-[auto] gap-y-0 overflow-hidden rounded-2xl top-12 md:sticky md:gap-x-20 md:flex-row md:gap-y-20 md:rounded-3xl">
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] object-cover -order-last align-middle w-full md:order-none md:w-[calc(50%_-_80px)]"
      />
      <div className="box-border caret-transparent gap-x-6 flex flex-col min-h-[auto] min-w-[auto] gap-y-6 pt-8 pb-4 px-4 md:gap-x-8 md:gap-y-8 md:pl-0 md:pr-20 md:py-0">
        <p className="text-xl font-bold box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
          {props.number}
        </p>
        <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4">
          <h3 className="text-neutral-950 text-xl font-bold box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-[32px] md:leading-[38.4px]">
            {props.title}
          </h3>
          <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
