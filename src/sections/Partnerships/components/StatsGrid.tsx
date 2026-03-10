export const StatsGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-6 md:gap-x-8 md:grid-cols-[1fr_1fr_1fr_1fr] md:gap-y-8">
      <div className="items-stretch bg-[linear-gradient(rgb(216,211,223),rgba(0,0,0,0))] box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] rounded-2xl">
        <div className="bg-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto] w-full mt-px mx-px px-5 py-7 rounded-2xl md:px-[30px] md:py-8">
          <h3 className="text-neutral-950 text-2xl font-bold box-border caret-transparent leading-[28.8px] font-redhatdisplay_variablefont_wght">
            Stress less
          </h3>
          <div className="text-neutral-950 text-[32px] font-bold box-border caret-transparent leading-[38.4px] my-2 font-redhatdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px] md:mt-12 md:mb-6">
            9.6
          </div>
          <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6">
            Average rating from
            <br className="box-border caret-transparent" />
            customers
          </p>
        </div>
      </div>
      <div className="items-stretch bg-[linear-gradient(rgba(21,21,22,0.1),rgba(0,0,0,0)_0%,rgb(216,211,223))] box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] overflow-hidden rounded-2xl">
        <div className="bg-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto] w-full mb-px mx-px px-5 py-7 rounded-2xl md:px-[30px] md:py-8">
          <h3 className="text-neutral-950 text-2xl font-bold box-border caret-transparent leading-[28.8px] font-redhatdisplay_variablefont_wght">
            <strong className="box-border caret-transparent">
              Ship faster
            </strong>
          </h3>
          <div className="text-neutral-950 text-[32px] font-bold box-border caret-transparent leading-[38.4px] my-2 font-redhatdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px] md:mt-12 md:mb-6">
            70%
          </div>
          <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6">
            Faster turnaround time{" "}
            <br className="box-border caret-transparent" />
            than agencies
          </p>
        </div>
      </div>
      <div className="items-stretch bg-[linear-gradient(rgb(216,211,223),rgba(0,0,0,0))] box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] rounded-2xl">
        <div className="bg-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto] w-full mt-px mx-px px-5 py-7 rounded-2xl md:px-[30px] md:py-8">
          <h3 className="text-neutral-950 text-2xl font-bold box-border caret-transparent leading-[28.8px] font-redhatdisplay_variablefont_wght">
            Much faster
          </h3>
          <div className="text-neutral-950 text-[32px] font-bold box-border caret-transparent leading-[38.4px] my-2 font-redhatdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px] md:mt-12 md:mb-6">
            20x
          </div>
          <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6">
            Faster than most <br className="box-border caret-transparent" />
            hiring in-house
          </p>
        </div>
      </div>
      <div className="items-stretch bg-[linear-gradient(rgba(21,21,22,0.1),rgba(0,0,0,0)_0%,rgb(216,211,223))] box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] overflow-hidden rounded-2xl">
        <div className="bg-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto] w-full mb-px mx-px px-5 py-7 rounded-2xl md:px-[30px] md:py-8">
          <h3 className="text-neutral-950 text-2xl font-bold box-border caret-transparent leading-[28.8px] font-redhatdisplay_variablefont_wght">
            Cut costs
          </h3>
          <div className="text-neutral-950 text-[32px] font-bold box-border caret-transparent leading-[38.4px] my-2 font-redhatdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px] md:mt-12 md:mb-6">
            30%
          </div>
          <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6">
            Reduced average cost <br className="box-border caret-transparent" />
            vs alternatives
          </p>
        </div>
      </div>
    </div>
  );
};
