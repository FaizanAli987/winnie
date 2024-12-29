import React from "react";
import dogvideo from "../assets/images/dog.mp4";
import orangecoin from "../assets/images/orangecoin.gif";
import purplecoin from "../assets/images/purplecoin.gif";
import thisis from "../assets/images/thisis.png";
function TwoColSection() {
  return (
    <section className="twocol mt-[40px] flex gap-[32px] justify-center">
      <div className="mobilesm:rounded-[60px] rounded-[30px] overflow-hidden relative max-w-[890px] min-h-[500px] mobilesm:min-h-[870px] w-full">
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
      <div className="mobilesm:rounded-[60px] rounded-[30px] py-[60px] mobilesm:py-[110px] px-[12px] flex  items-center flex-col overflow-hidden bg-[#F46224] relative max-w-[890px] min-h-[500px] mobilesm:min-h-[870px] w-full">
        <img src={purplecoin} className="twocol-purple" alt="" />
        <img src={orangecoin} className="twocol-orange" alt="" />
        <img src={orangecoin} className="twocol-orange2" alt="" />
        <img
          src={thisis}
          className="max-w-[280px] mobilesm:max-w-[400px]"
          alt=""
        />
        <p className="mobilesm:mt-[73px] mt-[40px] text-black font-medium leading-[32px] mobilesm:leading-[49px] text-[18px] mobilesm:text-[24px] max-w-[550px] text-center">
          $WINNIE is a charity-focused fantoken inspired by the playful and
          loving spirit of Winnie, a joyful poodle. This token is more than
          crypto—it’s a celebration of community, compassion, and the incredible
          bond we share with our furry friends. By channeling Winnie’s energy
          and joy, $WINNIE is here to create a brighter future for dogs in need,
          one pawprint at a time.
        </p>
      </div>
    </section>
  );
}

export default TwoColSection;
