import React from "react";
import { service_cards_data } from "./CardsData";

export default function ServiceCards() {
  return (
    <div className="container-xxl mb-5 py-5">
      <div className="card-deck row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-4 mx-2 mx-sm-0 d-flex justify-content-center ">
        {service_cards_data.map((service) => {
          return <SingleCard service={service} key={service.title} />;
        })}
      </div>
    </div>
  );
}

function SingleCard({ service: { title, description, FaArtstation } }) {
  return (
    <div className="card text-center mx-2 service-card">
      <i className="card-img-top fs-2 text-dak bg-warning w-25 mx-auto mt-5 pt-2 pb-3">
        <FaArtstation />
      </i>
      <div className="card-body">
        <strong className="card-title fs-4 mb-3 d-inline-block ">
          {title}
        </strong>
        <p className="card-text  mb-5 text-muted">{description}</p>
      </div>
    </div>
  );
}
