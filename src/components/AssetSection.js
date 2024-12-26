import React from "react";
import dog from "../assets/images/orangedog.png";
function AssetSection() {
  return (
    <>
    <div className="max-w-[1810px] mx-auto mt-[32px]">
      <gecko-coin-ticker-widget
        locale="en"
        outlined="true"
        initial-currency="usd"
        coin-id="winnie-the-poodle" 
        ></gecko-coin-ticker-widget>
        </div>
    </>
    // <section className="asset-section tablet:rounded-[60px] rounded-[30px] mt-[32px] flex justify-between gap-[30px] bg-white max-w-[1810px] mx-auto pt-[34px] pb-[22px] pl-[54px] pr-[67px]">
    //   <div className="mobilesm:flex-nowrap mobilesm:items-start mobilesm:justify-start items-center justify-center flex-wrap mobilesm:pt-[25px] mobilesm:pb-[35px] flex mobilesm:gap-[44px] gap-[12px]">
    //     <div>
    //       <img
    //         src={dog}
    //         className="mobilesm:max-w-[120px] max-w-[70px]"
    //         alt=""
    //       />
    //     </div>
    //     <div>
    //       <p className="text-black font-semibold mobilesm:text-[36px] text-[28px] mb-[12px] leading-[41px] mobilesm:text-left text-center">
    //         Winnie the Poodle
    //       </p>
    //       <p className="mobilesm:text-[24px] text-[18px] text-[#999999] leading-[41px] mb-[10px] mobilesm:mb-[30px] font-semibold mobilesm:text-left text-center">
    //         WINNIE/USD
    //       </p>
    //       <div className="flex items-center">
    //         <p className="mobilesm:text-[55px] text-[40px] text-black font-extrabold ">
    //           {" "}
    //           $0.007543
    //         </p>{" "}
    //         <span class="block w-0 h-0 ml-[18px] mr-[5px] border-l-[8px] border-r-[8px] border-b-[8px] border-transparent border-b-[#28AD13]"></span>
    //         <span className="text-[#28AD13] text-[27px] font-extrabold leading-[41px] ">
    //           3.6%
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex gap-[45px]">
    //     <span className="hrline w-[1px] h-full bg-[#B9B9B9] inline-block"></span>
    //     <ul className="grey-li mobilesm:pt-[25px] mobilesm:pb-[35px]">
    //       <li>Market Cap Rank</li>
    //       <li>Market Cap</li>
    //       <li>24h Volume</li>
    //       <li>24h High/Low</li>
    //     </ul>
    //   </div>
    //   <div className="">
    //     <ul className="dark-li mobilesm:pt-[25px] mobilesm:pb-[35px]">
    //       <li>#2012</li>
    //       <li>$7,518,870</li>
    //       <li>$153,335</li>
    //       <li>$0.007831 / $0.007949</li>
    //     </ul>
    //   </div>
    // </section>
  );
}

export default AssetSection;
