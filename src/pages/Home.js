import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TokenSection from "../components/TokenSection";
import TwoColSection from "../components/TwoColSection";
import MissionSection from "../components/MissionSection";
import BuySection from "../components/BuySection";
import AssetSection from "../components/AssetSection";
import JoinSection from "../components/JoinSection";
import Footer from "../components/Footer";

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

        <BuySection />
        <JoinSection />
        <AssetSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
