import React from "react";
import dogvideo from "../assets/images/dog.mp4";
import orangecoin from "../assets/images/orangecoin.gif";
import purplecoin from "../assets/images/purplecoin.gif";
import thisis from "../assets/images/thisis.png";
function TwoColSection() {
  return (
    <section className="twocol mt-[40px] flex gap-[32px] justify-center">
      <div className="mobilesm:rounded-[60px] rounded-[30px] overflow-hidden relative max-w-[873px] min-h-[500px] mobilesm:min-h-[870px] w-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={dogvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mobilesm:rounded-[60px] rounded-[30px] py-[60px] mobilesm:py-[110px] px-[12px] flex  items-center flex-col overflow-hidden bg-[#F46224] relative max-w-[873px] min-h-[500px] mobilesm:min-h-[870px] w-full">
        <img src={purplecoin} className="twocol-purple" alt="" />
        <img src={orangecoin} className="twocol-orange" alt="" />
        <img src={orangecoin} className="twocol-orange2" alt="" />
        <img
          src={thisis}
          className="max-w-[280px] mobilesm:max-w-[400px]"
          alt=""
        />
        <p className="mobilesm:mt-[73px] mt-[40px] text-black font-medium leading-[32px] mobilesm:leading-[49px] text-[18px] mobilesm:text-[24px] max-w-[550px] text-center">
          $WINNIE the Poodle is a charity-focused fantoken aimed at improving
          the lives of dogs in need. Inspired by Winnie, a joyful poodle, the
          fantoken’s mission is to use blockchain technology tosupport dogs
          facing hardships. The initiative seeks to provide essential resources
          to dogs in shelters, rescue centers, and on the streets, with the goal
          of ensuring every dog enjoys a life filled with love, care, and
          happiness.
        </p>
      </div>
    </section>
  );
}

export default TwoColSection;
