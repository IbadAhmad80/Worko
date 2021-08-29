import React from "react";
import { Image } from "react-bootstrap";
import { features_data } from "./FeaturesData";

export default function Features() {
  return (
    <div className="container-md">
      <div className="row row-cols-1 row-cols-lg-2 mt-5 mb-4 gx-md-5">
        <div className="col mt-2 ">
          <div className="col overflow-hidden">
            <Image src={"/assets/img/features.jpg"} fluid />
          </div>
        </div>
        <div className="col gy-5 gy-lg-0">
          {features_data.map((feature) => {
            return <SingleFeature key={feature.title} feature={feature} />;
          })}
        </div>
      </div>
    </div>
  );
}

function SingleFeature({ feature: { title, description, FaArtstation } }) {
  return (
    <div className="mb-3 d-flex">
      <i className="fs-1 fw-bolder px-3 text-warning">
        <FaArtstation />
      </i>
      <div>
        <strong className="fs-4 ">{title}</strong>
        <p className="my-1 text-muted">{description}</p>
      </div>
    </div>
  );
}
