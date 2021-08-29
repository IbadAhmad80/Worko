import React from "react";
import Testnomial from "../home/testnomials";
import Gallery from "./gallery";
import Counts from "./counts/index";

export default function Portfolio() {
  return (
    <div className="pt-5">
      <div className="container pt-5">
        <h6 className="text-muted text-decoration-uppercase fs-4 m-0 section-title">
          Portfolio
        </h6>
        <strong className=" fs-2 fw-bolder ">CHECK OUR PORTFOLIO</strong>
      </div>
      <Gallery />
      <Testnomial />
      <Counts />
    </div>
  );
}
