import React from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Slidersettings, testnomials_data } from "./TestnomialData";

export default function Testnomial() {
  return (
    <div className="container-xxl my-5 testimonial-container g-0">
      <div className="container-xxl py-1">
        <Slider {...Slidersettings} className="my-5 py-5 container">
          {testnomials_data.map((testnomial) => {
            return (
              <SingleTestnomial
                testnomial={testnomial}
                key={testnomial.title}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

function SingleTestnomial({ testnomial: { name, title, text, image } }) {
  return (
    <div>
      <div className="card mb-3 text-center bg-transparent text-white mx-auto border-0">
        <Image
          className="card-img-top testimonial-img mx-auto "
          src={`/assets/img/testimonials/${image}.jpg`}
          roundedCircle
          height={150}
          width={25}
        />
        <div className="card-body">
          <div className="card-title">
            <strong className="fs-3">{name}</strong>
          </div>
          <h6 className="card-text mb-4 mt-2">{title}</h6>
          <i className="fs-6 card-text text-white  "> " {text} "</i>
        </div>
      </div>
    </div>
  );
}
