import React from "react";

import AboutCarousel from "./Carousel/index";
import Features from "./features/index";
import History from "./history";

export default function About() {
  return (
    <div className="pt-5">
      <History />
      <AboutCarousel />
      <Features />
    </div>
  );
}
