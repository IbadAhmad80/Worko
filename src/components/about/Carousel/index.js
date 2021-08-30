import React from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Slidersettings } from "./settings";

export default function App() {
  return (
    <div className="my-5 py-1">
      <Slider {...Slidersettings} className="mx-2 mx-md-5 px-2 my-5">
        <Image
          src={"/assets/img/clients/client-1.png"}
          className="px-3 px-sm-5 opacity-100 "
        />
        <Image
          src={"/assets/img/clients/client-2.png"}
          className="px-3 px-sm-5 opacity-100 client-slick"
        />
        <Image
          src={"/assets/img/clients/client-3.png"}
          className="px-3 px-sm-5 opacity-100 client-slick"
        />
        <Image
          src={"/assets/img/clients/client-4.png"}
          className="px-3 px-sm-5 opacity-100 client-slick"
        />
        <Image
          src={"/assets/img/clients/client-1.png"}
          className="px-3 px-sm-5 opacity-100 "
        />
        <Image
          src={"/assets/img/clients/client-2.png"}
          className="px-3 px-sm-5 opacity-100 client-slick"
        />
        <Image
          src={"/assets/img/clients/client-3.png"}
          className="px-3 px-sm-5 opacity-100 client-slick"
        />
        <Image
          src={"/assets/img/clients/client-4.png"}
          className="px-3 px-sm-5 opacity-100 client-slick"
        />
        <Image
          src={"/assets/img/clients/client-8.png"}
          className="px-3 px-sm-5 opacity-100 client-slick"
        />
      </Slider>
    </div>
  );
}
