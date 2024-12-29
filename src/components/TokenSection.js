import React, { useState } from "react";
import dog from "../assets/images/dog.png";
import dex from "../assets/images/dex.png";
import coingeko from "../assets/images/coingexko.png";
import coinmarket from "../assets/images/cm.png";
import wcoin from "../assets/images/wcoin.png";
function TokenSection() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const address = "4ZrxMzvqQ8f37ViijJTYp3FZqFTkG47rZhETx2dPpump";

    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Modern API
      navigator.clipboard
        .writeText(address)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        })
        .catch(() => {
          fallbackCopyTextToClipboard(address);
        });
    } else {
      // Fallback
      fallbackCopyTextToClipboard(address);
    }
  };

  // Fallback method
  const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed"; // Prevent scrolling to bottom
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Fallback: Unable to copy", err);
    }

    document.body.removeChild(textArea);
  };

  return (
    <section className="mt-[40px] relative max-w-[1810px] mx-auto rounded-[30px] tablet:rounded-[60px] tokenbg">
      <img
        src={wcoin}
        className="absolute -top-[17px] left-[50%] -translate-x-[50%] mobilesm:w-[120px] mobilesm:h-[120px] w-[80px] h-[80px] object-contain"
        alt=""
      />
      <div className="max-w-[1214px] mx-auto mobilesm:pt-[124px] pt-[80px] pb-[60px] tablet:pb-[109px] px-[20px]">
        <div className="desktopsm:flex-nowrap flex-wrap justify-center py-[10px] px-[13px] border-white border-[2px] border-solid rounded-[30px] tablet:rounded-[60px] flex items-center gap-[20px]">
          <img
            src={dog}
            className="mobilesm:w-[64px] mobilesm:h-[64px] w-[40px] h-[40px] object-contain"
            alt="Dog"
          />
          <p className="tablet:text-[18px] desktopsm:text-[24px] text-[12px] leading-[24px] desktopsm:leading-[64px] font-medium text-white">
            4ZrxMzvqQ8f37ViijJTYp3FZqFTkG47rZhETx2dPpump
          </p>
          <button
            onClick={handleCopy}
            className="mobilesm:min-h-[64px] min-h-[45px] desktopsm:ml-auto min-w-[197px] text-white rounded-[32px] bg-[#7026F2] text-[16px] mobilesm:text-[20px] leading-[24px] font-bold"
          >
            {isCopied ? "Copied" : "Copy Address"}
          </button>
        </div>
        <div className="mt-[23px] mb-[16px] leading-[64px] text-[20px] mobilesm:text-[24px] font-medium text-center">
          View Winnie's Journey at:
        </div>
        <div className="flex items-center desktop:flex-nowrap justify-center flex-wrap gap-[25px] desktop:justify-between">
          <a
            href="https://dexscreener.com/solana/AEm9xwUsDvFWeCBZ7P158YbaoMCWQFYmoPbUArrawZX5"
            className="max-w-[388px] w-full h-[85px] mobilesm:justify-start justify-center flex gap-[30px] mobilesm:gap-[54px] bg-[#7026F2] rounded-[42px] items-center leading-[64px] text-[18px] mobilesm:text-[24px] font-medium py-[17px] px-[19px]"
          >
            <img
              src={dex}
              className="mobilesm:w-[51px] mobilesm:h-[51px] w-[40px] h-[40px] object-contain"
              alt=""
            />{" "}
            DEXScreener
          </a>
          <a
            href="https://www.coingecko.com/en/coins/winnie-the-poodle"
            className="max-w-[388px] w-full h-[85px] flex gap-[30px] mobilesm:gap-[54px] bg-[#7026F2] rounded-[42px] items-center leading-[64px] text-[18px] mobilesm:text-[24px] font-medium mobilesm:justify-start justify-center py-[17px] px-[19px]"
          >
            <img
              src={coingeko}
              className="mobilesm:w-[51px] mobilesm:h-[51px] w-[40px] h-[40px] object-contain"
              alt=""
            />{" "}
            CoinGecko
          </a>
          <a
            href="https://coinmarketcap.com/currencies/winnie-the-poodle/"
            className="max-w-[388px] w-full h-[85px] mobilesm:justify-start justify-center flex gap-[30px] mobilesm:gap-[54px] bg-[#7026F2] rounded-[42px] items-center leading-[64px] text-[18px] mobilesm:text-[24px] font-medium py-[17px] px-[19px]"
          >
            <img
              src={coinmarket}
              className="mobilesm:w-[51px] mobilesm:h-[51px] w-[40px] h-[40px] object-contain"
              alt=""
            />{" "}
            Coin MarketCap
          </a>
        </div>
      </div>
    </section>
  );
}

export default TokenSection;
