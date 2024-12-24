import React from "react";
import herovideo from "../assets/images/herovideo.mp4";
function HeroSection() {
  return (
    <div className="max-w-[1616px] mx-auto relative pl-[157px] pt-[180px] pb-[123px] tablet:min-h-[600px] desktop:min-h-[870px] rounded-[60px] overflow-hidden">
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
        <h1 className="text-[87px] font-bold leading-[80px] text-white mb-[80px]">
          WELCOME <br />
          TO THE <br /> WINNIEVERSE.
        </h1>
        <p className="text-[24px] text-white leading-[37px] max-w-[411px]" >
          Buy $WINNIE, share the love and join the community to help more
          homeles pets around the world.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
