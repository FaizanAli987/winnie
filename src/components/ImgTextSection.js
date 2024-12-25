import React from "react";
import charity from "../assets/images/charity.png";
import origin from "../assets/images/origin.png";
import sign from "../assets/images/sign.png";
function ImgTextSection() {
  return (
    <section className="mt-[40px] flex gap-[32px] justify-center desktop:flex-nowrap flex-wrap">
      <div className="mobilesm:rounded-[60px] rounded-[30px] py-[30px] mobilesm:py-[70px] px-[20px] mobilesm:px-[60px] flex  items-start flex-col overflow-hidden bg-[#F46224] relative max-w-[890px]  w-full">
        <h2 className="desktopsm:mb-[60px] mb-[20px] tablet:text-[82px] mobilesm:text-[50px] text-[40px] leading-[48px] mobilesm:leading-[69px] font-bold">
          CHARITY.
        </h2>
        <div className="relative">
          <img
            src={sign}
            className="absolute max-w-[100px] desktop:max-w-[167px] right-[11px] -top-[50px] desktop:-top-[83px]"
            alt=""
          />
          <img
            src={charity}
            className="rounded-[20px] object-cover w-full min-h-[240px] desktop:min-h-[400px] mb-[38px]"
            alt=""
          />
        </div>
        <p className="mb-[25px] text-[18px] tablet:text-[24px] leading-[24px] tablet:leading-[35px] font-medium">
          We’re thrilled to announce our commitment to supporting Joey’s
          Friends, with funds dedicated to their designated wallet. Recently,
          our team visited Joey’s Friends, and after connecting with the
          foundation, we’re excited to implement meaningful ways to support
          their work.
        </p>
        <p className="mb-[25px] text-[18px] tablet:text-[24px] leading-[24px] tablet:leading-[35px] font-medium">
          For every $100 holder, $10 will go directly to this wallet, furthering
          our shared mission of helping animals in need. The funds will be used
          to purchase essential items directly from Joey’s Friends Amazon
          Wishlist.
        </p>
        <a
          href="/"
          className="tablet:min-w-[287px] max-w-[200px]  px-[20px] tablet:max-w-[287px] mt-[5px] tablet:mt-[70px] gap-[21px] flex items-center justify-center text-center min-h-[50px] tablet:min-h-[85px] bg-black text-[14px] tablet:text-[20px] leading-[24px] font-bold rounded-[42px] text-white"
        >
          Meet Joey's Friends
        </a>
      </div>
      <div className="mobilesm:rounded-[60px] rounded-[30px] py-[30px] mobilesm:py-[70px] px-[20px] mobilesm:px-[60px] flex  items-start flex-col overflow-hidden bg-[#7026F2] relative max-w-[890px]  w-full">
        <h2 className="desktopsm:mb-[60px]  mb-[20px] tablet:text-[82px] mobilesm:text-[50px] text-[40px] leading-[48px] mobilesm:leading-[69px] font-bold">
          ORIGIN.
        </h2>
        <div className="relative">
          <img
            src={origin}
            className="rounded-[20px] object-cover w-full min-h-[240px] desktop:min-h-[400px mb-[38px]"
            alt=""
          />
        </div>
        <p className="mb-[25px] text-[18px] tablet:text-[24px] leading-[24px] tablet:leading-[35px] font-medium">
          Millie Bobby Brown adopted her poodle, Winnie, during the COVID-19
          pandemic in 2020 when she was 16. Winnie has since become a constant
          companion, often accompanying Millie to film sets and public events.
          Millie has shared that Winnie is highly sensitive to her emotions,
          even distinguishing between her acting and real distress.
        </p>
        <p className="mb-[25px] text-[18px] tablet:text-[24px] leading-[24px] tablet:leading-[35px] font-medium">
          During the filming of "Damsel," Winnie became visibly upset during a
          realistic stunt, believing Millie was in danger.
        </p>
      </div>
    </section>
  );
}

export default ImgTextSection;
