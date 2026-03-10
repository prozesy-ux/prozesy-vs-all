export type AccordionItemProps = {
  title: string;
  description: string;
  iconUrl: string;
};

export const AccordionItem = (props: AccordionItemProps) => {
  return (
    <div className="bg-[linear-gradient(rgb(255,255,255)_40%,rgb(125,64,255))] box-border caret-transparent min-h-[auto] min-w-[auto] w-full pb-px px-px rounded-[20px]">
      <div className="bg-zinc-50 box-border caret-transparent h-full w-full px-5 py-7 rounded-[20px] md:p-6">
        <div className="items-center box-border caret-transparent gap-x-6 flex justify-between gap-y-6 overflow-hidden md:gap-x-[normal] md:gap-y-[normal]">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
            <h3 className="text-neutral-950 text-base font-bold box-border caret-transparent leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
              {props.title}
            </h3>
          </div>
          <div className="items-center box-border caret-transparent flex h-[30px] justify-center max-w-[30px] min-h-[auto] min-w-[auto] w-full border border-violet-800 rounded-[100%] border-solid md:h-10 md:max-w-10">
            <div className="text-violet-800 items-center box-border caret-transparent flex h-4 justify-center min-h-[auto] min-w-[auto] w-[22px] md:h-6 md:w-6 before:accent-auto before:caret-transparent before:text-violet-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-violet-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght">
              <img
                src={props.iconUrl}
                alt="Icon"
                className="box-border caret-transparent block h-[25px] w-6"
              />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent h-0 max-w-[942px] overflow-hidden">
          <div className="box-border caret-transparent h-4"></div>
          <div className="text-neutral-600 text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6 before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[21px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght before:md:text-base before:md:leading-6 after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght after:md:text-base after:md:leading-6">
            <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
