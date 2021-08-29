import React from "react";
import { Image } from "react-bootstrap";

import { FiChevronsRight } from "react-icons/fi";

export default function History() {
  return (
    <div className="container-md">
      <div className="row  my-5">
        <div className="col-lg-6 order-2 order-lg-1  mt-5 mt-lg-0">
          <strong className="fs-2 fw-bolder lh-1 ">
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </strong>
          <h6 className="mt-4 text-muted">
            <i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </i>
            <br /> <br />
            <FiChevronsRight className="text-warning fs-4 mx-1" />
            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br /> <FiChevronsRight className="text-warning fs-4 mx-1" />
            Duis aute irure dolor in reprehenderit in voluptate velit.
            <br /> <FiChevronsRight className="text-warning fs-4 mx-1" />
            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br /> <FiChevronsRight className="text-warning fs-4 mx-1" />
            Duis aute irure dolor in reprehenderit in voluptate trideta
            <br /> <FiChevronsRight className="text-warning fs-4 mx-1" />
            storacalaperda mastiro dolore eu fugiat nulla pariatur.
            <br /> <br />
            Ullamco laboris nisi ut aliquip ex ea commodo consequat.Excepteur
            sint occaecat cupidatat non proident Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat
          </h6>
        </div>
        <div className="col-lg-6 mt-lg-2  order-1 order-lg-2 overflow-hidden">
          <Image src={"/assets/img/about.jpg"} fluid />
        </div>
      </div>
    </div>
  );
}
