import React from "react";
import logo from "../assets/images/orangelogo.png";
import dog from "../assets/images/poodle.png";
import twitter from "../assets/images/twitter.png";
import telegram from "../assets/images/telegram.png";
import insta from "../assets/images/insta.png";
function Footer() {
  return (
    <footer className="bg-black w-full pt-[75px] mt-[40px] mobilesm:mt-[69px]  pb-[80px] mobilesm:pb-[148px]  desktop:px-[170px] px-[40px]">
      <div className="flex mobilesm:flex-nowrap flex-wrap gap-[60px] mobilesm:gap-[20px] items-center mobilesm:flex-row flex-col mobilesm:justify-between justify-center max-w-[1400px] mx-auto">
        <div>
          <img src={logo} className="max-w-[186px]" alt="" />
        </div>
        <div>
          <img src={dog} className="max-w-[105px]" alt="" />
        </div>
        <div className="flex items-center desktop:gap-[37px] gap-[20px]">
          <a href="https://t.me/winniepoodle">
            <img
              src={telegram}
              className="tablet:w-[27px] tablet:h-[27px] w-[16px] h-[16px] object-contain"
              alt=""
            />
          </a>
          <a href="https://x.com/winniepoodl">
            <img
              src={twitter}
              className="tablet:w-[25px] tablet:h-[25px] w-[16px] h-[16px] object-contain"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/winnie_poodl/">
            <img
              src={insta}
              className="tablet:w-[25px] tablet:h-[25px] w-[16px] h-[16px] object-contain"
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
