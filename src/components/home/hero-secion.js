import React from "react";
import { Card } from "react-bootstrap";
import { home_cards_data } from "./Cards-Data";

export default function HeroSection() {
  return (
    <div className="text-center px-3 pt-5">
      <strong className="display-4 fw-bolder mt-5 text-white pt-5 d-inline-block main-text">
        Powerful Digital <br />
        Solutions With WORKO<span className="text-warning">.</span>
      </strong>
      <h5 className="fs-4 fw-bold my-3 text-white">
        We are team of talented digital marketers
      </h5>

      <div className="container-lg my-5 pt-4 pb-5 px-3 px-sm-0">
        <div className=" card-deck mb-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 d-flex justify-content-center">
          {home_cards_data.map(({ title, BsFillImageFill }) => {
            return (
              <Card
                className=" col home-card text-center bg-transparent border-white mt-3 mx-2"
                key={title}
              >
                <HomeCard title={title} BsFillImageFill={BsFillImageFill} />
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function HomeCard({ title, BsFillImageFill }) {
  return (
    <Card.Body className="text-white">
      <Card.Title>
        <i className="home-card-icon fs-2 ">
          <BsFillImageFill />
        </i>
      </Card.Title>
      <Card.Text className="fs-5 fw-bolder pt-3">{title}.</Card.Text>
    </Card.Body>
  );
}
