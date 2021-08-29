import React from "react";
import CallToAction from "./call-to-action";
import ServiceCards from "./cards";

export default function Services() {
  return (
    <div className="pt-5">
      <div className="container pt-5">
        <h6 className="text-muted text-decoration-uppercase fs-4 m-0 section-title">
          SERVICES
        </h6>
        <strong className=" fs-2 fw-bolder ">CHECK OUR SERVICES</strong>
      </div>

      <ServiceCards />
      <CallToAction />
    </div>
  );
}
