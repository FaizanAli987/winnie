import React from "react";
import herovideo from "../assets/images/herovideo.mp4";
import telegram from "../assets/images/telegram.png";
function HeroSection() {
  return (
    <section className="max-w-[1810px] mx-auto relative p-[20px] mobilesm:pl-[40px] mobilesm:pt-[60px] mobilesm:pb-[60px] mobilesm:pr-[40px] desktopsm:pl-[80px] desktopsm:pt-[100px] desktopsm:pb-[80px]  desktop:pl-[157px] desktop:pt-[180px] desktop:pb-[123px]  tablet:min-h-[600px] desktop:min-h-[870px] rounded-[30px] tablet:rounded-[60px] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={herovideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="max-w-[570px] z-1 relative">
        <h1 className="tablet:text-[87px] mobilesm:text-[60px] text-[40px] font-bold mobilesm:leading-[67px] leading-[47px] tablet:leading-[80px] text-white mb-[30px] tablet:mb-[80px]">
          WELCOME <br />
          TO THE <br /> WINNIEVERSE.
        </h1>
        <p className="text-[16px] tablet:text-[24px] text-white leading-[24px] tablet:leading-[37px] max-w-[220px] tablet:max-w-[411px]">
        Join $WINNIE in helping make a difference for homeless dogs worldwide!
        </p>
        <a
          href="https://t.me/winniepoodle"
          className="tablet:min-w-[328px] max-w-[200px] tablet:max-w-[328px] mt-[30px] tablet:mt-[70px] gap-[21px] flex items-center justify-center text-center min-h-[50px] tablet:min-h-[85px] bg-black text-[14px] tablet:text-[20px] leading-[24px] font-bold rounded-[42px] text-white"
        >
          Join the Winnieverse
          <img
            src={telegram}
            className="tablet:max-w-[28px] max-w-[18px]"
            alt=""
          />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
