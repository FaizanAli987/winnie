import React from "react";

function MissionSection() {
  return (
    <section className="mission-section mt-[40px] max-w-[1810px] w-full mx-auto pt-[116px] pb-[94px] pl-[153px] mobilesm:rounded-[54px] rounded-[30px]">
      <div>
        <h2 className="mb-[60px] tablet:text-[82px] mobilesm:text-[60px] text-[40px] leading-[48px] mobilesm:leading-[69px] font-bold">
          {" "}
          POODLE ON A MISSION.
        </h2>
        <p className="text-[16px] tablet:text-[24px] text-white leading-[24px] tablet:leading-[41px] max-w-[220px] tablet:max-w-[530px]">
          At Winnie the Poodle Coin, our mission is to provide vital support and
          resources to dogs in disarray. We envision a world where every dog,
          regardless of their circumstances, enjoys a life filled with love,
          care, and happiness. By leveraging the potential of blockchain
          technology, our community and the spirit of the crypto world, we aim
          to transform the lives of countless dogs in shelters, rescue centers,
          and on the streets.
        </p>
        <a
          href="/"
          className="tablet:min-w-[308px] max-w-[200px] tablet:max-w-[308px] mt-[30px] tablet:mt-[70px] gap-[21px] flex items-center justify-center text-center min-h-[50px] tablet:min-h-[85px] bg-black text-[14px] tablet:text-[20px] leading-[24px] font-bold rounded-[42px] text-white"
        >
          View our Impact
        </a>
      </div>
    </section>
  );
}

export default MissionSection;
