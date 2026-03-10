export type TableRowProps = {
  rowVariant: string;
  iconUrl: string;
  iconVariant: string;
  titleContainerVariant: string;
  title: string;
  descriptionContainerVariant: string;
  description: string;
  column1Type: string;
  column1IconUrl: string;
  column2Type: string;
  column2IconUrl: string;
  column3Type: string;
  column3IconUrl: string;
  column4Type: string;
  column4IconUrl: string;
  column5Type: string;
  column5IconUrl: string;
};

export const TableRow = (props: TableRowProps) => {
  return (
    <div
      className={`items-center box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] min-h-[auto] min-w-[884px] gap-y-0 w-full px-10 md:grid-cols-[3.5fr_1fr_1fr_1fr_1fr_1fr] md:min-w-[1249px] ${props.rowVariant}`}
    >
      <div className="items-center box-border caret-transparent gap-x-6 flex col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-start min-h-[auto] min-w-[auto] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
        <div
          className={`items-center box-border caret-transparent hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex ${props.iconVariant}`}
        >
          <img
            src={props.iconUrl}
            alt="Icon"
            className={`text-white box-border caret-transparent inline w-8 md:block ${props.iconVariant === "bg-white/20" ? "" : "invert-[1]"}`}
          />
        </div>
        <div
          className={`box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-y-2 ${props.titleContainerVariant}`}
        >
          <h3 className="text-xl font-bold box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
            {props.title}
          </h3>
          <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
            <div
              className={`box-border caret-transparent ${props.descriptionContainerVariant}`}
            >
              {props.descriptionContainerVariant === "text-neutral-300" ? (
                <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                  {props.description}
                </div>
              ) : props.descriptionContainerVariant === "hidden md:block" ? (
                <div className="box-border caret-transparent text-neutral-600">
                  <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                    {props.description}
                  </div>
                </div>
              ) : (
                <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                  {props.description}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
        {props.column1Type === "check-container" ? (
          <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
            <img
              src={props.column1IconUrl}
              alt="Icon"
              className="box-border caret-transparent block w-full"
            />
          </div>
        ) : (
          <img
            src={props.column1IconUrl}
            alt="Icon"
            className="text-red-500 box-border caret-transparent block w-6 md:w-10"
          />
        )}
      </div>
      <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
        {props.column2Type === "check-container" ? (
          <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
            <img
              src={props.column2IconUrl}
              alt="Icon"
              className="box-border caret-transparent block w-full"
            />
          </div>
        ) : (
          <img
            src={props.column2IconUrl}
            alt="Icon"
            className="text-red-500 box-border caret-transparent block w-6 md:w-10"
          />
        )}
      </div>
      <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
        {props.column3Type === "check-container" ? (
          <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
            <img
              src={props.column3IconUrl}
              alt="Icon"
              className="box-border caret-transparent block w-full"
            />
          </div>
        ) : (
          <img
            src={props.column3IconUrl}
            alt="Icon"
            className="text-red-500 box-border caret-transparent block w-6 md:w-10"
          />
        )}
      </div>
      <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
        {props.column4Type === "check-container" ? (
          <div
            className={`text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10 ${props.column4Type === "check-container" && props.iconVariant !== "bg-white/20" ? "invert-[1]" : ""}`}
          >
            <img
              src={props.column4IconUrl}
              alt="Icon"
              className="box-border caret-transparent block w-full"
            />
          </div>
        ) : (
          <img
            src={props.column4IconUrl}
            alt="Icon"
            className="text-red-500 box-border caret-transparent block w-6 md:w-10"
          />
        )}
      </div>
      <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
        {props.column5Type === "check-container" ? (
          <div
            className={`text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10 ${props.column5Type === "check-container" && props.iconVariant !== "bg-white/20" ? "invert-[1]" : ""}`}
          >
            <img
              src={props.column5IconUrl}
              alt="Icon"
              className="box-border caret-transparent block w-full"
            />
          </div>
        ) : (
          <img
            src={props.column5IconUrl}
            alt="Icon"
            className="text-red-500 box-border caret-transparent block w-6 md:w-10"
          />
        )}
      </div>
    </div>
  );
};
