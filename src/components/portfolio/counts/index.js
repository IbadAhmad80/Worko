import React from "react";
import { Image } from "react-bootstrap";
import { counts_data } from "./CountsData";

export default function Counts() {
  return (
    <div className="container-md py-5">
      <div className="row gx-3 gx-md-5">
        <div className="col-lg-5">
          <Image
            src={"/assets/img/counts-img.jpg"}
            fluid
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="col-lg-7 gy-5 my-4 my-xl-0 ">
          <strong className="fs-2 fw-bolder">
            Voluptatem dignissimos provident quasi
          </strong>
          <p className="fs-6 text-muted my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure dolor in reprehenderit
          </p>
          <div className="container-xxl g-0">
            <div className="row row-cols-1 row-cols-md-2">
              {counts_data.map((feature) => {
                return <SingleCount key={feature.title} count={feature} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SingleCount({ count: { title, description, FaArtstation } }) {
  return (
    <div className="mb-3 d-flex">
      <i className=" display-4 fw-bolder px-0 text-warning">
        <FaArtstation />
      </i>
      <div className="px-3">
        <strong className="fs-1 ">{title}</strong>
        <p className="my-1 text-muted fs-6">{description}</p>
      </div>
    </div>
  );
}
