import React from "react";
import logo from "../assets/images/logo.png";
import twitter from "../assets/images/twitter.png";
import telegram from "../assets/images/telegram.png";
function Navbar() {
  return (
    <div className="desktop:px-[56px] px-[20px] z-[999]  fixed w-full top-[35px] left-0">
      <nav className="max-w-[1616px] mx-auto desktop:rounded-[83px] items-center rounded-[40px] desktop:py-[28px] py-[22px] pl-[25px] pr-[25px] desktop:pl-[60px] desktop:pr-[32px] w-full bg-[#F46224] flex justify-between">
        <div className="flex items-center desktop:gap-[37px] gap-[20px]">
          <a href="#">
            <img
              src={telegram}
              className="w-[23px] h-[23px] object-contain"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src={twitter}
              className="w-[23px] h-[23px] object-contain"
              alt=""
            />
          </a>
        </div>
        <div>
          <img
            src={logo}
            className="desktop:max-w-[317px] max-w-[200px]"
            alt="logo"
          />
        </div>
        <div>
          <a
            href="#"
            className="min-w-[197px] flex items-center justify-center text-center min-h-[64px] bg-black text-[20px] leading-[24px] font-bold rounded-[32px] text-white"
          >
            Buy $WINNIE
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
