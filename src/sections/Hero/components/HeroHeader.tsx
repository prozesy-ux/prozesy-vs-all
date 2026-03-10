export const HeroHeader = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-5 flex flex-col justify-start gap-y-5 md:gap-x-10 md:gap-y-10">
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4 text-center md:gap-x-7 md:gap-y-7">
        <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4">
          <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] z-[99] pt-[27px] pb-[7px] md:py-7">
            <a
              href="https://www.designmonks.co/"
              className="text-violet-600 box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto]"
            >
              <img
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/679a08604def1d26213e6133_designmonks (1).svg"
                alt=""
                className="box-border caret-transparent inline-block max-w-full align-middle"
              />
            </a>
          </div>
          <div className="items-center box-border caret-transparent gap-x-1.5 flex flex-col min-h-[auto] min-w-[auto] gap-y-1.5">
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
              <img
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6799fee94ce8588c2c639fd5_Frame 4.svg"
                alt=""
                className="box-border caret-transparent inline-block max-w-full align-middle"
              />
            </div>
            <div className="items-center box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] gap-y-1">
              <div className="text-stone-50 box-border caret-transparent tracking-[0.28px] leading-[21px] min-h-[auto] min-w-[auto] font-outfit">
                4.9
              </div>
              <img
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ae340747e7ad9d1fc783d9_Star (2).svg"
                alt=""
                className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] align-middle"
              />
            </div>
          </div>
          <h1 className="text-zinc-50 text-[32px] font-bold box-border caret-transparent leading-[38.4px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
            Design Monks vs Agencies{" "}
            <br className="text-[32px] box-border caret-transparent leading-[38.4px] md:text-[56px] md:leading-[67.2px]" />
            ‍
            <em className="text-[32px] italic box-border caret-transparent leading-[38.4px] capitalize font-playfairdisplay_variablefont_wght md:text-[56px] md:leading-[67.2px]">
              The Better Choice for Your Business
            </em>
          </h1>
        </div>
        <p className="text-neutral-300 text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] w-auto md:text-lg md:leading-[27px] md:w-4/5">
          Unlock Superior Design Solutions with Design Monks Experience agility,
          creativity, and efficiency beyond traditional agencies.
        </p>
      </div>
      <a
        href="https://www.designmonks.co/contact"
        className="relative text-violet-600 items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center min-h-[auto] min-w-[auto] text-left w-full z-[5] overflow-hidden px-8 rounded-lg md:w-auto"
      >
        <div className="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center rotate-[110.02701077003982deg] w-full inset-[0%]">
          <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 -translate-y-10 w-full left-2/4 right-[0%] top-2/4 bottom-[0%]"></div>
        </div>
        <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent m-[1.3px] rounded-lg inset-[0%]"></div>
        <div className="relative text-gray-200 box-border caret-transparent min-h-[auto] min-w-[auto] w-full md:w-auto">
          <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
            <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px] min-h-[auto] min-w-[auto]">
              Book an appointment
            </div>
            <img
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA Arrow (2).svg"
              alt=""
              className="box-border caret-transparent block h-7 max-w-7 min-h-[auto] min-w-[auto] object-contain align-middle w-full md:h-6 md:max-w-6"
            />
          </div>
        </div>
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/672a7a8e3a6aba070d15d4c0_Star 6.avif"
          alt=""
          className="absolute box-border caret-transparent block max-w-full align-middle right-[0%] top-[0%]"
        />
      </a>
    </div>
  );
};
