import React from "react";

import AppNavBar from "../navbar";
import HeroSection from "./hero-secion";

export default function Home() {
  return (
    <div className="home_container container-fluid g-0 bg-image">
      <div className="home-image-overlay ">
        <AppNavBar />
        <HeroSection />
      </div>
    </div>
  );
}
