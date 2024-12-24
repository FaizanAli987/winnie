import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-[193px] desktop:px-[56px] px-[20px]">
        <HeroSection />
      </main>
      <footer></footer>
    </>
  );
}

export default Home;
