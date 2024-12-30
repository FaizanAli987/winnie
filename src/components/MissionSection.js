import React from "react";
import spaceship from "../assets/images/spaceship.png";
import orangecoin from "../assets/images/orangecoin.gif";
import purplecoin from "../assets/images/purplecoin.gif";
function MissionSection() {
  return (
    <section className="mission-section relative mt-[40px] mobilesm:mt-[40px] max-w-[1810px] w-full mx-auto pt-[30px] tablet:pt-[60px] desktopsm:pt-[116px] pb-[30px] tablet:pb-[60px] desktopsm:pb-[94px] px-[20px] desktopsm:pr-[0] desktopsm:pl-[60px] desktop:pl-[153px] mobilesm:rounded-[54px] rounded-[30px]">
      <div>
        <h2 className="desktopsm:mb-[60px] mb-[20px] tablet:text-[82px] mobilesm:text-[50px] desktopsm:text-left text-center text-[40px] leading-[48px] mobilesm:leading-[69px] font-bold">
          {" "}
          A POODLE ON A MISSION
        </h2>
        <p className="text-[16px] tablet:text-[24px] text-white desktopsm:text-left desktopsm:ml-0 mx-auto text-center leading-[24px] tablet:leading-[41px] max-w-[400px] tablet:max-w-[530px]">
          At Winnie the Poodle Coin, our mission is to provide vital resources
          and support to dogs, ensuring they live lives filled with love, care,
          and happiness. By leveraging crypto and the power of a passionate
          community, $WINNIE aims to create real-world impact by partnering with
          shelters, supporting rescue centers, and helping dogs in need.
        </p>
        <a
          href="https://joeysfriends.com/"
          className="tablet:min-w-[308px] max-w-[200px] desktopsm:ml-0 mx-auto  tablet:max-w-[308px] mt-[30px] tablet:mt-[70px] gap-[21px] flex items-center justify-center text-center min-h-[50px] tablet:min-h-[85px] bg-black text-[14px] tablet:text-[20px] leading-[24px] font-bold rounded-[42px] text-white"
        >
          View our Impact
        </a>

        <div className="imgdiv">
          <img src={spaceship} className="mission-image" alt="" />

          <img src={orangecoin} className="mission-orange" alt="" />
          <img src={purplecoin} className="mission-purple" alt="" />
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
