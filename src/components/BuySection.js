import React from "react";
import ghost from "../assets/images/ghost.png";
import orangecoin from "../assets/images/orangecoin.gif";
function BuySection() {
  return (
    <section className="buysection overflow-hidden mx-auto mt-[40px] max-w-[1810px] rounded-[30px] tablet:rounded-[54px] pt-[30px] mobilesm:pt-[72px] pb-[30px] mobilesm:pb-[64px] px-[20px]">
      <div className="max-w-[1410px] mx-auto relative">
        <h2 className="desktopsm:mb-[42px] mb-[20px] tablet:text-[82px] mobilesm:text-[50px] text-center text-[40px] leading-[48px] mobilesm:leading-[69px] font-bold">
          HOW TO BUY WINNIE
        </h2>
        <h2 className="flex items-center gap-[22px] justify-center desktopsm:mb-[44px] mb-[20px] tablet:text-[59px] mobilesm:text-[46px] text-center text-[38px] leading-[46px] mobilesm:leading-[65px] font-bold">
          <img
            src={ghost}
            className="tablet:w-[64px] tablet:h-[64px] w-[30px] h-[30px] object-contain"
            alt=""
          />{" "}
          BUY ON PHANTOM
        </h2>

        <div className="flex textbox-flex gap-[5px] flex-wrap mb-[44px] justify-between">
          <div className="max-w-[266px]">
            <h4 className="tablet:text-[27px] leading-[69px] text-[20px] text-center font-bold">
              1. DOWNLOAD PHANTOM
            </h4>
            <p className="tablet:text-[18px] font-semibold text-[14px] text-center text-[#D0D0D0]">
              Install the Phantom Wallet app from the App Store or Google Play
              Store.
            </p>
          </div>
          <div className="max-w-[212px]">
            <h4 className="tablet:text-[27px] leading-[69px] text-[20px] text-center font-bold">
              2. SET UP WALLET
            </h4>
            <p className="tablet:text-[18px] font-semibold text-[14px] text-center text-[#D0D0D0]">
              Open Phantom, create an account, and securely store your 12
              recovery words.
            </p>
          </div>
          <div className="max-w-[352px]">
            <h4 className="tablet:text-[27px] leading-[69px] text-[20px] text-center font-bold">
              3. BUY SOLANA
            </h4>
            <p className="tablet:text-[18px] font-semibold text-[14px] text-center text-[#D0D0D0]">
               In Phantom, tap “Buy,” select Solana, and use “Credit & Debit
              card”. For first-time purchases: keep the buy amount under €/$150
              (fees included).
            </p>
          </div>
          <div className="max-w-[336px]">
            <h4 className="tablet:text-[27px] leading-[69px] text-[20px] text-center font-bold">
              4. SWAP FOR $WINNIE
            </h4>
            <p className="tablet:text-[18px] font-semibold text-[14px] text-center text-[#D0D0D0]">
              Go to “Swap” in Phantom, select Solana, enter Winnie’s contract
              address (copy here), and exchange Solana for $WINNIE tokens.
            </p>
          </div>
        </div>
        <a
          href="/"
          className="tablet:min-w-[287px] max-w-[200px] mx-auto px-[20px] tablet:max-w-[287px] mt-[5px] tablet:mt-[70px] gap-[21px] flex items-center justify-center text-center min-h-[50px] tablet:min-h-[85px] bg-black text-[14px] tablet:text-[20px] leading-[24px] font-bold rounded-[42px] text-white"
        >
          Buy on Phantom
        </a>
        <img src={orangecoin} className="buy-orangeleft" alt="" />
        <img src={orangecoin} className="buy-orangeright" alt="" />
      </div>
    </section>
  );
}

export default BuySection;
