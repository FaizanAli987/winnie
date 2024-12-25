import React from "react";
import telegram from "../assets/images/blackplane.png";
function JoinSection() {
  return (
    <section className="mobilesm:min-h-[600px] min-h-[400px] tablet:min-h-[970px] max-w-[1810px] joinbg relative mx-auto mt-[32px] tablet:rounded-[60px] rounded-[30px]">
      <a
        href="/"
        className="tablet:min-w-[328px] absolute-join max-w-[220px] w-full tablet:max-w-[328px] gap-[21px] flex items-center justify-center text-center min-h-[50px] tablet:min-h-[85px] bg-white text-[14px] tablet:text-[20px] leading-[24px] font-bold rounded-[42px] text-black px-[20px]"
      >
        Join the Winnieverse
        <img
          src={telegram}
          className="tablet:max-w-[28px] max-w-[18px]"
          alt=""
        />
      </a>
    </section>
  );
}

export default JoinSection;
