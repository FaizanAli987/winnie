import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TokenSection from "../components/TokenSection";
import TwoColSection from "../components/TwoColSection";
import MissionSection from "../components/MissionSection";

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-[150px] mobilesm:mt-[193px] desktop:px-[56px] px-[10px]">
        <HeroSection />
        <TokenSection />
        <TwoColSection />
        <MissionSection />
      </main>
      <footer></footer>
    </>
  );
}

export default Home;
