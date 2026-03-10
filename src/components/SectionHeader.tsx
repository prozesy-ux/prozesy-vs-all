export type SectionHeaderProps = {
  badge: string;
  title: React.ReactNode;
  description?: string;
  variant: string;
  titleClassName?: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div
      className={`box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 ${props.variant}`}
    >
      <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
        <div className="text-green-700 box-border caret-transparent min-h-[auto] min-w-[auto] border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
          <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
            {props.badge}
          </div>
        </div>
      </div>
      {props.titleClassName ? (
        <div className="text-neutral-950 box-border caret-transparent min-h-[auto] min-w-[auto]">
          <h2 className={props.titleClassName}>{props.title}</h2>
        </div>
      ) : (
        <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
          {props.title}
        </h2>
      )}
      {props.description && (
        <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
          {props.description}
        </p>
      )}
    </div>
  );
};
